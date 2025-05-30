# Abracadabra 贡献指南

### 基本原则

本项目致力于实现高效的文本风格化加密技术，通过创新的字符映射方案提升信息表达的灵活性。

# 贡献规则

### 贡献流程

- 请在 dev 分支提交 Pull Request，等待维护者审核  
  **禁止直接向 main 分支提交 PR，此类请求将被自动关闭**
- 维护者将在 48 小时内提出代码改进建议（如有）
- 通过审核的 PR 将合并到 dev 分支进行集成测试
- 如果修改了文言映射表和句式，在提交 PR 前**必须**使用 `npm run test` 执行测试。

### 编码规范

- 遵循 ES6+ 语法规范，禁用已被废弃的语法特性
- 善用注释，复杂逻辑必须附加中文注释
- 禁止修改 package.json 版本号字段
- 保持模块化设计，新增模块须详细说明
- 优先使用原生 API，避免不必要的第三方依赖

### 模块管理准则

- 现有模块重构优于新建模块
- 新依赖引入需在 PR 中提供必要性论证
- 涉及性能的修改，需提供基准测试结果

### 密码表维护规则

- **严格保持向后兼容**，现存映射关系永不删除
- 新增映射前必须执行 `npm run test` 查重
- **禁止添加**：
  - Unicode 扩展区汉字（U+20000 及之后）
  - 总笔画超过 18 画的字符
  - 存在输入法输入困难的字符

### 质量保障

- 所有提交必须能够构建成功。
- 涉及加密核心的修改必须提供详细说明
- 重大功能改进应同步更新文档内容
