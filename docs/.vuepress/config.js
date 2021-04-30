module.exports = {
  title: "MASK",
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/images/mask.png' }]
  ],
  themeConfig: {
    logo: '/images/picker-logo.png',
    nav:[
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ]
  }
}