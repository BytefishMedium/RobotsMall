(this["webpackJsonprobots-mall"]=this["webpackJsonprobots-mall"]||[]).push([[0],{20:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n(1),s=n.n(o),r=n(12),a=n.n(r),c=(n(20),n(13)),p=n(2),h=n(4),d=n(5),l=n(7),b=n(6),j=n(3),u=n.n(j),O=function(t){var e=t.type,n=t.price,o=t.description,s=t.addRobotToShoppingCardList;return Object(i.jsxs)("div",{className:u.a.cardContainer,children:[Object(i.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(e)}),Object(i.jsx)("h2",{children:e}),Object(i.jsxs)("p",{children:["Price: ",Object(i.jsx)("span",{className:u.a.price,children:n}),"$"]}),Object(i.jsx)("p",{className:u.a.description,children:o}),Object(i.jsx)("button",{className:u.a.addBtn,onClick:function(t){return s({type:e,price:n,addRobotToShoppingCardList:s})},children:"add to shopping cart"})]})},g=n(8),C=n.n(g),f=n(9),m=n.n(f),v=n(14),_=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(t){var i;return Object(h.a)(this,n),(i=e.call(this,t)).handleClick=function(t){i.setState({isOpen:!i.state.isOpen})},i.state={isOpen:!1},i}return Object(d.a)(n,[{key:"getTotalPrice",value:function(){var t=0;return this.props.shoppingCardList.forEach((function(e){t+=e.price})),t}},{key:"handleRemove",value:function(t){this.props.removeRobotFromShoppingCardList(t)}},{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{className:m.a.cartContainer,children:[Object(i.jsx)(v.a,{}),Object(i.jsxs)("span",{style:{color:"red"},children:[" ",this.props.shoppingCardList.length," "]})," robots in you shopping cart, total price: ",Object(i.jsxs)("span",{style:{color:"red"},children:[this.getTotalPrice(),"$"]}),".",Object(i.jsxs)("button",{className:m.a.detailsBtn,onClick:this.handleClick,children:[this.state.isOpen?"hide details":"show details"," "]}),Object(i.jsx)("div",{className:m.a.cartDropDown,style:{display:this.state.isOpen?"block":"none"},children:Object(i.jsxs)("ul",{children:[0===this.props.shoppingCardList.length?Object(i.jsx)("li",{children:"nothing in your shopping cart"}):"",this.props.shoppingCardList.map((function(e){return Object(i.jsxs)("li",{children:[e.type," ",Object(i.jsx)("button",{onClick:function(n){return t.handleRemove(e)},children:"remove"})]})}))]})})]})}}]),n}(s.a.Component),L=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(t){var i;return Object(h.a)(this,n),(i=e.call(this,t)).state={robotsList:[],shoppingCartList:[]},i}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("".concat("https://mockend.com/BytefishMedium/RobotsMall","/robots")).then((function(t){return t.json()})).then((function(e){return t.setState(Object(p.a)(Object(p.a)({},t.state),{},{robotsList:e}))}))}},{key:"addRobotToShoppingCardList",value:function(t){0===this.state.shoppingCartList.filter((function(e){return e.type===t.type})).length&&this.setState(Object(p.a)(Object(p.a)({},this.state),{},{shoppingCartList:[].concat(Object(c.a)(this.state.shoppingCartList),[t])}))}},{key:"removeRobotFromShoppingCardList",value:function(t){this.setState(Object(p.a)(Object(p.a)({},this.state),{},{shoppingCartList:this.state.shoppingCartList.filter((function(e){return e.type!==t.type}))}))}},{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{className:C.a.app,children:[Object(i.jsx)("div",{className:C.a.title,children:Object(i.jsx)("h1",{children:"We are selling awesome robots!"})}),Object(i.jsx)(_,{shoppingCardList:this.state.shoppingCartList,removeRobotFromShoppingCardList:this.removeRobotFromShoppingCardList.bind(this)}),Object(i.jsx)("div",{className:C.a.robotList,children:this.state.robotsList.map((function(e){return Object(i.jsx)(O,{type:e.type,price:e.price,description:e.description,addRobotToShoppingCardList:t.addRobotToShoppingCardList.bind(t)})}))})]})}}]),n}(s.a.Component),x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(e){var n=e.getCLS,i=e.getFID,o=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),i(t),o(t),s(t),r(t)}))};n(21).config(),a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(L,{})}),document.getElementById("root")),x()},3:function(t,e,n){t.exports={cardContainer:"Robot_cardContainer__19gp-",description:"Robot_description__1v02T",addBtn:"Robot_addBtn__2kGlT",price:"Robot_price__1rofT"}},8:function(t,e,n){t.exports={app:"App_app__1kX79",title:"App_title__-GfWs",robotList:"App_robotList__zTHhD"}},9:function(t,e,n){t.exports={cartContainer:"ShoppingCart_cartContainer__1Gl09",detailsBtn:"ShoppingCart_detailsBtn__2R1jC",cartDropDown:"ShoppingCart_cartDropDown__23j9i"}}},[[25,1,2]]]);
//# sourceMappingURL=main.1a51230a.chunk.js.map