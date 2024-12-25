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
      { text: 'BroKen', link: '/castle/what-is-castle'},
      { text: 'Credential', link:'/credential/what-is-credential'},
      { text: '前往官网' , link: 'https://turboflint.cn'}
    ],

    sidebar: [
      {
        text: 'Horizon 里森',
        items: [
          { text: '什么是里森', link: '/horizon/what-is-horizon' },
          { text: '如何加入里森创作者', link: '/horizon/how-to-join' },
          { text: '如何添加里森到桌面', link:'/horizon/add-to-desktop'},
          { text: '什么是知识共享协议', link: '/horizon/cc' },
          { text: '版权声明', link: '/horizon/copyright' }
        ]
      },
      {
       text: 'Credential 凭证',
       items:[
        { text: '什么是凭证', link: '/credential/what-is-credential'},
        { text: '如何注销凭证', link:'/credential/how-to-delete'}
       ]
     },
     {
       text: '其他',
       items:[
        { text: '官网更新日志',link: 'others/site-updates' },
        { text: 'BROKEN SITE 更新日志',link: 'others/broken-update' },
        { text: '破碎宇宙项目版权声明',link: 'others/broken-copyright' }
       ]
     }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ericlee517' }
    ]
  }
})
