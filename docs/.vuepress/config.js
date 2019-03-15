const name = 'vuepress-plugin-clean-urls'

module.exports = ({ isProd }) => ({
  base: `/${name}/`,

  theme: 'contrib',

  plugins: ['clean-urls'],
  
  locales: {
    '/en/': {
      lang: 'en-US',
      title: name,
      description: 'A VuePress plugin that provides support for clean urls',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: name,
      description: '一个支持简洁链接的 VuePress 插件',
    },
  },
  
  themeConfig: {
    sidebar: [
      '',
      'config.html',
    ],
  },

  evergreen: !isProd,
})
