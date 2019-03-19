# [vuepress-plugin-clean-urls](https://vuepress.github.io/plugins/clean-urls.html)

[![npm](https://img.shields.io/npm/v/vuepress-plugin-clean-urls.svg)](https://www.npmjs.com/package/vuepress-plugin-clean-urls)

A [VuePress](https://vuepress.vuejs.org/) plugin that provides support for clean urls.

## Caveats

This plugin will always work on your dev server, but VuePress **does not have the right** to modify server identification. If you want your URLs to follow a certain pattern (e.g. `/routing` instead of `/routing.html` or `routing/`), you should make sure that your server would treat it as an HTML. This means that you may need to configure your server specifically.

**References:**

- For Netify users: [https://www.netlify.com/docs/redirects/#trailing-slash](https://www.netlify.com/docs/redirects/#trailing-slash).
- For Surge users: [https://surge.sh/help/using-clean-urls-automatically](https://surge.sh/help/using-clean-urls-automatically).

## Options

### normalSuffix

- **type:** `string`
- **default:** `''`

The suffix for normal pages. For example, `foo/bar.md` will become:

- `foo/bar.html` by default (without this plugin)
- `foo/bar/` (with `normalSuffix` set to `'/'`)
- `foo/bar` (with `normalSuffix` set to `''`)

### indexSuffix

- **type:** `string`
- **default:** `'/'`

The suffix for index pages. For example, `foo/index.md` will become:

- `foo/` by default (without this plugin)
- `foo` (with `indexSuffix` set to `''`)
- `foo/index.html` (with `indexSuffix` set to `'/index.html'`)

**tip:** An index page is a page with a file name of `index.md` or `readme.md` (case insensitive).

### notFoundPath

- **type:** `string`
- **default:** `'/404.html'`

URL for "404 not found" page.

## Contribution

Contribution Welcome!
