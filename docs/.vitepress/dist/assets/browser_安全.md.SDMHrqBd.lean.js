import{_ as t,D as o,o as h,c as p,k as s,a as i,I as n,w as e,R as l}from"./chunks/framework.4hIqoSk1.js";const r="/larry-book-vite/assets/03.Enr43aVO.png",ps=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"browser/安全.md","filePath":"browser/安全.md","lastUpdated":1733279472000}'),d={name:"browser/安全.md"},k=s("h2",{id:"什么是同源策略",tabindex:"-1"},[i("什么是同源策略？ "),s("a",{class:"header-anchor",href:"#什么是同源策略","aria-label":'Permalink to "什么是同源策略？"'},"​")],-1),c=s("strong",null,"同源",-1),E=s("code",null,"DOM",-1),u=s("code",null," DOM",-1),g=s("strong",null,"安全策略",-1),_=s("strong",null,"同源策略",-1),y=s("strong",null,"同源策略",-1),b=s("code",null,"DOM",-1),F=s("strong",null,"页面数据",-1),m=s("strong",null,"网络通信",-1),S=s("code",null,"Web",-1),C=l("",4),f=l("",2),A=s("p",null,[s("code",null,"CORS"),i(" 是 w3c 指定的跨域方案，支持所有类型的请求；兼容性：ie 不能低于 ie 10")],-1),D=s("p",null,[s("code",null,"CORS"),i(" 跨域方案将所有请求划分为"),s("strong",null,"简单请求"),i(" 和 "),s("strong",null,"非简单请求（多次预请求 OPTIONS）"),i(" 两类，对其分别采用不同的处理方案, 需要")],-1),P=s("p",null,[i("跨域是浏览器的保护机制，如果绕过浏览器，使用代理服务器去请求目标服务器上的数据，就不会受跨域影响。因此前端可以通过脚手架或"),s("code",null,"webpack"),i("配置"),s("code",null,"devSever"),i("下的"),s("code",null,"proxy"),i("选项，将"),s("code",null,"/api"),i("开头的请求转发到真实服务器上。")],-1),B=s("p",null,[i("在生产环境下也可以使用"),s("code",null,"nginx"),i("配置反向代理来解决跨域。")],-1),T=l("",4),v=s("code",null,"Cross Site Scripting",-1),x=s("code",null,"CSS",-1),q=s("code",null,"XSS",-1),R=s("strong",null,"跨站脚本",-1),O=s("p",null,[s("code",null,"XSS"),i(" 攻击是指黑客往 "),s("code",null,"HTML"),i(" 文件中或者 "),s("code",null,"DOM"),i(" 中注入恶意脚本，从而在用户浏览页面时利用注入的恶意脚本对用户实施攻击的一种手段。例如 "),s("code",null,"document.cookie"),i("、"),s("code",null,"addEventListener"),i(" 监听用户输入、植入广告等。")],-1),X=s("code",null,"JavaScript",-1),w=s("code",null,"JavaScript",-1),I=s("code",null,"Cookie",-1),V=s("code",null,"Web",-1),M=s("code",null,"Web",-1),N=s("code",null,"XSS",-1),j=s("code",null,"Web",-1),W=s("code",null,"XSS",-1),$=s("code",null,"XSS",-1),L=s("code",null,"http://localhost:3000/?xss=<script>alert('你被xss攻击了')<\/script>",-1),H=s("code",null,"DOM",-1),J=s("code",null,"XSS",-1),z=s("code",null,"Web",-1),U=s("code",null,"HTML",-1),G=s("code",null,"WiFi",-1),K=s("code",null,"Web",-1),Q=s("code",null,"Web",-1),Y=l("",4),Z=s("code",null,"CSRF",-1),ss=l("",24);function is(as,ns,es,ls,ts,os){const a=o("font");return h(),p("div",null,[k,s("p",null,[i("即"),n(a,{color:"red"},{default:e(()=>[i("协议、域名、端口")]),_:1}),i("都相同称之为"),c,i("，浏览器默认两个相同的源之间是可以相互访问资源和操作 "),E,i(" 的。两个不同的源之间若想要相互访问资源或者操作"),u,i("，那么会有一套基础的"),g,i("的制约，我们把这称为"),_,i("。"),y,i("会隔离不同源的 "),b,i("、"),F,i("和"),m,i("，进而实现 "),S,i(" 页面的安全性。")]),C,s("p",null,[s("strong",null,[n(a,{color:"blue"},{default:e(()=>[i("JSONP")]),_:1})])]),f,s("p",null,[s("strong",null,[n(a,{color:"blue"},{default:e(()=>[i("CORS")]),_:1})])]),A,D,s("p",null,[s("strong",null,[n(a,{color:"blue"},{default:e(()=>[i("反向代理")]),_:1})])]),P,B,s("p",null,[s("strong",null,[n(a,{color:"blue"},{default:e(()=>[i("postMessage")]),_:1})])]),T,s("p",null,[s("strong",null,[n(a,{color:"red"},{default:e(()=>[i("XSS")]),_:1})]),i(" 全称是 "),v,i("，为了与“"),x,i("”区分开来，故简称 "),q,i("，翻译过来就是“"),R,i("”。")]),O,s("ul",null,[s("li",null,[s("p",null,[s("strong",null,[n(a,{color:"red"},{default:e(()=>[i("存储型 XSS 攻击")]),_:1})]),i(": 利用站点漏洞将一段恶意 "),X,i(" 代码提交到网站的数据库中，然后用户向网站请求包含了恶意 "),w,i(" 脚本的页面，当用户浏览该页面的时候，恶意脚本就会将用户的 "),I,i(" 信息等数据上传到服务器。")])]),s("li",null,[s("p",null,[s("strong",null,[n(a,{color:"red"},{default:e(()=>[i("反射性 XSS 攻击")]),_:1})]),i(": 将一段含有恶意代码的请求提交给 "),V,i(" 服务器，"),M,i(" 服务器接收到请求时，又将恶意代码反射给了浏览器端，这就是反射型 "),N,i(" 攻击。例如："),n(a,{color:"red"},{default:e(()=>[i("诱导用户点击恶意链接")]),_:1}),i("等。"),j,i(" 服务器不会存储反射型 "),W,i(" 攻击的恶意脚本，这是和存储型 "),$,i(" 攻击不同的地方。 "),L])]),s("li",null,[s("p",null,[s("strong",null,[n(a,{color:"red"},{default:e(()=>[i("基于 DOM 的 XSS 攻击")]),_:1})]),i(": 基于 "),H,i(" 的 "),J,i(" 攻击是不牵涉到页面 "),z,i(" 服务器的,具体来讲，黑客通过各种手段将恶意脚本注入用户的页面中，比如通过网络劫持在页面传输过程中修改 "),U,i(" 页面的内容，这种劫持类型很多，有通过 "),G,i(" 路由器劫持的，有通过本地恶意软件来劫持的，它们的共同点是在 "),K,i(" 资源传输过程或者在用户使用页面的过程中修改 "),Q,i(" 页面的数据。")])])]),Y,s("p",null,[s("strong",null,[n(a,{color:"red"},{default:e(()=>[i("CSRF(跨站请求伪造)")]),_:1})]),i(", "),Z,i(" 攻击就是黑客利用了用户的登录状态，并通过第三方的站点来做一些坏事。")]),ss])}const rs=t(d,[["render",is]]);export{ps as __pageData,rs as default};
