(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{19:function(e,n,t){},39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),a=t(14),o=t.n(a),u=(t(19),t(3)),i=t(0),s=function(e){var n=e.addPerson,t=e.handleNameChange,r=e.handleNumberChange,c=e.newName,a=e.newNumber;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsx)("h2",{children:"add a new"}),Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{onChange:t,value:c})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{onChange:r,value:a})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.searchVal,t=e.handleFilterChange;return Object(i.jsxs)("div",{children:["filter shown with",Object(i.jsx)("input",{onChange:t,value:n})]})},l=t(4),h=t.n(l),j="http://localhost:3001/persons",b=function(){return h.a.get(j).then((function(e){return e.data})).catch((function(e){alert("There was a server error. Please retry.",e)}))},f=function(e){return h.a.post(j,e).then((function(e){return e.data})).catch((function(e){alert("There was a server error. Please retry.",e)}))},m=function(e,n){return h.a.put("".concat(j,"/").concat(e),n).then((function(e){return e.data}))},O=function(e){return h.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.data})).catch((function(e){alert("There was a server error. Please retry.",e)}))},v=function(e){var n=e.person,t=e.renderContacts;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{children:[n.name," ",n.number,Object(i.jsx)("button",{onClick:function(){return function(e,n){window.confirm("Delete ".concat(e.name,"?"))&&O(e.id).then(n)}(n,t)},children:"delete"})]})})},p=function(e){var n=e.filteredPeople,t=e.renderContacts;return n.map((function(e){return Object(i.jsx)(v,{renderContacts:t,person:e},e.id)}))},x=(t(39),function(e){var n=e.message,t=e.typeOfClass;return null===n?null:Object(i.jsx)("div",{className:t,children:n})}),g=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(""),o=Object(u.a)(a,2),l=o[0],h=o[1],j=Object(r.useState)(""),O=Object(u.a)(j,2),v=O[0],g=O[1],C=Object(r.useState)(""),w=Object(u.a)(C,2),y=w[0],N=w[1],P=Object(r.useState)(""),S=Object(u.a)(P,2),k=S[0],F=S[1],T=Object(r.useState)(""),L=Object(u.a)(T,2),D=L[0],I=L[1],B=function(){b().then((function(e){return c(e)}))};Object(r.useEffect)(B,[]);var E=t.filter((function(e){return e.name.toLowerCase().trim().includes(y.toLowerCase().trim())})),J=function(e){f(e).then((function(e){return c(t.concat(e))})).then((function(){F(l+" added!"),setTimeout((function(){F("")}),3e3)}))},V=function(e,n){m(e,n).then(B).catch((function(e){I("Information of ".concat(n.name," has already been removed from server")),setTimeout((function(){I("")}),3e3)}))};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),k&&Object(i.jsx)(x,{message:k,typeOfClass:"success"}),D&&Object(i.jsx)(x,{message:D,typeOfClass:"error"}),Object(i.jsx)(d,{searchVal:y,handleFilterChange:function(e){N(e.target.value)}}),Object(i.jsx)(s,{addPerson:function(e){if(e.preventDefault(),l&&v){var n={name:l,number:v},r=t.find((function(e){return e.name===l}));(null===r||void 0===r?void 0:r.id)?window.confirm("".concat(r.name," is already added to phonebook, replace old number with new one?"))&&V(r.id,n):J(n),h(""),g("")}},handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){g(e.target.value)},newName:l,newNumber:v}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(p,{renderContacts:B,filteredPeople:E})]})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),C()}},[[40,1,2]]]);
//# sourceMappingURL=main.79c6b082.chunk.js.map