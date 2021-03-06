# 图灵敏捷项目管理平台

## 需求描述

### 项目管理

- `用户(User)` 可以创建 `项目(Project)`，成为 `项目拥有者(Project Owner, PO)`。
- `PO` 可以在 `项目` 中添加 `贡献者(Contributor)`：
  - `项目经理`
  - `开发者`
  - `运营`
  - `测试`
- `贡献者` 可以退出项目。
- `项目` 一经创建，不可删除，但可以 `归档`（不再维护）。

### 敏捷管理

- 每个 `项目` 都将对应一个 `产品`。
- 每个 `贡献者` 均可以创建 `待办事项`。
- `项目经理` 可以创建 `迭代` 并将 `待办事项` 提交到 `迭代` 中。
- `迭代进度` 由 `待办事项状态` 计算得出，但 `迭代状态` 由 `项目管理` 设置。

### 协作系统

- 每个 `贡献者` 可以创建 `Wiki` 文档。
- 每天 `贡献者` 都可以编写 `日报`。

### 项目仓库

- `贡献者` 可以绑定 `Github` 等仓库到项目中。

## TODO

- [ ] 在应用层验证 DTO 数据（因为太懒只在领域层验证了）
- [ ] 重新 git init + push force，因为我的 commit 注解越来越暴躁了（还有五个小时 DDL）
