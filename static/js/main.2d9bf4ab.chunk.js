(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{52:function(e,t,n){e.exports={files_explorer:"FilesExplorer_files_explorer__28A9-"}},66:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"putDataToState",(function(){return $})),n.d(a,"putDataByIdToState",(function(){return E})),n.d(a,"fetchData",(function(){return k})),n.d(a,"fetchDataById",(function(){return w}));var r,c=n(0),o=n(8),l=n.n(o),i=(n(66),n(17)),s=n(40),u=n(56),d=n.n(u),f=n(55),p=n.n(f),b=n(54),h=n.n(b),j=n(53),g=n.n(j),x=n(111),O=n(15),v=n(14),y=n(23),T=n.n(y),A=n(39),_=n(51),I=n.n(_).a.create({baseURL:"http://164.90.161.80:3000/api/content",headers:{"Access-Control-Allow-Headers":"*","Content-Type":"application/json"}}),m=function(){return I.get("")},C=function(e){return I.get("?dirId=".concat(e))};!function(e){e.FETCH_DATA="FETCH_DATA",e.FETCH_DATA_BY_ID="FETCH_DATA_BY_ID"}(r||(r={}));var D=function e(t,n,a){if(t.children)if(t.id!==a)for(var r=0;r<t.children.length;r++)e(t.children[r],n,a);else t.children=n.children},$=function(e){return{type:r.FETCH_DATA,payload:e}},E=function(e){return{type:r.FETCH_DATA_BY_ID,payload:e}},k=function(){return function(){var e=Object(A.a)(T.a.mark((function e(t){var n,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m();case 3:n=e.sent,a=n.data,t($(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(A.a)(T.a.mark((function t(n,a){var r,c,o;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().files,t.prev=1,t.next=4,C(e);case 4:c=t.sent,o=c.data,D(r,o,e),n(E(o)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()},R=O.c,B=n(34),F=n(58),H=n(108),W=n(113),N=n(110),S=n(112),Y=n(3),L=Object(H.a)((function(e){return Object(W.a)({root:{color:e.palette.text.secondary,"&:hover > $content":{backgroundColor:e.palette.action.hover},"&:focus > $content, &$selected > $content":{backgroundColor:"".concat(e.palette.grey[400],")")},"&:focus > $content $label, &:hover > $content $label, &$selected > $content $label":{backgroundColor:"transparent"}},content:{color:e.palette.text.secondary,borderTopRightRadius:e.spacing(2),borderBottomRightRadius:e.spacing(2),paddingRight:e.spacing(1),fontWeight:e.typography.fontWeightMedium,"$expanded > &":{fontWeight:e.typography.fontWeightRegular}},group:{marginLeft:20,"& $content":{paddingLeft:e.spacing(2)}},expanded:{},selected:{},label:{fontWeight:"inherit",color:"inherit"},labelRoot:{display:"flex",alignItems:"center",padding:e.spacing(.5,0)},labelIcon:{marginRight:e.spacing(1)},labelText:{fontWeight:"inherit",flexGrow:1}})}));function G(e){var t=L(),n=e.labelText,a=e.labelIcon,r=(e.labelInfo,e.color,e.bgColor,Object(F.a)(e,["labelText","labelIcon","labelInfo","color","bgColor"]));return Object(Y.jsx)(S.a,Object(B.a)({label:Object(Y.jsxs)("div",{className:t.labelRoot,children:[Object(Y.jsx)(a,{color:"inherit",className:t.labelIcon}),Object(Y.jsx)(N.a,{variant:"body2",className:t.labelText,children:n})]}),classes:{root:t.root,content:t.content,expanded:t.expanded,selected:t.selected,group:t.group,label:t.label}},r))}var J=Object(H.a)(Object(W.a)({root:{height:264,flexGrow:1,maxWidth:400}})),M=n(52),U=n.n(M),q=function(){var e=function(){var e=Object(O.b)();return Object(v.b)(a,e)}(),t=e.fetchData,n=e.fetchDataById,r=R((function(e){return e.files})),o=Object(c.useState)([]),l=Object(s.a)(o,2),u=l[0],f=l[1],b=Object(c.useState)(["0"]),j=Object(s.a)(b,2),y=j[0],T=j[1],A=J();Object(c.useEffect)((function(){t()}),[]);var _=function(e){u.includes(e)||(f([].concat(Object(i.a)(u),[e])),n(e))},I=function(e){var t=e.toString();if(y.includes(t)){var n=y.filter((function(e){return e!==t}));T(Object(i.a)(n))}else T([].concat(Object(i.a)(y),[t]))},m=function(){if(y.includes("0")){var e=y.filter((function(e){return"0"!==e}));T(Object(i.a)(e))}else T([].concat(Object(i.a)(y),["0"]))};return Object(Y.jsx)("div",{className:U.a.files_explorer,children:Object(Y.jsx)(x.a,{expanded:y,className:A.root,defaultCollapseIcon:Object(Y.jsx)(p.a,{}),defaultExpandIcon:Object(Y.jsx)(d.a,{}),children:function e(t){var n=t.title.split(".").length>1?g.a:h.a;return Object(Y.jsx)(G,{bgColor:"#e8f0fe",labelIcon:n,nodeId:t.id.toString(),labelText:t.title,onClick:function(){return e=t.id,n=t.title,0===e&&m(),void(n.split(".").length>1||n===r.title||(_(e),I(e)));var e,n},children:Array.isArray(t.children)?t.children.map((function(t){return e(t)})):null},t.id)}(r)})})};var z=function(){return Object(Y.jsx)("div",{className:"App",children:Object(Y.jsx)(q,{})})},K=n(57),P={id:0,title:"",children:[]},Q=Object(v.c)({files:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.FETCH_DATA:return{id:t.payload.id,title:t.payload.title,children:t.payload.children};case r.FETCH_DATA_BY_ID:return Object(B.a)({},e);default:return e}}}),V=Object(v.d)(Q,Object(v.a)(K.a));l.a.render(Object(Y.jsx)(O.a,{store:V,children:Object(Y.jsx)(z,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.2d9bf4ab.chunk.js.map