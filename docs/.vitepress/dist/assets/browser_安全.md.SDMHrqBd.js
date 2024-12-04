import{_ as t,D as o,o as h,c as p,k as s,a as i,I as n,w as e,R as l}from"./chunks/framework.4hIqoSk1.js";const r="/larry-book-vite/assets/03.Enr43aVO.png",ps=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"browser/安全.md","filePath":"browser/安全.md","lastUpdated":1733279472000}'),d={name:"browser/安全.md"},k=s("h2",{id:"什么是同源策略",tabindex:"-1"},[i("什么是同源策略？ "),s("a",{class:"header-anchor",href:"#什么是同源策略","aria-label":'Permalink to "什么是同源策略？"'},"​")],-1),c=s("strong",null,"同源",-1),E=s("code",null,"DOM",-1),u=s("code",null," DOM",-1),g=s("strong",null,"安全策略",-1),_=s("strong",null,"同源策略",-1),y=s("strong",null,"同源策略",-1),b=s("code",null,"DOM",-1),F=s("strong",null,"页面数据",-1),m=s("strong",null,"网络通信",-1),S=s("code",null,"Web",-1),C=l('<p>具体就是：</p><ol><li><strong>DOM 层面：</strong> 同源策略限制了来自不同源的 <code>JavaScript</code> 脚本对当前 <code>DOM</code> 对象读和写的操作。</li><li><strong>数据层面：</strong> 同源策略限制了不同源的站点读取当前站点的 <code>Cookie</code>、<code>IndexDB</code>、<code>LocalStorage</code> 等数据。由于同源策略，我们依然无法通过第二个页面的 <code>opener</code> 来访问第一个页面中的 <code>Cookie</code>、<code>IndexDB</code> 或者 <code>LocalStorage</code> 等内容。</li><li><strong>网络层面：</strong> 同源策略限制了通过 <code>XMLHttpRequest</code> 等方式将站点的数据发送给不同源的站点。</li></ol><h2 id="有哪些跨域方式" tabindex="-1">有哪些跨域方式？ <a class="header-anchor" href="#有哪些跨域方式" aria-label="Permalink to &quot;有哪些跨域方式？&quot;">​</a></h2><p>很多种，大部分都不常用。</p>',4),f=l(`<p>利用<code>&lt;script&gt;</code> 标签不受跨域限制的特点，缺点是只能支持 <code>get</code> 请求</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建script标签</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置script标签的src属性，以问号传递参数，设置好回调函数callback名称</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插入到html文本中</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 调用回调函数，res参数就是获取的数据</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> jsonp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">params</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">reject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> script </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;script&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    window[callback] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      document.body.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(script);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> params) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      arr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">params</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    script.type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;text/javascript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    script.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}?callback=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">callback</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&amp;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">arr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    document.body.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(script);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,2),A=s("p",null,[s("code",null,"CORS"),i(" 是 w3c 指定的跨域方案，支持所有类型的请求；兼容性：ie 不能低于 ie 10")],-1),D=s("p",null,[s("code",null,"CORS"),i(" 跨域方案将所有请求划分为"),s("strong",null,"简单请求"),i(" 和 "),s("strong",null,"非简单请求（多次预请求 OPTIONS）"),i(" 两类，对其分别采用不同的处理方案, 需要")],-1),P=s("p",null,[i("跨域是浏览器的保护机制，如果绕过浏览器，使用代理服务器去请求目标服务器上的数据，就不会受跨域影响。因此前端可以通过脚手架或"),s("code",null,"webpack"),i("配置"),s("code",null,"devSever"),i("下的"),s("code",null,"proxy"),i("选项，将"),s("code",null,"/api"),i("开头的请求转发到真实服务器上。")],-1),B=s("p",null,[i("在生产环境下也可以使用"),s("code",null,"nginx"),i("配置反向代理来解决跨域。")],-1),T=l('<h2 id="cors为什么能保障安全-为什么只对复杂请求做预检-腾讯" tabindex="-1">CORS为什么能保障安全？为什么只对复杂请求做预检？（腾讯） <a class="header-anchor" href="#cors为什么能保障安全-为什么只对复杂请求做预检-腾讯" aria-label="Permalink to &quot;CORS为什么能保障安全？为什么只对复杂请求做预检？（腾讯）&quot;">​</a></h2><p>链接：<a href="https://segmentfault.com/a/1190000041643411" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000041643411</a></p><h2 id="什么是-xss-攻击-如何防范" tabindex="-1">什么是 XSS 攻击，如何防范？ <a class="header-anchor" href="#什么是-xss-攻击-如何防范" aria-label="Permalink to &quot;什么是 XSS 攻击，如何防范？&quot;">​</a></h2><p><a href="https://segmentfault.com/a/1190000041502688" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000041502688</a></p>',4),v=s("code",null,"Cross Site Scripting",-1),x=s("code",null,"CSS",-1),q=s("code",null,"XSS",-1),R=s("strong",null,"跨站脚本",-1),O=s("p",null,[s("code",null,"XSS"),i(" 攻击是指黑客往 "),s("code",null,"HTML"),i(" 文件中或者 "),s("code",null,"DOM"),i(" 中注入恶意脚本，从而在用户浏览页面时利用注入的恶意脚本对用户实施攻击的一种手段。例如 "),s("code",null,"document.cookie"),i("、"),s("code",null,"addEventListener"),i(" 监听用户输入、植入广告等。")],-1),X=s("code",null,"JavaScript",-1),w=s("code",null,"JavaScript",-1),I=s("code",null,"Cookie",-1),V=s("code",null,"Web",-1),M=s("code",null,"Web",-1),N=s("code",null,"XSS",-1),j=s("code",null,"Web",-1),W=s("code",null,"XSS",-1),$=s("code",null,"XSS",-1),L=s("code",null,"http://localhost:3000/?xss=<script>alert('你被xss攻击了')<\/script>",-1),H=s("code",null,"DOM",-1),J=s("code",null,"XSS",-1),z=s("code",null,"Web",-1),U=s("code",null,"HTML",-1),G=s("code",null,"WiFi",-1),K=s("code",null,"Web",-1),Q=s("code",null,"Web",-1),Y=l('<p><strong>XSS 防范：</strong></p><ul><li>服务器对输入的内容进行过滤或者转码</li><li>充分利用好 <code>CSP</code></li><li>使用 <code>HttpOnly</code> 来保护 <code>cookie</code> 信息：仅能通过 <code>http</code> 请求获取 <code>cookie</code>，不能通过 <code>dom</code> 获取</li><li>验证码</li></ul><h2 id="什么是-csrf-攻击-如何防范" tabindex="-1">什么是 CSRF 攻击，如何防范？ <a class="header-anchor" href="#什么是-csrf-攻击-如何防范" aria-label="Permalink to &quot;什么是 CSRF 攻击，如何防范？&quot;">​</a></h2><p><a href="https://segmentfault.com/a/1190000041509310" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000041509310</a></p>',4),Z=s("code",null,"CSRF",-1),ss=l(`<p><code>CSRF攻击流程：</code></p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/17/16e78e9679aac52d~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></p><p>上面描述了 <code>CSRF</code> 攻击的流程，其中受害者完成两个步骤：</p><ol><li>登录受信任网站 A ，并在本地生成保存 Cookie；</li><li>在不登出 A 情况下，访问病毒网站 B；</li></ol><p>可以理解为：<strong>若以上两个步骤没有都完成，则不会受到 CSRF 攻击。</strong></p><p><code>CSRF防范：</code></p><ul><li>使用 <code>cookie</code> 的<code>SameSite</code>（同战 <code>cookie</code>）属性（服务器在返回时设置 <code>set-cookie</code>）进行设置</li><li>通过请求头中的 <code>orgin</code> 和 <code>referer</code> 字段来验证来源站点</li><li><code>token</code><ul><li><code>token</code> 是最普遍的一种防御方法，后端先生成一个 <code>token</code> ，之后将此放在数据库中并发送给前端，那么前端发送请求时就会携带这个 <code>token</code> ，后端通过校验这个 <code>token</code> 和数据库中的 <code>token</code> 是否一致，以此来判断是否是本网站的请求。</li></ul></li><li>关键提交都使用验证码</li></ul><p><strong><code>XSS</code> 利用的是用户对指定网站的信任，<code>CSRF</code> 利用的是网站对用户网页浏览器的信任。</strong></p><h2 id="什么是-csp" tabindex="-1">什么是 CSP？ <a class="header-anchor" href="#什么是-csp" aria-label="Permalink to &quot;什么是 CSP？&quot;">​</a></h2><p><strong>CSP</strong>： 是<code>内容安全策略</code>，是为了降低 <code>XSS</code> 攻击的一种手段，<code>CSP</code> 的核心思想是让服务器决定浏览器能够加载哪些资源，等同于提供<code>白名单</code>。它的实现和执行全部由浏览器完成，开发者只需提供配置。<code>CSP</code> 大大增强了网页的安全性。攻击者即使发现了漏洞，也没法注入脚本，除非还控制了一台列入了白名单的可信主机。</p><p><strong>启用 CSP</strong>：设置 <code>HTTP</code> 头信息的 <code>Content-Security-Policy</code> 的字段</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 限制所有的外部资源，都只能从当前域名加载</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Content</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Security</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Policy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">default-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">src </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;self&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// default-src 是 CSP 指令，多个指令之间用英文分号分割；多个指令值用英文空格分割</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Content</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Security</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Policy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">default-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">src </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//host1.com https://host2.com; script-src  https://xxx.com; frame-src &#39;none&#39;; object-src &#39;none&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="cookie的samesite-和-sameparty-腾讯" tabindex="-1">Cookie的SameSite 和 SameParty？（腾讯） <a class="header-anchor" href="#cookie的samesite-和-sameparty-腾讯" aria-label="Permalink to &quot;Cookie的SameSite 和 SameParty？（腾讯）&quot;">​</a></h2><p><a href="https://segmentfault.com/a/1190000041714393" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000041714393</a></p><h2 id="浏览器安全沙箱是什么" tabindex="-1">浏览器安全沙箱是什么？ <a class="header-anchor" href="#浏览器安全沙箱是什么" aria-label="Permalink to &quot;浏览器安全沙箱是什么？&quot;">​</a></h2><p>在单进程浏览器时代，如果浏览器进程中某一个环节出了问题或者漏洞都会影响到操作系统的安全。</p><p>由于渲染进程需要执行 <code>DOM</code> 解析、<code>CSS</code> 解析、网络图片解码等操作，如果渲染进程中存在系统级别的漏洞，那么以上操作就有可能让恶意的站点获取到渲染进程的控制权限，进而又获取操作系统的控制权限，这对于用户来说是非常危险的。</p><p>将<strong>渲染进程</strong> 和 <strong>操作系统</strong> 隔离的这道墙就是 <strong>安全沙箱</strong>. 进程之间的通信通过 <code>IPC</code></p><p><img src="`+r+'" alt="安全沙箱"></p><h2 id="什么是站点隔离-它有什么作用" tabindex="-1">什么是站点隔离？它有什么作用？ <a class="header-anchor" href="#什么是站点隔离-它有什么作用" aria-label="Permalink to &quot;什么是站点隔离？它有什么作用？&quot;">​</a></h2><p>所谓站点隔离是指 <code>Chrome</code> 将同一站点（包含了相同根域名和相同协议的地址）中相互关联的页面放到同一个<strong>渲染进程</strong>中执行。</p><h2 id="为什么浏览器设计成站点隔离-而不是同源策略的源隔离" tabindex="-1">为什么浏览器设计成站点隔离，而不是同源策略的源隔离？ <a class="header-anchor" href="#为什么浏览器设计成站点隔离-而不是同源策略的源隔离" aria-label="Permalink to &quot;为什么浏览器设计成站点隔离，而不是同源策略的源隔离？&quot;">​</a></h2><h2 id="跨站和跨域有什么区别-跨域的应用一定跨站吗" tabindex="-1">跨站和跨域有什么区别？跨域的应用一定跨站吗？ <a class="header-anchor" href="#跨站和跨域有什么区别-跨域的应用一定跨站吗" aria-label="Permalink to &quot;跨站和跨域有什么区别？跨域的应用一定跨站吗？&quot;">​</a></h2><h2 id="多个跨站的-web-应用处于同一个-renderer-进程会有什么安全风险" tabindex="-1">多个跨站的 Web 应用处于同一个 Renderer 进程会有什么安全风险？ <a class="header-anchor" href="#多个跨站的-web-应用处于同一个-renderer-进程会有什么安全风险" aria-label="Permalink to &quot;多个跨站的 Web 应用处于同一个 Renderer 进程会有什么安全风险？&quot;">​</a></h2>',24);function is(as,ns,es,ls,ts,os){const a=o("font");return h(),p("div",null,[k,s("p",null,[i("即"),n(a,{color:"red"},{default:e(()=>[i("协议、域名、端口")]),_:1}),i("都相同称之为"),c,i("，浏览器默认两个相同的源之间是可以相互访问资源和操作 "),E,i(" 的。两个不同的源之间若想要相互访问资源或者操作"),u,i("，那么会有一套基础的"),g,i("的制约，我们把这称为"),_,i("。"),y,i("会隔离不同源的 "),b,i("、"),F,i("和"),m,i("，进而实现 "),S,i(" 页面的安全性。")]),C,s("p",null,[s("strong",null,[n(a,{color:"blue"},{default:e(()=>[i("JSONP")]),_:1})])]),f,s("p",null,[s("strong",null,[n(a,{color:"blue"},{default:e(()=>[i("CORS")]),_:1})])]),A,D,s("p",null,[s("strong",null,[n(a,{color:"blue"},{default:e(()=>[i("反向代理")]),_:1})])]),P,B,s("p",null,[s("strong",null,[n(a,{color:"blue"},{default:e(()=>[i("postMessage")]),_:1})])]),T,s("p",null,[s("strong",null,[n(a,{color:"red"},{default:e(()=>[i("XSS")]),_:1})]),i(" 全称是 "),v,i("，为了与“"),x,i("”区分开来，故简称 "),q,i("，翻译过来就是“"),R,i("”。")]),O,s("ul",null,[s("li",null,[s("p",null,[s("strong",null,[n(a,{color:"red"},{default:e(()=>[i("存储型 XSS 攻击")]),_:1})]),i(": 利用站点漏洞将一段恶意 "),X,i(" 代码提交到网站的数据库中，然后用户向网站请求包含了恶意 "),w,i(" 脚本的页面，当用户浏览该页面的时候，恶意脚本就会将用户的 "),I,i(" 信息等数据上传到服务器。")])]),s("li",null,[s("p",null,[s("strong",null,[n(a,{color:"red"},{default:e(()=>[i("反射性 XSS 攻击")]),_:1})]),i(": 将一段含有恶意代码的请求提交给 "),V,i(" 服务器，"),M,i(" 服务器接收到请求时，又将恶意代码反射给了浏览器端，这就是反射型 "),N,i(" 攻击。例如："),n(a,{color:"red"},{default:e(()=>[i("诱导用户点击恶意链接")]),_:1}),i("等。"),j,i(" 服务器不会存储反射型 "),W,i(" 攻击的恶意脚本，这是和存储型 "),$,i(" 攻击不同的地方。 "),L])]),s("li",null,[s("p",null,[s("strong",null,[n(a,{color:"red"},{default:e(()=>[i("基于 DOM 的 XSS 攻击")]),_:1})]),i(": 基于 "),H,i(" 的 "),J,i(" 攻击是不牵涉到页面 "),z,i(" 服务器的,具体来讲，黑客通过各种手段将恶意脚本注入用户的页面中，比如通过网络劫持在页面传输过程中修改 "),U,i(" 页面的内容，这种劫持类型很多，有通过 "),G,i(" 路由器劫持的，有通过本地恶意软件来劫持的，它们的共同点是在 "),K,i(" 资源传输过程或者在用户使用页面的过程中修改 "),Q,i(" 页面的数据。")])])]),Y,s("p",null,[s("strong",null,[n(a,{color:"red"},{default:e(()=>[i("CSRF(跨站请求伪造)")]),_:1})]),i(", "),Z,i(" 攻击就是黑客利用了用户的登录状态，并通过第三方的站点来做一些坏事。")]),ss])}const rs=t(d,[["render",is]]);export{ps as __pageData,rs as default};
