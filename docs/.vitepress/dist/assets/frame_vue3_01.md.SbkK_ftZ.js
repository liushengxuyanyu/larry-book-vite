import{_ as e,o as a,c as s,R as i}from"./chunks/framework.CP3Xps-Z.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frame/vue3/01.md","filePath":"frame/vue3/01.md","lastUpdated":1702988788000}'),t={name:"frame/vue3/01.md"},n=i(`<h2 id="如何创建一个-vue3-应用" tabindex="-1">如何创建一个 Vue3 应用？ <a class="header-anchor" href="#如何创建一个-vue3-应用" aria-label="Permalink to &quot;如何创建一个 Vue3 应用？&quot;">​</a></h2><details class="details custom-block"><summary>查看答案</summary><ol><li>使用 <code>create-vue</code> (推荐) 是基于 <code>Vite</code>构建工具的。 <blockquote><p>前置条件 - 已安装 16.0 或更高版本的 Node.js</p></blockquote></li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> npm create vue@latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>注意：<code>create-vite</code> 是 Vite 构建工具自己的脚手架，支持创建 vue、react 以及其他多个应用</strong></p><p>这一指令将会安装并执行 <code>create-vue</code>，它是 <code>Vue</code> 官方的项目脚手架工具。<code>create-vue</code> ，脚手架会有 Vue3 生态 以及<code>TS</code>、<code>ESLint</code>等支持。</p><ol start="2"><li>使用 <code>vue-cli</code> 基于 <code>webpack</code> 的脚手架 (现在处于维护状态，除非团队强依赖<code>webpack</code>, 否则不推荐)</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 全局安装 安装新版的脚手架工具</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> npm install -g @vue/cli</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vue create my-app</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>其他：非脚手架，自行基于构建工具搭建 <code>Vue3</code> 应用</p></details><h2 id="vue3-有哪些新特性" tabindex="-1">Vue3 有哪些新特性？ <a class="header-anchor" href="#vue3-有哪些新特性" aria-label="Permalink to &quot;Vue3 有哪些新特性？&quot;">​</a></h2><h2 id="ref-和-reactive-的区别" tabindex="-1">ref 和 reactive 的区别？ <a class="header-anchor" href="#ref-和-reactive-的区别" aria-label="Permalink to &quot;ref 和 reactive 的区别？&quot;">​</a></h2><h2 id="watch-和-watcheffect-的区别" tabindex="-1">watch 和 watchEffect 的区别？ <a class="header-anchor" href="#watch-和-watcheffect-的区别" aria-label="Permalink to &quot;watch 和 watchEffect 的区别？&quot;">​</a></h2><h2 id="vue3-性能提升主要体现在哪些方面" tabindex="-1">Vue3 性能提升主要体现在哪些方面？ <a class="header-anchor" href="#vue3-性能提升主要体现在哪些方面" aria-label="Permalink to &quot;Vue3 性能提升主要体现在哪些方面？&quot;">​</a></h2><h2 id="组合式-api-和-选项是-api-有什么不同" tabindex="-1">组合式 Api 和 选项是 Api 有什么不同？ <a class="header-anchor" href="#组合式-api-和-选项是-api-有什么不同" aria-label="Permalink to &quot;组合式 Api 和 选项是 Api 有什么不同？&quot;">​</a></h2>`,7),c=[n];function l(r,o,d,p,h,u){return a(),s("div",null,c)}const m=e(t,[["render",l]]);export{b as __pageData,m as default};
