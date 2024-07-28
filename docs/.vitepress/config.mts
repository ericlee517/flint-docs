import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "火石产品文档",
  description: "火石的产品文档。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Horizon', link: '/horizon' },
      { text: 'Castle' , link: '/castle'}
    ],

    sidebar: [
      {
        text: 'Horizon 里森',
        items: [
          { text: '什么是里森', link: '/horizon' },
          { text: '如何加入里森创作者', link: '/horizon/how-to-join' }
        ]
      },
     {
       text: 'Castle 卡索',
       item:[
        { text: '如何使用Castle', link: '/castle/how-to-use' }
       ]
     }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ericlee517' }
    ]
  }
})
