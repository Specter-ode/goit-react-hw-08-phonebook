"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[139],{8205:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(2791),i=n(6382),r="FormTextField_block__MEJDx",l="FormTextField_label__lF6en",o="FormTextField_input__xOyRo",s=n(3329),u=function(e){var t=e.label,n=e.name,u=e.value,c=e.onChange,d=e.required,m=e.type,h=e.placeholder,_=e.title,b=e.pattern,p=(0,a.useMemo)((function(){return(0,i.x0)()}),[]);return(0,s.jsxs)("div",{className:r,children:[(0,s.jsx)("input",{className:o,id:p,name:n,value:u,onChange:c,required:d,placeholder:h,type:m,title:_,pattern:b}),t&&(0,s.jsx)("label",{className:l,htmlFor:p,children:t})]})},c=u;u.defaultProps={type:"text",required:!1}},9473:function(e,t,n){n.d(t,{Z:function(){return l}});var a="Section_title__SLHvV",i="Section_section__Z2PLw",r=n(3329);var l=function(e){var t=e.title,n=e.children;return(0,r.jsxs)("section",{className:i,children:[(0,r.jsx)("h2",{className:a,children:t}),n]})}},1139:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a="RegisterPage_container__l-2BF",i=n(9434),r=n(1413),l="RegisterForm_form__Tv43W",o="RegisterForm_btn__bgTuW",s=n(7726),u=n(8205),c=n(9473),d={label:"Name",name:"name",type:"text",required:!0},m={label:"Email",name:"email",type:"email",required:!0},h={label:"Password",name:"password",type:"password",required:!0,placeholder:"min 7 symbols"},_=n(3329),b={name:"",email:"",password:""},p=function(e){var t=e.onSubmitClick,n=(0,s.Z)({onSubmitClick:t,initialState:b}),a=n.state,i=n.handleChange,p=n.handleSubmit,f=a.name,x=a.email,v=a.password,g=f&&x&&v.length>6;return(0,_.jsx)(c.Z,{title:"Registration form",children:(0,_.jsxs)("form",{className:l,onSubmit:p,children:[(0,_.jsx)(u.Z,(0,r.Z)({value:f,onChange:i},d)),(0,_.jsx)(u.Z,(0,r.Z)({value:x,onChange:i},m)),(0,_.jsx)(u.Z,(0,r.Z)({value:v,onChange:i},h)),(0,_.jsx)("button",{type:"submit",disabled:!g,className:o,children:"Submit"})]})})},f=n(8724),x=function(){var e=(0,i.I0)();return(0,_.jsx)("main",{children:(0,_.jsxs)("div",{className:a,children:[(0,_.jsx)("h3",{children:"You are on the right way. To access to the phonebook you need to register"}),(0,_.jsx)(p,{onSubmitClick:function(t){e((0,f.z2)(t))}})]})})}},7726:function(e,t,n){var a=n(4942),i=n(1413),r=n(885),l=n(2791);t.Z=function(e){var t=e.onSubmitClick,n=e.initialState,o=e.clearFields,s=void 0===o||o,u=(0,l.useState)((0,i.Z)({},n)),c=(0,r.Z)(u,2),d=c[0],m=c[1];return{state:d,setState:m,handleChange:function(e){var t=e.target,n=t.name,r=t.value,l=t.type,o=t.checked,s="checkbox"===l?o:r;m((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,a.Z)({},n,s))}))},handleSubmit:function(e){e.preventDefault(),t((0,i.Z)({},d)),s&&m((0,i.Z)({},n))}}}}}]);
//# sourceMappingURL=139.01c9e585.chunk.js.map