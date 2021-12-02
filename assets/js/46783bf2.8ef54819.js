"use strict";(self.webpackChunkrenative_website=self.webpackChunkrenative_website||[]).push([[5196],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,v=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(v,s(s({ref:n},c),{},{components:t})):r.createElement(v,s({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9591:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),s=["components"],a={id:"common_issues",title:"Common Issues",sidebar_label:"Common Issues",original_id:"common_issues"},l=void 0,u={unversionedId:"guides/common_issues",id:"guides/common_issues",isDocsHomePage:!1,title:"Common Issues",description:"If you encounter unexpected error / issue it is always good to perform basic sanity steps:",source:"@site/docs/guides/guides-common-issues.md",sourceDirName:"guides",slug:"/guides/common_issues",permalink:"/docs/guides/common_issues",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/guides-common-issues.md",tags:[],version:"current",frontMatter:{id:"common_issues",title:"Common Issues",sidebar_label:"Common Issues",original_id:"common_issues"},sidebar:"tutorialSidebar",previous:{title:"ReNative CLI",permalink:"/docs/guides/cli"},next:{title:"Config Folders",permalink:"/docs/guides/config_folders"}},c=[{value:"rnv status",id:"rnv-status",children:[],level:4},{value:"-r --reset",id:"-r---reset",children:[],level:4},{value:"-i --info",id:"-i---info",children:[],level:4},{value:"rnv clean",id:"rnv-clean",children:[],level:4},{value:"Raise Issue",id:"raise-issue",children:[],level:4},{value:"Common Errors:",id:"common-errors",children:[],level:4}],p={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("img",{className:"header-image",src:"https://renative.org/img/ic_issues.png",width:"50",height:"50"}),(0,o.kt)("br",null),"If you encounter unexpected error / issue it is always good to perform basic sanity steps:",(0,o.kt)("h4",{id:"rnv-status"},"rnv status"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rnv status")),(0,o.kt)("p",null,"this should print out basic ",(0,o.kt)("inlineCode",{parentName:"p"},"SUMMARY")," box with info about your project, env, and RNV version. check if everything seem correct."),(0,o.kt)("h4",{id:"-r---reset"},"-r --reset"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rnv start -r")," -> restart your server / bundler and reset all cache"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rnv run .... -r")," -> recreate whole project before running app"),(0,o.kt)("h4",{id:"-i---info"},"-i --info"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rnv run .... -i")," -> run ReNative with full verbose logs"),(0,o.kt)("h4",{id:"rnv-clean"},"rnv clean"),(0,o.kt)("p",null,"If above does not help try to clean up your project"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rnv clean && npm i")),(0,o.kt)("h4",{id:"raise-issue"},"Raise Issue"),(0,o.kt)("p",null,"If above does not help either you can raise new question/bug on repo ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pavjacko/renative/issues"},"https://github.com/pavjacko/renative/issues")),(0,o.kt)("p",null,"Provide at least ",(0,o.kt)("inlineCode",{parentName:"p"},"SUMMARY")," box from your console"),(0,o.kt)("h4",{id:"common-errors"},"Common Errors:"),(0,o.kt)("p",null,"\u26a0\ufe0f",(0,o.kt)("inlineCode",{parentName:"p"},"linker command failed with exit code 1 (use -v to see invocation)")),(0,o.kt)("p",null,"Make sure your Xcode version is ",(0,o.kt)("inlineCode",{parentName:"p"},"10.2")," or newer"),(0,o.kt)("p",null,"\u26a0\ufe0f",(0,o.kt)("inlineCode",{parentName:"p"},"Description: Invalid runtime: com.apple.CoreSimulator.SimRuntime.iOS-.......")),(0,o.kt)("p",null,"try to run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo killall -9 com.apple.CoreSimulator.CoreSimulatorService\n")),(0,o.kt)("p",null,"and then"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rnv run ...")),(0,o.kt)("p",null,"\u26a0\ufe0f",(0,o.kt)("inlineCode",{parentName:"p"},"Could not create service of type ScriptPluginFactory using BuildScopeServices.createScriptPluginFactory()")),(0,o.kt)("p",null,"Try killing all ",(0,o.kt)("inlineCode",{parentName:"p"},"gradle")," processes and running the build again, that should help"),(0,o.kt)("p",null,"\u26a0\ufe0f",(0,o.kt)("inlineCode",{parentName:"p"},"> Execution of compression failed.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/pavjacko/renative/issues/183"},"https://github.com/pavjacko/renative/issues/183")))}m.isMDXComponent=!0}}]);