(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{19:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(14),u=n.n(a),o=(n(19),n(3)),i=n(0),s=function(e){var t=e.addPerson,n=e.handleNameChange,r=e.handleNumberChange,c=e.newName,a=e.newNumber;return Object(i.jsxs)("form",{onSubmit:t,children:[Object(i.jsx)("h2",{children:"add a new"}),Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{onChange:n,value:c})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{onChange:r,value:a})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},l=function(e){var t=e.searchVal,n=e.handleFilterChange;return Object(i.jsxs)("div",{children:["filter shown with",Object(i.jsx)("input",{onChange:n,value:t})]})},d=n(4),j=n.n(d),h="/api/persons",b={getAll:function(){return j.a.get(h).then((function(e){return e.data})).catch((function(e){alert("There was a server error. Please retry.",e)}))},create:function(e){return j.a.post(h,e).then((function(e){return e.data}))},update:function(e,t){return j.a.put("".concat(h,"/").concat(e),t).then((function(e){return e.data}))},deleteContact:function(e){return j.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))}},f=function(e){var t=e.person,n=e.renderContacts;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{children:[t.name," ",t.number,Object(i.jsx)("button",{onClick:function(){return function(e,t){window.confirm("Delete ".concat(e.name,"?"))&&b.deleteContact(e.id).then(t).catch((function(e){alert("There was a server error. Please retry.",e)}))}(t,n)},children:"delete"})]})})},O=function(e){var t=e.filteredPeople,n=e.renderContacts;return t.map((function(e){return Object(i.jsx)(f,{renderContacts:n,person:e},e.id)}))},m=(n(39),function(e){var t=e.message,n=e.typeOfClass;return null===t?null:Object(i.jsx)("div",{className:n,children:t})}),v=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),u=Object(o.a)(a,2),d=u[0],j=u[1],h=Object(r.useState)(""),f=Object(o.a)(h,2),v=f[0],p=f[1],g=Object(r.useState)(""),x=Object(o.a)(g,2),C=x[0],w=x[1],N=Object(r.useState)(""),P=Object(o.a)(N,2),S=P[0],y=P[1],F=Object(r.useState)(""),k=Object(o.a)(F,2),T=k[0],L=k[1],D=function(){b.getAll().then((function(e){return c(e)}))};Object(r.useEffect)(D,[]);var A=n.filter((function(e){var t;return null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t.toLowerCase().trim().includes(C.toLowerCase().trim())})),B=function(e){b.create(e).then((function(e){return c(n.concat(e))})).then((function(){y(d+" added!"),setTimeout((function(){y("")}),3e3)})).catch((function(e){L(e.response.data.error),setTimeout((function(){L("")}),3e3)}))};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),S&&Object(i.jsx)(m,{message:S,typeOfClass:"success"}),T&&Object(i.jsx)(m,{message:T,typeOfClass:"error"}),Object(i.jsx)(l,{searchVal:C,handleFilterChange:function(e){w(e.target.value)}}),Object(i.jsx)(s,{addPerson:function(e){e.preventDefault(),B({name:d,number:v}),j(""),p("")},handleNameChange:function(e){j(e.target.value)},handleNumberChange:function(e){p(e.target.value)},newName:d,newNumber:v}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(O,{renderContacts:D,filteredPeople:A})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,u=t.getTTFB;n(e),r(e),c(e),a(e),u(e)}))};u.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),p()}},[[40,1,2]]]);
//# sourceMappingURL=main.fcc818c1.chunk.js.map