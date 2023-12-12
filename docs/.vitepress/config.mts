import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Larry的小书",
  description: "知识点整理",
  lastUpdated: true, // 文档更新时间：每个文件git最后提交的时间
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local"
    },
    nav: [
      // {
      //   text: 'TypeScript',
      //   link: '/typescript/01.md'
      // },
      {
        text: "语言基础",
        items: [
          {
            text: "JavaScript",
            link: "/language/javascript/01.md"
          },
          {
            text: "TypeScript",
            link: "/language/typescript/01.md"
          }
        ]
      },
      // 下拉列表
      {
        text: "前端框架",
        items: [
          {
            text: "Vue2",
            link: "/vue2/01.md"
          },
          {
            text: "Vue3",
            link: "/vue3/01.md"
          }
          // {
          //   text: 'React',
          //   items: [
          //     { text: '基础', link: '/frame/vue-01.md' },
          //     { text: '进阶', link: '/frame/vue-01.md' },
          //   ]
          // }
        ]
      },
      {
        text: "博客/小册",
        items: [
          {
            text: "博客",
            items: [
              { text: "图解计算机基础", link: "https://xiaolincoding.com/" }
            ]
          },
          {
            text: "小册链接",
            items: [
              {
                text: "Vue2组件精讲",
                link: "https://juejin.cn/book/6844733759942557704"
              },
              {
                text: "JS设计模式-修言",
                link: "https://juejin.cn/book/6844733790204461070"
              },
              {
                text: "前端算法与数据结构-修言",
                link: "https://juejin.cn/book/6844733800300150797"
              },
              {
                text: "JS函数式编程-修言",
                link: "https://juejin.cn/book/7173591403639865377"
              }
            ]
          }
        ]
      },
      {
        text: "常用工具",
        items: [{ text: "图片压缩", link: "https://tinify.cn/" }]
      }
    ],

    // 默认配置 使用 数组，自定义配置使用 对象格式
    sidebar: {
      "/language/": [
        {
          text: "JavaScript",
          collapsed: true,
          items: [
            { text: "API基础", link: "/language/javascript/01.md" },
            { text: "API进阶", link: "/language/javascript/02.md" },
            { text: "其它", link: "/language/javascript/03.md" }
            // { text: 'DOM/BOM', link: '/language/javascript/02.md' },
          ]
        },
        {
          text: "TypeScript",
          collapsed: true,
          items: [
            { text: "基础", link: "/language/typescript/01.md" },
            { text: "进阶", link: "/language/typescript/02.md" }
          ]
        }
      ],
      "/vue2/": [
        {
          text: "Vue2",
          collapsed: true,
          items: [
            // { text: 'Vue2', link: '/vue2/'},
            { text: "基础/API", link: "/vue2/01.md" },
            { text: "生命周期", link: "/vue2/lifeCycle.md" },
            { text: "路由", link: "/vue2/router.md" },
            { text: "进阶", link: "/vue2/02.md" }
          ]
        }
      ],
      "/vue3/": [
        {
          text: "Vue3",
          collapsed: true,
          items: [
            { text: "基础", link: "/vue3/01.md" },
            { text: "进阶", link: "/vue3/02.md" }
          ]
        }
      ]
    },

    // 友情链接：
    socialLinks: [
      { icon: "github", link: "https://github.com/liushengxuyanyu" }
    ]
  },
  markdown: {
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "回答",
      detailsLabel: "查看答案"
    },
    lineNumbers: true
  }
})
