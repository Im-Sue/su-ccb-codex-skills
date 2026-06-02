# 文档路由规则

## 必须维护的索引
- `.catalog.yaml`：新增或废弃文档分类时更新
- `.ccb/index/modules.yaml`：模块变更时更新
- `.ccb/index/decisions.yaml`：新增 ADR 时更新

## 必须写的文档类型
1. `docs/03_开发计划/{任务}-详细设计.md`
2. `docs/04_模块规格/{模块}-现状.md`
3. `docs/05_经验沉淀/{问题}-解决方案.md`
4. `docs/10_接口文档/{接口}-详细说明.md`

## 原则
- 不默认创建或更新文档，需先有 Claude 的文档决策。
- 详细地图写到 docs，回执只给导航图。
