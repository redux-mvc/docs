(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),l=a.n(b),c=a("Wbzz"),o=a("Xrax"),i=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=b.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,l=r.subDirectory,o=b+"/edit/"+r.branch+l+"/src/pages"+t;return b?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},g=a("FCXl"),f=a("dI71"),h=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),b=a===r,o=new RegExp(r+"/?(#.*)?$"),i=n.replace(o,a);return Object(p.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=b,t),h.listItem)},Object(p.b)(c.Link,{className:h.link,to:""+i},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:h.list},b))))))},t}(r.a.Component),T=a("MjG9"),v=a("CzIb"),w=a("Asxa"),k=a("OIbQ"),P=a.n(k),I=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(w.c,{className:P.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,d=t.relativePagePath,u=t.titleType,m=s.tabs,O=s.title,f=s.theme,h=s.description,w=s.keywords,k=s.date,P=Object(v.a)().interiorTheme,y=Object(c.useStaticQuery)("2456312558").site.pathPrefix,M=y?n.pathname.replace(y,""):n.pathname,E=m?M.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",H=f||P;return Object(p.b)(i.a,{tabs:m,homepage:!1,theme:H,pageTitle:O,pageDescription:h,pageKeywords:w,titleType:u},Object(p.b)(x,{title:r?Object(p.b)(r,null):O,label:"label",tabs:m,theme:H}),m&&Object(p.b)(N,{title:O,slug:M,tabs:m,currentTab:E}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:d}),Object(p.b)(I,{date:k})),Object(p.b)(g.a,{pageContext:t,location:n,slug:M,tabs:m,currentTab:E}),Object(p.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},utnH:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),l=a("013z"),c=(a("qKvR"),{}),o=l.a;function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(o,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"merge"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"merge(moduleA: ModuleInterface)(moduleB: ModuleInterface)\n")),Object(b.b)("p",null,"Merges ",Object(b.b)("em",{parentName:"p"},"redux-mvc")," modules from right to left:"),Object(b.b)("h3",null,"Usage"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Should be executed before ",Object(b.b)("em",{parentName:"p"},"addReducer"),"."),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const newModule = R.compose(\n    ...\n    createReducer(),\n    ...\n    merge(searchBar),\n)(module)\n\n")))),Object(b.b)("h3",null,"Return value"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"newModule")),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"newModule = {\n    ...rightModule,\n    dependencies: {...left.dependencies, ...right.dependencies },\n}\n")))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"\n\nexport const _frontmatter = {}\n")))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-composition-docs-mdx-bc26092dc08ede31b721.js.map