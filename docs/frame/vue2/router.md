::: tip
路由相关专题 训练
:::

## 客户端(前端)路由 和 服务端路由的区别？

::: info

> 严谨点的说，在渲染页面的区别。因为服务端路由 还有可能做服务端自己的事情。

**服务端路由**

服务端路由指的是服务器根据用户访问的 `URL` 路径返回不同的响应结果。当我们在一个传统的服务端渲染的 `web` 应用中点击一个链接时，浏览器会从服务端获得全新的 `HTML`，然后重新加载整个页面。

**客户端路由**

在<font color="red">单页面应用</font>中，客户端的 `JavaScript` 可以拦截页面的跳转请求，动态获取新的数据，然后在无需重新加载的情况下更新当前页面。这样通常可以带来更顺滑的用户体验，尤其是在更偏向**应用**的场景下，因为这类场景下用户通常会在很长的一段时间中做出多次交互。

在这类单页应用中，<font color="red">“路由”</font>是在客户端执行的。一个客户端路由器的职责就是利用诸如` History API` 或是 `hashchange` 事件这样的浏览器 `API` 来管理应用当前应该渲染的视图。

:::

## vue-router 有几种模式?

::: info
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
- 需要服务器配合，否则访问路由会`404`;

```yaml
location / {
try_files $uri $uri/ /index.html;
}
```

**<font color="red">3.abstract 模式</font>**

支持所有 `JavaScript` 运行环境，如 `Node.js` 服务器端。如果发现没有浏览器的 `API`，路由会自动强制进入这个模式

:::

## vue-router 路由(导航)守卫有哪些?

::: info

> 也有的会问 vue-router 如何保护路由，都是一个意思。守卫就是保护的意思。

**路由守卫**就是路由跳转过程中的一些生命周期函数（钩子函数），我们可以利用这些钩子函数帮我们实现一些需求。

路由守卫又具体分为**全局路由守卫**、**路由独享守卫**以及**组件路由守卫**。

**全局(3 个)**

1. 全局前置守卫: `router.beforeEach`

   > 其主要作用就是用于登录验证

2. 全局解析守卫: `router.beforeResolve`

   > 是获取数据或执行任何其他操作（如果用户无法进入页面时你希望避免执行的操作）的理想位置。

3. 全局后置守卫: `router.afterEach`
   > 路由跳转完成了，这不需要 next()

**路由独享守卫(1 个)**

`beforeEnter`,只有进入到该路由的时候会触发, 定义在某个路由上。

```js
const routes = [
  {
    path: "/users/:id",
    component: UserDetails,
    beforeEnter: (to, from) => {
      // reject the navigation
      return false;
    },
  },
];
```

**组件路由守卫(3 个)**

`beforeRouteEnter`

```js
beforeRouteEnter(to, from, next) {
  // 在渲染该组件的对应路由被验证前调用
  // 不能获取组件实例 `this` ！
  // 因为当守卫执行时，组件实例还没被创建！
  // [!code warning] // 可以在next中回调 拿到 组件实例
  next(vm => {
    // 通过 `vm` 访问组件实例
  })
},
```

`beforeRouteUpdate`

```js
beforeRouteUpdate(to, from) {
  // 在当前路由改变，但是该组件被复用时调用
  // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
  // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
},
```

`beforeRouteLeave`

```js
beforeRouteLeave(to, from) {
  // 在导航离开渲染该组件的对应路由时调用
  // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
},
```

:::

## afterEach 钩子中可以使用 next()吗？

::: info
不可以，也没必要。
:::

## 完整的导航执行解析流程？

::: info

1. 导航被触发。
2. 在失活的组件里调用 `beforeRouteLeave` 守卫。
3. 调用全局的 `beforeEach` 守卫。
4. 在重用的组件里调用 `beforeRouteUpdate` 守卫(2.2+)。
5. 在路由配置里调用 `beforeEnter。`
6. 解析异步路由组件。
7. 在被激活的组件里调用 `beforeRouteEnter。`
8. 调用全局的 `beforeResolve` 守卫(2.5+)。
9. 导航被确认。
10. 调用全局的 `afterEach` 钩子。
11. 触发 `DOM` 更新。
12. 调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数，创建好的组件实例会作为回调函数的参数传入。

:::

## 路由守卫(钩子) 和 组件的生命周期(钩子) 的执行顺序？

::: info

> 不要死记，最好在代码里跑一遍，理解完这个执行顺序，基本上开发能解决大部分问题！

分两种情况：

1. **打开页面的任意一个页面，没有发生导航切换。**

全局前置守卫 beforeEach (路由器实例内的前置守卫)->路由独享守卫 beforeEnter(激活的路由)->组件内守卫 beforeRouteEnter(渲染的组件)->全局解析守卫 beforeResolve(路由器实例内的解析守卫)->全局后置钩子 afterEach(路由器实例内的后置钩子)->beforeCreate->Created->beforeMount->Mounted

2. **如果是有导航切换的(从一个组件切换到另外一个组件)**

组件内守卫 beforeRouteLeave(即将离开的组件)->全局前置守卫 beforeEach (路由器实例内的前置守卫)->组件内守卫 beforeRouteEnter(渲染的组件)->全局解析守卫 beforeResolve(路由器实例内的解析守卫)->全局后置钩子 afterEach(路由器实例内的后置钩子)->beforeCreate->created->beforeMount->beforeDestroy->destroyed->mounted

:::

## $route 和 $router 的区别?

::: info
`$route`: 是当前**路由信息对象**，包括 **path、params、hash、query、fullPath、matched、name** 等路由信息参数

`$router`: 是**路由实例对象**，包括了路由的跳转方式 **push()、go()，钩子函数**等
:::

## 路由之间跳转有哪些方式？明天继续看下 router 文档这里

::: info

1. **声明式导航**

```html
<!-- [!code highlight] --><!-- 通过内置组件 router-link 来实现 -->
<router-link :to="/home"></router-link>
```

2. **编程式导航**

通过调用 `router` 实例的方法跳转

```js
// [!code highlight] // push 进栈
this.$router.push({
  path: "/home",
});
// [!code highlight] // replace 替换
this.$router.replace({
  path: "/home",
});

// [!code highlight] // go 横跨历史
this.$router.go(-1);
this.$router.go(2);
//
```

:::

## 路由传参的方式？

::: info

1. `query`

浏览器强制刷新参数**不会**被清空

```js
this.$route.push({
  path: "/user",
  query: {
    userId: 123,
  },
});
```

浏览器地址：`http://localhost:8080/user?userId=123`

获取方式：`this.$route.query.userId`

2. `params`

浏览器强制刷新参数**会**被清空

```js
// 路由定义
const routes = [
  {
    path: "/user/:userId",
    name: "user",
    component: User,
  },
];

// [!code highlight] // 要使用 命令路由(name) 配合使用，不能和 path一起使用
// [!code highlight] // 分别会映射到/user/a 和 /user/b 都会导航到 User组件
router.push({ name: "user", params: { userId: "a" } });
router.push({ name: "user", params: { userId: "b" } });
```

浏览器地址： `http://localhost:8080/user/a`、 `http://localhost:8080/user/b`

获取方式：`this.$route.params.userId`
:::

## 如何定义动态路由？

::: info
就是上面说的 使用 `path: '/user/:userId'`, 冒号定义， 使用 `params` 方式获取。
:::

## 如何实现路由按需加载(路由懒加载)？

::: info
`Vue Router` 支持开箱即用的动态导入，这意味着你可以用动态导入代替静态导入：

```js
// 将
// import UserDetails from './views/UserDetails.vue'
// 替换成
const UserDetails = () => import("./views/UserDetails.vue");
```

使用 `webpack` 的注释语法可以把某个路由下的所有组件都打包在同个异步块 (chunk) 中

```js
const UserDetails = () =>
  import(/* webpackChunkName: "group-user" */ "./UserDetails.vue");
const UserDashboard = () =>
  import(/* webpackChunkName: "group-user" */ "./UserDashboard.vue");
const UserProfileEdit = () =>
  import(/* webpackChunkName: "group-user" */ "./UserProfileEdit.vue");
```

使用 `vite` 可以在 `rollupOptions` 下定义分块：

```js
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#outputmanualchunks
      output: {
        manualChunks: {
          "group-user": [
            "./src/UserDetails",
            "./src/UserDashboard",
            "./src/UserProfileEdit",
          ],
        },
      },
    },
  },
});
```

:::

## 多个路由指向同一个组件的会怎么样？

::: info
默认情况下共享组件将不会重新渲染，如果尝试在使用相同组件的路由之间进行切换，则**不会发生任何变化**。

1. 可以使用`watch`来监听，`$route` 对象上的任意属性

```js
const User = {
  template: "...",
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        // 对路由变化做出响应...
      }
    );
  },
};
```

2. 使用 `beforeRouteUpdate `导航守卫

```js
const User = {
  template: "...",
  async beforeRouteUpdate(to, from) {
    // 对路由变化做出响应...
    this.userData = await fetchUser(to.params.id);
  },
};
```

3. 也可以使用`key`

```html
<template>
  <router-view :key="$route.path"></router-view>
</template>
```

:::

## 路由怎么配置 404 页面？

::: info

```js
const router = new VueRouter({
  routes: [
    {
      path: "*",
      redirect: { path: "/" },
    },
  ],
});
```

:::

## 路由的元信息作用什么？

::: info
有时，你可能希望将任意信息附加到路由上，如**过渡名称**、**谁可以访问路由**等。这些事情可以通过接收属性对象的`meta`属性来实现，并且它可以在**路由地址**和**导航守卫**上都被访问到。定义路由的时候你可以这样配置 `meta` 字段：

```js
const routes = [
  {
    path: '/posts',
    component: PostsLayout,
    children: [
      {
        path: 'new',
        component: PostsNew,
        // 只有经过身份验证的用户才能创建帖子
        meta: { requiresAuth: true }
      },
      {
        path: ':id',
        component: PostsDetail
        // 任何人都可以阅读文章
        meta: { requiresAuth: false }
      }
    ]
  }
]
```

:::

## 切换路由时如何设置滚动位置？

::: info
**注意: 这个功能只在支持 `history.pushState` 的浏览器中可用。**

当创建一个 `Router` 实例，你可以提供一个 `scrollBehavior` 方法：

```js
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // [!code highlight] // 始终滚动到顶部
    return { top: 0 }

    // [!code highlight] // 始终在元素 #main 上方滚动 10px
    return {
      // 也可以这么写
      // el: document.getElementById('main'),
      el: '#main',
      top: -10,
    }

    // [!code highlight]  // 如果你要模拟 “滚动到锚点” 的行为：
    if (to.hash) {
      return {
        el: to.hash,
      }
    }
  }
})
```

:::

## 嵌套路由用在什么场景下？

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
