import{_ as a,D as e,o as n,c as l,I as p,w as t,R as s,a as h}from"./chunks/framework.4hIqoSk1.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frame/vue3/01.md","filePath":"frame/vue3/01.md","lastUpdated":1733279472000}'),r={name:"frame/vue3/01.md"},k=s(`<h2 id="vue3-5正式版-2024年9月3号发布" tabindex="-1">vue3.5正式版 2024年9月3号发布？ <a class="header-anchor" href="#vue3-5正式版-2024年9月3号发布" aria-label="Permalink to &quot;vue3.5正式版 2024年9月3号发布？&quot;">​</a></h2><p><a href="https://juejin.cn/post/7410673952345063474?utm_source=gold_browser_extension" target="_blank" rel="noreferrer">https://juejin.cn/post/7410673952345063474?utm_source=gold_browser_extension</a></p><h2 id="如何创建一个-vue3-应用" tabindex="-1">如何创建一个 Vue3 应用？ <a class="header-anchor" href="#如何创建一个-vue3-应用" aria-label="Permalink to &quot;如何创建一个 Vue3 应用？&quot;">​</a></h2><ol><li>使用 <code>create-vue</code> (推荐) 是基于 <code>Vite</code>构建工具的。 <blockquote><p>前置条件 - 已安装 16.0 或更高版本的 Node.js</p></blockquote></li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> npm create vue@latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>注意：<code>create-vite</code> 是 Vite 构建工具自己的脚手架，支持创建 vue、react 以及其他多个应用</strong></p><p>这一指令将会安装并执行 <code>create-vue</code>，它是 <code>Vue</code> 官方的项目脚手架工具。<code>create-vue</code> ，脚手架会有 Vue3 生态 以及<code>TS</code>、<code>ESLint</code>等支持。</p><ol start="2"><li>使用 <code>vue-cli</code> 基于 <code>webpack</code> 的脚手架 (现在处于维护状态，除非团队强依赖<code>webpack</code>, 否则不推荐)</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 全局安装 安装新版的脚手架工具</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> npm install -g @vue/cli</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vue create my-app</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>其他：非脚手架，自行基于构建工具搭建 <code>Vue3</code> 应用</p><h2 id="vue3对比vue2增加哪些新特性和优化" tabindex="-1">Vue3对比Vue2增加哪些新特性和优化？ <a class="header-anchor" href="#vue3对比vue2增加哪些新特性和优化" aria-label="Permalink to &quot;Vue3对比Vue2增加哪些新特性和优化？&quot;">​</a></h2><p>先总结：具体每一项看下边小题的回答</p><ol><li><strong>新增组合式API</strong></li></ol><p>Composition API 是 vue3 新增的功能，比 mixin 更强大。它可以把各个功能模块独立开来，提高代码逻辑的可复用性，同时代码压缩性更强。</p><ol start="2"><li><strong>性能上的优化</strong></li></ol><ul><li>响应式性能提升，由原来的 Object.defineProperty 改为基于ES6的 Proxy ，使其速度更快</li><li>重写了 Vdom (diff算法优化，增加静态标志)</li><li>模板编译优化（静态提升，不参与更新的元素只被创建一次）</li><li>Tree-shaking的优化（打包体积更小）</li></ul><ol start="3"><li><strong>新增了一些组件</strong></li></ol><ul><li>Fragment 不再限制 template 只有一个根节点。</li><li>Teleport 传送门，允许我们将控制的内容传送到任意的 DOM 中。（一些弹框组件）</li></ul><ol start="4"><li><strong>更好的支持TS</strong></li></ol><ul><li>Vue.js 2.x 选用 Flow 做类型检查，来避免一些因类型问题导致的错误，但是 Flow 对于一些复杂场景类型的检查，支持得并不好。</li><li>Vue.js 3.0 抛弃了 Flow ，使用 TypeScript 重构了整个项目</li><li>TypeScript 提供了更好的类型检查，能支持复杂的类型推断</li></ul><h2 id="组合式-和-选项式的区别" tabindex="-1">组合式 和 选项式的区别？ <a class="header-anchor" href="#组合式-和-选项式的区别" aria-label="Permalink to &quot;组合式 和 选项式的区别？&quot;">​</a></h2><p><strong>逻辑组织</strong></p><ul><li><p><code>Options Api</code>在处理一个大型的组件时，内部的逻辑点容易碎片化，可能同时存在于method,computed,watch等API中，我们必须不断地“跳转”相关代码的选项块，这种碎片化使得理解和维护复杂组件变得困难。</p></li><li><p><code>Composition Api</code>将某个逻辑关注点相关的代码全都放在一个函数里，这样，当需要修改一个功能时，就不再需要在文件中跳来跳去。</p></li></ul><p><strong>逻辑复用</strong></p><ul><li><p>在vue2.0中，当混入多个mixin会存在两个非常明显的问题：命名冲突、数据来源不清晰</p></li><li><p>而Composition Api可以通过编写多个hooks函数就很好的解决了</p></li></ul><p><strong>更好的性能</strong></p><ul><li><p>vue2 中有很多 api 是挂载到 vue 构造函数和实例上，使得 Vue 变得很臃肿，而且没有办法做<code>Tree Shaking</code>。</p></li><li><p>在 vue3 中是通过<code>import</code>导入的方式，按需加载来使用，可以做<code>Tree Shaking</code>，未使用的代码不会打包。而且减少了 this 使用情况。</p></li><li><p>更好的支持 TS 类型推断</p></li></ul><h2 id="vue3的响应式原理和vue2有什么区别" tabindex="-1">Vue3的响应式原理和Vue2有什么区别？ <a class="header-anchor" href="#vue3的响应式原理和vue2有什么区别" aria-label="Permalink to &quot;Vue3的响应式原理和Vue2有什么区别？&quot;">​</a></h2><p>整体思想没有改变都是 <strong>数据劫持</strong>、<strong>依赖收集</strong>、<strong>派发异步更新</strong></p><p><strong><code>defineProperty</code></strong></p><p>劫持的是对象的属性，存在以下问题：</p><ul><li>检测不到对象属性的添加和删除；</li><li>数组的很多API无法监听到、包括索引、长度等；</li><li>需要对每个属性进行深度遍历，如果是嵌套对象，需要深层次监听，造成性能问题；</li></ul><p><strong><code>Proxy</code></strong></p><ul><li>监听的整个对象（）</li><li>可以直接监听数组的变化</li><li>而且Proxy有13种拦截方法，不限于apply、ownKeys、deleteProperty、has等等</li></ul><h2 id="proxy只会代理第一层对象-如何做到深度监听的" tabindex="-1">proxy只会代理第一层对象，如何做到深度监听的？ <a class="header-anchor" href="#proxy只会代理第一层对象-如何做到深度监听的" aria-label="Permalink to &quot;proxy只会代理第一层对象，如何做到深度监听的？&quot;">​</a></h2><p>判断当前Reflect.get的返回值是否为Object，如果是则再通过 reactive ⽅法做代理， 这样就实现了深度观测。</p><h2 id="vue3-的生命周期" tabindex="-1">vue3 的生命周期？ <a class="header-anchor" href="#vue3-的生命周期" aria-label="Permalink to &quot;vue3 的生命周期？&quot;">​</a></h2><ul><li><p>Vue3 用 setup() 函数替代了 <code>beforeCreate</code> 和 <code>create</code> 钩子。不需要在显示的调用，其他生命周期的函数，都可以放在这里。</p></li><li><p>所有生命周期 前面都加一个 <code>on</code>, 需要单独引入</p></li><li><p><code>beforeDestroy</code> 改为 <code>onBeforeUnmount</code></p></li><li><p><code>destroyed</code> 改为 <code>onUnmounted</code></p></li></ul><h2 id="script-setup" tabindex="-1">script setup？ <a class="header-anchor" href="#script-setup" aria-label="Permalink to &quot;script setup？&quot;">​</a></h2><ul><li><p>script setup是Vue3的语法糖，简化了组合式API的写法，并且运行性能更高，使用script setup语法糖的特点：</p></li><li><p>属性和方法无需返回，直接使用；</p></li><li><p>引入组件的时候，会自动注册；</p></li><li><p>使用defineProps接收父组件传递的值；</p></li><li><p>使用useAttrs获取属性，useSlots获取插槽，defineEmits获取自定义事件；</p></li><li><p>默认不会对外暴露任何属性，如果有需要使用defineExpose；</p></li></ul><h2 id="setup-中为什么没有-beforecreate-和-created" tabindex="-1">setup 中为什么没有 beforeCreate 和 created？ <a class="header-anchor" href="#setup-中为什么没有-beforecreate-和-created" aria-label="Permalink to &quot;setup 中为什么没有 beforeCreate 和 created？&quot;">​</a></h2><h2 id="ref-和-reactive-的区别" tabindex="-1">ref 和 reactive 的区别？ <a class="header-anchor" href="#ref-和-reactive-的区别" aria-label="Permalink to &quot;ref 和 reactive 的区别？&quot;">​</a></h2><p>都是用来创建响应式数据的</p><p><strong>ref</strong></p><ul><li>通过Object.defineProperty()给value的属性添加getter、setter来实现响应式</li><li>一般用来处理基本数据类型，也能处理复杂数据类型，只不过内部会自动将对象转换为reactive的代理对象，在js中要加.value，在模版中不需要。</li></ul><p><strong>reactive</strong></p><p><code>reactive()</code> 返回的是一个原始对象的 <code>Proxy</code>，它和原始对象是不相等的, 想要达到响应式效果，需要操作代理对象。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> raw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> proxy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(raw);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 代理对象和原始对象不是全等的</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(proxy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> raw); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在同一个对象上调用 reactive() 会返回相同的代理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(raw) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> proxy); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在一个代理上调用 reactive() 会返回它自己</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(proxy) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> proxy); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="reactive-的局限性" tabindex="-1">reactive()的局限性？ <a class="header-anchor" href="#reactive-的局限性" aria-label="Permalink to &quot;reactive()的局限性？&quot;">​</a></h2><ol><li><p><strong>有限的值类型：</strong> 它只能用于对象类型 (对象、数组和如 Map、Set 这样的集合类型)。它不能持有如 string、number 或 boolean 这样的原始类型。</p></li><li><p><strong>不能替换整个对象：</strong> 由于 Vue 的响应式跟踪是通过属性访问实现的，因此我们必须始终保持对响应式对象的相同引用。这意味着我们不能轻易地“替换”响应式对象，因为这样的话与第一个引用的响应性连接将丢失：</p></li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> state </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ count: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 上面的 ({ count: 0 }) 引用将不再被追踪</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// (响应性连接已丢失！)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">state </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ count: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3"><li><strong>对解构操作不友好：</strong> 当我们将响应式对象的原始类型属性解构为本地变量时，或者将该属性传递给函数时，我们将丢失响应性连接：</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> state</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ count: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 当解构时，count 已经与 state.count 断开连接</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { count } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> state;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 不会影响原始的 state</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 该函数接收到的是一个普通的数字</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 并且无法追踪 state.count 的变化</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 我们必须传入整个对象以保持响应性</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">callSomeFunction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(state.count);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="操作-ref-变量时-为什么要加上-value" tabindex="-1">操作 ref 变量时，为什么要加上.value？ <a class="header-anchor" href="#操作-ref-变量时-为什么要加上-value" aria-label="Permalink to &quot;操作 ref 变量时，为什么要加上.value？&quot;">​</a></h2><h2 id="vue3有哪些常用的宏-函数" tabindex="-1">vue3有哪些常用的宏（函数）？ <a class="header-anchor" href="#vue3有哪些常用的宏-函数" aria-label="Permalink to &quot;vue3有哪些常用的宏（函数）？&quot;">​</a></h2><p>这些宏都是只能在 <code>&lt;script setup&gt;</code> 顶层中使用，不需要导入，且会随着 <code>&lt;script setup&gt;</code> 的处理过程一同被编译掉。</p><p><code>defineProps</code>: 接收父组件传过来的属性。 <code>defineEmits</code>: 由于是单向数据流，如果想要修改props中的数据，必须要通过emits通过自定义事件，让父组件去修改。 <code>defineModel</code>: 相当于 defineProps 和 defineEmits的语法糖，可以在子组件直接修改传过过来的变量，详细原理去看原理实现。 <code>defineExpose</code>: 由于vue3使用setup，父组件就 没有 vue2中那样，直接使用子组件的属性和方法。defineExpose宏函数来指定想要暴露出去的属性和方法。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> props</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  foo: String</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">watchEffect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 在 3.5 之前仅运行一次</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 在 3.5+ 版本中会在 &quot;foo&quot; prop 改变时重新运行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> emit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineEmits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;change&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;delete&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// setup 代码</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><code>defineModel</code>(仅在 3.4+ 中可用)</p><p>这个宏可以用来声明一个双向绑定 prop，通过父组件的 v-model 来使用。组件 v-model 指南中也讨论了示例用法。</p><h2 id="torefs-和-toref-工具函数的作用" tabindex="-1">toRefs() 和 toRef 工具函数的作用？ <a class="header-anchor" href="#torefs-和-toref-工具函数的作用" aria-label="Permalink to &quot;toRefs() 和 toRef 工具函数的作用？&quot;">​</a></h2><p>当组件使用<code>setup()</code>函数的时候，第一个参数是组件的<code>props</code>，和标准的组件一致，一个 <code>setup</code> 函数的 <code>props</code> 是响应式的，并且会在传入新的 <code>props</code> 时同步更新。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title: String,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(props.title);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,64),d=s(`<p>如果要解构并保持响应性，可以使用<code>toRefs()</code> 或 <code>toRef()</code>工具函数</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { toRefs, toRef } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 将 \`props\` 转为一个其中全是 ref 的对象，然后解构</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> toRefs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(props);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // \`title\` 是一个追踪着 \`props.title\` 的 ref</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(title.value);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 或者，将 \`props\` 的单个属性转为一个 ref</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> toRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(props, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="如何判断一个数据是否是响应式" tabindex="-1">如何判断一个数据是否是响应式？ <a class="header-anchor" href="#如何判断一个数据是否是响应式" aria-label="Permalink to &quot;如何判断一个数据是否是响应式？&quot;">​</a></h2><p><code>isRef</code>、 <code>isReactive</code>、 <code>isProxy</code></p><h2 id="最新的vue3-5版本中-父传子props可以直接解构" tabindex="-1">最新的vue3.5版本中，父传子props可以直接解构？ <a class="header-anchor" href="#最新的vue3-5版本中-父传子props可以直接解构" aria-label="Permalink to &quot;最新的vue3.5版本中，父传子props可以直接解构？&quot;">​</a></h2><p>无需使用<code>toRefs</code>即可直接解构</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">testCount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  testCount: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: number,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>无需使用<code>default</code> 设置<code>props</code>默认值</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">testCount</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  testCount: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: number,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="watch-和-watcheffect-的区别" tabindex="-1">watch 和 watchEffect 的区别？ <a class="header-anchor" href="#watch-和-watcheffect-的区别" aria-label="Permalink to &quot;watch 和 watchEffect 的区别？&quot;">​</a></h2><p><code>watch</code> 和 <code>watchEffect</code> 都是监听器，它们之间的区别有：</p><ul><li>watch：既要指明监听数据的源，也要指明监听的回调；</li><li>watchEffect：可以自动监听数据源作为依赖，不用指明监听那个数据，监听的回调中用到哪个数据，那就监听哪个数据；</li><li>watch 可以访问改变前后的值，watchEffect 只能获取改变后的值；</li><li>watch运行的时候 不会立即执行，值改变后才会执行，而watchEffect运行后可立即执行，这一点可以通过watch的配置项immeriate改变；</li></ul><h2 id="v-for-与-v-if-的优先级" tabindex="-1">v-for 与 v-if 的优先级？ <a class="header-anchor" href="#v-for-与-v-if-的优先级" aria-label="Permalink to &quot;v-for 与 v-if 的优先级？&quot;">​</a></h2><ul><li>vue2 中 v-for的优先级高，一起使用不会报错，但会爆警告</li><li>vue3 中 v-if的优先级高，一起使用会报错。</li></ul><h2 id="vue3怎么给组件设置name名字" tabindex="-1">Vue3怎么给组件设置name名字？ <a class="header-anchor" href="#vue3怎么给组件设置name名字" aria-label="Permalink to &quot;Vue3怎么给组件设置name名字？&quot;">​</a></h2><p>在script中设置 name</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Fans&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="如何监听vue报错" tabindex="-1">如何监听vue报错？ <a class="header-anchor" href="#如何监听vue报错" aria-label="Permalink to &quot;如何监听vue报错？&quot;">​</a></h2><h2 id="组件中如何引用本地图片" tabindex="-1">组件中如何引用本地图片？ <a class="header-anchor" href="#组件中如何引用本地图片" aria-label="Permalink to &quot;组件中如何引用本地图片？&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`../assets/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">img</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.url).href</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="shallowref与shallowreactive" tabindex="-1">shallowRef与shallowReactive？ <a class="header-anchor" href="#shallowref与shallowreactive" aria-label="Permalink to &quot;shallowRef与shallowReactive？&quot;">​</a></h2><p>shallowRef 是 ref() 的浅层作用形式。说白了就是把对象的第一层数据变成响应式的，深层的数据不会变成响应式的。</p><p>shallowRef 如果用来定义原始数据类型，那么它和 ref 是等同的。</p>`,23);function o(c,u,E,g,b,y){const i=e("font");return n(),l("div",null,[k,p(i,{color:"red"},{default:t(()=>[h("但是解构`props`会失去响应性")]),_:1}),d])}const F=a(r,[["render",o]]);export{v as __pageData,F as default};