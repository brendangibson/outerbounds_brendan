(this.webpackJsonpouterbounds_brendan=this.webpackJsonpouterbounds_brendan||[]).push([[0],{19:function(t,n,e){},20:function(t,n,e){},25:function(t,n,e){"use strict";e.r(n);var a,r,i,o,c,u,s=e(0),d=e.n(s),l=e(10),h=e.n(l),b=(e(19),e(2)),f=e(3),j=(e(20),e(7)),p=e.n(j),g=e(11),v=e(4),x=e(1),O=f.a.div(a||(a=Object(b.a)(["\n  position: relative;\n"]))),w=f.a.div(r||(r=Object(b.a)(["\n  height: 24px;\n  width: 100%;\n"]))),m=f.a.div(i||(i=Object(b.a)(["\n  position: relative;\n  outline: 1px solid black;\n  width: 100%;\n  height: ","px;\n"])),(function(t){return t.height})),k=f.a.div(o||(o=Object(b.a)(["\n  position: absolute;\n  transform: translateX(-50%);\n  left: ",";\n  top: 0;\n"])),(function(t){return t.left})),C=function(t){var n=t.timeData,e=t.height,a=t.totalWidth,r=t.children,i=new Set;n.tasks.forEach((function(t){i.add(t.start),i.add(t.start+t.duration)}));var o=Array.from(i);return Object(x.jsxs)(O,{children:[Object(x.jsx)(w,{children:o.map((function(t){return Object(x.jsx)(k,{left:t/a*100+"%",children:t},t)}))}),Object(x.jsx)(m,{height:e,children:r})]})},S=f.a.div(c||(c=Object(b.a)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  background-color: ",";\n  top: ","px;\n  height: ","px;\n  left: ",";\n  width: ",";\n  cursor: pointer;\n  opacity: 0.9;\n  transition: all ",";\n  // Changes color by increasing the saturation when the bar is clicked\n  filter: ",";\n  box-sizing: border-box;\n  :hover {\n    opacity: 0.8;\n  }\n"])),(function(t){return t.backgroundColor}),(function(t){return t.top}),(function(t){return t.height}),(function(t){return t.left}),(function(t){return t.width}),"300ms",(function(t){return t.clicked?"saturate(2)":"none"})),_=function(t){var n=t.backgroundColor,e=t.top,a=t.height,r=t.left,i=t.width,o=t.label,c=Object(s.useState)(!1),u=Object(v.a)(c,2),d=u[0],l=u[1];return Object(x.jsx)(S,{onClick:function(){l((function(t){return!t}))},backgroundColor:n,top:e,height:a,left:r,width:i,clicked:d,children:o})},y=function(t){var n=t.timeData,e=Number.MAX_SAFE_INTEGER,a=0;n.tasks.forEach((function(t){t.start<e&&(e=t.start),t.duration+t.start>a&&(a=t.duration+t.start)}));var r=a-e,i=8,o=255*Math.random(),c=n.tasks.map((function(t,a){var c=(t.start-e)/r*100,u=t.duration/r*100;i=8+32*a,o=(o+128+255/n.tasks.length)%255;var s="hsl(".concat(o,", 50%, 50%)");return Object(x.jsx)(_,{backgroundColor:s,height:24,left:c+"%",width:u+"%",label:t.task_id,top:i},t.task_id)}));return Object(x.jsx)(C,{timeData:n,totalWidth:r,height:i+24+16,children:c})},D=function(t){var n=function(t){var n=Object(s.useState)("idle"),e=Object(v.a)(n,2),a=e[0],r=e[1],i=Object(s.useState)(),o=Object(v.a)(i,2),c=o[0],u=o[1];return Object(s.useEffect)((function(){var n=function(){var n=Object(g.a)(p.a.mark((function n(){var e,a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r("loading"),n.prev=1,n.next=4,fetch(t);case 4:return e=n.sent,n.next=7,e.json();case 7:a=n.sent,u(a),r("complete"),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),r("error");case 15:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),{status:a,timeData:c}}(t.url),e=n.status,a=n.timeData;return Object(x.jsx)("div",{children:"loading"===e?"Loading":a?Object(x.jsx)(y,{timeData:a}):"No data"})},E="time_data_url",F=f.a.div(u||(u=Object(b.a)(["\n  padding: 16px;\n"]))),L=function(){var t,n=null!==(t=new URLSearchParams(window.location.search).get(E))&&void 0!==t?t:window.location.protocol+"//"+window.location.hostname+":"+window.location.port+window.location.pathname+"/default.json";return Object(x.jsx)(F,{children:Object(x.jsx)(D,{url:n})})},A=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,26)).then((function(n){var e=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,o=n.getTTFB;e(t),a(t),r(t),i(t),o(t)}))};h.a.render(Object(x.jsx)(d.a.StrictMode,{children:Object(x.jsx)(L,{})}),document.getElementById("root")),A()}},[[25,1,2]]]);
//# sourceMappingURL=main.6039058e.chunk.js.map