import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withSidebar(
    {
      title: "火石产品文档",
      description: "火石的产品文档。",
      themeConfig: {
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
          }
        },
        editLink: {
          pattern: 'https://github.com/ericlee517/flint-docs/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2025 Turbo Flint.'
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: "首页", link: "../" },
          { text: "Account", link: "/fire-account/what-is-fire-account.html" },
          { text: "Other", link: "/others/site-updates" },
          { text: "前往官网", link: "https://turboflint.cn" },
        ],

        head: [
          [
            "link",
            {
              rel: "icon",
              href: "/favicon.svg",
              type: "image/svg",
            },
          ],
        ],

        socialLinks: [
          { icon: "github", link: "https://github.com/ericlee517" },
        ],
        
      },
    },
    {
      // VitePress Sidebar's options here...
      documentRootPath: "/docs",
      collapsed: false,
      capitalizeFirst: true,
      useTitleFromFileHeading: true,
    }
  )
);
