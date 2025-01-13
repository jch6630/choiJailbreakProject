/*! For license information please see 742.b8fe0932.chunk.js.LICENSE.txt */
(self.webpackChunkcjp=self.webpackChunkcjp||[]).push([[742],{5399:(t,n,e)=>{"use strict";e.d(n,{db:()=>a});var i=e(7064),o=e(5472);const r=(0,i.Wp)({apiKey:"AIzaSyBgWDtRHagCZygvtk3oz6VQZBL6QkARMoQ",authDomain:"mr-choi-jailbreak-project.firebaseapp.com",projectId:"mr-choi-jailbreak-project",storageBucket:"mr-choi-jailbreak-project.firebasestorage.app",messagingSenderId:"870082342910",appId:"1:870082342910:web:a2f089241f45a8d8995aaf"}),a=(0,o.aU)(r)},8742:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>W});var i,o,r,a,s,c,h,d,l,u,p,f,v=e(9379),x=e(7528),g=e(5043),m=e(7265),_=e(5496),y=e.n(_),w=e(5464),b=e(5399),P=e(5472),k=e(579);const j=w.Ay.div(i||(i=(0,x.A)(["\n  padding: 5vh 0;\n  height: auto;\n  width: 60vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #f4f6f9;\n\n  @media (max-width: 768px) {\n    width: 90vw;\n    padding: 10vh 0;\n  }\n"]))),C=w.Ay.div(o||(o=(0,x.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 90%;\n"]))),E=w.Ay.div(r||(r=(0,x.A)(["\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  justify-content: center;\n  background-color: #ffffff;\n  padding: 1.5vw;\n  margin-bottom: 2vh;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n\n  @media (max-width: 768px) {\n    padding: 4vw;\n  }\n"]))),D=w.Ay.textarea(a||(a=(0,x.A)(["\n  width: 90%;\n  height: 40px;\n  margin-top: 10px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  resize: none;\n  font-size: 16px;\n  background-color: #fafafa;\n\n  @media (max-width: 768px) {\n    font-size: 14px;\n    height: 30px;\n  }\n\n  &:focus {\n    border-color: #4caf50;\n    outline: none;\n  }\n"]))),A=w.Ay.div(s||(s=(0,x.A)(["\n  display: flex;\n  width: 100%;\n  margin-top: 10px;\n  gap: 10px;\n  display: flex;\n  flex-direction: column; /* \ubc84\ud2bc\ub4e4\uc744 \uc911\uc559 \uc815\ub82c */\n  align-items: center;\n\n  @media (max-width: 768px) {\n    gap: 10px;\n  }\n"]))),T=w.Ay.button(c||(c=(0,x.A)(["\n  background-color: #d3d3d3;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 12px 0;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  width: 90%; /* \ubc84\ud2bc\ub4e4\uc774 \uac19\uc740 \ub108\ube44\ub85c \ub9de\ucdb0\uc9c0\ub3c4\ub85d */\n\n  @media (max-width: 768px) {\n    font-size: 14px;\n    padding: 10px 0;\n  }\n\n  &#saveBtn {\n    background-color: #8339b3;\n  }\n  &#saveBtn:hover {\n    background-color: #45a049;\n  }\n\n  &:hover {\n    background-color: #45a049;\n  }\n"]))),M=(0,w.Ay)(m.N_)(h||(h=(0,x.A)(["\n  text-decoration: none;\n  text-align: center;\n  color: #fff;\n  background-color: #3366cc;\n  border: none;\n  border-radius: 8px;\n  padding: 12px 0;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  width: 90%; /* \ubc84\ud2bc\ub4e4\uc774 \uac19\uc740 \ub108\ube44\ub85c \ub9de\ucdb0\uc9c0\ub3c4\ub85d */\n\n  @media (max-width: 768px) {\n    font-size: 14px;\n  }\n\n  transition: background-color 0.3s;\n  &:hover {\n    background-color: #264d99;\n  }\n"]))),O=w.Ay.div(d||(d=(0,x.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  background-color: #fff;\n  margin-top: 10px;\n  width: 95%;\n"]))),L=w.Ay.div(l||(l=(0,x.A)(["\n  width: 100%;\n  aspect-ratio: 1;\n  position: relative;\n  overflow: hidden;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center; /* \uce94\ubc84\uc2a4\ub97c \uc911\uc559\uc5d0 \uc815\ub82c */\n  margin-top: 10px;\n"]))),R=(0,w.Ay)(y())(u||(u=(0,x.A)(["\n  width: 90% !important;\n  aspect-ratio: 1;\n  display: block;\n  margin: 0px;\n  object-fit: contain; /* \uce94\ubc84\uc2a4\ub97c \ubd80\ubaa8 \ud06c\uae30\uc5d0 \ub9de\uac8c \uc870\uc815 */\n"]))),S=w.Ay.div(p||(p=(0,x.A)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),z=w.Ay.div(f||(f=(0,x.A)(["\n  background: #ffffff;\n  padding: 20px;\n  border-radius: 10px;\n  width: 450px;\n  text-align: center;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n\n  @media (max-width: 768px) {\n    width: 90%;\n  }\n"])));const W=function(){const[t,n]=(0,g.useState)({name:"",add:"",birth:"",phone:"",sign:"",time:""}),e=(0,g.useRef)(),[i,o]=(0,g.useState)(null),[r,a]=(0,g.useState)(!1),s=(new Date).getTime().toString(),c=(0,m.Zp)(),h=e=>{n((0,v.A)((0,v.A)({},t),{},{[e.target.name]:e.target.value}))},d=(0,g.useCallback)((async()=>{try{await(0,P.gS)((0,P.rJ)(b.db,"List"),t),alert("\uc800\uc7a5 \uc131\uacf5"),c("/List")}catch(n){console.error("\uc800\uc7a5 \uc2e4\ud328:",n),alert("\uc800\uc7a5\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.")}finally{a(!1)}}),[t,c]);return(0,k.jsxs)(j,{children:[(0,k.jsxs)(C,{children:[(0,k.jsxs)(E,{children:[(0,k.jsx)("p",{children:"\uc774\ub984\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694."}),(0,k.jsx)(D,{name:"name",value:t.name,onChange:h,placeholder:"\uc774\ub984\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694.",maxLength:5})]}),(0,k.jsxs)(E,{children:[(0,k.jsx)("p",{children:"\uc8fc\uc18c\ub97c \uc791\uc131\ud574\uc8fc\uc138\uc694."}),(0,k.jsx)(D,{name:"add",value:t.add,onChange:h,placeholder:"\uc8fc\uc18c\ub97c \uc791\uc131\ud574\uc8fc\uc138\uc694.",maxLength:50})]}),(0,k.jsxs)(E,{children:[(0,k.jsx)("p",{children:"\uc0dd\ub144\uc6d4\uc77c\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694."}),(0,k.jsx)(D,{name:"birth",value:t.birth,onChange:h,placeholder:"\uc0dd\ub144\uc6d4\uc77c 8\uc790\ub9ac\ub97c \uc791\uc131\ud574\uc8fc\uc138\uc694. Ex)20250108",maxLength:8})]}),(0,k.jsxs)(E,{children:[(0,k.jsx)("p",{children:"\ud578\ub4dc\ud3f0\ubc88\ud638\ub97c \uc791\uc131\ud574\uc8fc\uc138\uc694."}),(0,k.jsx)(D,{name:"phone",value:t.phone,onChange:h,placeholder:"-\uc5c6\uc774 \ud578\ub4dc\ud3f0\ubc88\ud638 11\uc790\ub9ac\ub97c \uc791\uc131\ud574\uc8fc\uc138\uc694. Ex)01012345678",maxLength:11})]}),(0,k.jsxs)(O,{children:[(0,k.jsx)("p",{children:"\uc11c\uba85(\uc0ac\uc778)\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694."}),(0,k.jsx)(L,{children:(0,k.jsx)(R,{penColor:"black",canvasProps:{className:"signature"},ref:e,onEnd:()=>{o(e.current.toDataURL()),n((0,v.A)((0,v.A)({},t),{},{sign:e.current.toDataURL("image/png"),time:s}))}})}),(0,k.jsx)("button",{onClick:()=>{e.current.clear(),o(null),n((t=>(0,v.A)((0,v.A)({},t),{},{sign:""})))},children:"Clear"})]}),(0,k.jsxs)(A,{children:[(0,k.jsx)(T,{id:"saveBtn",onClick:()=>{t.name&&t.add&&t.birth&&t.phone&&t.sign?/^\d{8}$/.test(t.birth)?/^\d{11}$/.test(t.phone)?a(!0):alert("\ud578\ub4dc\ud3f0 \ubc88\ud638\ub294 11\uc790\ub9ac \uc22b\uc790\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694. \uc608: 01012345678"):alert("\uc0dd\ub144\uc6d4\uc77c\uc740 8\uc790\ub9ac \uc22b\uc790\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694. \uc608: 20250108"):alert("\ubaa8\ub4e0 \ud544\ub4dc\ub97c \ucc44\uc6cc\uc8fc\uc138\uc694.")},children:"\uc800\uc7a5"}),(0,k.jsx)(T,{onClick:()=>window.close(),children:"\ucde8\uc18c"}),(0,k.jsx)(M,{to:"/List",children:"\uc791\uc131\ub41c \ub3d9\uc758\uba85\ubd80 \ubcf4\uae30"})]})]}),r&&(0,k.jsx)(S,{children:(0,k.jsxs)(z,{children:[(0,k.jsx)("h3",{children:"\uc815\ubcf4 \ud655\uc778"}),(0,k.jsxs)("p",{children:["\uc774\ub984: ",t.name]}),(0,k.jsxs)("p",{children:["\uc8fc\uc18c: ",t.add]}),(0,k.jsxs)("p",{children:["\uc0dd\ub144\uc6d4\uc77c: ",t.birth]}),(0,k.jsxs)("p",{children:["\ud578\ub4dc\ud3f0\ubc88\ud638: ",t.phone]}),(0,k.jsx)("img",{src:i,alt:"\uc11c\uba85",style:{width:"100%",height:"100px",objectFit:"contain",border:"1px solid #ccc"}}),(0,k.jsx)("p",{children:"\uc815\ubcf4\uac00 \uc815\ud655\ud55c\uc9c0 \ud655\uc778\ud574\uc8fc\uc138\uc694."}),(0,k.jsxs)(A,{children:[(0,k.jsx)(T,{bgcolor:"#4CAF50",onClick:d,children:"\uc800\uc7a5"}),(0,k.jsx)(T,{bgcolor:"#f44336",onClick:()=>{a(!1)},children:"\ucde8\uc18c"})]})]})})]})}},1497:(t,n,e)=>{"use strict";var i=e(3218);function o(){}function r(){}r.resetWarningCache=o,t.exports=function(){function t(t,n,e,o,r,a){if(a!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return t}t.isRequired=t;var e={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:r,resetWarningCache:o};return e.PropTypes=e,e}},5173:(t,n,e)=>{t.exports=e(1497)()},3218:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5496:function(t,n,e){var i,o,r,a;t.exports=(i=e(5173),o=e(5043),r=e(9558),a=e(2576),function(t){function n(i){if(e[i])return e[i].exports;var o=e[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,n){var e={};for(var i in t)n.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function a(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function s(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var c=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},h=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),d=i(e(1)),l=e(2),u=i(l),p=i(e(3)),f=i(e(4)),v=function(t){function n(){var t,e,i;r(this,n);for(var s=arguments.length,c=Array(s),h=0;h<s;h++)c[h]=arguments[h];return e=i=a(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(c))),i._sigPad=null,i._excludeOurProps=function(){var t=i.props;return t.canvasProps,t.clearOnResize,o(t,["canvasProps","clearOnResize"])},i.getCanvas=function(){return i._canvas},i.getTrimmedCanvas=function(){var t=document.createElement("canvas");return t.width=i._canvas.width,t.height=i._canvas.height,t.getContext("2d").drawImage(i._canvas,0,0),(0,f.default)(t)},i.getSignaturePad=function(){return i._sigPad},i._checkClearOnResize=function(){i.props.clearOnResize&&i._resizeCanvas()},i._resizeCanvas=function(){var t=i.props.canvasProps||{},n=t.width,e=t.height;if(!n||!e){var o=i._canvas,r=Math.max(window.devicePixelRatio||1,1);n||(o.width=o.offsetWidth*r),e||(o.height=o.offsetHeight*r),o.getContext("2d").scale(r,r),i.clear()}},i.on=function(){return window.addEventListener("resize",i._checkClearOnResize),i._sigPad.on()},i.off=function(){return window.removeEventListener("resize",i._checkClearOnResize),i._sigPad.off()},i.clear=function(){return i._sigPad.clear()},i.isEmpty=function(){return i._sigPad.isEmpty()},i.fromDataURL=function(t,n){return i._sigPad.fromDataURL(t,n)},i.toDataURL=function(t,n){return i._sigPad.toDataURL(t,n)},i.fromData=function(t){return i._sigPad.fromData(t)},i.toData=function(){return i._sigPad.toData()},a(i,e)}return s(n,t),h(n,[{key:"componentDidMount",value:function(){this._sigPad=new p.default(this._canvas,this._excludeOurProps()),this._resizeCanvas(),this.on()}},{key:"componentWillUnmount",value:function(){this.off()}},{key:"componentDidUpdate",value:function(){Object.assign(this._sigPad,this._excludeOurProps())}},{key:"render",value:function(){var t=this,n=this.props.canvasProps;return u.default.createElement("canvas",c({ref:function(n){t._canvas=n}},n))}}]),n}(l.Component);v.propTypes={velocityFilterWeight:d.default.number,minWidth:d.default.number,maxWidth:d.default.number,minDistance:d.default.number,dotSize:d.default.oneOfType([d.default.number,d.default.func]),penColor:d.default.string,throttle:d.default.number,onEnd:d.default.func,onBegin:d.default.func,canvasProps:d.default.object,clearOnResize:d.default.bool},v.defaultProps={clearOnResize:!0},n.default=v},function(t,n){t.exports=i},function(t,n){t.exports=o},function(t,n){t.exports=r},function(t,n){t.exports=a}]))},2576:function(t){t.exports=function(t){function n(i){if(e[i])return e[i].exports;var o=e[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n){"use strict";function e(t){var n=t.getContext("2d"),e=t.width,i=t.height,o=n.getImageData(0,0,e,i).data,s=r(!0,e,i,o),c=r(!1,e,i,o),h=a(!0,e,i,o),d=a(!1,e,i,o)-h+1,l=c-s+1,u=n.getImageData(h,s,d,l);return t.width=d,t.height=l,n.clearRect(0,0,d,l),n.putImageData(u,0,0),t}function i(t,n,e,i){return{red:i[4*(e*n+t)],green:i[4*(e*n+t)+1],blue:i[4*(e*n+t)+2],alpha:i[4*(e*n+t)+3]}}function o(t,n,e,o){return i(t,n,e,o).alpha}function r(t,n,e,i){for(var r=t?1:-1,a=t?0:e-1;t?a<e:a>-1;a+=r)for(var s=0;s<n;s++)if(o(s,a,n,i))return a;return null}function a(t,n,e,i){for(var r=t?1:-1,a=t?0:n-1;t?a<n:a>-1;a+=r)for(var s=0;s<e;s++)if(o(a,s,n,i))return a;return null}Object.defineProperty(n,"__esModule",{value:!0}),n.default=e}])},9558:(t,n,e)=>{"use strict";function i(t,n,e){this.x=t,this.y=n,this.time=e||(new Date).getTime()}function o(t,n,e,i){this.startPoint=t,this.control1=n,this.control2=e,this.endPoint=i}function r(t,n){var e=this,i=n||{};this.velocityFilterWeight=i.velocityFilterWeight||.7,this.minWidth=i.minWidth||.5,this.maxWidth=i.maxWidth||2.5,this.throttle="throttle"in i?i.throttle:16,this.minDistance="minDistance"in i?i.minDistance:5,this.throttle?this._strokeMoveUpdate=function(t,n,e){var i,o,r,a=null,s=0;e||(e={});var c=function(){s=!1===e.leading?0:Date.now(),a=null,r=t.apply(i,o),a||(i=o=null)};return function(){var h=Date.now();s||!1!==e.leading||(s=h);var d=n-(h-s);return i=this,o=arguments,d<=0||d>n?(a&&(clearTimeout(a),a=null),s=h,r=t.apply(i,o),a||(i=o=null)):a||!1===e.trailing||(a=setTimeout(c,d)),r}}(r.prototype._strokeUpdate,this.throttle):this._strokeMoveUpdate=r.prototype._strokeUpdate,this.dotSize=i.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=i.penColor||"black",this.backgroundColor=i.backgroundColor||"rgba(0,0,0,0)",this.onBegin=i.onBegin,this.onEnd=i.onEnd,this._canvas=t,this._ctx=t.getContext("2d"),this.clear(),this._handleMouseDown=function(t){1===t.which&&(e._mouseButtonDown=!0,e._strokeBegin(t))},this._handleMouseMove=function(t){e._mouseButtonDown&&e._strokeMoveUpdate(t)},this._handleMouseUp=function(t){1===t.which&&e._mouseButtonDown&&(e._mouseButtonDown=!1,e._strokeEnd(t))},this._handleTouchStart=function(t){if(1===t.targetTouches.length){var n=t.changedTouches[0];e._strokeBegin(n)}},this._handleTouchMove=function(t){t.preventDefault();var n=t.targetTouches[0];e._strokeMoveUpdate(n)},this._handleTouchEnd=function(t){t.target===e._canvas&&(t.preventDefault(),e._strokeEnd(t))},this.on()}e.r(n),e.d(n,{default:()=>a}),i.prototype.velocityFrom=function(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):1},i.prototype.distanceTo=function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))},i.prototype.equals=function(t){return this.x===t.x&&this.y===t.y&&this.time===t.time},o.prototype.length=function(){for(var t=0,n=void 0,e=void 0,i=0;i<=10;i+=1){var o=i/10,r=this._point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),a=this._point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){var s=r-n,c=a-e;t+=Math.sqrt(s*s+c*c)}n=r,e=a}return t},o.prototype._point=function(t,n,e,i,o){return n*(1-t)*(1-t)*(1-t)+3*e*(1-t)*(1-t)*t+3*i*(1-t)*t*t+o*t*t*t},r.prototype.clear=function(){var t=this._ctx,n=this._canvas;t.fillStyle=this.backgroundColor,t.clearRect(0,0,n.width,n.height),t.fillRect(0,0,n.width,n.height),this._data=[],this._reset(),this._isEmpty=!0},r.prototype.fromDataURL=function(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=new Image,o=e.ratio||window.devicePixelRatio||1,r=e.width||this._canvas.width/o,a=e.height||this._canvas.height/o;this._reset(),i.src=t,i.onload=function(){n._ctx.drawImage(i,0,0,r,a)},this._isEmpty=!1},r.prototype.toDataURL=function(t){var n;if("image/svg+xml"===t)return this._toSVG();for(var e=arguments.length,i=Array(e>1?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o];return(n=this._canvas).toDataURL.apply(n,[t].concat(i))},r.prototype.on=function(){this._handleMouseEvents(),this._handleTouchEvents()},r.prototype.off=function(){this._canvas.removeEventListener("mousedown",this._handleMouseDown),this._canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this._canvas.removeEventListener("touchstart",this._handleTouchStart),this._canvas.removeEventListener("touchmove",this._handleTouchMove),this._canvas.removeEventListener("touchend",this._handleTouchEnd)},r.prototype.isEmpty=function(){return this._isEmpty},r.prototype._strokeBegin=function(t){this._data.push([]),this._reset(),this._strokeUpdate(t),"function"===typeof this.onBegin&&this.onBegin(t)},r.prototype._strokeUpdate=function(t){var n=t.clientX,e=t.clientY,i=this._createPoint(n,e),o=this._data[this._data.length-1],r=o&&o[o.length-1],a=r&&i.distanceTo(r)<this.minDistance;if(!r||!a){var s=this._addPoint(i),c=s.curve,h=s.widths;c&&h&&this._drawCurve(c,h.start,h.end),this._data[this._data.length-1].push({x:i.x,y:i.y,time:i.time,color:this.penColor})}},r.prototype._strokeEnd=function(t){var n=this.points.length>2,e=this.points[0];if(!n&&e&&this._drawDot(e),e){var i=this._data[this._data.length-1],o=i[i.length-1];e.equals(o)||i.push({x:e.x,y:e.y,time:e.time,color:this.penColor})}"function"===typeof this.onEnd&&this.onEnd(t)},r.prototype._handleMouseEvents=function(){this._mouseButtonDown=!1,this._canvas.addEventListener("mousedown",this._handleMouseDown),this._canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)},r.prototype._handleTouchEvents=function(){this._canvas.style.msTouchAction="none",this._canvas.style.touchAction="none",this._canvas.addEventListener("touchstart",this._handleTouchStart),this._canvas.addEventListener("touchmove",this._handleTouchMove),this._canvas.addEventListener("touchend",this._handleTouchEnd)},r.prototype._reset=function(){this.points=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor},r.prototype._createPoint=function(t,n,e){var o=this._canvas.getBoundingClientRect();return new i(t-o.left,n-o.top,e||(new Date).getTime())},r.prototype._addPoint=function(t){var n=this.points;if(n.push(t),n.length>2){3===n.length&&n.unshift(n[0]);var e=this._calculateCurveControlPoints(n[0],n[1],n[2]).c2,i=this._calculateCurveControlPoints(n[1],n[2],n[3]).c1,r=new o(n[1],e,i,n[2]),a=this._calculateCurveWidths(r);return n.shift(),{curve:r,widths:a}}return{}},r.prototype._calculateCurveControlPoints=function(t,n,e){var o=t.x-n.x,r=t.y-n.y,a=n.x-e.x,s=n.y-e.y,c=(t.x+n.x)/2,h=(t.y+n.y)/2,d=(n.x+e.x)/2,l=(n.y+e.y)/2,u=Math.sqrt(o*o+r*r),p=Math.sqrt(a*a+s*s),f=p/(u+p),v=d+(c-d)*f,x=l+(h-l)*f,g=n.x-v,m=n.y-x;return{c1:new i(c+g,h+m),c2:new i(d+g,l+m)}},r.prototype._calculateCurveWidths=function(t){var n=t.startPoint,e=t.endPoint,i={start:null,end:null},o=this.velocityFilterWeight*e.velocityFrom(n)+(1-this.velocityFilterWeight)*this._lastVelocity,r=this._strokeWidth(o);return i.start=this._lastWidth,i.end=r,this._lastVelocity=o,this._lastWidth=r,i},r.prototype._strokeWidth=function(t){return Math.max(this.maxWidth/(t+1),this.minWidth)},r.prototype._drawPoint=function(t,n,e){var i=this._ctx;i.moveTo(t,n),i.arc(t,n,e,0,2*Math.PI,!1),this._isEmpty=!1},r.prototype._drawCurve=function(t,n,e){var i=this._ctx,o=e-n,r=Math.floor(t.length());i.beginPath();for(var a=0;a<r;a+=1){var s=a/r,c=s*s,h=c*s,d=1-s,l=d*d,u=l*d,p=u*t.startPoint.x;p+=3*l*s*t.control1.x,p+=3*d*c*t.control2.x,p+=h*t.endPoint.x;var f=u*t.startPoint.y;f+=3*l*s*t.control1.y,f+=3*d*c*t.control2.y,f+=h*t.endPoint.y;var v=n+h*o;this._drawPoint(p,f,v)}i.closePath(),i.fill()},r.prototype._drawDot=function(t){var n=this._ctx,e="function"===typeof this.dotSize?this.dotSize():this.dotSize;n.beginPath(),this._drawPoint(t.x,t.y,e),n.closePath(),n.fill()},r.prototype._fromData=function(t,n,e){for(var o=0;o<t.length;o+=1){var r=t[o];if(r.length>1)for(var a=0;a<r.length;a+=1){var s=r[a],c=new i(s.x,s.y,s.time),h=s.color;if(0===a)this.penColor=h,this._reset(),this._addPoint(c);else if(a!==r.length-1){var d=this._addPoint(c),l=d.curve,u=d.widths;l&&u&&n(l,u,h)}}else this._reset(),e(r[0])}},r.prototype._toSVG=function(){var t=this,n=this._data,e=this._canvas,i=Math.max(window.devicePixelRatio||1,1),o=e.width/i,r=e.height/i,a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttributeNS(null,"width",e.width),a.setAttributeNS(null,"height",e.height),this._fromData(n,(function(t,n,e){var i=document.createElement("path");if(!isNaN(t.control1.x)&&!isNaN(t.control1.y)&&!isNaN(t.control2.x)&&!isNaN(t.control2.y)){var o="M "+t.startPoint.x.toFixed(3)+","+t.startPoint.y.toFixed(3)+" C "+t.control1.x.toFixed(3)+","+t.control1.y.toFixed(3)+" "+t.control2.x.toFixed(3)+","+t.control2.y.toFixed(3)+" "+t.endPoint.x.toFixed(3)+","+t.endPoint.y.toFixed(3);i.setAttribute("d",o),i.setAttribute("stroke-width",(2.25*n.end).toFixed(3)),i.setAttribute("stroke",e),i.setAttribute("fill","none"),i.setAttribute("stroke-linecap","round"),a.appendChild(i)}}),(function(n){var e=document.createElement("circle"),i="function"===typeof t.dotSize?t.dotSize():t.dotSize;e.setAttribute("r",i),e.setAttribute("cx",n.x),e.setAttribute("cy",n.y),e.setAttribute("fill",n.color),a.appendChild(e)}));var s='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 '+o+" "+r+'" width="'+o+'" height="'+r+'">',c=a.innerHTML;if(void 0===c){var h=document.createElement("dummy"),d=a.childNodes;h.innerHTML="";for(var l=0;l<d.length;l+=1)h.appendChild(d[l].cloneNode(!0));c=h.innerHTML}return"data:image/svg+xml;base64,"+btoa(s+c+"</svg>")},r.prototype.fromData=function(t){var n=this;this.clear(),this._fromData(t,(function(t,e){return n._drawCurve(t,e.start,e.end)}),(function(t){return n._drawDot(t)})),this._data=t},r.prototype.toData=function(){return this._data};const a=r}}]);
//# sourceMappingURL=742.b8fe0932.chunk.js.map