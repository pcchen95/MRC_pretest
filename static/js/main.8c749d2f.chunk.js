(this.webpackJsonppretest=this.webpackJsonppretest||[]).push([[0],{17:function(n,t,e){},21:function(n,t,e){},22:function(n,t,e){"use strict";e.r(t);var r,i,a,o,c=e(1),s=e(9),d=e.n(s),p=(e(17),e(4)),u=e(2),l=function(n){var t=function(n){var t=(n||{}).game,e="limit=30";return t&&(e+="&game=".concat(t)),e}(n);return fetch("".concat("https://api.twitch.tv/kraken/streams/","?").concat(t),{headers:{"Client-ID":"tdvc2nlt9v001vzbdgzoon7av64cd2",Accept:"application/vnd.twitchtv.v5+json"}}).then((function(n){return n.json()}))},b=e(3),j=e(0),x=b.a.div(r||(r=Object(u.a)(["\n  position: sticky;\n  top: 0;\n  width: 100%;\n  height: 50px;\n  background: gray;\n  display: flex;\n  padding: 10px 0 10px 20px;\n  z-index: 1;\n"]))),h=b.a.div(i||(i=Object(u.a)(["\n  position: relative;\n  width: 500px;\n  height: 30px;\n  background: white;\n  border: 1px gray solid;\n"]))),g=b.a.input(a||(a=Object(u.a)(["\n  height: 100%;\n  width: 100%;\n  border: 0px;\n  padding-left: 10px;\n"]))),f=b.a.div(o||(o=Object(u.a)(['\n  position: absolute;\n  top: 50%;\n  right: 0;\n  width: 40px;\n  height: 30px;\n  transform: translate(0, -50%);\n  cursor: pointer;\n\n  &:before {\n    content: "";\n    position: absolute;\n    top: 50%;\n    right: 0;\n    width: 20px;\n    height: 3px;\n    border-radius: 5px;\n    background: grey;\n    transform: translate(-50%, -50%) rotate(45deg);\n  }\n\n  &:after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    right: 0;\n    width: 20px;\n    height: 3px;\n    border-radius: 5px;\n    background: grey;\n    transform: translate(-50%, -50%) rotate(-45deg);\n  }\n'])));function v(n){var t=n.value,e=n.setValue,r=n.handleEvent,i=n.setProducts;return Object(j.jsxs)(h,{children:[Object(j.jsx)(g,{placeholder:"Search",value:t,onChange:function(n){return e(n.target.value)},onKeyPress:r}),Object(j.jsx)(f,{onClick:function(){e(""),l().then((function(n){return i(n.streams)}))}})]})}var O,m,w,k,y,P,I=function(n){var t=n.products,e=n.setProducts,r=Object(c.useState)(""),i=Object(p.a)(r,2),a=i[0],o=i[1];return Object(j.jsx)(x,{children:Object(j.jsx)(v,{value:a,setValue:o,setProducts:e,handleEvent:function(n){if("Enter"===n.key){var r=[];t.forEach((function(n){var t=a.toLowerCase();n.channel.display_name.toLowerCase().indexOf(t)>=0&&r.push(n)})),e(r)}}})})},C=b.a.div(O||(O=Object(u.a)(["\n  width: 100%;\n  height: 400px;\n  position: relative;\n"]))),E=b.a.div(m||(m=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  ","\n"])),(function(n){return n.image&&'\n      background: url("'.concat(n.image,'") no-repeat center/cover;\n    ')})),z=b.a.div(w||(w=Object(u.a)(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 50%;\n  left: 10px;\n  transform: translate(0, -50%);\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: #9898a1a8;\n  font-size: 24px;\n  cursor: pointer;\n"]))),S=b.a.div(k||(k=Object(u.a)(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 50%;\n  right: 10px;\n  transform: translate(0, -50%);\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: #9898a1a8;\n  font-size: 24px;\n  cursor: pointer;\n"]))),_=b.a.div(y||(y=Object(u.a)(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  bottom: 10px;\n  right: 0;\n  left: 0;\n  height: 20px;\n  transform: translate(0, -50%);\n"]))),A=b.a.div(P||(P=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  background: white;\n  border-radius: 50%;\n  border: 1px gray solid;\n  cursor: pointer;\n\n  & + div {\n    margin-left: 5px;\n  }\n\n  ","\n"])),(function(n){return n.page===n.index&&"\n    background: grey;\n    border: 1px white solid;\n    color: white;\n  "}));function D(n){var t=n.picture;return Object(j.jsx)(E,{image:t})}function L(n){var t=n.handleEvent;return Object(j.jsx)(S,{onClick:t,children:">"})}function J(n){var t=n.handleEvent;return Object(j.jsx)(z,{onClick:t,children:"<"})}function V(n){var t=n.page,e=n.setPage;return Object(j.jsx)(_,{children:[1,2,3,4,5,6,7,8,9,10].map((function(n){return Object(j.jsx)(A,{page:t,index:n,onClick:function(){e(n)},children:n},n)}))})}var B,F=function(){var n=Object(c.useRef)({1:"img1.jpg",2:"img2.jpg",3:"img3.jpg",4:"img4.jpg",5:"img1.jpg",6:"img2.jpg",7:"img3.jpg",8:"img4.jpg",9:"img1.jpg",10:"img2.jpg"}),t=Object(c.useState)(1),e=Object(p.a)(t,2),r=e[0],i=e[1];return Object(j.jsxs)(C,{children:[Object(j.jsx)(D,{picture:n.current[r]}),Object(j.jsx)(L,{handleEvent:function(){return i(r<10?r+1:1)}}),Object(j.jsx)(J,{handleEvent:function(){return i(r>1?r-1:10)}}),Object(j.jsx)(V,{page:r,setPage:i})]})},G=b.a.div(B||(B=Object(u.a)(["\n  width: 100%;\n  height: 50px;\n  background: gray;\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  margin-top: 10px;\n"])));var K,R,T=function(){var n=7200,t=Object(c.useState)(n),e=Object(p.a)(t,2),r=e[0],i=e[1];return Object(c.useEffect)((function(){var t=Date.now();setInterval((function(){i((function(){var e=n-(Date.now()-t)/1e3;return e>=0?e:0}))}),1e3)}),[n]),Object(j.jsxs)(G,{children:["\u5012\u6578\u8a08\u6642 ",new Date(1e3*r).toISOString().substr(11,8)]})},q=b.a.div(K||(K=Object(u.a)(["\n  width: 180px;\n  margin-top: 10px;\n  margin-right: 20px;\n  padding: 0 10px;\n"]))),H=b.a.div(R||(R=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 50px;\n  background: white;\n  border: black 1px solid;\n  border-radius: 8px;\n  margin-bottom: 5px;\n  cursor: pointer;\n"])));function M(n){var t=n.name,e=n.setProducts;return Object(j.jsx)(H,{onClick:function(){l("All"===t?"":{game:t}).then((function(n){return e(n.streams)}))},children:t})}var N,Q,U,W,X,Y=function(n){var t=n.setProducts;return Object(j.jsxs)(q,{children:[Object(j.jsx)(M,{name:"All",setProducts:t}),Object(j.jsx)(M,{name:"Just Chatting",setProducts:t}),Object(j.jsx)(M,{name:"Sports",setProducts:t}),Object(j.jsx)(M,{name:"Grand Theft Auto V",setProducts:t}),Object(j.jsx)(M,{name:"League of Legends",setProducts:t})]})},Z=b.a.div(N||(N=Object(u.a)(["\n  flex: 1;\n  align-items: flex-start;\n  margin-top: 10px;\n  display: flex;\n  justify-content: flex-start;\n  flex-flow: wrap;\n"]))),$=b.a.div(Q||(Q=Object(u.a)(["\n  width: 200px;\n  height: 180px;\n  background: white;\n  border: 1px black solid;\n  padding: 10px;\n  margin: 0 10px 10px 10px;\n  cursor: pointer;\n  border-radius: 5px;\n\n  &:hover {\n    transform: scale(1.03);\n  }\n"]))),nn=b.a.div(U||(U=Object(u.a)(["\n  width: 100%;\n  height: 120px;\n\n  ","\n"])),(function(n){return"\n    background: url('".concat(n.img,"') no-repeat center/cover\n  ")})),tn=b.a.div(W||(W=Object(u.a)(["\n  width: 100%;\n  font-size: 16px;\n  color: black;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"]))),en=b.a.div(X||(X=Object(u.a)(["\n  width: 100%;\n  font-size: 14px;\n  color: #141497;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"])));function rn(n){var t=n.image,e=n.name,r=n.game,i=n.handleEvent;return Object(j.jsxs)($,{onClick:i,children:[Object(j.jsx)(nn,{img:t}),Object(j.jsx)(tn,{children:e}),Object(j.jsx)(en,{children:r})]})}var an,on,cn,sn,dn,pn,un,ln,bn=function(n){var t=n.products,e=n.setProductInfo;return Object(j.jsx)(Z,{children:t&&t.map((function(n){return Object(j.jsx)(rn,{image:n.preview.medium,name:n.channel.display_name,game:n.game,id:n._id,handleEvent:function(){return e(n)}},n._id)}))})},jn=b.a.div(an||(an=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: #80808085;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n"]))),xn=b.a.div(on||(on=Object(u.a)(["\n  position: relative;\n  width: 500px;\n  background: white;\n  border: 1px black solid;\n  padding: 10px;\n  margin-bottom: 10px;\n"]))),hn=b.a.div(cn||(cn=Object(u.a)(["\n  width: 100%;\n  height: 300px;\n\n  ","\n"])),(function(n){return"\n    background: url('".concat(n.img,"') no-repeat center/cover\n  ")})),gn=b.a.span(sn||(sn=Object(u.a)(["\n  font-size: 16px;\n  color: #141497;\n"]))),fn=b.a.div(dn||(dn=Object(u.a)(["\n  font-size: 16px;\n  color: black;\n"]))),vn=b.a.span(pn||(pn=Object(u.a)(["\n  font-size: 14px;\n  color: #141497;\n"]))),On=b.a.div(un||(un=Object(u.a)(["\n  font-size: 14px;\n  color: #141497;\n"]))),mn=b.a.div(ln||(ln=Object(u.a)(['\n  position: absolute;\n  top: -20px;\n  right: -20px;\n  transform: translate(50%, -50%);\n  width: 30px;\n  height: 30px;\n  border: 1px black solid;\n  border-radius: 50%;\n  background: white;\n  cursor: pointer;\n\n  &:before {\n    content: "";\n    position: absolute;\n    top: 50%;\n    right: 50%;\n    width: 15px;\n    height: 3px;\n    border-radius: 5px;\n    background: black;\n    transform: translate(50%, -50%) rotate(45deg);\n  }\n\n  &:after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    right: 50%;\n    width: 15px;\n    height: 3px;\n    border-radius: 5px;\n    background: black;\n    transform: translate(50%, -50%) rotate(-45deg);\n  }\n'])));function wn(n){var t=n.productInfo,e=n.setProductInfo;return Object(j.jsxs)(xn,{children:[Object(j.jsx)(mn,{onClick:function(){return e()}}),Object(j.jsx)(hn,{img:t.preview.large}),Object(j.jsx)(fn,{children:t.channel.status}),Object(j.jsx)(gn,{children:t.channel.display_name}),"\u30fb",Object(j.jsx)(vn,{children:t.game}),Object(j.jsxs)(On,{children:["viewers: ",t.viewers]})]})}var kn,yn=function(n){var t=n.productInfo,e=n.setProductInfo;return Object(j.jsx)(jn,{children:Object(j.jsx)(wn,{productInfo:t,setProductInfo:e})})},Pn=b.a.div(kn||(kn=Object(u.a)(['\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px black solid;\n  border-radius: 5px;\n  cursor: pointer;\n\n  &:before {\n    content: "";\n    border-top: 20px transparent solid;\n    border-right: 20px transparent solid;\n    border-bottom: 20px black solid;\n    border-left: 20px transparent solid;\n    transform: translate(0, -25%);\n  }\n'])));var In,Cn,En=function(){return Object(j.jsx)(Pn,{onClick:function(){return window.scroll({top:0,left:0,behavior:"smooth"})}})},zn=(e(21),b.a.div(In||(In=Object(u.a)(["\n  position: relative;\n  width: 1080px;\n"])))),Sn=b.a.div(Cn||(Cn=Object(u.a)(["\n  width: 100%;\n  display: flex;\n"])));var _n=function(){var n=Object(c.useState)(),t=Object(p.a)(n,2),e=t[0],r=t[1],i=Object(c.useState)(),a=Object(p.a)(i,2),o=a[0],s=a[1];return Object(c.useEffect)((function(){l().then((function(n){return r(n.streams)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(zn,{children:[Object(j.jsx)(I,{products:e,setProducts:r}),Object(j.jsx)(F,{}),Object(j.jsx)(T,{}),Object(j.jsxs)(Sn,{children:[Object(j.jsx)(Y,{setProducts:r}),Object(j.jsx)(bn,{products:e,setProductInfo:s})]}),Object(j.jsx)(En,{})]}),o&&Object(j.jsx)(yn,{productInfo:o,setProductInfo:s})]})};d.a.render(Object(j.jsx)(_n,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.8c749d2f.chunk.js.map