(this["webpackJsonpusers-dummyapi"]=this["webpackJsonpusers-dummyapi"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),c=n(10),i=n.n(c),r=(n(15),n(9)),o=n(2),u=n(3),l=n(6),m=n(5),h=(n(16),n(4)),p=function(){function t(){Object(o.a)(this,t),this.page=1,this.base_url=h.base_url,this.api_id=h.app_id,this.content=h.content_type,this.limit=h.limit}return Object(u.a)(t,[{key:"pages",get:function(){return this.page},set:function(t){this.page+=t}},{key:"searchUsers",value:function(){var t="".concat(this.base_url,"user?page=").concat(this.page,"&limit=").concat(this.limit);return console.log(t),fetch(t,{headers:{"Content-Type":"".concat(this.content),"app-id":"".concat(this.api_id)}}).then((function(t){return t.json()}))}}]),t}(),d=n(8),j=n.n(d),b=n(0),f=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return this.props.users.map((function(t){return Object(b.jsxs)("li",{className:j.a.ImageGalleryItem,children:[Object(b.jsx)("img",{src:t.picture,alt:"".concat(t.firstName," ").concat(t.lastName),className:j.a.ImageGalleryItem__image}),Object(b.jsxs)("p",{children:[t.title,". ",t.firstName," ",t.lastName]})]},t.id)}))}}]),n}(a.Component),g=new p,y=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={users:[],status:"idle"},t.handleClick=function(e){g.pages=1,g.searchUsers().then((function(e){t.setState((function(t){return{users:[].concat(Object(r.a)(t.users),Object(r.a)(e.data))}})),t.onPageScroll()}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;g.searchUsers().then((function(e){t.setState({users:e.data})}))}},{key:"onPageScroll",value:function(){window.scrollTo({top:document.documentElement.offsetHeight,behavior:"smooth"})}},{key:"render",value:function(){var t=this.state,e=t.users;if("idle"===t.status)return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Users from DummiApi"}),Object(b.jsx)("button",{type:"button",onClick:this.handleClick,className:"Button",children:"Add new user"}),Object(b.jsx)("ul",{className:"ImageGallery",children:Object(b.jsx)(f,{users:e})}),Object(b.jsx)("button",{type:"button",onClick:this.handleClick,className:"Button",children:"Load more"})]})}}]),n}(a.Component),O=y;i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))},4:function(t){t.exports=JSON.parse('{"base_url":"https://dummyapi.io/data/v1/","app_id":"6154537832884b1a024b2f3c","content_type":"application/json","limit":10}')},8:function(t,e,n){t.exports={ImageGalleryItem:"userList_ImageGalleryItem__2IjnQ",ImageGalleryItem__image:"userList_ImageGalleryItem__image__Rz5-R"}}},[[18,1,2]]]);
//# sourceMappingURL=main.5ecf7d79.chunk.js.map