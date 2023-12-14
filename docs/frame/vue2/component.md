::: tip
组件 相关专题 训练

:::

## 谈一谈对 Vue 组件化的理解？

::: details

- 组件化开发能大幅提高开发效率、测试性、复用性等
- 常用的组件化技术：属性、自定义事件、插槽
- 降低更新频率，只重新渲染变化的组件
- 组件的特点：高内聚、低耦合、单向数据流
  :::

## 组件为什么只能有一个根元素？

## 组件的name选项有什么作用？
::: details
- 可以通过名字找到对应的组件（ 递归组件：组件自身调用自身 ）
- 可以通过 `name` 属性实现缓存功能（keep-alive）
- 使用动态组件是用 `name` 来识别的
- 可以通过 `name` 来识别组件（跨级组件通信时非常重要）
- 使用 `vue-devtools` 调试工具里显示的组见名称是由 `vue` 中组件 `name` 决定的
:::

## 插槽的作用 和 分类？

::: details
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

::: details
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

::: details
**透传 attribute** 指的是传递给一个组件，却没有被该组件声明为 `props` 或 `emits` 的 `attribute` 或者 `v-on` 事件监听器。最常见的例子就是 `class`、`style` 和 `id`。

默认会透传的 `attribute` 会自动被添加到根元素上。

如果你不想要一个组件自动地继承 `attribute`，你可以在组件选项中设置 `inheritAttrs: false`。

组件内使用`$attrs` 即可拿到 透传过来的 `attribute`
:::

## 组件会在什么时候下被销毁？

::: details

- 没有使用`keep-alive`时的路由切换；
- `v-if='false'；`
- 执行`vm.$destroy()；`

:::

## 如何设计一个递归组件？

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
