(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var s,c=n(8),a=n.n(c),r=n(2),i=n(3),o=n(5),l=n(4),u=n(6),h=n.n(u),b=n(1),j=n.n(b),g=(n(14),n(15),n(0)),p=function(t){var e=t.goods,n=t.className;return Object(g.jsx)("ul",{className:"goodsList ".concat(n),children:e.map((function(t){return Object(g.jsx)("li",{className:"goodsList__item",children:t},t)}))})},d=n(9),m=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:Object(d.a)(new Array(this.props.length)).map((function(t,e){return Object(g.jsx)("option",{value:e+1,children:e+1})}))})}}]),n}(b.PureComponent),f=m,v=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.none=0]="none",t[t.alphabet=1]="alphabet",t[t.length=2]="length"}(s||(s={}));var O=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={isVisible:!1,isReversed:!1,sortBy:s.none,minLength:0},t.changeVisible=function(){t.setState((function(t){return{isVisible:!t.isVisible}}))},t.changeReverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.changeSortBy=function(e){t.setState({sortBy:e})},t.setMinLength=function(e){t.setState({minLength:e})},t.reset=function(){t.setState({isReversed:!1,sortBy:s.none,minLength:0})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isVisible,c=e.isReversed,a=e.sortBy,r=e.minLength,i=[].concat(v).filter((function(t){return t.length>=r}));return i.sort((function(t,e){switch(a){case s.alphabet:return t.localeCompare(e);case s.length:return t.length-e.length;default:return 0}})),c&&i.reverse(),Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h1",{className:"App__title",children:"Goods"}),!n&&Object(g.jsx)("button",{className:"button",type:"button",onClick:this.changeVisible,children:"Start"}),n&&Object(g.jsxs)("div",{className:"App__controller",children:[Object(g.jsx)("button",{className:h()("button",{"button--active":c}),type:"button",onClick:this.changeReverse,children:"Reverse"}),Object(g.jsx)("button",{className:h()("button",{"button--active":a===s.alphabet}),type:"button",onClick:function(){return t.changeSortBy(s.alphabet)},children:"Sort alphabetically"}),Object(g.jsx)("button",{className:h()("button",{"button--active":a===s.length}),type:"button",onClick:function(){return t.changeSortBy(s.length)},children:"Sort by length"}),Object(g.jsx)("select",{className:"button",name:"minLength",id:"minLength",value:r,onChange:function(e){return t.setMinLength(+e.target.value)},children:Object(g.jsx)(f,{length:10})}),Object(g.jsx)("button",{className:"button",type:"button",onClick:this.reset,children:"Reset"})]}),n&&Object(g.jsx)(p,{goods:i,className:"App__list"})]})}}]),n}(j.a.Component),y=O;a.a.render(Object(g.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.edbe35d0.chunk.js.map