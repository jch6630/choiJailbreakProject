/*! For license information please see 742.cdb089e3.chunk.js.LICENSE.txt */
(self.webpackChunkcjp=self.webpackChunkcjp||[]).push([[742],{399:(t,e,n)=>{"use strict";n.d(e,{db:()=>a});var o=n(64),i=n(472);const r=(0,o.Wp)({apiKey:"AIzaSyBgWDtRHagCZygvtk3oz6VQZBL6QkARMoQ",authDomain:"mr-choi-jailbreak-project.firebaseapp.com",projectId:"mr-choi-jailbreak-project",storageBucket:"mr-choi-jailbreak-project.firebasestorage.app",messagingSenderId:"870082342910",appId:"1:870082342910:web:a2f089241f45a8d8995aaf"}),a=(0,i.aU)(r)},742:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>g});var o,i,r,a=n(555),s=n(528),c=n(43),h=(n(950),n(496)),l=n.n(h),u=n(464),d=n(399),p=n(472),f=n(579);const v=u.Ay.div(o||(o=(0,s.A)(["\n    padding: 5vh 0 5vh 0;\n    height: auto;\n    width: 60vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: #ccccee;\n"]))),m=u.Ay.div(i||(i=(0,s.A)(["\n    display: flex;\n    flex-direction: column;\n"]))),_=u.Ay.div(r||(r=(0,s.A)(["\n    height: 10vh;\n    width: 50vw;\n    display: flex;\n    flex-direction: column;\n    align-items: left;\n    justify-content: center;\n    background-color: #FFFFFF;\n    padding: 0 2vw 0 2vw;\n    margin-bottom: 2vh;\n"])));const g=function(){const[t,e]=(0,c.useState)({name:"",add:"",birth:"",phone:"",sign:"",time:""}),n=n=>{e((0,a.A)((0,a.A)({},t),{},{[n.target.name]:n.target.value}))},o=(0,c.useRef)(),[i,r]=(0,c.useState)(null),s=(new Date).getTime().toString();return(0,c.useEffect)((()=>{console.log(i)}),[i]),(0,f.jsxs)(v,{children:[(0,f.jsxs)(m,{children:[(0,f.jsxs)(_,{children:[(0,f.jsx)("p",{style:{marginTop:"0.1vh"},children:"\uc774\ub984\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694."}),(0,f.jsx)("textarea",{name:"name",value:t.name,onChange:n,placeholder:"\uc774\ub984\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694.",maxLength:5,style:{marginBottom:"0.1vh",resize:"none"}})]}),(0,f.jsxs)(_,{children:[(0,f.jsx)("p",{style:{marginTop:"0.1vh"},children:"\uc8fc\uc18c\ub97c \uc791\uc131\ud574\uc8fc\uc138\uc694."}),(0,f.jsx)("textarea",{name:"add",value:t.add,onChange:n,placeholder:"\uc8fc\uc18c\ub97c \uc791\uc131\ud574\uc8fc\uc138\uc694.",maxLength:50,style:{marginBottom:"0.1vh",resize:"none"}})]}),(0,f.jsxs)(_,{children:[(0,f.jsx)("p",{style:{marginTop:"0.1vh"},children:"\uc0dd\uc0dd\ub144\uc6d4\uc77c\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694."}),(0,f.jsx)("textarea",{name:"birth",value:t.birth,onChange:n,placeholder:"\uc0dd\ub144\uc6d4\uc77c 8\uc790\ub9ac\ub97c \uc791\uc131\ud574\uc8fc\uc138\uc694. Ex)20250108",maxLength:8,style:{marginBottom:"0.1vh",resize:"none"}})]}),(0,f.jsxs)(_,{children:[(0,f.jsx)("p",{style:{marginTop:"0.1vh"},children:"\ud578\ub4dc\ud3f0\ubc88\ud638\ub97c \uc791\uc131\ud574\uc8fc\uc138\uc694."}),(0,f.jsx)("textarea",{name:"phone",value:t.phone,onChange:n,placeholder:"-\uc5c6\uc774 \ud578\ub4dc\ud3f0\ubc88\ud638 11\uc790\ub9ac\ub97c \uc791\uc131\ud574\uc8fc\uc138\uc694. Ex)01012345678",maxLength:11,form:"number",style:{marginBottom:"0.1vh",resize:"none"}})]}),(0,f.jsx)(_,{style:{width:"50vw",height:"60vw"},children:(0,f.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[(0,f.jsx)("p",{style:{marginTop:"0.1vh"},children:"\uc11c\uba85(\uc0ac\uc778)\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694."}),(0,f.jsx)(l(),{penColor:"black",canvasProps:{className:"signature"},ref:o,onEnd:()=>{r(o.current.toDataURL()),e((0,a.A)((0,a.A)({},t),{},{sign:o.current.toDataURL("image/png"),time:s}))}}),(0,f.jsx)("button",{onClick:()=>{o.current.clear(),r(null)},children:"Clear"})]})})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("button",{className:"btnSave",onClick:()=>{(0,p.gS)((0,p.rJ)(d.db,"List"),t);console.log(t),alert("\uc800\uc7a5\uc131\uacf5")},style:{backgroundColor:"#8339B3",color:"#FFFFFF",borderBlockStyle:"hidden",borderRadius:"0.3vw",marginRight:" 0.5vw"},children:"\uc800\uc7a5"}),(0,f.jsx)("button",{onClick:()=>{console.log(t),alert("\ucde8\uc18c")},style:{backgroundColor:"#808080",color:"#FFFFFF",borderBlockStyle:"hidden",borderRadius:"0.3vw"},children:"\ucde8\uc18c"})]})]})}},497:(t,e,n)=>{"use strict";var o=n(218);function i(){}function r(){}r.resetWarningCache=i,t.exports=function(){function t(t,e,n,i,r,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:r,resetWarningCache:i};return n.PropTypes=n,n}},173:(t,e,n)=>{t.exports=n(497)()},218:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},496:function(t,e,n){var o,i,r,a;t.exports=(o=n(173),i=n(43),r=n(558),a=n(576),function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),l=o(n(1)),u=n(2),d=o(u),p=o(n(3)),f=o(n(4)),v=function(t){function e(){var t,n,o;r(this,e);for(var s=arguments.length,c=Array(s),h=0;h<s;h++)c[h]=arguments[h];return n=o=a(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),o._sigPad=null,o._excludeOurProps=function(){var t=o.props;return t.canvasProps,t.clearOnResize,i(t,["canvasProps","clearOnResize"])},o.getCanvas=function(){return o._canvas},o.getTrimmedCanvas=function(){var t=document.createElement("canvas");return t.width=o._canvas.width,t.height=o._canvas.height,t.getContext("2d").drawImage(o._canvas,0,0),(0,f.default)(t)},o.getSignaturePad=function(){return o._sigPad},o._checkClearOnResize=function(){o.props.clearOnResize&&o._resizeCanvas()},o._resizeCanvas=function(){var t=o.props.canvasProps||{},e=t.width,n=t.height;if(!e||!n){var i=o._canvas,r=Math.max(window.devicePixelRatio||1,1);e||(i.width=i.offsetWidth*r),n||(i.height=i.offsetHeight*r),i.getContext("2d").scale(r,r),o.clear()}},o.on=function(){return window.addEventListener("resize",o._checkClearOnResize),o._sigPad.on()},o.off=function(){return window.removeEventListener("resize",o._checkClearOnResize),o._sigPad.off()},o.clear=function(){return o._sigPad.clear()},o.isEmpty=function(){return o._sigPad.isEmpty()},o.fromDataURL=function(t,e){return o._sigPad.fromDataURL(t,e)},o.toDataURL=function(t,e){return o._sigPad.toDataURL(t,e)},o.fromData=function(t){return o._sigPad.fromData(t)},o.toData=function(){return o._sigPad.toData()},a(o,n)}return s(e,t),h(e,[{key:"componentDidMount",value:function(){this._sigPad=new p.default(this._canvas,this._excludeOurProps()),this._resizeCanvas(),this.on()}},{key:"componentWillUnmount",value:function(){this.off()}},{key:"componentDidUpdate",value:function(){Object.assign(this._sigPad,this._excludeOurProps())}},{key:"render",value:function(){var t=this,e=this.props.canvasProps;return d.default.createElement("canvas",c({ref:function(e){t._canvas=e}},e))}}]),e}(u.Component);v.propTypes={velocityFilterWeight:l.default.number,minWidth:l.default.number,maxWidth:l.default.number,minDistance:l.default.number,dotSize:l.default.oneOfType([l.default.number,l.default.func]),penColor:l.default.string,throttle:l.default.number,onEnd:l.default.func,onBegin:l.default.func,canvasProps:l.default.object,clearOnResize:l.default.bool},v.defaultProps={clearOnResize:!0},e.default=v},function(t,e){t.exports=o},function(t,e){t.exports=i},function(t,e){t.exports=r},function(t,e){t.exports=a}]))},576:function(t){t.exports=function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e){"use strict";function n(t){var e=t.getContext("2d"),n=t.width,o=t.height,i=e.getImageData(0,0,n,o).data,s=r(!0,n,o,i),c=r(!1,n,o,i),h=a(!0,n,o,i),l=a(!1,n,o,i)-h+1,u=c-s+1,d=e.getImageData(h,s,l,u);return t.width=l,t.height=u,e.clearRect(0,0,l,u),e.putImageData(d,0,0),t}function o(t,e,n,o){return{red:o[4*(n*e+t)],green:o[4*(n*e+t)+1],blue:o[4*(n*e+t)+2],alpha:o[4*(n*e+t)+3]}}function i(t,e,n,i){return o(t,e,n,i).alpha}function r(t,e,n,o){for(var r=t?1:-1,a=t?0:n-1;t?a<n:a>-1;a+=r)for(var s=0;s<e;s++)if(i(s,a,e,o))return a;return null}function a(t,e,n,o){for(var r=t?1:-1,a=t?0:e-1;t?a<e:a>-1;a+=r)for(var s=0;s<n;s++)if(i(a,s,e,o))return a;return null}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n}])},558:(t,e,n)=>{"use strict";function o(t,e,n){this.x=t,this.y=e,this.time=n||(new Date).getTime()}function i(t,e,n,o){this.startPoint=t,this.control1=e,this.control2=n,this.endPoint=o}function r(t,e){var n=this,o=e||{};this.velocityFilterWeight=o.velocityFilterWeight||.7,this.minWidth=o.minWidth||.5,this.maxWidth=o.maxWidth||2.5,this.throttle="throttle"in o?o.throttle:16,this.minDistance="minDistance"in o?o.minDistance:5,this.throttle?this._strokeMoveUpdate=function(t,e,n){var o,i,r,a=null,s=0;n||(n={});var c=function(){s=!1===n.leading?0:Date.now(),a=null,r=t.apply(o,i),a||(o=i=null)};return function(){var h=Date.now();s||!1!==n.leading||(s=h);var l=e-(h-s);return o=this,i=arguments,l<=0||l>e?(a&&(clearTimeout(a),a=null),s=h,r=t.apply(o,i),a||(o=i=null)):a||!1===n.trailing||(a=setTimeout(c,l)),r}}(r.prototype._strokeUpdate,this.throttle):this._strokeMoveUpdate=r.prototype._strokeUpdate,this.dotSize=o.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=o.penColor||"black",this.backgroundColor=o.backgroundColor||"rgba(0,0,0,0)",this.onBegin=o.onBegin,this.onEnd=o.onEnd,this._canvas=t,this._ctx=t.getContext("2d"),this.clear(),this._handleMouseDown=function(t){1===t.which&&(n._mouseButtonDown=!0,n._strokeBegin(t))},this._handleMouseMove=function(t){n._mouseButtonDown&&n._strokeMoveUpdate(t)},this._handleMouseUp=function(t){1===t.which&&n._mouseButtonDown&&(n._mouseButtonDown=!1,n._strokeEnd(t))},this._handleTouchStart=function(t){if(1===t.targetTouches.length){var e=t.changedTouches[0];n._strokeBegin(e)}},this._handleTouchMove=function(t){t.preventDefault();var e=t.targetTouches[0];n._strokeMoveUpdate(e)},this._handleTouchEnd=function(t){t.target===n._canvas&&(t.preventDefault(),n._strokeEnd(t))},this.on()}n.r(e),n.d(e,{default:()=>a}),o.prototype.velocityFrom=function(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):1},o.prototype.distanceTo=function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))},o.prototype.equals=function(t){return this.x===t.x&&this.y===t.y&&this.time===t.time},i.prototype.length=function(){for(var t=0,e=void 0,n=void 0,o=0;o<=10;o+=1){var i=o/10,r=this._point(i,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),a=this._point(i,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(o>0){var s=r-e,c=a-n;t+=Math.sqrt(s*s+c*c)}e=r,n=a}return t},i.prototype._point=function(t,e,n,o,i){return e*(1-t)*(1-t)*(1-t)+3*n*(1-t)*(1-t)*t+3*o*(1-t)*t*t+i*t*t*t},r.prototype.clear=function(){var t=this._ctx,e=this._canvas;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(),this._isEmpty=!0},r.prototype.fromDataURL=function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=new Image,i=n.ratio||window.devicePixelRatio||1,r=n.width||this._canvas.width/i,a=n.height||this._canvas.height/i;this._reset(),o.src=t,o.onload=function(){e._ctx.drawImage(o,0,0,r,a)},this._isEmpty=!1},r.prototype.toDataURL=function(t){var e;if("image/svg+xml"===t)return this._toSVG();for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return(e=this._canvas).toDataURL.apply(e,[t].concat(o))},r.prototype.on=function(){this._handleMouseEvents(),this._handleTouchEvents()},r.prototype.off=function(){this._canvas.removeEventListener("mousedown",this._handleMouseDown),this._canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this._canvas.removeEventListener("touchstart",this._handleTouchStart),this._canvas.removeEventListener("touchmove",this._handleTouchMove),this._canvas.removeEventListener("touchend",this._handleTouchEnd)},r.prototype.isEmpty=function(){return this._isEmpty},r.prototype._strokeBegin=function(t){this._data.push([]),this._reset(),this._strokeUpdate(t),"function"===typeof this.onBegin&&this.onBegin(t)},r.prototype._strokeUpdate=function(t){var e=t.clientX,n=t.clientY,o=this._createPoint(e,n),i=this._data[this._data.length-1],r=i&&i[i.length-1],a=r&&o.distanceTo(r)<this.minDistance;if(!r||!a){var s=this._addPoint(o),c=s.curve,h=s.widths;c&&h&&this._drawCurve(c,h.start,h.end),this._data[this._data.length-1].push({x:o.x,y:o.y,time:o.time,color:this.penColor})}},r.prototype._strokeEnd=function(t){var e=this.points.length>2,n=this.points[0];if(!e&&n&&this._drawDot(n),n){var o=this._data[this._data.length-1],i=o[o.length-1];n.equals(i)||o.push({x:n.x,y:n.y,time:n.time,color:this.penColor})}"function"===typeof this.onEnd&&this.onEnd(t)},r.prototype._handleMouseEvents=function(){this._mouseButtonDown=!1,this._canvas.addEventListener("mousedown",this._handleMouseDown),this._canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)},r.prototype._handleTouchEvents=function(){this._canvas.style.msTouchAction="none",this._canvas.style.touchAction="none",this._canvas.addEventListener("touchstart",this._handleTouchStart),this._canvas.addEventListener("touchmove",this._handleTouchMove),this._canvas.addEventListener("touchend",this._handleTouchEnd)},r.prototype._reset=function(){this.points=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor},r.prototype._createPoint=function(t,e,n){var i=this._canvas.getBoundingClientRect();return new o(t-i.left,e-i.top,n||(new Date).getTime())},r.prototype._addPoint=function(t){var e=this.points;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);var n=this._calculateCurveControlPoints(e[0],e[1],e[2]).c2,o=this._calculateCurveControlPoints(e[1],e[2],e[3]).c1,r=new i(e[1],n,o,e[2]),a=this._calculateCurveWidths(r);return e.shift(),{curve:r,widths:a}}return{}},r.prototype._calculateCurveControlPoints=function(t,e,n){var i=t.x-e.x,r=t.y-e.y,a=e.x-n.x,s=e.y-n.y,c=(t.x+e.x)/2,h=(t.y+e.y)/2,l=(e.x+n.x)/2,u=(e.y+n.y)/2,d=Math.sqrt(i*i+r*r),p=Math.sqrt(a*a+s*s),f=p/(d+p),v=l+(c-l)*f,m=u+(h-u)*f,_=e.x-v,g=e.y-m;return{c1:new o(c+_,h+g),c2:new o(l+_,u+g)}},r.prototype._calculateCurveWidths=function(t){var e=t.startPoint,n=t.endPoint,o={start:null,end:null},i=this.velocityFilterWeight*n.velocityFrom(e)+(1-this.velocityFilterWeight)*this._lastVelocity,r=this._strokeWidth(i);return o.start=this._lastWidth,o.end=r,this._lastVelocity=i,this._lastWidth=r,o},r.prototype._strokeWidth=function(t){return Math.max(this.maxWidth/(t+1),this.minWidth)},r.prototype._drawPoint=function(t,e,n){var o=this._ctx;o.moveTo(t,e),o.arc(t,e,n,0,2*Math.PI,!1),this._isEmpty=!1},r.prototype._drawCurve=function(t,e,n){var o=this._ctx,i=n-e,r=Math.floor(t.length());o.beginPath();for(var a=0;a<r;a+=1){var s=a/r,c=s*s,h=c*s,l=1-s,u=l*l,d=u*l,p=d*t.startPoint.x;p+=3*u*s*t.control1.x,p+=3*l*c*t.control2.x,p+=h*t.endPoint.x;var f=d*t.startPoint.y;f+=3*u*s*t.control1.y,f+=3*l*c*t.control2.y,f+=h*t.endPoint.y;var v=e+h*i;this._drawPoint(p,f,v)}o.closePath(),o.fill()},r.prototype._drawDot=function(t){var e=this._ctx,n="function"===typeof this.dotSize?this.dotSize():this.dotSize;e.beginPath(),this._drawPoint(t.x,t.y,n),e.closePath(),e.fill()},r.prototype._fromData=function(t,e,n){for(var i=0;i<t.length;i+=1){var r=t[i];if(r.length>1)for(var a=0;a<r.length;a+=1){var s=r[a],c=new o(s.x,s.y,s.time),h=s.color;if(0===a)this.penColor=h,this._reset(),this._addPoint(c);else if(a!==r.length-1){var l=this._addPoint(c),u=l.curve,d=l.widths;u&&d&&e(u,d,h)}}else this._reset(),n(r[0])}},r.prototype._toSVG=function(){var t=this,e=this._data,n=this._canvas,o=Math.max(window.devicePixelRatio||1,1),i=n.width/o,r=n.height/o,a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttributeNS(null,"width",n.width),a.setAttributeNS(null,"height",n.height),this._fromData(e,(function(t,e,n){var o=document.createElement("path");if(!isNaN(t.control1.x)&&!isNaN(t.control1.y)&&!isNaN(t.control2.x)&&!isNaN(t.control2.y)){var i="M "+t.startPoint.x.toFixed(3)+","+t.startPoint.y.toFixed(3)+" C "+t.control1.x.toFixed(3)+","+t.control1.y.toFixed(3)+" "+t.control2.x.toFixed(3)+","+t.control2.y.toFixed(3)+" "+t.endPoint.x.toFixed(3)+","+t.endPoint.y.toFixed(3);o.setAttribute("d",i),o.setAttribute("stroke-width",(2.25*e.end).toFixed(3)),o.setAttribute("stroke",n),o.setAttribute("fill","none"),o.setAttribute("stroke-linecap","round"),a.appendChild(o)}}),(function(e){var n=document.createElement("circle"),o="function"===typeof t.dotSize?t.dotSize():t.dotSize;n.setAttribute("r",o),n.setAttribute("cx",e.x),n.setAttribute("cy",e.y),n.setAttribute("fill",e.color),a.appendChild(n)}));var s='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 '+i+" "+r+'" width="'+i+'" height="'+r+'">',c=a.innerHTML;if(void 0===c){var h=document.createElement("dummy"),l=a.childNodes;h.innerHTML="";for(var u=0;u<l.length;u+=1)h.appendChild(l[u].cloneNode(!0));c=h.innerHTML}return"data:image/svg+xml;base64,"+btoa(s+c+"</svg>")},r.prototype.fromData=function(t){var e=this;this.clear(),this._fromData(t,(function(t,n){return e._drawCurve(t,n.start,n.end)}),(function(t){return e._drawDot(t)})),this._data=t},r.prototype.toData=function(){return this._data};const a=r}}]);
//# sourceMappingURL=742.cdb089e3.chunk.js.map