(this["webpackJsonpyoutube-fake"]=this["webpackJsonpyoutube-fake"]||[]).push([[0],{31:function(e,t,a){e.exports=a(50)},36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),o=a.n(r),s=(a(36),a(11)),i=a(17),l=a(19),u=a(18),m=a(20),d=(a(37),a(14)),p=a(10),v=a(8),f=a(2),h=a.n(f),b=a(5),E=function(e){return{type:"ADD_VIDEO_TO_LIST",newVideos:e.newVideos,nextPageToken:e.nextPageToken,prevPageToken:e.prevPageToken}},g=function(e){return{type:"RESTART_VIDEO_LIST",newVideos:e.newVideos,nextPageToken:e.nextPageToken}},w=a(30);a(43);function k(e){var t=Object(v.f)();return c.a.createElement("header",{className:"flex center"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"logo"},c.a.createElement("h2",null,"youtube "))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"search"},c.a.createElement("input",{id:"search"}),c.a.createElement("div",{className:"btn_search",onClick:function(e){return t.push("/"+document.getElementById("search").value)}},c.a.createElement(w.a,null)))))}a(45);function O(e){return c.a.createElement("main",{className:"center flex"},e.children)}a(46);function x(e){var t=Object(n.useState)([]),a=Object(b.a)(t,2),r=a[0],o=a[1];Object(n.useEffect)((function(){s()}));var s=function(){for(var t=0;t<e.max_result;t++){var a=r;a.push(t),o(a)}};return c.a.createElement("div",{className:"await_video_animation flex"},r.map((function(e,t){return c.a.createElement("div",{key:t,className:"video_animation"},c.a.createElement("div",{className:"circle"}))})))}var j=function e(){var t=this;Object(s.a)(this,e),this.get=function(e){return new Promise((function(a,n){return h.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:fetch(t.host+e+"&key="+t.keyYoutube,t.myInit).then((function(e){a({status:e.status,data:e.json()})})).catch((function(e){console.log(e),n(e.json())}));case 1:case"end":return c.stop()}}))}))},this.host="https://www.googleapis.com/youtube/v3/",this.keyYoutube="AIzaSyBfTbIGoDLSWgG5YGgYIBq3-P1m-IxN3oc",this.myHeaders=new Headers,this.myInit={method:"GET",headers:this.myHeaders,mode:"cors",cache:"default",Authorization:"Bearer "+this.keyYoutube,Accept:"application/json"}};a(47);function y(e){var t=e.values,a=t.id,n=t.snippet;return c.a.createElement("div",{className:"container_video",key:a.videoId},c.a.createElement("div",{className:"video"},c.a.createElement("a",{href:"/watch/"+a.videoId},c.a.createElement("figure",null,c.a.createElement("div",{className:"img",style:{backgroundImage:"url(".concat(n.thumbnails.high.url,")")}}))),c.a.createElement("div",{className:"box_title"},c.a.createElement(p.b,{to:"/watch/"+a.videoId},c.a.createElement("span",null,n.title)))))}a(48);function T(e){var t=Object(v.g)().q,a=Object(n.useState)(16),r=Object(b.a)(a,2),o=r[0],s=(r[1],Object(n.useState)("relevance")),i=Object(b.a)(s,2),l=i[0],u=i[1],m=Object(n.useState)(!1),p=Object(b.a)(m,2),f=p[0],w=p[1],T=Object(d.b)(),P=Object(d.c)((function(e){return e.YoutubeReducer})),_=P.nextPageToken,N=(P.prevPageToken,P.listVideos);Object(n.useEffect)((function(){0!==N.length&&void 0==t||I(t,l)}),[t,l]);var I=function(){var e;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return w(!1),e=new j,a.next=4,h.a.awrap(e.get("search?part=snippet&maxResults=".concat(o,"&q=").concat(t,"&type=video&order=").concat(l)));case 4:if(200!==(e=a.sent).status){a.next=14;break}return a.next=8,h.a.awrap(e.data);case 8:e=a.sent,console.log(e),T(g({newVideos:e.items,nextPageToken:e.nextPageToken})),w(!0),a.next=18;break;case 14:return a.next=16,h.a.awrap(e.data);case 16:e=a.sent,w(!0);case 18:case"end":return a.stop()}}))};return c.a.createElement("div",{className:"home"},c.a.createElement(k,null),c.a.createElement(O,null,c.a.createElement("div",{className:"filter"},c.a.createElement("select",{onChange:function(e){u(e.target.value)}},c.a.createElement("option",{value:"relevance"},"revelancia"),c.a.createElement("option",{value:"date"},"data"),c.a.createElement("option",{value:"videoCount"},"videos enviados"),c.a.createElement("option",{value:"viewCount"},"visualiza\xe7\xf5es"))),!f&&c.a.createElement(x,{max_result:o}),N.map((function(e,t){return c.a.createElement(y,{key:t,values:e})})),c.a.createElement("div",{className:"container center"},N.length>0&&c.a.createElement("span",{onClick:function(){return function(){var e;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return w(!1),e=new j,a.next=4,h.a.awrap(e.get("search?part=snippet&maxResults=".concat(o,"&q=").concat(t,"&type=video&order=").concat(l,"&pageToken=").concat(_,"&")));case 4:if(200!==(e=a.sent).status){a.next=12;break}return a.next=8,h.a.awrap(e.data);case 8:e=a.sent,console.log(e),T(E({newVideos:e.items,nextPageToken:e.nextPageToken,prevPageToken:e.prevPageToken})),w(!0);case 12:case"end":return a.stop()}}))}()}}," ver mais"))),c.a.createElement("footer",null,c.a.createElement("span",null," todos direitos reservados 2020")))}a(49);function P(){var e=Object(n.useState)(window.location.pathname.split("/")[2]),t=Object(b.a)(e,2),a=t[0],r=(t[1],Object(n.useState)(null)),o=Object(b.a)(r,2),s=o[0],i=o[1],l=Object(n.useState)(null),u=Object(b.a)(l,2),m=u[0],d=u[1],p=Object(n.useState)(""),v=Object(b.a)(p,2),f=v[0],E=v[1],g=Object(n.useState)(!0),w=Object(b.a)(g,2),x=w[0],y=w[1];Object(n.useEffect)((function(){x&&(T(),y(!1))}));var T=function(){var e,t,n;return h.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e=new j,c.next=3,h.a.awrap(e.get("videos?part=snippet&id=".concat(a)));case 3:if(200!==(t=c.sent).status){c.next=14;break}return c.next=7,h.a.awrap(t.data);case 7:t=c.sent,i(t.items[0]),n=t.items[0].snippet.description.split(": "),d(n),n.map((function(e){console.log(e)})),c.next=17;break;case 14:return c.next=16,h.a.awrap(t.data);case 16:t=c.sent;case 17:case"end":return c.stop()}}))};return c.a.createElement("div",{className:"watch_video"},c.a.createElement(k,{change_input_search:function(e){E(e)},search_youtube:function(){window.location.href="/?q=".concat(f)}}),c.a.createElement(O,null,null!=s&&c.a.createElement("div",{className:"container"},c.a.createElement("h2",null,s.snippet.title),c.a.createElement("iframe",{src:"https://www.youtube.com/embed/".concat(a),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),c.a.createElement("div",{className:"box_text"},void 0!=m&&m.map((function(e){return c.a.createElement("p",null,e)}))))))}var _=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement(v.c,null,c.a.createElement(v.a,{exact:!0,path:"/"},c.a.createElement(T,null),"  "),c.a.createElement(v.a,{exact:!0,path:"/:q",component:T}),c.a.createElement(v.a,{path:"/watch/:id_video",component:P})))}}]),t}(n.Component),N=a(12),I=a(25),V={nextPageToken:null,prevPageToken:null,listVideos:[],listVideosWatch:[]};var S=Object(N.b)({YoutubeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_VIDEO_TO_LIST":return Object(I.a)({},e,{listVideos:e.listVideos.concat(t.newVideos),nextPageToken:e.nextPageToken,prevPageToken:t.prevPageToken});case"RESTART_VIDEO_LIST":return Object(I.a)({},e,{listVideos:t.newVideos,nextPageToken:t.nextPageToken});default:return e}}}),D=Object(N.c)(S),R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement(d.a,{store:D},c.a.createElement(_,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.dd9d7095.chunk.js.map