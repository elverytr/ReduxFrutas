(this["webpackJsonpvacio-6"]=this["webpackJsonpvacio-6"]||[]).push([[0],{26:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),s=a(5),n=a.n(s),l=a(3),o=a(8),i=a(7),d=a(2),b="AGREGAR_FRUTA",j="BORRAR_FRUTA",u="VALIDAR_ENTRADAS",m=a(13),p=a.n(m),O=function(e){return{type:u,payload:e}},h=a(0),x=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),a=Object(o.a)(t,2),r=a[0],s=a[1];return[r,function(e){var t=e.target;s(Object(d.a)(Object(d.a)({},r),{},Object(i.a)({},t.name,t.value)))},function(){s(e)}]}({nombre:"",precio:"",foto:""}),t=Object(o.a)(e,3),a=t[0],r=t[1],s=t[2],n=a.nombre,j=a.precio,u=a.foto,m=Object(l.b)(),x=function(e){m(function(e){return{type:b,payload:e}}(e))},f=function(e){m(O(e))},g=Object(l.c)((function(e){return e.error}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{type:"button align-middle",className:"btn btn-success fs-5","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",children:"Agregar"}),Object(h.jsx)("div",{className:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:Object(h.jsx)("div",{className:"modal-dialog",children:Object(h.jsxs)("div",{className:"modal-content",children:[Object(h.jsxs)("div",{className:"modal-header",children:[Object(h.jsx)("h5",{className:"modal-title text-dark",id:"staticBackdropLabel",children:"Agregar Otra Fruta"}),Object(h.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(),""!==n.trim()&&""!==j.trim()&&""!==u.trim()?(f(!1),x({id:p()(),nombre:n,precio:j,foto:u})):f(!0)},children:[Object(h.jsxs)("div",{className:"modal-body",children:[Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Fruta"}),Object(h.jsx)("input",{name:"nombre",type:"text",className:"form-control",placeholder:"ejemplo: Papaya","aria-label":"Username","aria-describedby":"basic-addon1",value:n,onChange:r})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Precio"}),Object(h.jsx)("input",{name:"precio",type:"text",className:"form-control",placeholder:"$$$","aria-label":"Username","aria-describedby":"basic-addon1",value:j,onChange:r})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Foto"}),Object(h.jsx)("input",{name:"foto",title:"Pega en este recuadro el link de la foto",type:"text",className:"form-control",placeholder:"https://i.ibb.co/7WrM9C2/papaya.webp","aria-label":"Username","aria-describedby":"basic-addon1",value:u,onChange:r})]}),Object(h.jsx)("a",{href:"https://ibb.co/album/v1m0zm",target:"blank",children:Object(h.jsx)("span",{class:"badge bg-info",children:"Puedes pinchar aqu\xed para encontrar imagenes de frutas"})}),g.error?Object(h.jsx)("div",{className:"alert alert-danger text-center p2 col-12 mt-1",children:"Todos los campos son obligatorios"}):null]}),Object(h.jsxs)("div",{className:"modal-footer",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-danger","data-bs-dismiss":"modal",children:"Volver"}),Object(h.jsx)("button",{type:"submit",className:"btn btn-success",children:"Confirmar"})]})]})]})})})]})},f=function(){var e=Object(l.c)((function(e){return e.frutas})),t=Object(l.b)();return console.log(e),Object(h.jsx)("div",{className:"container-fluid",children:Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{className:"bg-secondary text-light text-center align-middle",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Foto"}),Object(h.jsx)("th",{scope:"col",children:"Nombre"}),Object(h.jsx)("th",{scope:"col",children:"Precio"}),Object(h.jsx)("th",{scope:"col",children:Object(h.jsx)(x,{})})]})}),Object(h.jsx)("tbody",{className:"fs-5",children:e.frutas.map((function(e){return Object(h.jsxs)("tr",{className:"bg-info text-light fw-bold",children:[Object(h.jsx)("td",{className:"col-2",children:Object(h.jsx)("img",{className:"col-12",src:e.foto})}),Object(h.jsx)("td",{className:"col-4 align-middle text-center",children:e.nombre}),Object(h.jsx)("td",{className:"col-3 align-middle text-center",children:e.precio}),Object(h.jsx)("td",{className:"col-1 align-middle text-center",children:Object(h.jsx)("button",{type:"button align-middle",className:"btn btn-danger fs-5",onClick:function(){return t((a=e.id,{type:j,payload:a}));var a},children:"Eliminar"})})]},e.id)}))})]})})};function g(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light mb-3 bg-dark",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("div",{className:"col-8",children:Object(h.jsx)("a",{className:"navbar-brand text-light fw-bolder",href:"#",children:"Redux Fruter\xeda"})}),Object(h.jsx)("button",{className:"navbar-toggler bg-success",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse col-4 mt-2",id:"navbarSupportedContent"})]})})})}var v=a(9),N=a(14),y={frutas:[]},S={error:!1},_=Object(v.a)({frutas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(d.a)(Object(d.a)({},e),{},{frutas:[].concat(Object(N.a)(e.frutas),[t.payload])});case j:return Object(d.a)(Object(d.a)({},e),{},{frutas:e.frutas.filter((function(e){return e.id!==t.payload}))});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(d.a)(Object(d.a)({},e),{},{error:t.payload});default:return e}}}),k=function(){var e=localStorage.getItem("frutas");if(null!==e)return JSON.parse(e)}(),E=Object(v.b)(_,k,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());E.subscribe((function(){!function(e){var t=JSON.stringify(e);localStorage.setItem("frutas",t)}({frutas:E.getState().frutas})}));var R=E;var w=function(){return Object(h.jsxs)(l.a,{store:R,children:[Object(h.jsx)(g,{}),Object(h.jsx)(f,{})]})};n.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.b91dc7d8.chunk.js.map