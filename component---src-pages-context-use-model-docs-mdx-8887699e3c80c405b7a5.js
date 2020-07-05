(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"Q1/V":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return l}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),p=n("013z");n("qKvR");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={},b={_frontmatter:r},o=p.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,p={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,["components"]);return Object(a.b)(o,c({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"useModel"),Object(a.b)("p",null,"Hook."),Object(a.b)("p",null,"Consumes the ",Object(a.b)("em",{parentName:"p"},"selectors")," and wraps ",Object(a.b)("em",{parentName:"p"},"actions"),"."),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-ts"}),"useModel(selectors: Map<Selectors>, actions: Map<ActionCreator>, props: Object)\n")),Object(a.b)("h3",null,"Usage"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Injects ",Object(a.b)("em",{parentName:"p"},"selectorProps"),", wrapped ",Object(a.b)("em",{parentName:"p"},"actionProps")," and the ",Object(a.b)("em",{parentName:"p"},"instanceId"),"."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",c({parentName:"pre"},{className:"language-ts"}),'const { count, add } = useModel({\n  count: getters.count,\n}, {\n  add: actions.add,\n}, {\n  instanceId: "customInstanceId"\n})\n')))),Object(a.b)("h3",null,"Params"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"selectors: Map<SelectorFunction> | null")),Object(a.b)("p",{parentName:"li"},"The ",Object(a.b)("inlineCode",{parentName:"p"},"selectors")," that will consume the ",Object(a.b)("em",{parentName:"p"},"state")," from the parent ",Object(a.b)("em",{parentName:"p"},"module"),"."),Object(a.b)("p",{parentName:"li"},"Each ",Object(a.b)("em",{parentName:"p"},"key")," of the ",Object(a.b)("inlineCode",{parentName:"p"},"selectors")," Map will be executed against the ",Object(a.b)("em",{parentName:"p"},"module store"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"actions: Map<ActionCreator> | null")),Object(a.b)("p",{parentName:"li"},"Each ",Object(a.b)("em",{parentName:"p"},"key")," of the ",Object(a.b)("inlineCode",{parentName:"p"},"actions")," Map will be wrapped with ",Object(a.b)("em",{parentName:"p"},"module dispatch")," function.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"props: Object")),Object(a.b)("p",{parentName:"li"},"An ",Object(a.b)("inlineCode",{parentName:"p"},"instanceId")," passed by props to the hook will take precedence over the context ",Object(a.b)("inlineCode",{parentName:"p"},"instanceId"),"."))),Object(a.b)("h3",null,"Return value"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-ts"}),"ModelProps: {\n  ...selectorProps: Map<Any>,\n  ...wrappedActionProps: Map<Dispatch<ActionCreator>>,\n  instanceId: String\n}\n\n")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-context-use-model-docs-mdx-8887699e3c80c405b7a5.js.map