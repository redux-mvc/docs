(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),c=n("NmYn"),o=n.n(c),b=n("Wbzz"),i=n("Xrax"),l=n("k4MR"),s=n("TSYQ"),d=n.n(s),m=n("QH2O"),u=n.n(m),p=n("qKvR"),O=function(e){var t,n=e.title,a=e.theme,r=e.tabs,c=void 0===r?[]:r;return Object(p.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=c.length,t[u.a.darkMode]="dark"===a,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},n)))))},j=n("BAC9"),x=function(e){var t=e.relativePagePath,n=e.repository,a=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=n||a,c=r.baseUrl,o=r.subDirectory,i=c+"/edit/"+r.branch+o+"/src/pages"+t;return c?Object(p.b)("div",{className:"bx--row "+j.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},g=n("FCXl"),N=n("dI71"),h=n("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],c=n.map((function(e){var t,n=o()(e,{lower:!0,strict:!0}),c=n===r,i=new RegExp(r+"/?(#.*)?$"),l=a.replace(i,n);return Object(p.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=c,t),h.listItem)},Object(p.b)(b.Link,{className:h.link,to:""+l},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:h.list},c))))))},t}(r.a.Component),v=n("MjG9"),T=n("CzIb"),w=n("Asxa"),k=n("OIbQ"),C=n.n(k),P=function(e){var t=e.date,n=new Date(t);return t?Object(p.b)(w.c,{className:C.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:C.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,r=e.Title,c=t.frontmatter,s=void 0===c?{}:c,d=t.relativePagePath,m=t.titleType,u=s.tabs,j=s.title,N=s.theme,h=s.description,w=s.keywords,k=s.date,C=Object(T.a)().interiorTheme,y=Object(b.useStaticQuery)("2456312558").site.pathPrefix,I=y?a.pathname.replace(y,""):a.pathname,H=u?I.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",E=N||C;return Object(p.b)(l.a,{tabs:u,homepage:!1,theme:E,pageTitle:j,pageDescription:h,pageKeywords:w,titleType:m},Object(p.b)(O,{title:r?Object(p.b)(r,null):j,label:"label",tabs:u,theme:E}),u&&Object(p.b)(f,{title:j,slug:I,tabs:u,currentTab:H}),Object(p.b)(v.a,{padded:!0},n,Object(p.b)(x,{relativePagePath:d}),Object(p.b)(P,{date:k})),Object(p.b)(g.a,{pageContext:t,location:a,slug:I,tabs:u,currentTab:H}),Object(p.b)(i.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},MflU:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return m}));var a,r=n("wx14"),c=n("zLVn"),o=(n("q1tI"),n("7ljp")),b=n("013z"),i=(n("qKvR"),{}),l=(a="PageDescription",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),s={_frontmatter:i},d=b.a;function m(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)(d,Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l,{mdxType:"PageDescription"},Object(o.b)("p",null,"Connect the ",Object(o.b)("em",{parentName:"p"},"view")," to the model by using the ",Object(o.b)("em",{parentName:"p"},"connect")," HOC. ")),Object(o.b)("h2",null,"Description"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("em",{parentName:"p"},"connect")," HOC will consume the ",Object(o.b)("em",{parentName:"p"},"selectProps")," from the ",Object(o.b)("em",{parentName:"p"},"context module")," state, and will inject the decorated ",Object(o.b)("em",{parentName:"p"},"actionProps")," from the ",Object(o.b)("em",{parentName:"p"},"context module"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"It will use the ",Object(o.b)("em",{parentName:"p"},"instanceId")," passed to the connected component by the parent, or it will\ntake the ",Object(o.b)("em",{parentName:"p"},"instanceId")," from the context.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("em",{parentName:"p"},"connect")," HOC will also act as context provider for the passed ",Object(o.b)("em",{parentName:"p"},"instanceId"),"."))),Object(o.b)("h3",null,"E.g.:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Given"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import { connect } from "@redux-mvc/core"\n\nimport { getters, actions } from "../model"\n\nconst decorate = connect(\n    { count: getters.count },\n    { add: actions.add, reset: actions.reset }\n)\n\nconst Counter = ({\n    count = 0,\n    add,\n    reset,\n}) => (\n    <div>\n        <button\n            onClick={add}\n        >\n            add\n        </button>\n        <button style={{ marginRight: 10 }} onClick={reset}>\n            reset\n        </button>\n        <div>{count}</div>\n    </div>\n)\n\nexport default decorate(Counter)\n')),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Note:")," any connected children of the ",Object(o.b)("em",{parentName:"p"},"Counter")," component will keep the right ",Object(o.b)("em",{parentName:"p"},"instanceId")," by default.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Then we can render different instances of the same ",Object(o.b)("em",{parentName:"p"},"Counter")," module."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import Counter from "ui-kit/Counter/View"\n\nconst Counters = () => (\n    <div>\n        <Counter />\n        <Counter instanceId="apples" />\n        <Counter instanceId="oranges" />\n    </div>\n)\n')))))}m.isMDXComponent=!0},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-context-connect-usage-mdx-def69c2dd3212e3b622a.js.map