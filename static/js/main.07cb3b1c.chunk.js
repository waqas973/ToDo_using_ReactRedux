(this["webpackJsonptodo-using-redux"]=this["webpackJsonptodo-using-redux"]||[]).push([[0],{16:function(t,e,s){},22:function(t,e,s){"use strict";s.r(e);var n=s(4),a=s.n(n),c=(s(16),s(9)),i=s(0),d=s(2),r=s(1);var l=function(t){var e=Object(i.useState)(""),s=Object(c.a)(e,2),n=s[0],a=s[1],l=Object(d.c)((function(t){return t.lists})),o=Object(d.b)();return Object(r.jsx)("div",{className:"main-div",children:Object(r.jsxs)("div",{className:"child-div",children:[Object(r.jsx)("div",{className:"crud",children:"crud Operation in Todo"}),Object(r.jsxs)("div",{className:"addItems",children:[Object(r.jsx)("input",{type:"text",placeholder:"Add items",autoComplete:"off",id:"",value:n,onChange:function(t){return a(t.target.value)}}),Object(r.jsx)("i",{className:"fas fa-plus add-btn",name:"AddItem",onClick:function(){return o((t=n,{type:"ADDITEM",payload:{id:(new Date).getTime().toString(),data:t}}),a(""));var t},title:"Add items"})]}),Object(r.jsx)("div",{className:"showItems",children:l.map((function(t){return Object(r.jsxs)("div",{className:"eachItem ",children:[Object(r.jsx)("h3",{children:t.data}),Object(r.jsx)("div",{className:"todo-btn",children:Object(r.jsx)("i",{className:"far fa-trash-alt  add-btn",onClick:function(){return o({type:"DELITEM",id:t.id})},title:"Delete Items"})})]},t.id)}))}),Object(r.jsx)("div",{className:"showItems",children:Object(r.jsx)("button",{className:"btn effect04",onClick:function(){return o({type:"CLEARALL"})},"data-sm-link-text":"Remove All",children:Object(r.jsx)("span",{children:"CHECK LIST"})})})]})})};var o=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(l,{})})},j=s(11),u=s(10),b={lists:[]},O=Object(j.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADDITEM":var s=e.payload,n=s.id,a=s.data;return{lists:[].concat(Object(u.a)(t.lists),[{id:n,data:a}])};case"DELITEM":var c=t.lists.filter((function(t){return t.id!==e.id}));return{lists:c};case"CLEARALL":return{lists:[]};default:return t}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(r.jsx)(d.a,{store:O,children:Object(r.jsx)(o,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.07cb3b1c.chunk.js.map