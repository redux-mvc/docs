(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),r=a("NmYn"),c=a.n(r),o=a("Wbzz"),l=a("Xrax"),i=a("k4MR"),p=a("TSYQ"),m=a.n(p),s=a("QH2O"),d=a.n(s),u=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,b=e.tabs,r=void 0===b?[]:b;return Object(u.b)("div",{className:m()(d.a.pageHeader,(t={},t[d.a.withTabs]=r.length,t[d.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},O=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||n,r=b.baseUrl,c=b.subDirectory,l=r+"/edit/"+b.branch+c+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},N=a("FCXl"),h=a("dI71"),g=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,b=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),r=a===b,l=new RegExp(b+"/?(#.*)?$"),i=n.replace(l,a);return Object(u.b)("li",{key:e,className:m()((t={},t[g.selectedItem]=r,t),g.listItem)},Object(u.b)(o.Link,{className:g.link,to:""+i},e))}));return Object(u.b)("div",{className:g.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:g.list},r))))))},t}(b.a.Component),T=a("MjG9"),w=a("CzIb"),v=a("Asxa"),C=a("OIbQ"),k=a.n(C),P=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(v.c,{className:k.a.row},Object(u.b)(v.a,null,Object(u.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,b=e.Title,r=t.frontmatter,p=void 0===r?{}:r,m=t.relativePagePath,s=t.titleType,d=p.tabs,O=p.title,h=p.theme,g=p.description,v=p.keywords,C=p.date,k=Object(w.a)().interiorTheme,y=Object(o.useStaticQuery)("2456312558").site.pathPrefix,I=y?n.pathname.replace(y,""):n.pathname,M=d?I.split("/").filter(Boolean).slice(-1)[0]||c()(d[0],{lower:!0}):"",E=h||k;return Object(u.b)(i.a,{tabs:d,homepage:!1,theme:E,pageTitle:O,pageDescription:g,pageKeywords:v,titleType:s},Object(u.b)(j,{title:b?Object(u.b)(b,null):O,label:"label",tabs:d,theme:E}),d&&Object(u.b)(f,{title:O,slug:I,tabs:d,currentTab:M}),Object(u.b)(T.a,{padded:!0},a,Object(u.b)(x,{relativePagePath:m}),Object(u.b)(P,{date:C})),Object(u.b)(N.a,{pageContext:t,location:n,slug:I,tabs:d,currentTab:M}),Object(u.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},k36a:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a("wx14"),b=a("zLVn"),r=(a("q1tI"),a("7ljp")),c=a("013z"),o=(a("qKvR"),{}),l={_frontmatter:o},i=c.a;function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)(i,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"connect"),Object(r.b)("p",null,"HOC."),Object(r.b)("p",null,"Connects the ",Object(r.b)("em",{parentName:"p"},"WrappedComponent")," to the ",Object(r.b)("em",{parentName:"p"},"module context"),". "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"connect(selectors: Map<Selectors>, actions: Map<ActionCreator>, options: Object)(Component: ReactComponent)\n")),Object(r.b)("h3",null,"Params"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"selectors: Map<Selector> | null")),Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"selectors")," that will consume the ",Object(r.b)("em",{parentName:"p"},"state")," from the parent ",Object(r.b)("em",{parentName:"p"},"module"),"."),Object(r.b)("p",{parentName:"li"},"Each ",Object(r.b)("em",{parentName:"p"},"key")," of the ",Object(r.b)("em",{parentName:"p"},"selectors")," Map will be injected as ",Object(r.b)("em",{parentName:"p"},"prop")," to the ",Object(r.b)("em",{parentName:"p"},"WrappedComponent"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"actions: Map<ActionCreator> | null")),Object(r.b)("p",{parentName:"li"},"Each ",Object(r.b)("em",{parentName:"p"},"key")," of the ",Object(r.b)("em",{parentName:"p"},"actions")," Map will wrapped into the module ",Object(r.b)("em",{parentName:"p"},"dispatch")," and injected as ",Object(r.b)("em",{parentName:"p"},"prop")," to the ",Object(r.b)("em",{parentName:"p"},"WrappedComponent"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"options.pure: Boolean")),Object(r.b)("p",{parentName:"li"},"If the ",Object(r.b)("em",{parentName:"p"},"Component")," is a functional component, wraps it in ",Object(r.b)("em",{parentName:"p"},"React.memo"),"."),Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Default:")," ",Object(r.b)("inlineCode",{parentName:"p"},"true"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Component: ReactComponent")),Object(r.b)("p",{parentName:"li"},"Component to be ",Object(r.b)("em",{parentName:"p"},"connected"),"."))),Object(r.b)("h3",null,"Return value"),Object(r.b)("p",null,"React Component with injected ",Object(r.b)("em",{parentName:"p"},"selector props"),", ",Object(r.b)("em",{parentName:"p"},"action props")," and the ",Object(r.b)("em",{parentName:"p"},"instanceId"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-context-connect-docs-mdx-316f2b01999280234f84.js.map