(this.webpackJsonptemplate2=this.webpackJsonptemplate2||[]).push([[0],{12:function(e,t,a){e.exports={editer:"cardEditForm_editer__1v-zV",input:"cardEditForm_input__3fiun",textarea:"cardEditForm_textarea__2eEbI",ImageFileInput:"cardEditForm_ImageFileInput__p1KmX"}},13:function(e,t,a){e.exports={editer:"cardAddForm_editer__2py0C",input:"cardAddForm_input__34y7D",textarea:"cardAddForm_textarea__2SDff",ImageFileInput:"cardAddForm_ImageFileInput__2EiTQ"}},17:function(e,t,a){e.exports={container:"imageFileInput_container__pWvHM",input:"imageFileInput_input__2xFCv",button:"imageFileInput_button__2il2Q",full:"imageFileInput_full__K2wvS",loading:"imageFileInput_loading__1myNo"}},25:function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",header:"header_header__v9FKw",onLogout:"header_onLogout__1BdnW",logo:"header_logo__1X7aW",fullSize:"header_fullSize__2YzZF"}},26:function(e,t,a){e.exports={makerGrey:"#626262",loginForm:"login_loginForm__1hUNQ",loginBtn:"login_loginBtn__3EY9k"}},33:function(e,t,a){e.exports={mediaQuery:"62rem",maker:"maker_maker__1Jsum",sectionBox:"maker_sectionBox__1Yv05"}},34:function(e,t,a){e.exports={makerLightPink:"#ffeae8",preview:"preview_preview__3lr-V",cardList:"preview_cardList__NAU_k"}},37:function(e,t,a){e.exports={makerGrey:"#626262",sizing:"app_sizing__SGDLd"}},38:function(e,t,a){e.exports={footer:"footer_footer__1lZIc"}},40:function(e,t,a){e.exports={button:"button_button__3_GL1"}},41:function(e,t,a){e.exports={makerWheat:"wheat",editer:"editer_editer__2-lG_",editerList:"editer_editerList__16GNo"}},47:function(e,t,a){e.exports={makerLightGrey:"#e8e7e6"}},59:function(e,t,a){"use strict";a.r(t);var n=a(21),c=a(1),r=a(2),i=a.n(r),o=a(36),s=a.n(o),l=(a(47),a(23)),u=a(5),d=a(37),j=a.n(d),m=a(38),f=a.n(m),p=function(e){return Object(c.jsx)("footer",{className:f.a.footer,children:"Hyomin's React Practice"})},b=a(25),h=a.n(b),O=function(e){var t=e.onLogout;return Object(c.jsxs)("header",{className:h.a.header,children:[t&&Object(c.jsx)("button",{onClick:t,className:h.a.onLogout,children:"logout"}),Object(c.jsx)("img",{className:h.a.logo,src:"./images/logo.png",alt:"logo"}),Object(c.jsx)("span",{children:"business card maker"})]})},x=a(26),_=a.n(x),g=function(e){var t=e.authService,a=Object(u.f)(),n=function(e){console.log("goTomaker : ".concat(e)),a.push({pathname:"/maker",state:{id:e}})},i=function(e){t.login(e.currentTarget.textContent).then((function(e){console.log("onLogin to goToMaker : ".concat(e.user.uid,"}")),n(e.user.uid||e.user.id)}))};return Object(r.useEffect)((function(){t.onAuthChange((function(e){console.log(e),e&&n(e.id)}))})),Object(c.jsxs)("section",{className:_.a.loginForm,children:[Object(c.jsx)(O,{}),Object(c.jsxs)("section",{children:[Object(c.jsx)("h1",{children:"Login"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("button",{onClick:i,className:_.a.loginBtn,children:"Google"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{onClick:i,className:_.a.loginBtn,children:"Github"})})]})]}),Object(c.jsx)(p,{})]})},v=a(14),k=a(33),y=a.n(k),N=a(12),F=a.n(N),I=a(40),w=a.n(I),C=function(e){var t=e.name,a=e.onClick;return Object(c.jsx)("button",{className:w.a.button,onClick:a,children:t})},R=function(e){var t=e.FileInput,a=e.card,n=e.onDelete,i=e.onUpdate,o=a.name,s=a.company,l=a.theme,u=a.title,d=a.email,j=a.message,m=a.fileName,f=a.fileURL,p=Object(r.useRef)(),b=Object(r.useRef)(),h=Object(r.useRef)(),O=Object(r.useRef)(),x=Object(r.useRef)(),_=Object(r.useRef)(),g=Object(r.useRef)();return Object(c.jsxs)("form",{ref:g,className:F.a.editer,onKeyUp:function(e){console.log("test"),e.preventDefault(),a.name=p.current.value,a.company=b.current.value,a.theme=h.current.value,a.title=O.current.value,a.email=x.current.value,a.message=_.current.value,i(a)},children:[Object(c.jsx)("input",{ref:p,className:F.a.input,type:"text",name:"name",defaultValue:o}),Object(c.jsx)("input",{ref:b,className:F.a.input,type:"text",name:"company",defaultValue:s}),Object(c.jsxs)("select",{ref:h,className:F.a.select,type:"text",name:"theme",defaultValue:l,children:[Object(c.jsx)("option",{value:"black",children:"Black"}),Object(c.jsx)("option",{value:"light",children:"Light"}),Object(c.jsx)("option",{value:"colorful",children:"Colorful"})]}),Object(c.jsx)("input",{ref:O,className:F.a.input,type:"text",name:"title",defaultValue:u}),Object(c.jsx)("input",{ref:x,className:F.a.input,type:"text",name:"email",defaultValue:d}),Object(c.jsx)("textarea",{ref:_,className:F.a.textarea,type:"text",name:"message",defaultValue:j}),Object(c.jsx)("div",{className:F.a.ImageFileInput,children:Object(c.jsx)(t,{name:m||"default",onFileChange:function(e){a.fileName=e.name,a.fileURL=e.url,i(a)},url:f})}),Object(c.jsx)(C,{name:"Delete",onClick:function(e){return e.preventDefault(),n(a)}})]})},L=a(13),S=a.n(L),A=function(e){var t=e.FileInput,a=e.onAdd,n=Object(r.useRef)(),i=Object(r.useRef)(),o=Object(r.useRef)(),s=Object(r.useRef)(),l=Object(r.useRef)(),u=Object(r.useRef)(),d=Object(r.useRef)(),j=Object(r.useState)(""),m=Object(v.a)(j,2),f=m[0],p=m[1],b=Object(r.useState)(""),h=Object(v.a)(b,2),O=h[0],x=h[1],_=function(e){p(e.name),x(e.url)};return Object(c.jsxs)("form",{ref:d,className:S.a.editer,children:[Object(c.jsx)("input",{ref:n,className:S.a.input,type:"text",name:"name",placeholder:"name"}),Object(c.jsx)("input",{ref:i,className:S.a.input,type:"text",name:"company",placeholder:"company"}),Object(c.jsxs)("select",{ref:o,className:S.a.select,type:"text",name:"theme",placeholder:"theme",children:[Object(c.jsx)("option",{value:"black",children:"Black"}),Object(c.jsx)("option",{value:"light",children:"Light"}),Object(c.jsx)("option",{value:"colorful",children:"Colorful"})]}),Object(c.jsx)("input",{ref:s,className:S.a.input,type:"text",name:"title",placeholder:"title"}),Object(c.jsx)("input",{ref:l,className:S.a.input,type:"text",name:"email",placeholder:"email"}),Object(c.jsx)("textarea",{ref:u,className:S.a.textarea,type:"text",name:"message",placeholder:"message"}),Object(c.jsx)("div",{className:S.a.ImageFileInput,children:Object(c.jsx)(t,{name:f,onFileChange:_,url:O})}),Object(c.jsx)(C,{name:"Add",onClick:function(e){e.preventDefault();var t={id:Date.now(),name:n.current.value||"",company:i.current.value||"",theme:o.current.value||"",title:s.current.value||"",email:l.current.value||"",message:u.current.value||"",fileName:f||"",fileURL:O||null};console.log(t),a(t),d.current.reset(),_({name:"",url:""})}})]})},B=a(41),D=a.n(B),E=function(e){var t=e.FileInput,a=e.cards,n=e.onDelete,r=e.onAdd,i=e.onUpdate;return Object(c.jsxs)("section",{className:D.a.editer,children:[Object(c.jsx)("h1",{children:"Editer"}),Object.keys(a).map((function(e){return Object(c.jsx)(R,{FileInput:t,card:a[e],onDelete:n,onUpdate:i},e)})),Object(c.jsx)(A,{FileInput:t,onAdd:r})]})},G=a(9),U=a.n(G),z=function(e){var t=e.card,a=t.id,n=t.name,r=t.company,i=t.theme,o=t.title,s=t.email,l=t.message,u=(t.fileName,t.fileURL||"./images/default_logo.png");return Object(c.jsxs)("div",{className:"".concat(U.a.cardBody," ").concat(function(e){switch(e){case"black":return U.a.dark;case"light":return U.a.light;case"colorful":return U.a.colorful;default:throw new Error("unknown styles : ".concat(e))}}(i)),children:[Object(c.jsx)("section",{className:U.a.photo,children:Object(c.jsx)("img",{src:"".concat(u),alt:""})}),Object(c.jsxs)("section",{className:"".concat(U.a.info," "),children:[Object(c.jsx)("input",{type:"hidden",value:a}),Object(c.jsx)("div",{className:U.a.name,children:n}),Object(c.jsx)("div",{className:U.a.company,children:r}),Object(c.jsx)("div",{className:U.a.underline}),Object(c.jsx)("div",{className:U.a.company,children:o}),Object(c.jsx)("div",{className:U.a.email,children:s}),Object(c.jsx)("div",{className:U.a.aboutme,children:l})]})]})},P=a(34),V=a.n(P),W=function(e){var t=e.cards;return Object(c.jsxs)("section",{className:V.a.preview,children:[Object(c.jsx)("h1",{children:"Preview"}),Object(c.jsx)("ul",{className:V.a.cardList,children:Object.keys(t).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(z,{card:t[e]})},e)}))})]})},T=Object(r.memo)((function(e){var t=e.FileInput,a=e.authService,i=e.cardRepository,o=Object(u.f)().state,s=Object(r.useState)("".concat(o&&o.id)),l=Object(v.a)(s,2),d=l[0],j=l[1],m=Object(r.useState)({1:{theme:"black"}}),f=Object(v.a)(m,2),b=f[0],h=f[1],x=Object(u.f)();Object(r.useEffect)((function(){if(d){console.log(b),b||i.saveCard(d,b[1]),i.saveCard(d,b[1]);var e=i.syncCard(d,(function(e){h(e)}));return function(){return e()}}}),[i,d]),Object(r.useEffect)((function(){a.onAuthChange((function(e){e?j(e.uid):x.push("/")}))}),[d,a,x]);var _=function(e){h((function(t){var a=Object(n.a)({},t);return a[e.id]=e,a})),i.saveCard(d,e)};return Object(c.jsxs)("section",{className:y.a.maker,children:[Object(c.jsx)(O,{onLogout:function(){a.logout()}}),Object(c.jsxs)("section",{className:y.a.sectionBox,children:[Object(c.jsx)(E,{cards:b,onDelete:function(e){console.log(b.length);var t=Object(n.a)({},b);delete t[e.id],h(t),i.deleteCard(d,e)},onAdd:_,onUpdate:_,FileInput:t}),Object(c.jsx)(W,{cards:b})]}),Object(c.jsx)(p,{})]})}));var K=function(e){var t=e.FileInput,a=e.authService,n=e.cardRepository;return Object(c.jsx)("div",{className:j.a.sizing,children:Object(c.jsx)(l.a,{children:Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{exact:!0,path:["/"," "],children:Object(c.jsx)(g,{authService:a})}),Object(c.jsx)(u.a,{exact:!0,path:"/maker",children:Object(c.jsx)(T,{FileInput:t,authService:a,cardRepository:n})})]})})})},J=a(18),Q=a(19),Y=a(27),H=(a(52),a(54),Y.a.initializeApp({apiKey:"AIzaSyDpIW9Jtyh0NTirett6D-EJipRFQy0WTxE",authDomain:"business-card-maker-6cf93.firebaseapp.com",projectId:"usiness-card-maker-6cf93",storageBucket:"business-card-maker-6cf93.appspot.com",messagingSenderId:"476590891348",appId:"1:476590891348:web:8f6fc108e8138d09a5e8c1",measurementId:"G-L31ZYG7PF9",databaseURL:"https://business-card-maker-6cf93-default-rtdb.firebaseio.com"})),M=H.database(),Z=H.auth(),X=new Y.a.auth.GoogleAuthProvider,q=new Y.a.auth.GithubAuthProvider,$=function(){function e(){Object(J.a)(this,e)}return Object(Q.a)(e,[{key:"login",value:function(e){var t=this.provider(e);return Z.signInWithPopup(t)}},{key:"logout",value:function(){Z.signOut()}},{key:"onAuthChange",value:function(e){Z.onAuthStateChanged((function(t){e(t)}))}},{key:"provider",value:function(e){switch(e){case"Google":return X;case"Github":return q;default:throw new Error("".concat(e," is defined"))}}}]),e}(),ee=function(){function e(){Object(J.a)(this,e)}return Object(Q.a)(e,[{key:"saveCard",value:function(e,t){M.ref("".concat(e,"/cards/").concat(t.id)).set(t)}},{key:"deleteCard",value:function(e,t){M.ref("".concat(e,"/cards/").concat(t.id)).remove()}},{key:"syncCard",value:function(e,t){var a=M.ref("".concat(e,"/cards"));return a.on("value",(function(e){var a=e.val();t(a)})),function(){return a.off()}}}]),e}(),te=a(20),ae=a.n(te),ne=a(24),ce=function(){function e(){Object(J.a)(this,e)}return Object(Q.a)(e,[{key:"upload",value:function(){var e=Object(ne.a)(ae.a.mark((function e(t){var a,n;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",t),a.append("upload_preset","hyomtest1234"),e.next=5,fetch("https://api.cloudinary.com/v1_1/hyom/image/upload",{method:"POST",body:a});case 5:return n=e.sent,e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),re=a(17),ie=a.n(re),oe=function(e){var t=e.imageUploader,a=e.name,n=e.onFileChange,i=e.url,o=Object(r.useRef)(),s=Object(r.useState)(!1),l=Object(v.a)(s,2),u=l[0],d=l[1],j=function(){var e=Object(ne.a)(ae.a.mark((function e(a){var c;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,t.upload(a.target.files[0]);case 3:c=e.sent,d(!1),n({name:c.original_filename,url:c.url});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:ie.a.container,children:[Object(c.jsx)("input",{className:ie.a.input,ref:o,type:"file",onChange:j}),!u&&Object(c.jsx)("button",{className:"".concat(ie.a.button," ").concat(i?ie.a.full:ie.a),onClick:function(e){e.preventDefault(),o.current.click()},children:a||"No File"}),u&&Object(c.jsx)("div",{className:ie.a.loading})]})},se=new $,le=new ee,ue=new ce;s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(K,{authService:se,FileInput:function(e){return Object(c.jsx)(oe,Object(n.a)(Object(n.a)({},e),{},{imageUploader:ue}))},cardRepository:le})}),document.getElementById("root"))},9:function(e,t,a){e.exports={makerShadow:"rgba(217,217,217,1)",makerBlack:"black",makerWhite:"white",makerColorful:"linear-gradient(166deg, rgba(237, 193, 211, 1) 0%,rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%)",cardBody:"card_cardBody__2FqvV",photo:"card_photo__13t81",info:"card_info__1kawO",dark:"card_dark__2IRUy",light:"card_light__2l94F",colorful:"card_colorful__1HPTr",name:"card_name__vhlzk",underline:"card_underline__7mK_k"}}},[[59,1,2]]]);
//# sourceMappingURL=main.1cfd2844.chunk.js.map