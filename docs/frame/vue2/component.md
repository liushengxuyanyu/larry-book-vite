::: tip
组件 相关专题 训练

:::

## 谈一谈对 Vue 组件化的理解？

::: info

- 组件化开发能大幅提高开发效率、测试性、复用性等
- 常用的组件化技术：属性、自定义事件、插槽
- 降低更新频率，只重新渲染变化的组件
- 组件的特点：高内聚、低耦合、单向数据流

:::

## 封装一个组件要考虑哪些问题？

业务组件、工具组件

https://www.nowcoder.com/exam/interview/85027009/test?paperId=47569991&jobs=%5B11201%5D&order=0


## 组件为什么只能有一个根元素？

vue2 中只允许一个根元素，是因为进行 diff 时会从根节点进行遍历，函数只处理了单节点的场景

Vue3 支持多个根元素，是因为 引入了 Fragment 的概念， 将多个根元素作为 Fragment 节点的 children , 挂载和更新时，直接使用 children 。

## 组件的 name 选项有什么作用？

::: info

- 可以通过名字找到对应的组件（ 递归组件：组件自身调用自身 ）
- 可以通过 `name` 属性实现缓存功能（keep-alive）
- 使用动态组件是用 `name` 来识别的
- 可以通过 `name` 来识别组件（跨级组件通信时非常重要）
- 使用 `vue-devtools` 调试工具里显示的组见名称是由 `vue` 中组件 `name` 决定的

:::

## 插槽的作用 和 分类？

::: info
通过组件的**插槽**， 可以用在不同的地方渲染各异的内容，但同时还保证都具有相同的样式。

1. **默认插槽**

```html
<FancyButton>
  Click me!
  <!-- 插槽内容 -->
</FancyButton>

<button class="fancy-btn">
  <slot></slot>
  <!-- 插槽出口 -->
</button>

<!-- 可以设定默认内容 -->
<button class="fancy-btn">
  <slot>
    Submit
    <!-- 默认内容 -->
  </slot>
</button>
```

2. **具名插槽**

当一个组件中包含多个插槽，就需要使用具名插槽来区分位置。这类带 `name` 的插槽被称为具名插槽 (`named slots`)。没有提供 `name` 的 `<slot>` 出口会隐式地命名为`“default”`。

```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

<!-- 使用 -->
<BaseLayout>
  <template v-slot:header>
    <!-- header 插槽的内容放这里 -->
  </template>
  <!-- 简写 -->
  <template #header></template>
</BaseLayout>
```

3. **动态插槽**

```html
<base-layout>
  <template v-slot:[dynamicSlotName]> ... </template>

  <!-- 缩写为 -->
  <template #[dynamicSlotName]> ... </template>
</base-layout>
```

4. **作用域插槽**

**默认插槽的内容无法访问到子组件的状态**，但可以使用 **作用域插槽** 来实现

> 这个是面试重点：平时我们使用的 element-ui 大部分组件都是用了 作用域插槽来实现，比如 el-column

```html
<!-- <MyComponent> 的模板 -->
<div>
  <slot :text="greetingMessage" :count="1"></slot>
</div>

<!-- 使用 -->
<MyComponent v-slot="slotProps">
  {{ slotProps.text }} {{ slotProps.count }}
</MyComponent>
```

5. **具名作用域插槽**
   具名作用域插槽的工作方式也是类似的，插槽 `props` 可以作为 `v-slot` 指令的值被访问到：`v-slot:name="slotProps"`。当使用缩写时是这样：

```html
<slot name="header" message="hello"></slot>

<MyComponent>
  <template #header="headerProps"> {{ headerProps }} </template>
</MyComponent>
```

:::

## 插槽内容可以访问到父组件的数据作用域吗?

::: info
**可以！** 因为插槽内容本身是在父组件模板中定义的。

```html
<span>{{ message }}</span> <FancyButton>{{ message }}</FancyButton>
```

这里的两个 `{{ message }}` 插值表达式渲染的内容都是一样的。

**插槽内容无法访问子组件的数据<font color="red">(除去作用域插槽)</font>**。`Vue` 模板中的表达式只能访问其定义时所处的作用域，这和 `JavaScript` 的词法作用域规则是一致的。

> 父组件模板中的表达式只能访问父组件的作用域；子组件模板中的表达式只能访问子组件的作用域。

:::

## 如何统一监听 Vue 组件报错?

## 如何透传 Attributes？

::: info
**透传 attribute** 指的是传递给一个组件，却没有被该组件声明为 `props` 或 `emits` 的 `attribute` 或者 `v-on` 事件监听器。最常见的例子就是 `class`、`style` 和 `id`。

默认会透传的 `attribute` 会自动被添加到根元素上。

如果你不想要一个组件自动地继承 `attribute`，你可以在组件选项中设置 `inheritAttrs: false`。

组件内使用`$attrs` 即可拿到 透传过来的 `attribute`
:::

## 组件会在什么时候下被销毁？

::: info

- 没有使用`keep-alive`时的路由切换；
- `v-if='false'；`
- 执行`vm.$destroy()；`

:::

## keep-alive 的作用？

::: info
**keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染 ，其有以下特性：**

1. **减少组件的销毁和重新创建**：使用 `keep-alive` 包裹需要缓存的组件，可以避免在组件切换时反复销毁和重新创建组件实例。这样可以节省性能，提高页面响应速度。

2. **缓存组件状态**：`keep-alive` 可以缓存包裹的组件的状态，包括数据、计算属性、观察者等。当组件被缓存起来时，这些状态都会被保留，再次渲染时可以直接使用，避免了重新初始化的开销。

3. **提高组件复用性**：通过使用 `keep-alive`，我们可以将一些通用的组件进行缓存，让它们可以在多个地方重复使用。这样可以减少代码冗余，并提高整体项目的可维护性。

:::

## 什么是异步组件？

::: info

使用`import()` 来加载组件

应用场景：

1. 可以根据权限，动态加载页面对应的模块，让不同角色看到的同一模块是不同的组件

2. 路由懒加载

:::

## 递归组件是什么，使用场景？

- 如果某个组件通过组件名称引用它自己，这种情况就是递归组件。

- 实际开发中类似 Tree、Menu 这类组件，它们的节点往往包含子节点，子节点结构和父节点往往是相同的。这类组件的数据往往也是树形结构，这种都是使用递归组件的典型场景。

- 使用递归组件时，由于我们并未也不能在组件内部导入它自己，所以设置组件 name 属性，用来查找组件定义，如果使用 SFC，则可以通过 SFC 文件名推断。组件内部通常也要有递归结束条件，比如 model.children 这样的判断。

- 查看生成渲染函数可知，递归组件查找时会传递一个布尔值给 resolveComponent，这样实际获取的组件就是当前组件本身

## 什么是高阶组件，使用场景？

## vue组件隔离样式的原理(为什么添加scoped后可以隔离样式)？

https://segmentfault.com/a/1190000041842510

编译前：
```html
<style scoped>
.myWrapper{
  border: 5px solid black
}
</style>
...
<div class="myWrapper" >
  <Calendar />
</div>
...
```

编译后：
```html
<style>
.myWrapper[data-v-2fc5154c] {
  border: 5px solid black
}
</style>
<div class="myWrapper" data-v-2fc5154c>
  ...
</div>
```

可以看到，它的原理和CSS Module不太一样，Vue的Scoped会使CSS选择器后加上一个中括号。这并不是Vue独创的语法，而是**属性选择器**。

## 为什么vue:deep、/deep/、>>>样式能穿透到子组件？

https://juejin.cn/post/7397285315822632997?utm_source=gold_browser_extension

## :deep支持嵌套么？
不支持

https://juejin.cn/post/7397285315822632997?utm_source=gold_browser_extension

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
