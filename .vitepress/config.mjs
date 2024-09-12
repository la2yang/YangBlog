import { text } from 'stream/consumers'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Yang的博客',
  description: 'A VitePress Site',
  base: '/YangBlog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/docs/markdown-examples' },
      {
        text: 'react',
        items: [
          { text: 'react学习', link: '/docs/study' },
          { text: 'antd', link: '/docs/antd' },
        ],
      },
      {
        text: '小程序',
        items: [{ text: '微信小程序', link: '/docs/mini' }],
      },
    ],

    sidebar: [
      {
        text: 'react',
        items: [
          { text: 'react学习', link: '/docs/study' },
          { text: 'antd', link: '/docs/antd' },
        ],
      },
      {
        text: '小程序',
        items: [{ text: '微信小程序', link: '/docs/mini' }],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
