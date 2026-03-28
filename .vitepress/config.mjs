import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "宝黄天 - 我的知识库",
  description: "基于分类优化的技术笔记",
  base: '/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '前端开发', link: '/docs/front-end/' },
      { text: '后端架构', link: '/docs/backend/' },
      { text: '运维部署', link: '/docs/devops/' }
    ],

    sidebar: {
      '/docs/front-end/': [
        {
          text: '🚀 前端开发',
          collapsed: false,
          items: [
            { text: '概览', link: '/docs/front-end/' },
            { text: 'React 学习', link: '/docs/front-end/react/' },
            { text: '微信小程序', link: '/docs/front-end/微信小程序/' }
          ]
        }
      ],
      '/docs/backend/': [
        {
          text: '⚙️ 后端架构',
          collapsed: false,
          items: [
            { text: '概览', link: '/docs/backend/' },
            { 
              text: 'Node.js 实战', 
              link: '/docs/backend/nodejs/'
            },
            { 
              text: 'Egg 框架', 
              link: '/docs/backend/Egg/',
              items: [
                { text: '1-1起步', link: '/docs/backend/Egg/1-1 起步' },
                { text: '1-2路由匹配', link: '/docs/backend/Egg/1-2 路由和控制器' },
                { text: '1-3静态资源插件', link: '/docs/backend/Egg/1-3 静态资源插件' }
                
              ]
            }
          ]
        }
      ],
      '/docs/devops/': [
        {
          text: '🛠️ 运维与部署',
          collapsed: true,
          items: [
            { text: '概览', link: '/docs/devops/' }
          ]
        }
      ],
      '/': [
        {
          text: '🚀 前端开发',
          collapsed: false,
          items: [
            { text: '概览', link: '/docs/front-end/' },
            { text: 'React 学习', link: '/docs/front-end/react/' },
            { text: '微信小程序', link: '/docs/front-end/微信小程序/' }
          ]
        },
        {
          text: '⚙️ 后端架构',
          collapsed: true,
          items: [
            { text: '概览', link: '/docs/backend/' },
            { text: 'Node.js 实战', link: '/docs/backend/nodejs/' }
          ]
        },
        {
          text: '🛠️ 运维与部署',
          collapsed: true,
          items: [
            { text: '概览', link: '/docs/devops/' }
          ]
        },
        {
          text: '📝 随笔与杂谈',
          collapsed: true,
          items: [
            { text: '技术心得', link: '/others/thoughts' },
            { text: '读书笔记', link: '/others/book-notes' }
          ]
        }
      ]
    },

    // 添加 home 配置以确保首页行为一致
    home: '/',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/note' }
    ]
  }
})