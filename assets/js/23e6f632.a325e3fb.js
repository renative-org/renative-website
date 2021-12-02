"use strict";(self.webpackChunkrenative_website=self.webpackChunkrenative_website||[]).push([[8685],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,g=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8125:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={id:"config",title:"Config Files",sidebar_label:"Config Files",original_id:"config"},l=void 0,u={unversionedId:"guides/config",id:"guides/config",isDocsHomePage:!1,title:"Config Files",description:"Renative configs are one of the most powerful feature of ReNative platform.",source:"@site/docs/guides/guides-config.md",sourceDirName:"guides",slug:"/guides/config",permalink:"/docs/guides/config",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/guides-config.md",tags:[],version:"current",frontMatter:{id:"config",title:"Config Files",sidebar_label:"Config Files",original_id:"config"},sidebar:"tutorialSidebar",previous:{title:"Config Folders",permalink:"/docs/guides/config_folders"},next:{title:"Develop ReNative",permalink:"/docs/guides/develop"}},s=[],f={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("img",{className:"header-image",src:"https://renative.org/img/ic_configuration.png",width:"50",height:"50"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"Renative configs are one of the most powerful feature of ReNative platform."),(0,i.kt)("p",null,"Their format is ",(0,i.kt)("inlineCode",{parentName:"p"},"renative.*.json")),(0,i.kt)("p",null,'They form the bedrock of ReNative "DNA" philosophy.'),(0,i.kt)("p",null,"When you create new project ",(0,i.kt)("inlineCode",{parentName:"p"},"rnv new")," there is only one single file generated ",(0,i.kt)("inlineCode",{parentName:"p"},"renative.json"),"."),(0,i.kt)("p",null,"Just like the DNA it contains core information about your project, structure, templates, platforms etc."),(0,i.kt)("p",null,"Once you trigger your first ",(0,i.kt)("inlineCode",{parentName:"p"},"rnv ...")," command this file is used to generate everything on demand"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/api-rnv-config"},"Full Documentation")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/config"},"Full API Reference")))}p.isMDXComponent=!0}}]);