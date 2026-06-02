# SU-CCB Codex Skills

> Codex-side skill pack for the SU-CCB collaboration framework

本仓库是 [SU-CCB Claude Plugin](https://github.com/SU-CCB/su-ccb-claude-plugin) 的配套 Codex 侧 skill pack，提供执行、协商、文档维护三大能力。

## Quick Start

```bash
# 方式 1：通过 skill-installer（推荐）
$skill-installer install https://github.com/SU-CCB/su-ccb-codex-skills/tree/main/skills/ccb-execute
$skill-installer install https://github.com/SU-CCB/su-ccb-codex-skills/tree/main/skills/ccb-doc
# 安装后重启 Codex 生效

# 方式 2：手动安装
git clone https://github.com/SU-CCB/su-ccb-codex-skills.git
cp -r su-ccb-codex-skills/skills/* ~/.codex/skills/
# 重启 Codex 生效
```

## Skills

### ccb-execute

核心执行 skill，支持三种模式：

| 模式 | 标记 | 行为 |
|------|------|------|
| **execute** | `mode: execute` | 完整实施+验证，输出精简回执（<2k） |
| **explore** | `mode: explore` | 只读+轻量验证，输出现状/风险/建议 |
| **consult** | `mode: consult` | 只读/分析/推理，输出结构化意见 |

包含契约：
- `receipt-contract.md` — 回执格式规范
- `consult-contract.md` — 协商请求/回复格式
- `bounceback-rules.md` — 9 种必须回抛的情况
- `validation-rules.md` — 验证原则
- `superpowers-integration.md` — Superpowers 双模式边界

### ccb-doc

文档维护 skill：
- 文档分类判定与路由
- 索引维护（`.catalog.yaml`、`.ccb/index/`）
- 详细文档编写

## Dependencies

| 依赖 | 类型 | 说明 |
|------|------|------|
| [su-ccb-claude-plugin](https://github.com/SU-CCB/su-ccb-claude-plugin) | **配套** | Claude 侧 Plugin（/su:* 命令） |
| [Superpowers](https://github.com/obra/superpowers) | 可选增强 | 执行阶段能力增强，缺失不阻塞 |

## Project-Level Installation

也可以安装到项目级而非用户级：

```bash
# 在项目 .agents/skills/ 下安装
mkdir -p .agents/skills
cp -r skills/* .agents/skills/
```

## License

MIT

## Author

**Sue** | [GitHub](https://github.com/Im-Sue) | TG: @Sue_muyu
