const moment = require('moment')

module.exports = {
  title: 'Tumačenje testa samostalnosti',
  description: 'Tumačenje testa samostalnosti preduzetnika u Srbiji',
  base: '/',
  dest: './dist/',
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [2, 3]
    }
  },
  plugins: [
    '@vuepress/last-updated',
    {
      transformer: (timestamp) => {
        const moment = require('moment')

        moment.format('dddd DD.MM.YYYY. HH:MM')
        return moment(timestamp).fromNow()
      }
    }
  ],
  themeConfig: {
    // Sticky navbar
    lastUpdated: 'Poslednji put ažurirano', // string | boolean
    nav: [
      {
        text: 'Github',
        link: 'https://github.com/Vlasterx/test-samostalnosti'
      },
    ],

    // Depth for sidebar links extracted from document headers
    sidebarDepth: 5,

    // Sidebar links
    sidebar: [
      '/',
      '/ustav',
      '/test-samostalnosti',
      '/kontakt',
    ]
  }
}
