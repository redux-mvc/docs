(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),c=a.n(r),l=a("Wbzz"),b=a("Xrax"),i=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,c=o.subDirectory,b=r+"/edit/"+o.branch+c+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:b},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),h=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),r=a===o,b=new RegExp(o+"/?(#.*)?$"),i=n.replace(b,a);return Object(p.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=r,t),h.listItem)},Object(p.b)(l.Link,{className:h.link,to:""+i},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:h.list},r))))))},t}(o.a.Component),v=a("MjG9"),N=a("CzIb"),w=a("Asxa"),y=a("OIbQ"),P=a.n(y),k=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(w.c,{className:P.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,s=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,m=s.tabs,g=s.title,f=s.theme,h=s.description,w=s.keywords,y=s.date,P=Object(N.a)().interiorTheme,I=Object(l.useStaticQuery)("2456312558").site.pathPrefix,B=I?n.pathname.replace(I,""):n.pathname,C=m?B.split("/").filter(Boolean).slice(-1)[0]||c()(m[0],{lower:!0}):"",E=f||P;return Object(p.b)(i.a,{tabs:m,homepage:!1,theme:E,pageTitle:g,pageDescription:h,pageKeywords:w,titleType:u},Object(p.b)(x,{title:o?Object(p.b)(o,null):g,label:"label",tabs:m,theme:E}),m&&Object(p.b)(T,{title:g,slug:B,tabs:m,currentTab:C}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:d}),Object(p.b)(k,{date:y})),Object(p.b)(j.a,{pageContext:t,location:n,slug:B,tabs:m,currentTab:C}),Object(p.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},p7Pc:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return u}));var n,o=a("wx14"),r=a("zLVn"),c=(a("q1tI"),a("7ljp")),l=a("013z"),b=(a("qKvR"),{}),i=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",e)}),s={_frontmatter:b},d=l.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)(d,Object(o.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(i,{mdxType:"PageDescription"},Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"redux-mvc")," allows to setup a global context that can be accessible from every other child context. It is useful to put any data or state that will be reused among contexts.")),Object(c.b)("p",null,"To provide the global context you must specify the ",Object(c.b)("em",{parentName:"p"},"contextId")," as the special constant ",Object(c.b)("em",{parentName:"p"},"GLOBAL_CONTEXT_ID"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),'import { createContext } from "@redux-mvc/core"\n\nconst decorate = createContext({\n    module,\n    contextId: GLOBAL_CONTEXT_ID\n})\n\n')),Object(c.b)("p",null,"To consume state from the global context you must pass an array of namespaces to the ",Object(c.b)("em",{parentName:"p"},"addBridge")," module decorator:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),'import * as R from "ramda"\nimport { addBridge } from "@redux-mvc/core"\n\nconst newModule = R.compose(\n    addBridge({ trackGlobalNamespaces: [RoutingModel.namespace] })\n    ...\n)(module)\n\nNote: The actions from the global namespace will be forwarded to the local context.\n\n')),Object(c.b)("p",null,"To choose what kind of actions can be dispatched to the global context you need to specify the ",Object(c.b)("em",{parentName:"p"},"dispatchToGlobal")," predicate function:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),'import * as R from "ramda"\nimport { addBridge } from "@redux-mvc/core"\n\nconst newModule = R.compose(\n    addBridge({ \n      dispatchToGlobal: action => action.type === "Routing/push" \n    })\n    ...\n)(module)\n\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-middleware-bridge-usage-mdx-1ed672ed10fa52eb56ec.js.map