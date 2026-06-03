# SU-CCB Codex Skills

> SU-CCB 协作框架的 **Codex 侧 skill pack** —— "执行者"的能力实现。

在 SU-CCB 里，**Claude 决策、Codex 执行**。本仓提供 Codex 侧的三大能力：**执行、协商、文档维护**。当 Claude（[su-ccb-claude-plugin](https://github.com/Im-Sue/su-ccb-claude-plugin)）确认方案并派工后，Codex 用这些 skills 落地实施、验证、协商，并回一份精简回执给 Claude 审查 —— 这就是"决策与执行分离"里执行的那一半。

## Skills

### ccb-execute — 执行 / 勘探 / 协商

核心执行 skill，三种模式：

| 模式 | 标记 | 行为 |
|------|------|------|
| **execute** | `mode: execute` | 完整实施 + 验证，输出精简回执（< 2k） |
| **explore** | `mode: explore` | 只读 + 轻量验证，输出现状 / 风险 / 建议 |
| **consult** | `mode: consult` | 只读 / 分析 / 推理，输出结构化意见 |

内置契约（让执行与协作有规可循）：

- `receipt-contract.md` — 回执格式
- `consult-contract.md` — 协商请求 / 回复格式
- `bounceback-rules.md` — 9 种必须回抛的情况
- `validation-rules.md` — 验证原则
- `superpowers-integration.md` — Superpowers 双模式边界

### ccb-doc — 文档维护

- 文档分类判定与路由（按 docs 目录契约）
- 索引维护（`docs/.ccb/index/`）
- 详细文档编写

## 快速开始

```bash
# 方式 1：skill-installer（推荐）
$skill-installer install https://github.com/Im-Sue/su-ccb-codex-skills/tree/main/skills/ccb-execute
$skill-installer install https://github.com/Im-Sue/su-ccb-codex-skills/tree/main/skills/ccb-doc
# 安装后重启 Codex 生效

# 方式 2：手动安装到用户级
git clone https://github.com/Im-Sue/su-ccb-codex-skills.git
cp -r su-ccb-codex-skills/skills/* ~/.codex/skills/

# 或项目级安装
mkdir -p .agents/skills && cp -r skills/* .agents/skills/
```

## 依赖与环境

| 依赖 | 类型 | 说明 |
|------|------|------|
| [su-ccb-claude-plugin](https://github.com/Im-Sue/su-ccb-claude-plugin) | **配套** | Claude 侧 plugin（`/ccb:su-*` 命令）—— 决策与派工方 |
| [claude_codex_bridge](https://github.com/SeemSeam/claude_codex_bridge) | **必需** | `ccb` / `ccbd` 多 agent 桥接运行时（Claude↔Codex 通讯，v7+） |
| [Superpowers](https://github.com/obra/superpowers) | 可选增强 | 执行阶段能力增强，缺失不阻塞 |

> **环境**：仅支持 WSL 与 macOS（原生 Windows 走 WSL）。底层 `claude_codex_bridge` 必装，见其 [README](https://github.com/SeemSeam/claude_codex_bridge)。

## License & Author

MIT · **Sue** | [GitHub](https://github.com/Im-Sue) | TG: @Sue_muyu
