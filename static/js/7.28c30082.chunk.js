(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[7,8],{88:function(t,e,n){"use strict";n.r(e);n(0),n(90);var i=n(1);e.default=function(t){var e=t.title;return Object(i.jsx)("div",{className:"header",children:e})}},96:function(t,e,n){"use strict";n.r(e);var i=n(3),c=n(0),r=n(182),s=n(64),l=n.n(s),a=n(143),o=n(88),j=n(24),u=n(33),h=n(1),d={iconStyle:{height:75,width:75,margin:10,marginBottom:0},introTextContainer:{whiteSpace:"pre-wrap"}};e.default=function(t){var e,n,s=t.header,b=Object(c.useState)(null),f=Object(i.a)(b,2),p=f[0],O=f[1];return Object(c.useEffect)((function(){fetch(j.a.skills,{method:"GET"}).then((function(t){return t.json()})).then((function(t){return O(t)})).catch((function(t){return t}))}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(o.default,{title:s}),p?Object(h.jsx)(l.a,{children:Object(h.jsx)("div",{className:"section-content-container",children:Object(h.jsxs)(a.a,{children:[(n=p.intro,Object(h.jsx)("h4",{style:d.introTextContainer,children:Object(h.jsx)(r.a,{children:n})})),null===(e=p.skills)||void 0===e?void 0:e.map((function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsx)("h3",{children:t.title}),t.items.map((function(t){return Object(h.jsxs)("div",{style:{display:"inline-block"},children:[Object(h.jsx)("img",{style:d.iconStyle,src:t.icon,alt:t.title}),Object(h.jsx)("p",{children:t.title})]},t.title)}))]},t.title)}))]})})}):Object(h.jsx)(u.default,{})]})}}}]);
//# sourceMappingURL=7.28c30082.chunk.js.map