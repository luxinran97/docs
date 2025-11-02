import { defineConfig } from 'vitepress'
import { set_sidebar } from './util/auto-gen-siderbar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/note/',
  title: "宝黄天",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: [2, 6],
    nav: [
      { text: 'Home', link: '/' },
      { text: '前端', link: '/front-end/react/index' }
    ],

    sidebar: [{
        text: 'React',
        items: [
          { text: 'React', link: '/front-end/react/index' },
          { text: '微信小程序', link: '/front-end/微信小程序/index' },
        ]
      }, 
      {
        text: '微信小程序',
        items: [
          { text: '小程序入门', link: '/front-end/微信小程序/小程序入门' },
          { text: '小程序入门', link: '/front-end/微信小程序/小程序入门' },
      ]
    }],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 lxr'
    }
  }
})
