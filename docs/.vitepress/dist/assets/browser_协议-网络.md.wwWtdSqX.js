import{_ as n,D as c,o as d,c as h,k as e,I as l,w as a,a as t,R as r}from"./chunks/framework.4hIqoSk1.js";const s="/larry-book-vite/assets/04.bA0Dp70p.png",i="/larry-book-vite/assets/05.08983YU1.png",p="/larry-book-vite/assets/06.LIkIA1Ed.png",$=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"browser/协议-网络.md","filePath":"browser/协议-网络.md","lastUpdated":1733279472000}'),u={name:"browser/协议-网络.md"},_=e("h2",{id:"什么是-http",tabindex:"-1"},[t("什么是 http？ "),e("a",{class:"header-anchor",href:"#什么是-http","aria-label":'Permalink to "什么是 http？"'},"​")],-1),T=r("<p><code>http</code> 是一种超文本传输协议，在 <code>OSI</code> 模型七层中的第七层<strong>应用层</strong>，也是建立在 <code>TCP/IP</code> 之上。和 <code>TCP/UDP</code> 协议类似，实际传输数据都需要附加一些<strong>头部数据</strong>。不过与 <code>TCP/UDP</code> 不同的是，它是一个“<strong>纯文本</strong>”的协议，所以头数据都是 <code>ASCII</code> 码的文本，可以很容易地用肉眼阅读，不用借助程序解析也能够看懂。我们现在最常用的是 <code>http1.1</code> 和 <code>http2</code> 版本。</p>",1),P=r('<ul><li><code>HTTP</code> 是灵活可扩展的，可以任意添加头字段实现任意功能；</li><li><code>HTTP</code> 是可靠传输协议，基于 <code>TCP/IP</code> 协议“<strong>尽量</strong>”保证数据的送达；</li><li><code>HTTP</code> 是应用层协议，比 FTP、SSH 等更通用功能更多，能够传输任意数据；</li><li><code>HTTP</code> 使用了<strong>请求 - 应答模式</strong>，客户端主动发起请求，服务器被动回复请求；</li><li><code>HTTP</code> 本质上是<strong>无状态</strong>的，每个请求都是互相独立、毫无关联的，协议不要求客户端或服务器记录请求相关的信息（可以借住 <code>cookie</code> 达到有状态的效果）</li></ul><h2 id="http-的短连接指的是什么" tabindex="-1">http 的短连接指的是什么？ <a class="header-anchor" href="#http-的短连接指的是什么" aria-label="Permalink to &quot;http 的短连接指的是什么？&quot;">​</a></h2><p><code>http1.1</code> 之前都是<strong>短连接</strong>，它底层的数据传输基于 <code>TCP/IP</code>，每次发送请求前需要先与服务器建立连接，收到响应报文后会立即关闭连接，频繁的打开和关闭链接服务器压力很大。</p><h2 id="http-的长连接指的是什么" tabindex="-1">http 的长连接指的是什么？ <a class="header-anchor" href="#http-的长连接指的是什么" aria-label="Permalink to &quot;http 的长连接指的是什么？&quot;">​</a></h2><p>在第一次请求建立链接后，不关闭。<code>HTTP/1.1</code> 中的连接都会<strong>默认</strong>启用长连接。不需要用什么特殊的头字段指定，只要向服务器发送了第一次请求，后续的请求都会重复利用第一次打开的 <code>TCP</code> 连接，也就是<strong>长连接</strong>，在这个连接上收发数据。如果服务器支持长连接，它总会在响应报文里放一个“<code>Connection: keep-alive</code>”字段。 报文头里如果有“<code>Connection: close</code>”就意味着长连接即将关闭；</p><p><strong>过多的长连接会占用服务器资源，所以服务器会用一些策略有选择地关闭长连接；(没研究过，估计也是 LRU 淘汰算法)</strong></p><h2 id="http-对头阻塞问题指的什么" tabindex="-1">http 对头阻塞问题指的什么？ <a class="header-anchor" href="#http-对头阻塞问题指的什么" aria-label="Permalink to &quot;http 对头阻塞问题指的什么？&quot;">​</a></h2><p><strong>“队头阻塞”</strong> 与短连接 和 长连接无关，而是由 HTTP 基本的 <strong>“请求 - 应答”</strong> 模型所导致的。因为 HTTP 规定报文必须是 <strong>“一发一收”</strong>，这就形成了一个先进先出的 <strong>“串行”</strong> 队列。队列里的请求没有轻重缓急的优先级，只有入队的先后顺序，排在最前面的请求被最优先处理。</p><p><strong>“队头阻塞”</strong> 问题会导致性能下降，可以用 <strong>“并发连接”</strong> 和 <strong>“域名分片”</strong> 技术缓解。</p><h2 id="http2-0-做了哪些改进-http3-0-呢" tabindex="-1">http2.0 做了哪些改进, http3.0 呢? <a class="header-anchor" href="#http2-0-做了哪些改进-http3-0-呢" aria-label="Permalink to &quot;http2.0 做了哪些改进, http3.0 呢?&quot;">​</a></h2><p><strong>概念：</strong></p><blockquote><p>http2 是 http1.1 的下一个版本。http2 对之前版本做了功能上的兼容，由于 HTTPS 已经在安全方面做的非常好了，所以 HTTP/2 的唯一目标就是改进性能。特别要说的是，与 HTTPS 不同，HTTP/2 没有在 URI 里引入新的协议名，仍然用“http”表示明文协议，用“https”表示加密协议。</p></blockquote><p>HTTP/2 的特性包括：</p>',13),f=e("br",null,null,-1),b=e("br",null,null,-1),g=e("br",null,null,-1),m=e("br",null,null,-1),C=e("p",null,"而 HTTP/3 则是基于 QUIC 协议的新一代 HTTP 协议。QUIC 是一个基于 UDP 的传输协议，具有以下特性：",-1),S=e("br",null,null,-1),q=e("br",null,null,-1),k=e("br",null,null,-1),x=r('<br><p>总结：HTTP/2 和 HTTP/3 都是在传输层进行的协议改进，HTTP/2 在 TCP 上引入了二进制分帧传输、多路复用、头部压缩和服务器推送等特性，而 HTTP/3 则是基于 UDP 的 QUIC 协议，引入了连接迁移、无队头阻塞、自定义拥塞控制和前向安全和前向纠错等新特性。</p><h2 id="http1-x-长链接-和-http2-多路复用图解对比。" tabindex="-1">http1.x 长链接 和 http2 多路复用图解对比。 <a class="header-anchor" href="#http1-x-长链接-和-http2-多路复用图解对比。" aria-label="Permalink to &quot;http1.x 长链接 和 http2 多路复用图解对比。&quot;">​</a></h2><p><img src="'+s+'" alt="http1.1"><img src="'+i+'" alt="http2"></p><h2 id="tcp-的三次握手" tabindex="-1">TCP 的三次握手？ <a class="header-anchor" href="#tcp-的三次握手" aria-label="Permalink to &quot;TCP 的三次握手？&quot;">​</a></h2><ol><li>客户端发送 SYN seq=0，状态变为 SYN_SENT</li><li>服务端发送 SYN seq=0 ack=1，状态变为 SYN_RCVD</li><li>客户端发送 seq=1 ack=1，两端状态都变成已建立连接状态</li></ol><h2 id="为什么-tcp-建立连接需要三次握手-不是两次或四次" tabindex="-1">为什么 TCP 建立连接需要三次握手，不是两次或四次? <a class="header-anchor" href="#为什么-tcp-建立连接需要三次握手-不是两次或四次" aria-label="Permalink to &quot;为什么 TCP 建立连接需要三次握手，不是两次或四次?&quot;">​</a></h2><p>三次是最少的安全次数，两次不安全，四次浪费资源； 参考文章：<a href="https://juejin.cn/post/6844903834708344840?searchId=2024021719035905F7961FC9ED3FF58FB9" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903834708344840?searchId=2024021719035905F7961FC9ED3FF58FB9</a></p><h2 id="为什么要四次挥手" tabindex="-1">为什么要四次挥手？ <a class="header-anchor" href="#为什么要四次挥手" aria-label="Permalink to &quot;为什么要四次挥手？&quot;">​</a></h2><p>那是因为握手的时候并没有数据传输，所以服务端的 <code>SYN</code> 和 <code>ACK</code> 报文可以一起发送，但是挥手的时候有数据在传输，所以 <code>ACK</code> 和 <code>FIN</code> 报文不能同时发送，需要分两步，所以会比握手多一步。</p><p>参考文章：<a href="https://juejin.cn/post/6844903834708344840?searchId=2024021719035905F7961FC9ED3FF58FB9" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903834708344840?searchId=2024021719035905F7961FC9ED3FF58FB9</a></p><h2 id="tcp-和-udp-的区别" tabindex="-1">TCP 和 UDP 的区别？ <a class="header-anchor" href="#tcp-和-udp-的区别" aria-label="Permalink to &quot;TCP 和 UDP 的区别？&quot;">​</a></h2><p>TCP 面向连接（如打电话要先拨号建立连接）提供可靠的服务，UDP 是无连接的，即发送数据之前不需要建立连接，UDP 尽最大努力交付，即不保证可靠交付。</p><h2 id="localhost-和-127-0-0-1-的区别" tabindex="-1">localhost 和 127.0.0.1 的区别？ <a class="header-anchor" href="#localhost-和-127-0-0-1-的区别" aria-label="Permalink to &quot;localhost 和 127.0.0.1 的区别？&quot;">​</a></h2><p><code>localhost</code>是本机域名，<code>127.0.0.1</code>是本机 IP 地址，本地系统 host 文件，会默认把<code>localhost</code>映射到<code>127.0.0.1</code>。</p><h2 id="什么是https" tabindex="-1">什么是https? <a class="header-anchor" href="#什么是https" aria-label="Permalink to &quot;什么是https?&quot;">​</a></h2><p>https并不是http的升级版本，HTTPS（HyperText Transfer Protocol Secure）是HTTP协议的安全版本，用于保护数据传输的安全性和完整性。在HTTPS中，通过使用SSL（Secure Socket Layer）或TLS（Transport Layer Security）协议来加密和解密通信数据，从而保证通信过程中数据不被窃取或篡改。</p><h2 id="https的工作原理" tabindex="-1">https的工作原理？ <a class="header-anchor" href="#https的工作原理" aria-label="Permalink to &quot;https的工作原理？&quot;">​</a></h2><ol><li>客户端发起HTTPS请求</li><li>服务端响应HTTPS请求，发送证书</li><li>客户端验证证书，生成会话密钥</li><li>客户端使用会话密钥加密请求数据</li><li>服务端使用会话密钥解密请求数据</li><li>服务端使用会话密钥加密响应数据</li><li>客户端使用会话密钥解密响应数据</li></ol><h2 id="http-和-https-的默认端口分别是什么" tabindex="-1">http 和 https 的默认端口分别是什么？ <a class="header-anchor" href="#http-和-https-的默认端口分别是什么" aria-label="Permalink to &quot;http 和 https 的默认端口分别是什么？&quot;">​</a></h2><p>http 是 80，https 是 443。</p><h2 id="http-和-https-的区别" tabindex="-1">http 和 https 的区别？ <a class="header-anchor" href="#http-和-https-的区别" aria-label="Permalink to &quot;http 和 https 的区别？&quot;">​</a></h2><p><a href="https://www.iamshuaidi.com/1926.html" target="_blank" rel="noreferrer">https://www.iamshuaidi.com/1926.html</a></p><p>1.数据传输安全：HTTPS使用SSL/TLS协议加密数据传输，保证数据传输的安全性和完整性。</p><p>2.认证用户和服务器：HTTPS使用数字证书对网站进行身份验证，防止中间人攻击。</p><p>3.搜索引擎排名更高：Google等搜索引擎在搜索排名时更倾向于优先考虑HTTPS站点。</p><h2 id="什么是-ssl-tls-协议" tabindex="-1">什么是 SSL/TLS 协议？ <a class="header-anchor" href="#什么是-ssl-tls-协议" aria-label="Permalink to &quot;什么是 SSL/TLS 协议？&quot;">​</a></h2><p><a href="https://www.iamshuaidi.com/1959.html" target="_blank" rel="noreferrer">https://www.iamshuaidi.com/1959.html</a></p><h2 id="什么是-uri-其结构是什么" tabindex="-1">什么是 URI，其结构是什么？ <a class="header-anchor" href="#什么是-uri-其结构是什么" aria-label="Permalink to &quot;什么是 URI，其结构是什么？&quot;">​</a></h2><p><strong>概念</strong>： 是用来唯一标记服务器上资源的一个字符串，通常也称为 <code>URL</code>；</p><p><strong>结构</strong>: 通常由 <code>scheme</code>、<code>host:port</code>、<code>path</code> 和 <code>query</code>、<code>hash</code> 等部分组成，有的可以省略；</p><p><img src="'+p+'" alt="URI结构图"></p><h2 id="域名等级划分有哪些" tabindex="-1">域名等级划分有哪些？ <a class="header-anchor" href="#域名等级划分有哪些" aria-label="Permalink to &quot;域名等级划分有哪些？&quot;">​</a></h2><h2 id="get-和-post-的区别" tabindex="-1">GET 和 POST 的区别？ <a class="header-anchor" href="#get-和-post-的区别" aria-label="Permalink to &quot;GET 和 POST 的区别？&quot;">​</a></h2><h2 id="http-常见的状态码有哪些" tabindex="-1">HTTP 常见的状态码有哪些？ <a class="header-anchor" href="#http-常见的状态码有哪些" aria-label="Permalink to &quot;HTTP 常见的状态码有哪些？&quot;">​</a></h2>',35),H=e("code",null,"1xx",-1),I=e("p",null,[e("strong",null,[t("2. "),e("code",null,"2xx"),t(" 类状态码表示服务器成功处理了客户端的请求，也是我们最愿意看到的状态。")])],-1),A=e("p",null,[e("strong",null,[t("3. "),e("code",null,"3xx"),t(" 类状态码表示客户端请求的资源发生了变动，需要客户端用新的 URL 重新发送请求获取资源，也就是重定向。")])],-1),U=e("li",null,[e("p",null,"301 和 302 都会在响应头里使用字段 Location，指明后续要跳转的 URL，浏览器会自动重定向新的 URL。")],-1),F=e("p",null,[e("strong",null,[t("4. "),e("code",null,"4xx"),t(" 类状态码表示客户端发送的报文有误，服务器无法处理，也就是错误码的含义。")])],-1),D=e("p",null,[e("strong",null,[t("5. "),e("code",null,"5xx"),t(" 类状态码表示客户端请求报文正确，但是服务器处理时内部发生了错误，属于服务器端的错误码。")])],-1),N=e("h2",{id:"http-常见字段有哪些",tabindex:"-1"},[t("HTTP 常见字段有哪些？ "),e("a",{class:"header-anchor",href:"#http-常见字段有哪些","aria-label":'Permalink to "HTTP 常见字段有哪些？"'},"​")],-1),E=e("code",null,"Content-Type: text/html; Charset=utf-8",-1),L=e("code",null,"Accept: */*",-1),w=e("code",null,"Content-Encoding: gzip",-1),R=e("code",null,"Accept-Encoding: gzip, deflate",-1),y=r('<h2 id="为什么利用多个域名来存储网站资源会更有效" tabindex="-1">为什么利用多个域名来存储网站资源会更有效？ <a class="header-anchor" href="#为什么利用多个域名来存储网站资源会更有效" aria-label="Permalink to &quot;为什么利用多个域名来存储网站资源会更有效？&quot;">​</a></h2><p>利用多个域名来存储网站资源可以带来以下好处：</p><ul><li>CDN 缓存更方便：内容分发网络（CDN）可以更轻松地缓存和分发位于不同域名下的资源，提高资源的访问速度和可用性。</li><li>突破浏览器并发限制：大多数浏览器对同一域名下的并发请求数量有限制，通过将资源分布在多个域名下，可以突破这一限制，同时发送更多的并发请求，加快页面加载速度。</li><li>节约 cookie 带宽：浏览器在每个请求中都会携带相应域名下的 cookie 信息，通过将资源分布在不同的域名下，可以减少对 cookie 的传输，节约带宽和提高性能。</li><li>节约主域名的连接数：浏览器对同一域名下的连接数也有限制，通过将资源请求分散到多个域名下，可以减少对主域名的连接数占用，提高页面的响应速度和并发处理能力。</li><li>防止不必要的安全问题：将静态资源与主要网站内容分离到不同的域名下，可以降低恶意攻击者利用资源加载过程中的安全漏洞对主站点进行攻击的风险。</li></ul><p>综上所述，通过利用多个域名来存储网站资源，可以提升网站的性能、安全性和用户体验。</p><h2 id="fetch-发送-2-次请求的原因" tabindex="-1">fetch 发送 2 次请求的原因？ <a class="header-anchor" href="#fetch-发送-2-次请求的原因" aria-label="Permalink to &quot;fetch 发送 2 次请求的原因？&quot;">​</a></h2><p>当使用 fetch 发送 POST 请求时，会先发送一个 OPTION 请求进行预检查，用来获知服务端是否允许该跨域请求，服务器确认允许之后会返回 204 状态码，表示允许该跨域请求，这时才发起实际的 HTTP 请求。在预检请求的返回中，服务器端也可以通知客户端，是否需要携带身份凭证（包括 Cookies 和 HTTP 认证相关数据）</p>',6);function V(v,B,O,j,Y,K){const o=c("font");return d(),h("div",null,[_,e("p",null,[e("strong",null,[l(o,{color:"blue"},{default:a(()=>[t("概念：")]),_:1})])]),T,e("p",null,[e("strong",null,[l(o,{color:"blue"},{default:a(()=>[t("特性：")]),_:1})])]),P,l(o,{color:"red"},{default:a(()=>[t("1. 二进制分帧传输：")]),_:1}),t(" 将请求和响应消息分割为多个二进制帧，可以并发地发送和处理，提高传输效率。"),f,l(o,{color:"red"},{default:a(()=>[t("2. 多路复用：")]),_:1}),t(" 在单个连接上可以同时发送多个请求和响应，避免了建立多个 TCP 连接的开销，提高并发性能。"),b,l(o,{color:"red"},{default:a(()=>[t("3. 头部压缩：")]),_:1}),t(" 使用 HPACK 算法对请求和响应的头部进行压缩，减少数据传输量，提高性能。"),g,l(o,{color:"red"},{default:a(()=>[t("4. 服务器推送：")]),_:1}),t(" 服务器可以主动推送与当前页面相关的资源，减少客户端的请求延迟。"),m,C,l(o,{color:"red"},{default:a(()=>[t("1. 连接迁移：")]),_:1}),t(" 支持在网络切换或设备漫游时无缝迁移连接，避免连接中断。"),S,l(o,{color:"red"},{default:a(()=>[t("2. 无队头阻塞：")]),_:1}),t(" 解决了 TCP 协议中的队头阻塞问题，可以同时发送多个请求和响应，提高并发性能。"),q,l(o,{color:"red"},{default:a(()=>[t("3. 自定义拥塞控制：")]),_:1}),t(" 使用独立的拥塞控制算法，适应不同网络条件下的流量控制和拥塞控制。"),k,l(o,{color:"red"},{default:a(()=>[t("4. 前向安全和前向纠错：")]),_:1}),t(" 支持端到端的加密和纠错机制，提高数据传输的安全性和可靠性。"),x,e("p",null,[e("strong",null,[t("1. "),H,t(" 类状态码属于"),l(o,{color:"blue"},{default:a(()=>[t("提示信息")]),_:1}),t("，是协议处理中的一种中间状态，实际用到的比较少。")])]),I,e("ul",null,[e("li",null,[l(o,{color:"red"},{default:a(()=>[t("「200 OK」")]),_:1}),t("是最常见的成功状态码，表示一切正常。如果是非 HEAD 请求，服务器返回的响应头都会有 body 数据。")]),e("li",null,[l(o,{color:"red"},{default:a(()=>[t("「204 No Content」")]),_:1}),t("也是常见的成功状态码，与 200 OK 基本相同，但响应头没有 body 数据。")]),e("li",null,[l(o,{color:"red"},{default:a(()=>[t("「206 Partial Content」")]),_:1}),t("是应用于 HTTP 分块下载或断点续传，表示响应返回的 body 数据并不是资源的全部，而是其中的一部分，也是服务器处理成功的状态。")])]),A,e("ul",null,[e("li",null,[l(o,{color:"red"},{default:a(()=>[t("「301 Moved Permanently」")]),_:1}),t("表示永久重定向，说明请求的资源已经不存在了，需改用新的 URL 再次访问。")]),e("li",null,[l(o,{color:"red"},{default:a(()=>[t("「302 Found」")]),_:1}),t("表示临时重定向，说明请求的资源还在，但暂时需要用另一个 URL 来访问。")]),U,e("li",null,[l(o,{color:"red"},{default:a(()=>[t("「304 Not Modified」")]),_:1}),t("不具有跳转的含义，表示资源未修改，重定向已存在的缓冲文件，也称缓存重定向，也就是告诉客户端可以继续使用缓存资源，用于缓存控制。")])]),F,e("ul",null,[e("li",null,[l(o,{color:"red"},{default:a(()=>[t("「400 Bad Request」")]),_:1}),t("表示客户端请求的报文有错误，但只是个笼统的错误。")]),e("li",null,[l(o,{color:"red"},{default:a(()=>[t("「403 Forbidden」")]),_:1}),t("表示服务器禁止访问资源，并不是客户端的请求出错。")]),e("li",null,[l(o,{color:"red"},{default:a(()=>[t("「404 Not Found」")]),_:1}),t("表示请求的资源在服务器上不存在或未找到，所以无法提供给客户端。")])]),D,e("ul",null,[e("li",null,[l(o,{color:"red"},{default:a(()=>[t("「500 Internal Server Error」")]),_:1}),t("与 400 类型，是个笼统通用的错误码，服务器发生了什么错误，我们并不知道。")]),e("li",null,[l(o,{color:"red"},{default:a(()=>[t("「501 Not Implemented」")]),_:1}),t("表示客户端请求的功能还不支持，类似“即将开业，敬请期待”的意思。")]),e("li",null,[l(o,{color:"red"},{default:a(()=>[t("「502 Bad Gateway」")]),_:1}),t("通常是服务器作为网关或代理时返回的错误码，表示服务器自身工作正常，访问后端服务器发生了错误。")]),e("li",null,[l(o,{color:"red"},{default:a(()=>[t("「503 Service Unavailable」")]),_:1}),t("表示服务器当前很忙，暂时无法响应客户端，类似“网络服务正忙，请稍后重试”的意思。")])]),N,e("ul",null,[e("li",null,[l(o,{color:"#800000"},{default:a(()=>[t("Content-Type: ")]),_:1}),t(" 字段用于服务器回应时，告诉客户端，本次数据是什么格式。"),E]),e("li",null,[l(o,{color:"#800000"},{default:a(()=>[t("Accpet: ")]),_:1}),t(" 同上，客户端请求的时候，可以使用 Accept 字段声明自己可以接受哪些数据格式。"),L]),e("li",null,[l(o,{color:"#808000"},{default:a(()=>[t("Content-Encoding: ")]),_:1}),t(" 字段说明数据的压缩方法。表示服务器返回的数据使用了什么压缩格式。"),w]),e("li",null,[l(o,{color:"#808000"},{default:a(()=>[t("Accept-Encoding: ")]),_:1}),t(" 同上，客户端在请求时，用 Accept-Encoding 字段说明自己可以接受哪些压缩方法。"),R]),e("li",null,[l(o,{color:"blue"},{default:a(()=>[t("Connection: ")]),_:1}),t(" 字段最常用于客户端要求服务器使用 HTTP 长连接 机制，以便其他请求复用。")]),e("li",null,[l(o,{color:"blue"},{default:a(()=>[t("User-Agent: ")]),_:1}),t(" 浏览器的身份标识字符串")]),e("li",null,[l(o,{color:"blue"},{default:a(()=>[t("Cookie: ")]),_:1}),t(" 服务器通过 Set-Cookie 设置的一个 HTTP 协议 Cookie")]),e("li",null,[l(o,{color:"blue"},{default:a(()=>[t("Cache-Control: ")]),_:1}),t(" 用来指定当前的请求/回复中的，是否使用缓存机制。")]),e("li",null,[l(o,{color:"blue"},{default:a(()=>[t("Authorization: ")]),_:1}),t(" 用于表示 HTTP 协议中需要认证资源的认证信息.")])]),y])}const z=n(u,[["render",V]]);export{$ as __pageData,z as default};
