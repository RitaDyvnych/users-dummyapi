(this["webpackJsonpusers-dummyapi"]=this["webpackJsonpusers-dummyapi"]||[]).push([[0],[,,,,,,function(e,t,a){},function(e){e.exports=JSON.parse('{"base_url":"https://dummyapi.io/data/v1/","app_id":"6154537832884b1a024b2f3c","content_type":"application/json","limit":10}')},,,,,function(e,t,a){e.exports={ImageGalleryItem:"userListItem_ImageGalleryItem__c7vfA",ImageGalleryItem__image:"userListItem_ImageGalleryItem__image__2yHc9"}},function(e,t,a){e.exports={backDrop:"modal_backDrop__14jPt",content:"modal_content__1tQ-X"}},,function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(8),o=a.n(r),A=(a(20),a(10)),l=a(2),c=a(3),i=a(5),u=a(4),p=(a(21),a(7)),h=function(){function e(t){Object(l.a)(this,e),this.page=1,this.base_url=p.base_url,this.api_id=p.app_id,this.content=p.content_type,this.limit=p.limit,this.user=t}return Object(c.a)(e,[{key:"pages",get:function(){return this.page},set:function(e){this.page+=e}},{key:"getUsers",value:function(){var e="".concat(this.base_url,"user?page=").concat(this.page,"&limit=").concat(this.limit),t={headers:{"Content-Type":"".concat(this.content),"app-id":"".concat(this.api_id)}};return fetch(e,t).then((function(e){return e.json()}))}},{key:"createUser",value:function(){var e={method:"POST",headers:{"Content-Type":"".concat(this.content),"app-id":"".concat(this.api_id)},body:JSON.stringify(this.user)},t="".concat(this.base_url,"user/create");return fetch(t,e).then((function(e){return e.json()}))}}]),e}(),d=a(12),m=a.n(d),g=a(0),j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return this.props.users.map((function(e){return Object(g.jsxs)("li",{className:m.a.ImageGalleryItem,children:[Object(g.jsx)("img",{src:e.picture?e.picture:"data:image/jpeg;base64,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",alt:"".concat(e.firstName," ").concat(e.lastName),className:m.a.ImageGalleryItem__image}),Object(g.jsxs)("p",{children:[e.title,". ",e.firstName," ",e.lastName]})]},e.id)}))}}]),a}(n.Component),b=a(13),f=a.n(b),E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).handleEscape=function(t){"Escape"===t.code&&e.props.toggleModal()},e.handleClose=function(t){t.currentTarget===t.target&&e.props.toggleModal()},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscape)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscape)}},{key:"render",value:function(){var e=this.props.children;return Object(r.createPortal)(Object(g.jsx)("div",{className:f.a.backDrop,onClick:this.handleClose,children:Object(g.jsx)("div",{className:f.a.content,children:e})}),document.getElementById("modalRoot"))}}]),a}(n.Component),C=a(14),v=a(9),I=a(6),O=a.n(I),Q=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={title:"mr",firstName:"",lastName:"",email:"",picture:"",user:null},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n={id:"",title:a.title,firstName:a.firstName,lastName:a.lastName,email:a.email,picture:a.picture};e.setState({user:n}),e.props.addNewUser(n),e.resetform(),e.props.toggleModal()},e.handleChangeAllInputs=function(t){var a=t.target,n=a.name,s=a.value;e.setState(Object(v.a)({},n,s))},e.resetform=function(){e.setState(Object(C.a)({},e.state))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.firstName,n=e.lastName,s=e.email,r=e.picture;return Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsx)("p",{children:"New User's Info"}),Object(g.jsx)("label",{htmlFor:t,children:"Title"}),Object(g.jsxs)("select",{name:"title",value:t,onChange:this.handleChangeAllInputs,children:[Object(g.jsx)("option",{value:"mr",children:"mr"}),Object(g.jsx)("option",{value:"mrs",children:"mrs"}),Object(g.jsx)("option",{value:"ms",children:"ms"}),Object(g.jsx)("option",{value:"miss",children:"miss"}),Object(g.jsx)("option",{value:"dr",children:"dr"})]}),Object(g.jsx)("input",{className:O.a.input,type:"text",name:"firstName",value:a,autoComplete:"off",placeholder:"First Name","aria-label":"users first name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Username must contain only letters, hyphen(-), space or apostrophe. Examples: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc.",required:!0,onChange:this.handleChangeAllInputs}),Object(g.jsx)("input",{className:O.a.input,type:"text",name:"lastName",value:n,autoComplete:"off",placeholder:"Last Name","aria-label":"users last name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Username must contain only letters, hyphen(-), space or apostrophe. Examples: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc.",required:!0,onChange:this.handleChangeAllInputs}),Object(g.jsx)("input",{className:O.a.input,type:"email",name:"email",value:s,autoComplete:"off",placeholder:"Email","aria-label":"users email",pattern:"^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",title:"Please enter a valid email address",required:!0,onChange:this.handleChangeAllInputs}),Object(g.jsx)("input",{className:O.a.input,type:"url",name:"picture",value:r,autoComplete:"off",placeholder:"Avatar URL http(s)://example.com","aria-label":"avatar url",pattern:"http(s)?://.*",title:"Please enter a valid url address",onChange:this.handleChangeAllInputs}),Object(g.jsx)("button",{type:"submit",className:O.a.addButton,children:"Add user"})]})}}]),a}(n.Component),y=a(15),x=a.n(y),M=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(g.jsx)("button",{type:"button",onClick:this.props.toggleModal,className:x.a.button,children:"Add new user"})}}]),a}(n.Component),B=(a(23),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(g.jsx)("button",{type:"button",onClick:this.props.handleClick,className:"Button",children:"Load more"})}}]),a}(n.Component)),U=new h,N=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={users:[],showModal:!1},e.toggleModal=function(){e.setState({showModal:!e.state.showModal})},e.addNewUser=function(t){new h(t).createUser().then((function(t){console.log("post result:",t),e.setState((function(e){return{users:[].concat(Object(A.a)(e.users),[t])}})),console.log("new users",t),e.onPageScroll()}))},e.loadMore=function(t){U.pages=1,U.getUsers().then((function(t){e.setState((function(e){return{users:[].concat(Object(A.a)(e.users),Object(A.a)(t.data))}})),e.onPageScroll()}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;U.getUsers().then((function(t){e.setState({users:t.data}),console.log(e.state.users)}))}},{key:"onPageScroll",value:function(){window.scrollTo({top:document.documentElement.offsetHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.users;e.status;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h1",{children:"Users from DummiApi"}),Object(g.jsx)(M,{toggleModal:this.toggleModal}),this.state.showModal&&Object(g.jsx)(E,{toggleModal:this.toggleModal,children:Object(g.jsx)(Q,{addNewUser:this.addNewUser,toggleModal:this.toggleModal})}),Object(g.jsx)("ul",{className:"ImageGallery",children:Object(g.jsx)(j,{users:t})}),Object(g.jsx)(B,{handleClick:this.loadMore})]})}}]),a}(n.Component),w=N;o.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.e11a023c.chunk.js.map