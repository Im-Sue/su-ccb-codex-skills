import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

import {
  assertAgentRoutingContract,
  parseWindowsTopology,
  resolveSameGroupPeer,
  resolveSameGroupPeerFromProject
} from "../resolve-same-group-peer.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const skillRoot = join(__dirname, "..", "..");
const projectRoot = join(__dirname, "..", "..", "..", "..", "..");

test("resolver matches the shared PR1 routing vectors", async () => {
  const vectorsPath = join(skillRoot, "references", "agent-routing-test-vectors.json");
  const vectors = JSON.parse(await readFile(vectorsPath, "utf8"));

  for (const vector of vectors) {
    const windows = parseWindowsTopology(vector.configText);
    assert.deepEqual(
      resolveSameGroupPeer({ currentAgent: vector.currentAgent, windows }),
      vector.expected,
      vector.name
    );
  }
});

test("parser ignores slot naming and groups by renamed window membership", () => {
  const windows = parseWindowsTopology(`
version = 2

[windows]
alpha-team = "alpha_claude:claude, alpha_codex:codex"
research = "review_claude:claude"

[agents.alpha_claude]
provider = "claude"
`);

  assert.deepEqual(windows, [
    {
      name: "alpha-team",
      agents: [
        { name: "alpha_claude", provider: "claude" },
        { name: "alpha_codex", provider: "codex" }
      ]
    },
    {
      name: "research",
      agents: [{ name: "review_claude", provider: "claude" }]
    }
  ]);
});

test("resolver reads the project kernel contract and current ccb.config", async () => {
  const resolved = await resolveSameGroupPeerFromProject({
    projectRoot,
    currentAgent: "slot1_claude"
  });

  assert.deepEqual(resolved.result, {
    kind: "peer",
    peer: "slot1_codex",
    window: "slot-1"
  });
  assert.match(resolved.contractPath, /references\/kernel\/agent-routing-contract\.md$/);
});

test("contract guard rejects unrelated text", () => {
  assert.throws(
    () => assertAgentRoutingContract("not the routing contract"),
    /agent routing contract missing markers/
  );
});
