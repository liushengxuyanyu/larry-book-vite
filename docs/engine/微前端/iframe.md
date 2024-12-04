
## 什么情况下浏览器会给标签页（iframe）分配不同的 Renderer 进程？

- iframe 嵌入的<font color="red">跨站应用</font>，会分配到一个新的 Renderer 进程。

- iframe 嵌入的<font color="red">同站应用</font>，不会分配新的 Renderer 进程。

## 在微前端中如何识别微应用是在 iframe 中打开？

## iframe 和浏览上下文存在什么关系？

## iframe 中 主子应用 Cookie 是共享的么？

主子应用同域：可以携带和共享 Cookie，存在同名属性值被微应用覆盖的风险

主子应用跨域同站：默认主子应用无法共享 Cookie，可以通过设置 Domain 使得主子应用进行 Cookie 共享

主子应用跨站：子应用默认无法携带 Cookie（防止 CSRF 攻击），需要使用 HTTPS 协议并设置服务端 Cookie 的 SameSite 和 Secure 设置才行，并且子应用无法和主应用形成 Cookie 共享

## 微前端 NPM 方案有什么优点和缺点？

**缺点**

- NPM 包形式的微应用发布后，往往需要主应用升级相应 NPM 版本依赖并进行构建处理
- 主应用和各个微应用的全局变量会产生属性冲突
- 主应用和各个微应用的 CSS 样式会产生冲突

## 微前端 NPM 方案适用于哪些业务场景？

## 如何解决在主应用中实时调试微应用 NPM 包的源码问题？

## 什么是 Web Components?

## 微前端中的 Web Components 方案如何实现？