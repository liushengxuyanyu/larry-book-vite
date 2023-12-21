import{_ as t,D as o,o as r,c as d,k as s,I as l,w as n,a as e,R as i}from"./chunks/framework.CP3Xps-Z.js";const p="/assets/lifecycle.U4Y4AfvC.png",H=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frame/vue2/lifeCycle.md","filePath":"frame/vue2/lifeCycle.md","lastUpdated":1702547996000}'),c={name:"frame/vue2/lifeCycle.md"},h=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"提示"),s("p",null,"生命周期相关专题 训练")],-1),u=s("h2",{id:"vue-的生命周期-钩子",tabindex:"-1"},[e("Vue 的生命周期(钩子)? "),s("a",{class:"header-anchor",href:"#vue-的生命周期-钩子","aria-label":'Permalink to "Vue 的生命周期(钩子)?"'},"​")],-1),k={class:"details custom-block"},g=s("summary",null,"查看答案",-1),_=i("",8),E=i("",9),m=s("ol",{start:"9"},[s("li",null,[s("strong",null,"beforeDestroy"),e(":")])],-1),b=s("p",null,"组件实例销毁之前调用，在这里依然能够获取到数据。",-1),y=s("ol",{start:"10"},[s("li",null,[s("strong",null,"destroyed"),e(":")])],-1),f=s("p",null,"组件实例销毁后调用，对应的所有指令、事件将会被解绑，所有子组件实例也会被销毁",-1),C=s("ol",{start:"11"},[s("li",null,[s("strong",null,"errorCaptured(2.5.0+ 新增)"),e(":")])],-1),v=s("p",null,"在捕获一个来自后代组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播。",-1),F=s("blockquote",null,[s("p",null,[s("strong",null,"完整生命周期图，生命周期很重点。完全理解了 vue 的生命周期，就知道运转流程。会规避很多错误。")])],-1),D=s("p",null,[s("img",{src:p,alt:""})],-1),A=i("",5),B={class:"details custom-block"},q=s("summary",null,"查看答案",-1),T=s("p",null,[e("可以在钩子函数 "),s("strong",null,"created、beforeMount、mounted"),e(" 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。")],-1),V=s("ol",null,[s("li",null,"能更快获取到服务端数据，减少页面 loading 时间"),s("li",null,[s("strong",null,"SSR"),e(" 不支持 "),s("strong",null,"beforeMount"),e("、"),s("strong",null,"mounted"),e(" 钩子函数，所以放在 "),s("strong",null,"created"),e(" 中有助于一致性")])],-1),P=s("h2",{id:"vue-父子组件生命周期流程",tabindex:"-1"},[e("Vue 父子组件生命周期流程？ "),s("a",{class:"header-anchor",href:"#vue-父子组件生命周期流程","aria-label":'Permalink to "Vue 父子组件生命周期流程？"'},"​")],-1),S={class:"details custom-block"},M=s("summary",null,"查看答案",-1),x=s("p",null,[s("strong",null,"渲染挂载过程：")],-1),$=s("p",null,[s("strong",null,"子组件更新过程：")],-1),O=s("p",null,[s("strong",null,"父组件更新过程：")],-1),I=s("p",null,[s("strong",null,"销毁过程：")],-1),N=i("",4);function j(w,R,U,J,Y,z){const a=o("font");return r(),d("div",null,[h,u,s("details",k,[g,s("p",null,[s("strong",null,[l(a,{style:{color:"red"}},{default:n(()=>[e("---------------创建阶段--------------")]),_:1})])]),_,s("p",null,[s("strong",null,[l(a,{style:{color:"red"}},{default:n(()=>[e("---------------运行阶段--------------")]),_:1})])]),E,s("p",null,[s("strong",null,[l(a,{style:{color:"red"}},{default:n(()=>[e("---------------销毁阶段--------------")]),_:1})])]),m,b,y,f,s("p",null,[s("strong",null,[l(a,{style:{color:"red"}},{default:n(()=>[e("---------------捕获组件错误--------------")]),_:1})])]),C,v,F,D]),A,s("details",B,[q,T,s("p",null,[e("但是推荐在 "),s("strong",null,[l(a,{color:"red"},{default:n(()=>[e("created")]),_:1})]),e(" 钩子函数中调用异步请求，因为在 "),s("strong",null,[l(a,{color:"red"},{default:n(()=>[e("created")]),_:1})]),e(" 钩子函数中调用异步请求有以下优点：")]),V]),P,s("details",S,[M,s("p",null,[s("strong",null,[l(a,{color:"red"},{default:n(()=>[e("父子组件的生命周期是一个嵌套的过程。")]),_:1})])]),x,s("blockquote",null,[l(a,{color:"red"},{default:n(()=>[e("父 beforeCreate")]),_:1}),e(" -> "),l(a,{color:"red"},{default:n(()=>[e("父 created")]),_:1}),e(" -> "),l(a,{color:"red"},{default:n(()=>[e("父 beforeMount")]),_:1}),e(" -> "),l(a,{color:"blue"},{default:n(()=>[e("子 beforeCreate")]),_:1}),e(" -> "),l(a,{color:"blue"},{default:n(()=>[e("子 created")]),_:1}),e(" -> "),l(a,{color:"font"},{default:n(()=>[e("子 beforeMount")]),_:1}),e(" -> "),l(a,{color:"blue"},{default:n(()=>[e("子 mounted")]),_:1}),e(" -> "),l(a,{color:"red"},{default:n(()=>[e("父 mounted")]),_:1})]),$,s("blockquote",null,[l(a,{color:"red"},{default:n(()=>[e("父 beforeUpdate")]),_:1}),e(" -> "),l(a,{color:"blue"},{default:n(()=>[e("子 beforeUpdate")]),_:1}),e(" -> "),l(a,{color:"blue"},{default:n(()=>[e("子 updated")]),_:1}),e(" -> "),l(a,{color:"red"},{default:n(()=>[e("父 updated")]),_:1})]),O,s("blockquote",null,[l(a,{color:"red"},{default:n(()=>[e("父 beforeUpdate")]),_:1}),e(" -> "),l(a,{color:"red"},{default:n(()=>[e("父 updated")]),_:1})]),I,s("blockquote",null,[l(a,{color:"red"},{default:n(()=>[e("父 beforeDestroy")]),_:1}),e(" -> "),l(a,{color:"blue"},{default:n(()=>[e("子 beforeDestroy")]),_:1}),e(" -> "),l(a,{color:"blue"},{default:n(()=>[e("子 destroyed")]),_:1}),e(" -> "),l(a,{color:"red"},{default:n(()=>[e("父 destroyed")]),_:1})])]),N])}const K=t(c,[["render",j]]);export{H as __pageData,K as default};