import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "火石产品文档",
  description: "火石的产品文档。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '../' },
      { text: 'Horizon', link: '/horizon/what-is-horizon' },
      { text: '前往官网' , link: 'https://turboflint.cn'}
    ],

    sidebar: [
      {
        text: 'Horizon 里森',
        items: [
          { text: '什么是里森', link: '/horizon/what-is-horizon' },
          { text: '如何加入里森创作者', link: '/horizon/how-to-join' },
          { text: '什么是知识共享协议', link: '/horizon/cc' },
          { text: '版权声明', link: '/horizon/copyright' }
        ]
      },
     {
       text: 'Castle 卡索',
       item:[
        { text: '卡索数据源', link: '/castle/data-source' }
       ]
     }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ericlee517' }
    ]
  }
})
