# 配置

## normalSuffix

- 类型: `string`
- 默认值: `'/'`

普通页面的链接后缀。举个例子，`foo/bar.md` 会自动变成：

- `foo/bar.html` 在默认情况下（未安装本插件时）
- `foo/bar/`（当 `normalSuffix` 被设为 `'/'` 时）
- `foo/bar`（当 `normalSuffix` 被设为 `''` 时）

## indexSuffix

- 类型: `string`
- 默认值: `'/'`

索引页面的链接后缀。举个例子，`foo/index.md` 会自动变成：

- `foo/` 在默认情况下（未安装本插件时）
- `foo`（当 `indexSuffix` 被设为 `''` 时）
- `foo/index.html`（当 `indexSuffix` 被设为 `'/index.html'` 时）

::: tip
索引页面是指文件名为 `index.md` 或者 `readme.md` 的页面（不区分大小写）。
:::

## notFoundPath

- **类型:** `string`
- **默认值:** `'/404.html'`

用来存放 404 页面的地址。
