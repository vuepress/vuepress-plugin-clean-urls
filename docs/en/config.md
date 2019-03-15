# Configurations

## normalSuffix

- **type:** `string`
- **default:** `'/'`

The suffix for normal pages. For example, `foo/bar.md` will become:

- `foo/bar.html` by default (without this plugin)
- `foo/bar/` (with `normalSuffix` set to `'/'`)
- `foo/bar` (with `normalSuffix` set to `''`)

## indexSuffix

- **type:** `string`
- **default:** `'/'`

The suffix for index pages. For example, `foo/index.md` will become:

- `foo/` by default (without this plugin)
- `foo` (with `indexSuffix` set to `''`)
- `foo/index.html` (with `indexSuffix` set to `'/index.html'`)

::: tip
An index page is a page with a file name of `index.md` or `readme.md` (case insensitive).
:::

## notFoundPath

- **type:** `string`
- **default:** `'/404.html'`

URL for "404 not found" page.
