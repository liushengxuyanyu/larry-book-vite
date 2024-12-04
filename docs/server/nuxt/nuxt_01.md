## 为什么选择使用 Nuxt？

**<font color="blue">开箱即用的开发环境</font>**

- 整合 Vue3 作为视图引擎；
- 整合 Webpack5 和 Vite 作为打包工具；
- 提供最新 ES 语法，零配置 TS 支持；
- 内置 vue-router，基于文件的路由；
- 内置 SSR 友好的全局状态管理模块；
- 内置数据访问模块 useFetch 等等。

**<font color="blue">服务端能力</font>**

Nuxt 内置了 Nitro 服务端引擎，能够同时提供 SSR 和 API 路由支持，这也就是说，除了能够提供服务端渲染能力，我们还能编写服务端接口，这使我们拥有了全栈开发能力。另外 API 兼容 node、connect、express，未来也可以把应用发布到 Node.js、Serverless 等服务器运行环境。

**<font color="blue">不同场景解决方案</font>**

为了满足开发者多种场景开发需求，Nuxt 提供了 5 种渲染模式：

- 服务端渲染 SSR；
- 客户端渲染 SPA；
- 全静态内容生成 SSG；
- 混合渲染模式 Hybrid；
- 边缘渲染 Edge-render。

**<font color="blue">扩展能力</font>**

比起传统 Vue 项目，Nuxt 给予我们更多扩展能力和复用能力：

- 中间件：针对单个路由的扩展；
- 插件：针对 NuxtApp 的扩展；
- 模块：扩展 Nuxt 核心能力以及简化整合能力；
- 层：针对 Nuxt 应用的组件、工具和配置复用能力。

**<font color="blue">良好的开发体验</font>**

良好的开发体验主要来源于效率工具和避免重复劳动，这方面我们看一下 Nuxt 提供的能力：

- 基于文件的路由支持；
- 组件、依赖库、工具集的自动导入；
- 内置的数据获取模块和新的编程范式；
- 零配置的 TS 支持；
- 插件、模块、中间件等多种复用机制。

## Nuxt 的整体架构？

Nuxt 框架由一些包组成，它们各有不同作用：

- 核心引擎：nuxt，实现核心功能，串联所有模块；
- 打包：@nuxt/vite-builder、@nuxt/webpack-builder；
- 命令行工具：nuxi，创建、调试、打包项目等；
- 服务端引擎：nitro，服务端渲染，API 路由；
- 开发包：@nuxt/kit，用于 Nuxt 模块开发；
- Nuxt 2 桥：@nuxt/bridge，用于 Nuxt2 项目中使用 Nuxt3 特性。

## 如何创建 Nuxt 项目？

`npx nuxi init nuxt-app` 或安装最后的稳定版本 `npx nuxi@latest init nuxt-app`

安装过程中，会选择包管理工具，`npm/yarn/pnpm` 均可，然后自动安装依赖。

Nuxt3 默认支持 vue3 和 ts，默认 `ssr` 渲染方式

## 如何创建路由？

**<font color="blue">基于文件的路由</font>**

在主入口 `app.vue`, 使用 `<NuxtPage></NuxtPage>` 相当于引入 vue3 的 `<router-view></router-view>`

```vue
<template>
  <div>
    <!-- 路由出口 组件-->
    <NuxtPage></NuxtPage>
  </div>
</template>
```

Nuxt 是以文件路径的方式处理路由地址，启动项目后，路由默认会找 `pages` 目录下的 `index.vue` 组件, 创建`pages`目录，以及`index.vue`

```vue
<!-- index.vue -->
<template>
  <h1>Index Page</h1>
</template>
```

访问 `https://localhost:3000` 会跳转到 `pages` 下的 `index.vue`

访问 `https://localhost:3000/detail` 会跳转到 `pages` 下的 `detail.vue`

也可以使用`<NuxtLink></NuxtLink>` 相当于 vue3 中的 `<router-link></router-link>`来进行路由之间的跳转

```vue
<!-- index.vue -->
<template>
  <h1>Index Page</h1>
  <NuxtLink to="/detail">去详情页</NuxtLink>
</template>
```

**<font color="blue">动态路由</font>**
如果 **文件名或者文件夹名称里面包含了方括号**，它们将被转换为动态路由参数。比如我们像下面这样修改文件结构：

```diff
pages/
--- index.vue
--- detail-[id].vue
```

访问 `https://localhost:3000/detail-1`、`https://localhost:3000/detail-2` 就可以访问到这个组件

我们可以在`detail-[id].vue`中访问 id 这个参数:

```vue
<template>
  {{ $route.params.id }}
</template>
```
