"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[243],{6383:function(n,r,t){t.r(r),t.d(r,{default:function(){return k}});var e,a,c,u=t(5861),i=t(9439),o=t(4687),s=t.n(o),f=t(168),p=t(6487),d=p.ZP.div(e||(e=(0,f.Z)(["\nmargin: 15px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n  padding: 20px;\n  background-color: #8a2be2;\n  border-radius: 8px;\n  color: #fff;\n"]))),l=p.ZP.div(a||(a=(0,f.Z)(["\n  text-align: center;\n\n  img {\n    width: 100%;\n    border-radius: 8px;\n    height: 70%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 10px 0;\n    color: #fff; \n  }\n\n  h3 {\n    font-size: 1em;\n    color: #ddd; \n  }\n"]))),v=p.ZP.div(c||(c=(0,f.Z)(["\n  text-align: center;\n  padding: 20px;\n  background-color: rgba(138, 43, 226, 0.7); \n  border-radius: 8px;\n  color: #fff;\n"]))),h=t(7689),m=t(2791),x=t(4390),g=t(2497),b=t.p+"static/media/default-actor.2c696de4557766c23880.jpg",Z=t(184),k=function(){var n=(0,h.UO)().movieId,r=(0,m.useState)([]),t=(0,i.Z)(r,2),e=t[0],a=t[1];return(0,m.useEffect)((function(){var r=function(){var r=(0,u.Z)(s().mark((function r(){var t,e;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,x.IQ)(n);case 3:t=r.sent,a(t.cast),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),e=r.t0.message,(0,g.Z)(e);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[n]),(0,Z.jsx)(d,{children:e.length>0?e.map((function(n){return(0,Z.jsxs)(l,{children:[(0,Z.jsx)("img",{src:n.profile_path?"https://image.tmdb.org/t/p/w500/".concat(n.profile_path):b,alt:n.name}),(0,Z.jsx)("h1",{children:n.name}),(0,Z.jsxs)("h3",{children:["Character: ",n.character]})]},n.id)})):(0,Z.jsx)(v,{children:"No Cast information available"})})}},2497:function(n,r,t){var e=t(1686);r.Z=function(n){return e.Notify.init({backOverlay:!0,info:{background:"#8a2be2"}}),e.Notify.info(n)}},4390:function(n,r,t){t.d(r,{IQ:function(){return f},Tn:function(){return p},k1:function(){return i},on:function(){return o},vd:function(){return s}});var e=t(5861),a=t(4687),c=t.n(a),u=t(1591);u.Z.defaults.baseURL="https://api.themoviedb.org",u.Z.defaults.params={api_key:"d5170ea2407a5ced420ab5693f361d7d"};var i=function(){var n=(0,e.Z)(c().mark((function n(){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/trending/movie/week");case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/movie/".concat(r));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(r,t){var e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/search/movie?query=".concat(r,"&page=").concat(t));case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/movie/".concat(r,"/credits"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("3/movie/".concat(r,"/reviews"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=243.54a7c44e.chunk.js.map