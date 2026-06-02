---
name: ccb-doc
description: >
  Create or update project documentation and indexes according to CCB document routing rules.
  Use when Claude asks to write docs, maintain catalog/index files, or archive implementation details.
metadata:
  short-description: CCB 文档维护
---

# CCB 文档维护

## 触发条件
- Claude 明确要求更新文档。
- 任务完成后需要归档模块现状、经验沉淀或详细接口说明。
- 项目文档索引需要同步更新。

## 输入
- Claude 的文档更新指令。
- `docs/.catalog.yaml` 与 `.ccb/index/*.yaml`。
- 相关 spec、设计和实现结果。

## 执行流程
1. 读取 `docs/.catalog.yaml`，确定文档分类和落位目录。
2. 若分类不存在，先回抛给 Claude，确认是否新增目录与 README。
3. 根据已有结构和风格创建或更新文档。
4. 需要时更新 `.catalog.yaml`、`.ccb/index/modules.yaml`、`.ccb/index/decisions.yaml`。
5. 归档实际现状、踩坑记录、详细接口说明或扩展设计文档。
6. 返回更新文件清单与简要说明。

## 输出格式
- 更新了哪些文档。
- 是否更新索引。
- 还需 Claude 决策的事项。

## 停止条件
- 文档已按分类正确落位。
- 所需索引已同步。
- 返回结果可供 Claude 归档。

## 升级条件（回抛给用户）
- 文档分类不存在且需新增目录。
- Claude 未明确是否允许补文档。
- 当前实现不足以支撑准确文档化。
