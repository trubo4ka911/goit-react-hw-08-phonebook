"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[141],{5507:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,o,a,i,s=t(2791),c=t(577),d=(t(5462),t(4942)),l=t(1413),u=t(885),p=t(4903),m=t(7322),h=t(168),x=t(2499),f=x.Z.form(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n"]))),b=x.Z.label(o||(o=(0,h.Z)(["\ndisplay: flex;\n    color: #a3d0c3;\n  font-size: 16px;\n  vertical-align: middle \n  display: block;\n  margin-bottom: 15px;\n"]))),g=x.Z.input(a||(a=(0,h.Z)(["\n  margin-bottom: 25px;\n  width: 100%;\n  border: 1px transparent solid;\n  background: #f9f0da;\n  height: 42px;\n  padding-left: 15px;\n  border-radius: 10px;\n  &:focus:not(.focus-visible) {\n    outline: 0 !important;\n    box-shadow: none !important;\n  }\n  &:focus,\n  &:focus-visible {\n    border: 1px #a3d0c3 solid;\n  }\n"]))),v=x.Z.button(i||(i=(0,h.Z)(["\n  width: 200px;\n  padding: 10px;\n  border-radius: 10px;\n  background: #a3d0c3;\n  border: none;\n  color: #f9f0da;\n  cursor: pointer;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  &:hover,\n  &focus {\n    color: #a3d0c3;\n    background: #f9f0da;\n  }\n"]))),j=t(184);function Z(){var n=(0,s.useState)({name:"",number:""}),e=(0,u.Z)(n,2),t=e[0],r=e[1],o=function(n){var e=n.target,o=e.name,a=e.value;r((0,l.Z)((0,l.Z)({},t),{},(0,d.Z)({},o,a)))},a=(0,p.Jx)().contact,i=(0,p.Lr)(),h=(0,u.Z)(i,1)[0],x=t.name,Z=t.number;return(0,j.jsxs)(f,{className:"phonebook-form",onSubmit:function(n){var e;n.preventDefault(),e=n.target.name.value,a.some((function(n){return n.name.toLowerCase()===e.toLowerCase()}))?c.Am.info("".concat(t.name," is already in contacts!")):(h(t),c.Am.success("Contact has been added successfully!")),r({name:"",number:""})},children:[(0,j.jsxs)(b,{children:[(0,j.jsx)(g,{className:"phonebook-field",type:"text",placeholder:"Enter contact name",autoComplete:"off",value:x,onChange:o,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,j.jsx)(m.oV$,{style:{verticalAlign:"middle"},size:"42px"})]}),(0,j.jsxs)(b,{children:[(0,j.jsx)(g,{className:"phonebook-field",type:"tel",value:Z,onChange:o,name:"number",placeholder:"Enter phone number",autoComplete:"off",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,j.jsx)(m.REU,{style:{verticalAlign:"middle"},size:"42px"})]}),(0,j.jsx)(v,{className:"phonebook-button",type:"submit",children:"Add contact"})]})}var k,w,y,C,z=t(5048),A=function(n){return n.filter},F=x.Z.ul(k||(k=(0,h.Z)(["\n  padding: 0;\n  margin: 0;\n  width: 300px;\n"]))),N=x.Z.li(w||(w=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0;\n  border-bottom: 1px #a3d0c3 solid;\n"]))),L=x.Z.p(y||(y=(0,h.Z)(["\n  margin-right: 0;\n"]))),_=x.Z.button(C||(C=(0,h.Z)(["\n  border: none;\n  border-radius: 6px;\n  outline: none;\n  background: #a3d0c3;\n  height: 25px;\n  width: 42px;\n  cursor: pointer;\n  font-size: 16px;\n  color: #f9f0da;\n"])));function D(n){var e=n.contacts,t=(n.isFetching,n.onDelete),r=(0,z.v9)(A),o=function(){var n=r.toLowerCase();return null===e||void 0===e?void 0:e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(F,{children:o.map((function(n){var e=n.id,r=n.name,o=n.phone;return(0,j.jsxs)(N,{id:e,name:r,number:o,children:[(0,j.jsxs)(L,{children:[r,":"]}),(0,j.jsx)(L,{children:o}),(0,j.jsx)(_,{onClick:function(){return t(e)},children:(0,j.jsx)(m.FH3,{})})]},e)}))})})}var E,J,S=function(){var n=(0,p.Jx)(),e=n.data,t=n.isFetching,r=(0,p.Nt)(),o=(0,u.Z)(r,1)[0];return(0,j.jsx)("div",{children:e&&(0,j.jsx)(D,{contacts:e,onDelete:o,isFetching:t})})},q=x.Z.form(E||(E=(0,h.Z)(["\n  position: relative;\n  border-radius: 10px;\n  width: 300px;\n  background: #a3d0c3;\n"]))),I=x.Z.input(J||(J=(0,h.Z)(["\n  border: none;\n  outline: none;\n  background: transparent;\n  width: 100%;\n  height: 42px;\n  padding-left: 15px;\n"])));function P(){var n=(0,z.I0)(),e=(0,z.v9)(A);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("p",{children:"Find contacts by name"}),(0,j.jsx)(q,{children:(0,j.jsx)(I,{type:"text",name:"filter",onChange:function(e){return n((0,p.W1)(e.currentTarget.value))},value:e,placeholder:"Search name",autoComplete:"off"})})]})}t(9499);var $=function(){return(0,j.jsxs)("div",{style:{marginLeft:"5em"},children:[(0,j.jsx)(c.Ix,{position:"top-right",theme:"colored"}),(0,j.jsx)("h1",{children:"Phonebook"}),(0,j.jsx)(Z,{}),(0,j.jsx)("h2",{className:"title",children:"Contacts"}),(0,j.jsx)(P,{}),(0,j.jsx)(S,{})]})};function B(){return(0,j.jsx)($,{})}},9499:function(){}}]);
//# sourceMappingURL=contacts-page.708613d8.chunk.js.map