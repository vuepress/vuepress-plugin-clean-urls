---
sidebarDepth: 3
---

# 介绍

`vuepress-plugin-clean-urls` 是一个支持简洁链接的 VuePress 插件。

::: warning 注意
这个插件在 dev 服务器上总是生效的，但 VuePress **并没有能力**去修改服务器识别链接的方式。如果你希望你的网站地址符合某种特殊的模式（比如使用 `/routing` 而不是 `/routing.html` 或者 `routing/`），你需要确保你的服务器会将这些地址认为是 HTML。这可能意味着你需要对你的服务器进行特殊的配置。

**参考资料：**

- Netify 用户: [https://www.netlify.com/docs/redirects/#trailing-slash](https://www.netlify.com/docs/redirects/#trailing-slash).
- Surge 用户: [https://surge.sh/help/using-clean-urls-automatically](https://surge.sh/help/using-clean-urls-automatically).
:::

## 用法

### 全局安装

```bash
npm install -g vuepress-plugin-clean-urls
# 或者
yarn global add vuepress-plugin-clean-urls
```

### 局部安装

```bash
npm install vuepress-plugin-clean-urls
# 或者
yarn add vuepress-plugin-clean-urls
```

### 添加到 `config.js`

```js
module.exports = {
  plugins: [
    'clean-urls',
  ]
}
```
或者
```js
module.exports = {
  plugins: {
    'clean-urls': {
      normalSuffix: '',
      indexSuffix: '',
    },
  }
}
```

在[这里](./config.md)可以查看详细的配置。
