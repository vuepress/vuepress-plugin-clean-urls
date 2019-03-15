---
sidebarDepth: 3
---

# Introduction

`vuepress-plugin-clean-urls` is a plugin that provides support for clean urls.

::: warning
This plugin will always work on your dev server, but VuePress **does not have the right** to modify server identification. If you want your URLs to follow a certain pattern (e.g. `/routing` instead of `/routing.html` or `routing/`), you should make sure that your server would treat it as an HTML. This means that you may need to configure your server specifically.

**References:**

- For Netify users: [https://www.netlify.com/docs/redirects/#trailing-slash](https://www.netlify.com/docs/redirects/#trailing-slash).
- For Surge users: [https://surge.sh/help/using-clean-urls-automatically](https://surge.sh/help/using-clean-urls-automatically).
:::

## Usage

### Global Installation

```bash
npm install -g vuepress-plugin-clean-urls
# OR
yarn global add vuepress-plugin-clean-urls
```

### Local Installation

```bash
npm install vuepress-plugin-clean-urls
# OR
yarn add vuepress-plugin-clean-urls
```

### Add to `config.js`

```js
module.exports = {
  plugins: [
    'clean-urls',
  ]
}
```
or
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

See detailed configurations [here](./config.md).
