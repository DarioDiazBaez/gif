(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),l=a(1),u=a(9),o=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(l.a)(a,2),i=c[0],o=c[1];return r.a.createElement("form",{className:"input-group animate__animated animate__rubberBand",onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(u.a)(e))})),o(""))}},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"GIF",value:i,onChange:function(e){o(e.target.value)}}))},s=a(4),m=a.n(s),d=a(8),f=function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n,r,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=v4BZi5DlHSM3IIFUyyWlCOiGaMH6zR5S"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=(a(6),function(e){var t=e.title,a=e.url;return r.a.createElement("div",{className:" animate__animated animate__tada card mx-2 my-2 fondo2",style:{width:"18rem"}},r.a.createElement("a",{href:a,target:"_blank",className:"d-flex justify-content-center"},r.a.createElement("img",{className:"img-fluid",src:a,alt:t,title:t,style:{width:"100vw",height:"45vh"}})))}),g=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){f(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement(n.Fragment,null,r.a.createElement("h2",{className:"text-center animate__animated animate__heartBeat"},t),i&&r.a.createElement("p",{className:"animate__animated animate__flash"},"Loading..."),r.a.createElement("div",{className:"card-grid d-flex align-content-stretch flex-wrap justify-content-center"},c.map((function(e){return r.a.createElement(p,Object.assign({key:e.id},e))}))))},h=function(){var e=Object(n.useState)(["Memes"]),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"container-fluid fondo py-3"},r.a.createElement(o,{setCategories:c}),r.a.createElement("div",null,a.map((function(e){return r.a.createElement(g,{key:e,category:e})}))))};i.a.render(r.a.createElement(h,null),document.getElementById("root"))},6:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.2ac3d8ed.chunk.js.map