::: tip
记录一些通用的 vue 面试
https://juejin.cn/post/6936082054194921480/
:::

## 不使用脚手架，创建一个 Vue 项目，需要怎么做？

## 项目中 assets 和 static 的区别？

::: details
都是存放静态资源的。

`assets` 会被打包，`static` 不会被打包
:::

## 怎么解决 vue 打包后静态资源图片失效的问题？

::: details
找到 build 打包对象里的 `assetsPublicPath` 属性默认值为`/`,更改为`./`就好了
:::

## 怎么解决 vue 动态设置 img 的 src 不生效的问题？

::: details

```html
<img :src="require('../../../assets/images/xxx.png')" />
```

:::

## 使用 vue 渲染大量数据时应该怎么优化？

::: details

1. 首先从设计上避免大数据获取和渲染，可以采取分页的方式获取，避免渲染大量数据

vue-virtual-scroller 等虚拟滚动方案，只渲染视口范围内的数据

如果不需要更新，可以使用 v-once 方式只渲染一次

通过 v-memo 可以缓存结果，结合 v-for 使用，避免数据变化时不必要的 VNode 创建
:::

<style>
  /* 这里是 details 块的样式重写  不要切换黑暗模式 */
  /* .custom-block {
    padding: 0 !important;
    font-size: 16px;
  } */
  .custom-block.details {
    background-color: #fff !important;
    padding: 0 !important;
    font-size: 16px;
  }
  .custom-block.details summary {
    color: #3451b2 !important;
  }
</style>
