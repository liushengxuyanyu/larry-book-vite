import{_ as n,D as o,o as r,c as p,I as t,w as s,R as i,k as e,a as l}from"./chunks/framework.4hIqoSk1.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"engine/babel/ast.md","filePath":"engine/babel/ast.md","lastUpdated":1716781226000}'),c={name:"engine/babel/ast.md"},d=i('<p><a href="https://juejin.cn/post/6844903798347939853#heading-0" target="_blank" rel="noreferrer">参考文章</a></p><h2 id="ast-是什么" tabindex="-1">AST 是什么？ <a class="header-anchor" href="#ast-是什么" aria-label="Permalink to &quot;AST 是什么？&quot;">​</a></h2><p>抽象语法树 (Abstract Syntax Tree)，简称 AST，它是源代码语法结构的一种抽象表示。它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。</p><h2 id="ast-的作用" tabindex="-1">AST 的作用？ <a class="header-anchor" href="#ast-的作用" aria-label="Permalink to &quot;AST 的作用？&quot;">​</a></h2>',4),u=e("ul",null,[e("li",null,[e("p",null,"Babel，将 ES6 JavaScript 转化为 ES5 JavaScript。")]),e("li",null,[e("p",null,"TypeScript，将 TypeScript 转化为 JavaScript。")]),e("li",null,[e("p",null,"Sass，将 Sass 转化为 CSS。")])],-1),h=e("ul",null,[e("li",null,[e("p",null,"Prettier，代码美化，风格格式化。")]),e("li",null,[e("p",null,"ESLint, 修复语法错误。")]),e("li",null,[e("p",null,"uglifyJS，代码压缩，混淆。")]),e("li",null,[e("p",null,"@vue/compiler-dom，可以将 Vue 文件代码拆分成 template、script、style 三种代码类型片段。")])],-1),_=i('<ul><li><p>ESLint，代码语法检查。</p></li><li><p>Webpack，代码模块打包分析。</p></li></ul><h2 id="ast-如何生成" tabindex="-1">AST 如何生成？ <a class="header-anchor" href="#ast-如何生成" aria-label="Permalink to &quot;AST 如何生成？&quot;">​</a></h2><p>两个步骤：</p><ul><li><p><strong>词法分析：</strong> 将输入的源代码字符串，生成一系列词法单元 (Tokens)，这些词法单元包括数字，标点符号，运算符等，这些词法单元之间都是独立的。</p></li><li><p><strong>语法分析：</strong> 将词法分析出来的 Token 按照不同的语法结构如声明语句、赋值表达式等转化成有语法含义的抽象语法树结构。</p></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> iceman</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;good boy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>const iceman = &#39;good boy&#39;; </code>上面这一段源代码字符串，先把它按照单词的构成规则分成一个个不能再细分的单词（Token），也就是 <code>const</code>、<code>iceman</code>、<code>=</code>、 <code>&#39;good boy&#39;</code>，这个过程是词法分析。之后把 Tokens 按照声明语句、赋值表达式的语法结构如进行递归组装，生成 AST 对象，这个过程是语法分析。</p><h2 id="常见的编译器有哪些" tabindex="-1">常见的编译器有哪些？ <a class="header-anchor" href="#常见的编译器有哪些" aria-label="Permalink to &quot;常见的编译器有哪些？&quot;">​</a></h2><ul><li><p><strong>JS Parser：</strong> esprima、 acorn、 espree、@babel/parser。</p></li><li><p><strong>TS Parser：</strong> typescript</p></li></ul>',8);function b(S,k,g,T,m,f){const a=o("font");return r(),p("div",null,[d,t(a,{color:"blue"},{default:s(()=>[l("代码编译")]),_:1}),u,t(a,{color:"blue"},{default:s(()=>[l("代码加工")]),_:1}),h,t(a,{color:"blue"},{default:s(()=>[l("代码分析")]),_:1}),_])}const v=n(c,[["render",b]]);export{y as __pageData,v as default};
