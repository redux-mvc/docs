(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{p7Pc:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return s}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),o=n("013z");n("qKvR");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={},l={_frontmatter:r},p=o.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(p,c({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"addBridge"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"redux-mvc")," allows to setup a global context that can be accessible from every other child context. It is useful to put any data or state that will be reused among contexts."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To provide the global context you must specify the ",Object(a.b)("em",{parentName:"p"},"contextId")," as the special constant ",Object(a.b)("em",{parentName:"p"},"GLOBAL_CONTEXT_ID"),":"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),"const decorate = createContext({\n   module,\n   contextId: GLOBAL_CONTEXT_ID\n})\n\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To consume state from the global context you must pass an array of namespaces to the ",Object(a.b)("em",{parentName:"p"},"addBridge")," module decorator:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",c({parentName:"pre"},{className:"language-ts"}),"const newModule = R.compose(\n    addBridge({ trackGlobalNamespaces: [RoutingModel.namespace] })\n    ...\n)(module)\n\nNote: The actions from the global namespace will be forwarded to the local context.\n\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To choose what kind of actions can be dispatched to the global context you need to specify the ",Object(a.b)("em",{parentName:"p"},"dispatchToGlobal")," predicate function:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",c({parentName:"pre"},{className:"language-ts"}),'const newModule = R.compose(\n    addBridge({ \n      dispatchToGlobal: action => action.type === "Routing/push" \n    })\n    ...\n)(module)\n\n')))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-middleware-bridge-usage-mdx-f3762355d95cbec1ba73.js.map