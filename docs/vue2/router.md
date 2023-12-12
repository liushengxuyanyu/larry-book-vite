::: tip
路由相关专题 训练
:::

## 客户端(前端)路由 和 服务端路由的区别？

::: details

> 严谨点的说，在渲染页面的区别。因为服务端路由 还有可能做服务端自己的事情。

**服务端路由**

服务端路由指的是服务器根据用户访问的 `URL` 路径返回不同的响应结果。当我们在一个传统的服务端渲染的 `web` 应用中点击一个链接时，浏览器会从服务端获得全新的 `HTML`，然后重新加载整个页面。

**客户端路由**

在<font color="red">单页面应用</font>中，客户端的 `JavaScript` 可以拦截页面的跳转请求，动态获取新的数据，然后在无需重新加载的情况下更新当前页面。这样通常可以带来更顺滑的用户体验，尤其是在更偏向**应用**的场景下，因为这类场景下用户通常会在很长的一段时间中做出多次交互。

在这类单页应用中，<font color="red">“路由”</font>是在客户端执行的。一个客户端路由器的职责就是利用诸如` History API` 或是 `hashchange` 事件这样的浏览器 `API` 来管理应用当前应该渲染的视图。

:::

## vue-router 有几种模式?

::: details
三种模式

**<font color="red">1.hash 模式</font>**

`location.hash` 的值实际就是 `URL` 中`#`后面的东西

`hash` 虽然出现 `URL` 中，但不会被包含在 `HTTP` 请求中，对后端完全没有影响，因此改变 `hash` 不会重新加载页面。`vue-router` 内部 `hash`模式原理 就是 监听了 `window.addEventListener("hashchange", funcRef, false);` 事件

**优点：兼容性好**

**缺点：**

- 路由中有 '#' 号不是特别美观
- 对于需要锚点功能的需求会与当前路由机制发生冲突
- HASH 在 SEO 中确实有不好的影响
- 无需服务器进行配合；

**<font color="red">2.history 模式</font>**

利用了 `HTML5 History Interface` 中新增的 `pushState()` 和 `replaceState()` 方法。History 接口是浏览器历史记录栈提供的接口，通过`back()`, `forward()`, `go()`等方法，可以读取浏览器历史记录栈的信息，进行各种跳转操作。

**优点：**

- 符合 `url` 地址规范，没有 `#` ，使用起来比较美观；
- 后端可以获取到完整的路由信息；
- 可以使用` history.state` 获取完整的路由信息；
- 可以进行修改历史记录，并且不会立刻向后端发起请求；

**缺点：**

- 兼容性只到 IE10；
- 改变 `url` 路径后会重新请求资源；
- 若访问的路由地址不存在时会报`404`，需服务端配合支持重定向返回统一的`404`页面；

**<font color="red">3.abstract 模式</font>**

支持所有 `JavaScript` 运行环境，如 `Node.js` 服务器端。如果发现没有浏览器的 `API`，路由会自动强制进入这个模式

:::

## vue-router 钩子函数有哪些？执行顺序是什么？

## route 和 router 的区别?

## 路由传参的方式？

## 如何实现路由按需加载(路由懒加载)？

## 多个路由指向同一个组件的会怎么样？

::: details
默认情况下共享组件将不会重新渲染，如果尝试在使用相同组件的路由之间进行切换，则**不会发生任何变化**。

如果依然想重新渲染，可以使用**key**

```html
<template>
  <router-view :key="$route.path"></router-view>
</template>
```

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
