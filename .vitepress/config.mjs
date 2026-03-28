import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "宝黄天 - 我的知识库", // 修改为更具体的名称
  description: "基于分类优化的技术笔记",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '所有分类', link: '/guide/introduction' }
    ],

    // 优化点：侧边栏按分类进行分组
    sidebar: [
      {
        text: '🚀 前端开发',
        collapsed: false,
        items: [
          { text: 'Vue.js 核心', link: '/frontend/vue-core' },
          { text: 'React 进阶', link: '/frontend/react-advanced' },
          { text: 'CSS 技巧', link: '/frontend/css-tips' },
          { text: '构建工具 (Vite/Webpack)', link: '/frontend/build-tools' }
        ]
      },
      {
        text: '⚙️ 后端架构',
        collapsed: true,
        items: [
          { text: 'Node.js 实战', link: '/backend/nodejs' },
          { text: 'Java Spring Boot', link: '/backend/spring-boot' },
          { text: '数据库设计', link: '/backend/database' },
          { text: 'API 设计规范', link: '/backend/api-design' }
        ]
      },
      {
        text: '🛠️ 运维与部署',
        collapsed: true,
        items: [
          { text: 'Docker 容器化', link: '/devops/docker' },
          { text: 'K8s 入门', link: '/devops/kubernetes' },
          { text: 'CI/CD 流程', link: '/devops/cicd' }
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
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/note' }
    ]
  }
})