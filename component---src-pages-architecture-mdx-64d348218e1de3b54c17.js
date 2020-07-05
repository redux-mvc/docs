(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{tH0S:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return m})),a.d(t,"default",(function(){return N}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z"),r=a("yzP1"),b=a.n(r),c=a("zLeX"),p=a.n(c);a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var m={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},s=i("PageDescription"),u=i("AnchorLinks"),d=i("AnchorLink"),O=i("Column"),j={_frontmatter:m},h=o.a;function N(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(h,l({},j,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{mdxType:"PageDescription"},Object(n.b)("p",null,"Intro to the ",Object(n.b)("em",{parentName:"p"},"redux-mvc")," architecture.")),Object(n.b)(u,{mdxType:"AnchorLinks"},Object(n.b)(d,{mdxType:"AnchorLink"},"Module Diagram"),Object(n.b)(d,{mdxType:"AnchorLink"},"Module Composition"),Object(n.b)(d,{mdxType:"AnchorLink"},"Architecture Components"),Object(n.b)(d,{mdxType:"AnchorLink"},"Implementation")),Object(n.b)("h2",null,"Module Diagram"),Object(n.b)("p",null,"The ",Object(n.b)("em",{parentName:"p"},"module")," is the unit of composition and architecture, meaning that you can create bigger modules out of tiny ones while the architecture remains the same, it is always a module."),Object(n.b)(O,{colLg:"4",mdxType:"Column"},Object(n.b)(b.a,{mdxType:"Module"})),Object(n.b)("h3",null,"Interactions"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The ",Object(n.b)("em",{parentName:"p"},"model")," receives events (actions) from the ",Object(n.b)("em",{parentName:"p"},"view")," and ",Object(n.b)("em",{parentName:"p"},"controller")," and updates the state.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The ",Object(n.b)("em",{parentName:"p"},"view")," consumes the ",Object(n.b)("em",{parentName:"p"},"selectors")," and dispatches events.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The ",Object(n.b)("em",{parentName:"p"},"selectors")," consume the ",Object(n.b)("em",{parentName:"p"},"model")," and the ",Object(n.b)("em",{parentName:"p"},"global database"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The ",Object(n.b)("em",{parentName:"p"},"controller")," observers the events from the ",Object(n.b)("em",{parentName:"p"},"view")," or other ",Object(n.b)("em",{parentName:"p"},"controllers")," and dispatches new events or does I/O. They consume the ",Object(n.b)("em",{parentName:"p"},"selectors"),"."))),Object(n.b)("h2",null,"Module Composition"),Object(n.b)("p",null,"Given three modules (a, b, c) you can create a module out of them by using the ",Object(n.b)("em",{parentName:"p"},"merge")," decorator. You can use ",Object(n.b)("em",{parentName:"p"},"views")," from child modules in it, you can consume its ",Object(n.b)("em",{parentName:"p"},"selectors")," and watch its events with your ",Object(n.b)("em",{parentName:"p"},"controller"),"."),Object(n.b)("p",null,"In this case is clear why a ",Object(n.b)("em",{parentName:"p"},"controller")," can act as supervisor of other ",Object(n.b)("em",{parentName:"p"},"modules"),"."),Object(n.b)(O,{colLg:"4",mdxType:"Column"},Object(n.b)(p.a,{mdxType:"ModuleComposition"})),Object(n.b)("h2",null,"Architecture Components"),Object(n.b)("h3",null,"Model"),Object(n.b)("p",null,"The ",Object(n.b)("em",{parentName:"p"},"model")," is the business logic layer where the state updates happen. "),Object(n.b)("p",null,"You can define the ",Object(n.b)("em",{parentName:"p"},"iniState")," and ",Object(n.b)("em",{parentName:"p"},"reducers")," in it. ",Object(n.b)("em",{parentName:"p"},"redux-mvc")," will dynamically generate the ",Object(n.b)("em",{parentName:"p"},"actions")," and ",Object(n.b)("em",{parentName:"p"},"getters")," for you so you avoid writing a bit of boilerplate."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Tools:")," ",Object(n.b)("a",l({parentName:"p"},{href:"/gtc/model/docs"}),Object(n.b)("em",{parentName:"a"},"createModel"))," decorator."),Object(n.b)("h3",null,"View"),Object(n.b)("p",null,"The ",Object(n.b)("em",{parentName:"p"},"view")," is the presentational layer. By using dependency injection we can keep it as stateless as possible."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Tools:")," ",Object(n.b)("a",l({parentName:"p"},{href:"/gtc/context/connect/docs"}),Object(n.b)("em",{parentName:"a"},"connect"))," hoc, ",Object(n.b)("a",l({parentName:"p"},{href:"/gtc/context/useModel/docs"}),Object(n.b)("em",{parentName:"a"},"useModel"))," hook."),Object(n.b)("h3",null,"Controller"),Object(n.b)("p",null,"The ",Object(n.b)("em",{parentName:"p"},"controller")," in the ",Object(n.b)("em",{parentName:"p"},"redux-mvc")," architecture is the layer that coordinates the other layers by ",Object(n.b)("em",{parentName:"p"},"modeling time"),", meaning it will look at a stream of events (redux actions) and it will act accordingly by firing other events, calling the api or forking processes. The ",Object(n.b)("em",{parentName:"p"},"controller")," can also act as supervisor of child modules."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"redux-mvc")," does not bake in a ",Object(n.b)("em",{parentName:"p"},"controller")," layer, it’s up to your needs an choice. Common redux controller layers are: ",Object(n.b)("em",{parentName:"p"},"redux-saga"),", ",Object(n.b)("em",{parentName:"p"},"redux-thunk"),", ",Object(n.b)("em",{parentName:"p"},"redux-observable")," …"),Object(n.b)("p",null,"In the case of this basic example we won’t need to be modeling time or coordinating child modules."),Object(n.b)("h3",null,"Selectors"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"selectors")," is a layer of indirection that decouples the ",Object(n.b)("em",{parentName:"p"},"view")," from the ",Object(n.b)("em",{parentName:"p"},"model"),". It’s also the place where you derive and/or combine data between several ",Object(n.b)("em",{parentName:"p"},"models"),"."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Tools:")," ",Object(n.b)("em",{parentName:"p"},"createSelector"),"."),Object(n.b)("h3",null,"Module"),Object(n.b)("p",null,"The ",Object(n.b)("em",{parentName:"p"},"module")," is the configuration layer that wires the ",Object(n.b)("em",{parentName:"p"},"model")," and ",Object(n.b)("em",{parentName:"p"},"controller")," and plugs other modules in. It adds the lifecycle methods that are required by the ",Object(n.b)("em",{parentName:"p"},"context"),"."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Tools:")," ",Object(n.b)("a",l({parentName:"p"},{href:"/gtc/module/definition/docs"}),Object(n.b)("em",{parentName:"a"},"createModule")),"."),Object(n.b)("h3",null,"Context"),Object(n.b)("p",null,"The ",Object(n.b)("em",{parentName:"p"},"context")," is where you run the page’s ",Object(n.b)("em",{parentName:"p"},"module"),". "),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Tools:")," ",Object(n.b)("a",l({parentName:"p"},{href:"/gtc/context/creation/docs"}),Object(n.b)("em",{parentName:"a"},"createContext")),"."),Object(n.b)("h3",null,"Global Database"),Object(n.b)("p",null,"The ",Object(n.b)("em",{parentName:"p"},"global database")," can be any store of global available data: ",Object(n.b)("em",{parentName:"p"},"graphql"),", ",Object(n.b)("em",{parentName:"p"},"datascript")," or even a ",Object(n.b)("em",{parentName:"p"},"redux-mvc")," data module. "),Object(n.b)("p",null,"In here you put any data that can be globally available, usually api data."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Tools:")," ",Object(n.b)("a",l({parentName:"p"},{href:"/gtc/middleware/bridge/usage"}),Object(n.b)("em",{parentName:"a"},"createContext"))," to set the global context, ",Object(n.b)("a",l({parentName:"p"},{href:"/gtc/module/definition/docs#addbridge"}),Object(n.b)("em",{parentName:"a"},"addBridge"))," decorator to consume the global context."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note:")," as of this time the only global store I use is other ",Object(n.b)("em",{parentName:"p"},"redux-mvc")," module. In the future I would like to try using ",Object(n.b)("em",{parentName:"p"},"graphql")," or ",Object(n.b)("em",{parentName:"p"},"datascript")," as database."),Object(n.b)("h2",null,"Implementation"),Object(n.b)("p",null,"The architecture diagram above can be implemented with any tool that supports composition of models and a global context to run the model. "),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"redux")," is functional, data for the state and functions for updates, is easily composable. "),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"react")," context api works just fine as model provider."),Object(n.b)("p",null,"Other important thing to notice about the implementation is the ",Object(n.b)("em",{parentName:"p"},"decorators")," api for the modules. It is useful for creating new modules out of other modules, by composition or enhancement of functionalities, but more important, it allows ",Object(n.b)("em",{parentName:"p"},"redux-mvc")," to be customized by the consumer. You can rewrite any of the decorators meanwhile it does what is supposed to do and implements the decorator api. In fact this is the recipe to add your ",Object(n.b)("em",{parentName:"p"},"controller")," layer of preference."))}N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-architecture-mdx-64d348218e1de3b54c17.js.map