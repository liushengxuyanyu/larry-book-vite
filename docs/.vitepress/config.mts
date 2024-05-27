import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "Larry的小书",
  description: "面试版",
  lastUpdated: true, // 文档更新时间：每个文件git最后提交的时间
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      {
        text: "语言基础",
        items: [
          {
            text: "JavaScript",
            link: "/language/javascript/知识点.md",
          },
          {
            text: "TypeScript",
            link: "/language/typescript/01.md",
          },
        ],
      },
      // 下拉列表
      {
        text: "前端框架",
        items: [
          {
            text: "Vue2",
            link: "/frame/vue2/01.md",
          },
          {
            text: "Vue3",
            link: "/frame/vue3/01.md",
          },
          // {
          //   text: 'React',
          //   items: [
          //     { text: '基础', link: '/frame/vue-01.md' },
          //     { text: '进阶', link: '/frame/vue-01.md' },
          //   ]
          // }
        ],
      },
      // 下拉列表
      {
        text: "code系列",
        items: [
          {
            text: "编程能力",
            items: [
              {
                text: "轮子实现",
                link: "/code/轮子实现.md",
              },
              {
                text: "数组专题",
                link: "/code/array.md",
              },
              {
                text: "异步专题",
                link: "/code/async.md",
              },
              {
                text: "promiseA+规范",
                link: "/code/promise.md",
              },
              {
                text: "设计模式",
                link: "/code/designMode.md",
              },
            ],
          },
          {
            text: "算法",
            items: [
              { text: "数据结构", link: "/code/数据结构.md" },
              { text: "算法", link: "/code/算法.md" },
              { text: "leetcode", link: "/code/leetcode.md" },
            ],
          },
        ],
      },
      // 下拉列表
      {
        text: "浏览器",
        items: [
          {
            text: "架构/渲染",
            link: "browser/架构-渲染.md",
          },
          {
            text: "协议/网络",
            link: "/browser/协议-网络.md",
          },
          {
            text: "缓存/存储",
            link: "/browser/缓存-存储.md",
          },
          {
            text: "安全",
            link: "/browser/安全.md",
          },
        ],
      },
      // 下拉列表
      {
        text: "工程化",
        items: [
          {
            text: "模块化",
            link: "/engine/模块化/01.md",
          },
          {
            text: "打包工具",
            items: [
              {
                text: "webpack",
                link: "/engine/webpack/01.md",
              },
              {
                text: "vite",
                link: "/engine/vite/01.md",
              },
              {
                text: "rollup",
                link: "/engine/rollup/01.md",
              },
            ],
          },
          {
            text: "包管理",
            link: "/engine/package/01.md",
            // items: [
            //   {
            //     text: "包管理相关",
            //     link: "/engine/package/01.md",
            //   },
            // ],
          },
          {
            text: "babel",
            link: "/engine/package/基础.md",
            // items: [
            //   {
            //     text: "包管理相关",
            //     link: "/engine/package/01.md",
            //   },
            // ],
          },
          {
            text: "微前端",
            link: "/engine/微前端/01.md",
            // items: [
            //   {
            //     text: "包管理相关",
            //     link: "/engine/package/01.md",
            //   },
            // ],
          },
        ],
      },
      // 下拉列表
      {
        text: "项目其他",
        items: [
          {
            text: "项目",
            link: "/project/01.md",
          },
          {
            text: "解决方案",
            link: "/project/解决方案.md",
          },
        ],
      },
      {
        text: "博客/小册",
        items: [
          {
            text: "博客",
            items: [
              { text: "图解计算机基础", link: "https://xiaolincoding.com/" },
            ],
          },
          // {
          //   text: "小册链接",
          //   items: [
          //     {
          //       text: "Vue2组件精讲",
          //       link: "https://juejin.cn/book/6844733759942557704"
          //     },
          //     {
          //       text: "JS设计模式-修言",
          //       link: "https://juejin.cn/book/6844733790204461070"
          //     },
          //     {
          //       text: "前端算法与数据结构-修言",
          //       link: "https://juejin.cn/book/6844733800300150797"
          //     },
          //     {
          //       text: "JS函数式编程-修言",
          //       link: "https://juejin.cn/book/7173591403639865377"
          //     }
          //   ]
          // }
        ],
      },
      {
        text: "常用工具",
        items: [
          { text: "图片压缩", link: "https://tinify.cn/" },
          {
            text: "颜色转换",
            link: "https://www.bchrt.com/tools/color-convert/",
          },
        ],
      },
    ],

    // 默认配置 使用 数组，自定义配置使用 对象格式
    sidebar: {
      "/language/": [
        {
          text: "JavaScript",
          collapsed: true,
          items: [
            { text: "知识点", link: "/language/javascript/知识点.md" },
            { text: "代码题", link: "/language/javascript/代码题.md" },
            { text: "基础02", link: "/language/javascript/02.md" },
            { text: "其它", link: "/language/javascript/03.md" },
          ],
        },
        {
          text: "TypeScript",
          collapsed: true,
          items: [
            { text: "基础", link: "/language/typescript/01.md" },
            { text: "进阶", link: "/language/typescript/02.md" },
          ],
        },
      ],
      "/code/": [
        {
          text: "编程能力",
          collapsed: true,
          items: [
            { text: "基础通用", link: "/code/01.md" },
            { text: "数组专题", link: "/code/array.md" },
            { text: "异步专题", link: "/code/async.md" },
            { text: "promiseA+规范", link: "/code/promise.md" },
            { text: "设计模式", link: "/code/设计模式.md" },
          ],
        },
        {
          text: "数据结构与算法",
          collapsed: true,
          items: [
            { text: "数据结构", link: "/code/数据结构.md" },
            { text: "算法", link: "/code/算法.md" },
            { text: "leetcode常见题", link: "/code/leetcode.md" },
          ],
        },
      ],
      "/frame/": [
        {
          text: "Vue2",
          collapsed: true,
          items: [
            // { text: 'Vue2', link: '/vue2/'},
            { text: "基础/API", link: "/frame/vue2/01.md" },
            { text: "生命周期", link: "/frame/vue2/lifeCycle.md" },
            { text: "路由", link: "/frame/vue2/router.md" },
            { text: "组件", link: "/frame/vue2/component.md" },
            { text: "其他", link: "/frame/vue2/common.md" },
            { text: "进阶(重点/难点)", link: "/frame/vue2/02.md" },
          ],
        },
        {
          text: "Vue3",
          collapsed: true,
          items: [
            { text: "基础", link: "/frame/vue3/01.md" },
            { text: "进阶", link: "/frame/vue3/02.md" },
          ],
        },
      ],
      "/engine/": [
        {
          text: "模块化",
          collapsed: true,
          link: "/engine/模块化/01.md",
          // items: [{ text: "包管理相关", link: "/engine/package/01.md" }],
        },
        {
          text: "打包工具",
          collapsed: true,
          items: [
            { text: "webpack", link: "/engine/webpack/01.md" },
            { text: "webpack配置", link: "/engine/webpack/配置.md" },
            { text: "vite", link: "/engine/vite/01.md" },
            { text: "rollup", link: "/engine/rollup/01.md" },
          ],
        },
        {
          text: "包管理",
          collapsed: true,
          link: "/engine/package/01.md",
          // items: [{ text: "包管理相关", link: "/engine/package/01.md" }],
        },
        {
          text: "babel",
          collapsed: true,
          link: "/engine/babel/基础.md",
        },
        {
          text: "微前端",
          collapsed: true,
          link: "/engine/微前端/01.md",
        },
      ],
      "/browser/": [
        {
          text: "浏览器相关",
          collapsed: true,
          items: [
            { text: "架构/渲染", link: "/browser/架构-渲染.md" },
            { text: "协议/网络", link: "/browser/协议-网络.md" },
            { text: "缓存/存储", link: "/browser/缓存-存储.md" },
            { text: "安全", link: "/browser/安全.md" },
          ],
        },
      ],
      "/project/": [
        {
          text: "项目相关",
          collapsed: true,
          items: [
            { text: "项目", link: "/project/01.md" },
            { text: "解决方案", link: "/project/解决方案.md" },
          ],
        },
      ],
    },

    // 友情链接：
    // socialLinks: [
    //   { icon: "github", link: "https://github.com/liushengxuyanyu" }
    // ]
  },
  markdown: {
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: " ",
      detailsLabel: "查看答案",
    },
    lineNumbers: true,
  },
});
