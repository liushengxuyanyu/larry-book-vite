import{_ as t,D as e,o as p,c as h,k as s,a as i,t as k,I as r,w as E,R as a}from"./chunks/framework.4hIqoSk1.js";const B=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frame/vue2/component.md","filePath":"frame/vue2/component.md","lastUpdated":1733279472000}'),d={name:"frame/vue2/component.md"},o=a("",14),c={class:"info custom-block"},g=a("",3),y=s("code",null,"Vue",-1),u=s("code",null,"JavaScript",-1),b=s("blockquote",null,[s("p",null,"父组件模板中的表达式只能访问父组件的作用域；子组件模板中的表达式只能访问子组件的作用域。")],-1),m=a("",24);function v(n,F,D,A,C,f){const l=e("font");return p(),h("div",null,[o,s("div",c,[g,s("p",null,[i("这里的两个 "),s("code",null,k(n.message),1),i(" 插值表达式渲染的内容都是一样的。")]),s("p",null,[s("strong",null,[i("插槽内容无法访问子组件的数据"),r(l,{color:"red"},{default:E(()=>[i("(除去作用域插槽)")]),_:1})]),i("。"),y,i(" 模板中的表达式只能访问其定义时所处的作用域，这和 "),u,i(" 的词法作用域规则是一致的。")]),b]),m])}const q=t(d,[["render",v]]);export{B as __pageData,q as default};