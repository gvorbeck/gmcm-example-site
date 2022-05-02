"use strict";(self.webpackChunktheme_test=self.webpackChunktheme_test||[]).push([[997],{62730:function(e,t,n){var r=n(95318);t.Z=void 0;var a=r(n(64198)),o=n(85893),l=(0,a.default)((0,o.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward");t.Z=l},57155:function(e,t,n){n.d(t,{ZP:function(){return x}});var r=n(42982),a=n(70885),o=n(63366),l=n(87462),c=n(11340),i=n(33909),u=n(39260),s=n(76257),m=n(95254),d=n(29014),f=n(54374),p=n(2585),h=n(67294),Z=n(81042);function g(e){return(0,Z.Z)("MuiMasonry",e)}(0,n(18851).Z)("MuiMasonry",["root"]);var E=n(85893),v=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],y=function(e){return Number(e.replace("px",""))},b=(0,i.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,r={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"space-between",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},a={};if(t.isSSR){for(var o={},c=Number(n.spacing(t.defaultSpacing).replace("px","")),i=1;i<=t.defaultColumns;i+=1)o["&:nth-of-type(".concat(t.defaultColumns,"n+").concat(i%t.defaultColumns,")")]={order:i};return a.height=t.defaultHeight,a.margin=-c/2,a["& > *"]=(0,l.Z)({},r["& > *"],o,{margin:c/2,width:"calc(".concat((100/t.defaultColumns).toFixed(2),"% - ").concat(c,"px)")}),(0,l.Z)({},r,a)}var u=(0,s.P$)({values:t.spacing,breakpoints:n.breakpoints.values}),f=(0,m.hB)(n);r=(0,d.Z)(r,(0,s.k9)({theme:n},u,(function(e){var n=Number(e),r=Number((0,m.NA)(f,n).replace("px",""));return(0,l.Z)({margin:-r/2,"& > *":{margin:r/2}},t.maxColumnHeight&&{height:Math.ceil(t.maxColumnHeight+r)})})));var p=(0,s.P$)({values:t.columns,breakpoints:n.breakpoints.values});return r=(0,d.Z)(r,(0,s.k9)({theme:n},p,(function(e){var t=Number(e),n="".concat((100/t).toFixed(2),"%"),r="object"!=typeof u?(0,m.NA)(f,Number(u)):"0px";return{"& > *":{width:"calc(".concat(n," - ").concat(r,")")}}}))),"object"==typeof u&&(r=(0,d.Z)(r,(0,s.k9)({theme:n},u,(function(e,t){if(t){var n=Number(e),r=Object.keys(p).pop(),a=(0,m.NA)(f,n),o="object"==typeof p?p[t]||p[r]:p,l="".concat((100/o).toFixed(2),"%");return{"& > *":{width:"calc(".concat(l," - ").concat(a,")")}}}return null})))),r})),x=h.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiMasonry"}),i=n.children,s=n.className,m=n.component,d=void 0===m?"div":m,Z=n.columns,x=void 0===Z?4:Z,k=n.spacing,w=void 0===k?1:k,M=n.defaultColumns,C=n.defaultHeight,N=n.defaultSpacing,S=(0,o.Z)(n,v),P=h.useRef(),R=h.useState(),I=(0,a.Z)(R,2),D=I[0],L=I[1],A=!D&&C&&void 0!==M&&void 0!==N,H=h.useState(A?M-1:0),j=(0,a.Z)(H,2),B=j[0],z=j[1],F=(0,l.Z)({},n,{spacing:w,columns:x,maxColumnHeight:D,defaultColumns:M,defaultHeight:C,defaultSpacing:N,isSSR:A}),O=function(e){var t=e.classes;return(0,c.Z)({root:["root"]},g,t)}(F),U=h.useRef("undefined"==typeof ResizeObserver?void 0:new ResizeObserver((function(e){if(P.current&&e&&0!==e.length){var t=P.current,n=P.current.firstChild,a=t.clientWidth,o=n.clientWidth;if(0!==a&&0!==o){var l=window.getComputedStyle(n),c=y(l.marginLeft),i=y(l.marginRight),u=Math.round(a/(o+c+i)),s=new Array(u).fill(0),m=!1;if(t.childNodes.forEach((function(e){if(e.nodeType===Node.ELEMENT_NODE&&"line-break"!==e.dataset.class&&!m){var t=window.getComputedStyle(e),n=y(t.marginTop),a=y(t.marginBottom),o=y(t.height)?Math.ceil(y(t.height))+n+a:0;if(0!==o){for(var l=0;l<e.childNodes.length;l+=1){var c=e.childNodes[l];if("IMG"===c.tagName&&0===c.clientHeight){m=!0;break}}if(!m){var i=s.indexOf(Math.min.apply(Math,(0,r.Z)(s)));s[i]+=o;var u=i+1;e.style.order=u}}else m=!0}})),!m)L(Math.max.apply(Math,(0,r.Z)(s))),z(u>0?u-1:0)}}})));h.useEffect((function(){var e=U.current;if(void 0!==e)return P.current&&P.current.childNodes.forEach((function(t){e.observe(t)})),function(){return e?e.disconnect():{}}}),[x,w,i]);var G=(0,f.Z)(t,P),T={flexBasis:"100%",width:0,margin:0,padding:0},V=new Array(B).fill("").map((function(e,t){return(0,E.jsx)("span",{"data-class":"line-break",style:(0,l.Z)({},T,{order:t+1})},t)}));return(0,E.jsxs)(b,(0,l.Z)({as:d,className:(0,p.Z)(O.root,s),ref:G,ownerState:F},S,{children:[i,V]}))}))},96364:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var r=n(67294),a=n(68923),o=n(61924),l=n(70050),c=n(4969),i=n(46490),u=n(15621),s=n(60913),m=n(40596),d=n(50969),f=n(57688),p=n(4661),h=n(95338),Z=n(98644),g=n(13984),E=n(62565),v=n(60428),y=n(34407),b=n(18341),x=n(62730),k=n(57155),w=n(9708),M=n(21859),C=n(7298);function N(e){var t=e.referenceData;return r.createElement(r.Fragment,null,r.createElement(a.Z,null,r.createElement(d.Z,{sx:{p:2}},r.createElement(s.Z,{disablePadding:!0,sx:{display:"flex",flexDirection:"row",alignItems:"stretch"}},t.map((function(e){return r.createElement(S,{key:e.category,item:e})}))))),r.createElement(i.Z,{sx:{my:4}}))}function S(e){var t=e.item,n=t.posts.length>1?"s":"";return r.createElement(m.ZP,{disablePadding:!0,disableGutters:!0,sx:{width:"auto",flex:"0 0 25%"}},r.createElement(o.Z,{raised:!0,sx:{height:"100%"}},r.createElement(l.Z,{title:t.category,subheader:t.posts.length+" Article"+n}),r.createElement(i.Z,null),r.createElement(P,{articles:t.posts})))}function P(e){var t=e.articles;return r.createElement(s.Z,null,t.map((function(e){return r.createElement(R,{key:e.post.childMdx.frontmatter.title,article:e})})))}function R(e){var t=e.article.post,n=r.useState(null),a=n[0],o=n[1];r.useEffect((function(){o(document.getElementById(encodeURI(t.childMdx.frontmatter.title).toLowerCase()))}));return r.createElement(m.ZP,{key:t.id},r.createElement(y.rU,{onClick:function(e){e.preventDefault(),a.scrollIntoView(C.o)},to:"#"+encodeURI(t.childMdx.frontmatter.title).toLowerCase()},t.childMdx.frontmatter.title))}var I={Dice:M.b,List:s.Z,ListItem:m.ZP};function D(e){var t=e.referenceData;return r.createElement(a.Z,null,r.createElement(d.Z,{sx:{p:2}},r.createElement(s.Z,{disablePadding:!0},t.map((function(e){return r.createElement(L,{key:e.category,categoryBlock:e})})))))}function L(e){var t=e.categoryBlock;return r.createElement(m.ZP,{disablePadding:!0,disableGutters:!0,sx:{"& + &":{mt:2},display:"block"}},r.createElement(v.Z,{variant:"h3"},t.category),r.createElement(a.Z,null,r.createElement(k.ZP,{columns:2,spacing:2},t.posts.map((function(e){return r.createElement(A,{key:e.post.childMdx.id,item:e})})))))}function A(e){var t=e.item.post.childMdx.frontmatter;return r.createElement(a.Z,{id:encodeURI(t.title).toLowerCase()},r.createElement(o.Z,{raised:!0},r.createElement(l.Z,{title:t.title,subheader:t.category}),r.createElement(i.Z,null),r.createElement(c.Z,null,t.content&&t.content.map((function(e){return"dl"===e.type?r.createElement(H,{key:Math.random(),content:e}):"table"===e.type?r.createElement(j,{key:e.title,content:e}):"markdown"===e.type?r.createElement(B,{key:e.title,content:e}):null})))))}function H(e){var t=e.content;return r.createElement(s.Z,null,t.terms.map((function(e){return r.createElement(m.ZP,{key:e.dt,sx:{display:"block"}},r.createElement(v.Z,{variant:"h6",component:"h4"},e.dt),e.dd.short&&r.createElement(v.Z,{variant:"subtitle1",component:"p"},e.dd.short),e.dd.cite&&r.createElement(v.Z,{variant:"subtitle2",component:"p"},e.dd.cite),r.createElement(i.Z,null),e.dd.text&&r.createElement(b.ZP,{markdown:e.dd.text,components:I,options:{tables:!0}}))})))}function j(e){var t=e.content;return r.createElement(a.Z,null,r.createElement(Z.Z,null,r.createElement(v.Z,{variant:"h5",component:"h3"},t.title),r.createElement(f.Z,{"aria-label":t.title},t.headers&&r.createElement(g.Z,null,r.createElement(E.Z,null,t.headers.map((function(e){return r.createElement(h.Z,{key:e},e)})))),t.rows&&r.createElement(p.Z,null,t.rows.map((function(e){return r.createElement(E.Z,{key:Math.random()},e.cells.length>0&&e.cells.map((function(e){return r.createElement(h.Z,{key:e,sx:{p:.5,verticalAlign:"top","& ul":{listStyle:"none",pl:0,wordBreak:"break-word"},"li + li":{mt:2}}},r.createElement(b.ZP,{components:I,markdown:e}))})))}))))))}function B(e){var t=e.content;return r.createElement(a.Z,{sx:{typography:"body1"}},r.createElement(b.ZP,{key:t.text,components:I,markdown:t.text}))}var z=function(e){var t=e.page,n=e.references.nodes,a=[];return n.length&&n.forEach((function(e){var t=e.childMdx.frontmatter.category;a.filter((function(e){return e.category===t})).length>0?a.find((function(e){return e.category===t})).posts.push({post:e}):a.push({category:t,posts:[{post:e}]})})),r.createElement(w.Z,{title:t.title,hideDrawerIcon:!0},r.createElement(u.Z,{color:"primary","aria-label":"Scroll to top",sx:{position:"fixed",bottom:"1rem",right:"1rem",zIndex:1},onClick:function(){window.scroll({top:0,behavior:"smooth"})}},r.createElement(x.Z,null)),r.createElement(N,{referenceData:a}),r.createElement(D,{referenceData:a}))},F={title:"Reference"};function O(e){var t=e.data.references;return r.createElement(z,{page:F,references:t})}},7298:function(e,t,n){n.d(t,{o:function(){return r}});var r={behavior:"smooth",block:"start"}}}]);
//# sourceMappingURL=component---node-modules-iamgarrett-gatsby-theme-gmcm-src-pages-reference-js-a9b6f9cbf8e13bdc2938.js.map