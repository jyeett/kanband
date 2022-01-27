(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{73:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(15),s=a.n(c),r=(a(73),a(17)),i=a(6),o=a(10),l=(a(74),a(8)),j=a(2),d=a(22),b=a(65),u=a(93),O=a(89),h=a(1);var m=function(e){var t=e.setCurrentUser,a=e.setUserProjects,c=Object(o.f)(),s=Object(n.useState)({username:"",email:"",password:""}),r=Object(i.a)(s,2),m=r[0],x=r[1],p=function(e){x(Object(j.a)(Object(j.a)({},m),{},Object(l.a)({},e.target.name,e.target.value)))};return Object(h.jsxs)("div",{className:"text-center d-flex flex-column align-items-center",children:[Object(h.jsx)("h1",{className:"title my-5",children:"Welcome to KanbanD!"}),Object(h.jsx)("br",{}),Object(h.jsxs)(b.a,{sm:8,children:[Object(h.jsxs)(u.a,{onSubmit:function(e){e.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)};fetch("/login",n).then((function(e){e.ok?(e.json().then((function(e){t(e),console.log(e.projects),a(null===e||void 0===e?void 0:e.projects)})),c.push("/home")):e.json().then((function(e){console.error(e)}))}))},children:[Object(h.jsx)(u.a.Group,{className:"mb-3",controlId:"formBasicUsername",children:Object(h.jsx)(u.a.Control,{placeholder:"Username",type:"text",name:"username",value:m.username,onChange:function(e){return p(e)}})}),Object(h.jsx)(u.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object(h.jsx)(u.a.Control,{placeholder:"Password",type:"password",name:"password",value:m.password,onChange:function(e){return p(e)}})}),Object(h.jsx)(u.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:Object(h.jsx)(u.a.Control,{placeholder:"Email",type:"email",name:"email",value:m.email,onChange:function(e){return p(e)}})}),Object(h.jsx)("br",{}),Object(h.jsx)(O.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(h.jsx)("br",{})]}),Object(h.jsx)(d.b,{exact:!0,to:"/signup",children:"Don't have an account? Create one here"})]})};var x=function(e){var t=e.setCurrentUser,a=Object(o.f)(),c=Object(n.useState)({username:"",email:"",password:""}),s=Object(i.a)(c,2),r=s[0],m=s[1],x=function(e){m(Object(j.a)(Object(j.a)({},r),{},Object(l.a)({},e.target.name,e.target.value)))};return Object(h.jsxs)("div",{className:"text-center d-flex flex-column align-items-center",children:[Object(h.jsx)("h2",{className:"my-5",children:"Create your account"}),Object(h.jsx)("br",{}),Object(h.jsx)(b.a,{sm:8,md:6,lg:4,children:Object(h.jsxs)(u.a,{onSubmit:function(e){e.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};fetch("/signup",n).then((function(e){e.ok?(e.json().then((function(e){t(e)})),a.push("/")):e.json().then((function(e){console.error(e)}))}))},children:[Object(h.jsx)(u.a.Group,{className:"mb-3",controlId:"formBasicUsername",children:Object(h.jsx)(u.a.Control,{placeholder:"Username",type:"text",name:"username",value:r.username,onChange:function(e){return x(e)}})}),Object(h.jsx)(u.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object(h.jsx)(u.a.Control,{placeholder:"Password",type:"password",name:"password",value:r.password,onChange:function(e){return x(e)}})}),Object(h.jsx)(u.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:Object(h.jsx)(u.a.Control,{placeholder:"Email",type:"email",name:"email",value:r.email,onChange:function(e){return x(e)}})}),Object(h.jsx)("br",{}),Object(h.jsx)(O.a,{variant:"primary",type:"submit",children:"Submit"})]})}),Object(h.jsx)("br",{}),Object(h.jsx)(d.b,{to:"/",children:"Back to Log in Page"})]})},p=a(91),f=a(90),g=a(94),y=a(97);var v=function(e){var t=e.project,a=e.handleShowUpdate,n=e.deleteHandler,c=e.setActiveProject,s=e.setTaskList,r=Object(o.f)();return Object(h.jsx)(y.a,{className:"my-5 mx-3",style:{width:"20rem",height:"15rem"},children:Object(h.jsxs)(y.a.Body,{className:"card-style",children:[Object(h.jsxs)(f.a,{children:[Object(h.jsx)(y.a.Title,{className:"my-3",children:t.name}),Object(h.jsx)(y.a.Text,{children:t.description})]}),Object(h.jsxs)(f.a,{children:[Object(h.jsx)(b.a,{className:"d-flex justify-content-center",children:Object(h.jsx)(O.a,{variant:"primary",onClick:function(){c(t),console.log(t),s(t.tasks),r.push("/project")},children:"View"})}),Object(h.jsx)(b.a,{className:"d-flex justify-content-center",children:Object(h.jsx)(O.a,{variant:"primary",onClick:function(){return a(t.name,t.description,t.id)},children:"Edit"})}),Object(h.jsx)(b.a,{className:"d-flex justify-content-center",children:Object(h.jsx)(O.a,{variant:"danger",onClick:function(){return n(t.id)},children:"Delete"})})]})]})})};var C=function(e){var t=e.currentUser,a=e.addNewProject,c=e.userProjects,s=e.setUserProjects,o=e.setActiveProject,d=e.setTaskList,m=Object(n.useState)(!1),x=Object(i.a)(m,2),y=x[0],C=x[1],k=Object(n.useState)(!1),T=Object(i.a)(k,2),N=T[0],S=T[1],w=Object(n.useState)(!0),P=Object(i.a)(w,2),D=P[0],A=P[1],I=Object(n.useState)(!0),E=Object(i.a)(I,2),B=E[0],L=E[1],_=Object(n.useState)({name:"",description:"",user_id:""}),H=Object(i.a)(_,2),U=H[0],J=H[1],R=Object(n.useState)({name:"",description:"",user_id:""}),Y=Object(i.a)(R,2),G=Y[0],z=Y[1],F=c.map((function(e){return Object(h.jsx)(v,{project:e,handleShowUpdate:K,deleteHandler:q,setActiveProject:o,setTaskList:d},e.id)}));function W(){C(!1)}function K(e,a,n){z({name:e,description:a,id:n,user_id:t.id}),S(!0)}function M(){S(!1)}function V(e){J(Object(j.a)(Object(j.a)({},U),{},Object(l.a)({},e.target.name,e.target.value)))}function X(e){z(Object(j.a)(Object(j.a)({},G),{},Object(l.a)({},e.target.name,e.target.value)))}function q(e){var t=c.filter((function(t){return t.id!==e}));console.log(t),s(Object(r.a)(t)),fetch("/projects/".concat(e),{method:"DELETE"})}function Q(e){if(e.preventDefault(),0===U.name.length||0===U.description.length)""===U.name?A(!1):A(!0),""===U.description?L(!1):L(!0),console.log("trying to submit baaaad data ='(");else{console.log("trying to create a new project."),console.log(U);var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(U)};fetch("/projects",t).then((function(e){return e.json()})).then((function(e){a(e),J({name:"",description:"",user_id:""}),A(!0),L(!0)})),W()}}function Z(){if(""!==G.name&&""!==G.description){var e=c.map((function(e){return e.id===G.id?{name:G.name,description:G.description,id:G.id,user_id:t.id}:(console.log(e),e)}));console.log(e),s(Object(r.a)(c),e),fetch("/projects/".concat(G.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(G)}).then((function(e){return e.json()})).then((function(e){console.log(e),d(e.tasks),M()}))}else console.log("cannot apply changes")}return Object(h.jsxs)(p.a,{children:[Object(h.jsx)(f.a,{children:Object(h.jsx)(b.a,{lg:12,children:Object(h.jsx)("h1",{className:"text-center my-5",children:"YOUR PROJECTS"})})}),Object(h.jsx)(f.a,{className:"proj-btn",style:{marginBottom:"35px"},children:Object(h.jsx)(b.a,{className:"d-flex justify-content-end",children:Object(h.jsx)(O.a,{onClick:function(){C(!0),J(Object(j.a)(Object(j.a)({},U),{},Object(l.a)({},"user_id",t.id)))},children:"Add Project"})})}),Object(h.jsx)(f.a,{className:"d-flex justify-content-center",children:F}),Object(h.jsxs)(g.a,{show:y,onHide:W,children:[Object(h.jsx)(g.a.Header,{closeButton:!0,children:Object(h.jsx)(g.a.Title,{children:"Create New Project"})}),Object(h.jsx)(g.a.Body,{children:Object(h.jsxs)(u.a,{onSubmit:Q,children:[Object(h.jsx)(u.a.Control,{type:"text",name:"name",placeholder:"Project Name",onChange:V,value:U.name}),D?null:Object(h.jsx)(u.a.Text,{className:"invalid-input",style:{color:"red"},children:"You must enter a name."}),Object(h.jsx)(u.a.Control,{type:"text",name:"description",placeholder:"Add a Short Description",onChange:V,value:U.description}),B?null:Object(h.jsx)(u.a.Text,{className:"invalid-input",style:{color:"red"},children:"You must enter a description."})]})}),Object(h.jsxs)(g.a.Footer,{children:[Object(h.jsx)(O.a,{variant:"secondary",onClick:W,children:"Close"}),Object(h.jsx)(O.a,{type:"submit",variant:"primary",onClick:Q,children:"Create Project"})]})]}),Object(h.jsxs)(g.a,{show:N,onHide:M,children:[Object(h.jsx)(g.a.Header,{closeButton:!0,children:Object(h.jsx)(g.a.Title,{children:"Edit Your Details"})}),Object(h.jsx)(g.a.Body,{children:Object(h.jsxs)(u.a,{onSubmit:Z,children:[Object(h.jsx)(u.a.Text,{className:"invalid-input",children:"Album Name"}),Object(h.jsx)(u.a.Control,{type:"text",name:"name",placeholder:"album name",onChange:X,value:G.name}),""!==G.name?null:Object(h.jsx)(u.a.Text,{className:"invalid-input",style:{color:"red"},children:"You must enter a name."}),Object(h.jsx)(u.a.Text,{className:"invalid-input",children:"Description"}),Object(h.jsx)(u.a.Control,{type:"text",name:"description",placeholder:"description",onChange:X,value:G.description}),""!==G.description?null:Object(h.jsx)(u.a.Text,{className:"invalid-input",style:{color:"red"},children:"You must enter a description."})]})}),Object(h.jsxs)(g.a.Footer,{children:[Object(h.jsx)(O.a,{variant:"secondary",onClick:M,children:"Close"}),Object(h.jsx)(O.a,{type:"submit",variant:"primary",onClick:Z,children:"Apply Changes"})]})]})]})},k=a(41),T={backgroundColor:"lightblue",minHeight:"1.5rem",maxWidth:"4rem",borderRadius:"15px",fontSize:"12px",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"30px"},N={height:"1.5rem",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"12px"},S={height:"18px",maxWidth:"5px",position:"absolute",top:"-5px",left:"-5px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"100%",fontSize:"11px"};var w=function(e){var t=e.task,a=e.index,c=e.setActiveTask,s=e.handleTaskDelete,r=Object(o.f)(),l=Object(n.useState)(!1),d=Object(i.a)(l,2),u=d[0],m=d[1];function x(){r.push("/task"),c(t)}return Object(h.jsx)(k.b,{draggableId:String(t.id),index:a,children:function(e,a){return Object(h.jsxs)(y.a,Object(j.a)(Object(j.a)({className:"my-1",ref:e.innerRef},e.draggableProps),{},{style:Object(j.a)(Object(j.a)({maxWidth:"12rem",maxHeight:"7rem",minWidth:"12rem",minHeight:"7rem"},e.draggableProps.style),{},{opacity:a.isDragging?"70%":"100%",boxShadow:a.isDragging?"":"3px 3px #434743",color:"black"}),onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)},children:[u?Object(h.jsx)(O.a,{variant:"danger",onClick:function(){return s(t.id)},style:S,children:"X"}):null,Object(h.jsxs)(y.a.Body,{className:"d-flex flex-column justify-content-between",children:[Object(h.jsxs)(f.a,{children:[Object(h.jsx)(b.a,{sm:10,children:Object(h.jsx)(y.a.Title,{style:{fontSize:"15px"},children:t.summary})}),Object(h.jsx)(b.a,{className:"d-flex flex-row-reverse",sm:2,children:Object(h.jsx)("div",Object(j.a)(Object(j.a)({},e.dragHandleProps),{},{style:{position:"absolute",top:"5px"},children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-list",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{"fill-rule":"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"})})}))})]}),Object(h.jsxs)(f.a,{className:"d-flex flex-row-reverse",children:[Object(h.jsx)(b.a,{sm:8,className:"",children:Object(h.jsx)("div",{style:T,children:t.category_name})}),Object(h.jsx)(b.a,{sm:4,children:Object(h.jsx)(O.a,{style:N,onClick:x,children:"View"})})]})]})]}))}},String(t.id))},P=a(96),D={backgroundColor:"#354a38",width:"100%",height:"65vh",border:"1px solid black",borderRadius:"15px"},A={padding:"4px",width:"210px",marginRight:"10px",marginLeft:"10px",height:"500px",overflowY:"scroll",overflowX:"hidden",scrollbarWidth:"none",display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"10px"};var I=function(e){var t,a=e.setActiveTask,c=e.taskCategories,s=e.setTaskList,o=e.taskList,d=(t={},Object(l.a)(t,Object(P.a)(),{name:"BACKLOG",label:"backlog",items:c.backlog}),Object(l.a)(t,Object(P.a)(),{name:"TO DO",label:"todo",items:c.todo}),Object(l.a)(t,Object(P.a)(),{name:"IN PROGRESS",label:"progress",items:c.progress}),Object(l.a)(t,Object(P.a)(),{name:"IN REVIEW",label:"review",items:c.review}),Object(l.a)(t,Object(P.a)(),{name:"DONE",label:"done",items:c.done}),t),b=Object(n.useState)(d),u=Object(i.a)(b,2),O=u[0],m=u[1];Object(n.useEffect)((function(){m(d)}),[c]);var x=function(e,t,a){if(e.destination){var n,c,d=e.source,b=e.destination;if(d.droppableId!==b.droppableId){var u,O=t[d.droppableId],h=t[b.droppableId],m=Object(r.a)(O.items),x=Object(r.a)(h.items),p=m.splice(d.index,1),f=Object(i.a)(p,1)[0];x.splice(b.index,0,f),a(Object(j.a)(Object(j.a)({},t),{},(u={},Object(l.a)(u,d.droppableId,Object(j.a)(Object(j.a)({},O),{},{items:m})),Object(l.a)(u,b.droppableId,Object(j.a)(Object(j.a)({},h),{},{items:x})),u))),n=f,c=h.label,fetch("/tasks/".concat(n.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(l.a)({},"progress",c))}).then((function(e){return e.json()})).then((function(e){var t=o;t.splice(t.findIndex((function(t){return t.id===e.id})),1,e),s(Object(r.a)(t))}))}else{var g=t[d.droppableId],y=Object(r.a)(g.items),v=y.splice(d.index,1),C=Object(i.a)(v,1)[0];y.splice(b.index,0,C),a(Object(j.a)(Object(j.a)({},t),{},Object(l.a)({},d.droppableId,Object(j.a)(Object(j.a)({},g),{},{items:y}))))}}};function f(e){var t=o.filter((function(t){return t.id!==e}));s(t),fetch("/tasks/".concat(e),{method:"DELETE"})}return Object(h.jsx)(p.a,{style:D,children:Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center",height:"100%"},children:Object(h.jsx)(k.a,{onDragEnd:function(e){return x(e,O,m)},children:Object.entries(O).map((function(e,t){var n=Object(i.a)(e,2),c=n[0],s=n[1];return Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:[Object(h.jsx)("h2",{children:s.name}),Object(h.jsx)("div",{style:{margin:"8%"},children:Object(h.jsx)(k.c,{droppableId:c,children:function(e,t){return Object(h.jsxs)("div",Object(j.a)(Object(j.a)({className:"board-col"},e.droppableProps),{},{ref:e.innerRef,style:Object(j.a)({background:t.isDraggingOver?"lightblue":"#567a5b"},A),children:[s.items.map((function(e,t){return Object(h.jsx)(w,{task:e,index:t,setActiveTask:a,handleTaskDelete:f})})),e.placeholder]}))}},c)})]},c)}))})})})};var E=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}})),c=Object(i.a)(a,2),s=c[0],r=c[1];return[s,function(t){try{var a=t instanceof Function?t(s):t;r(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]};var B=function(e){var t=e.activeProject,a=e.setActiveTask,c=e.taskList,s=e.setTaskList,o=Object(n.useState)(""),d=Object(i.a)(o,2),m=d[0],x=d[1],y=Object(n.useState)([]),v=Object(i.a)(y,2),C=v[0],k=v[1],T=Object(n.useState)(!1),N=Object(i.a)(T,2),S=N[0],w=N[1],P=Object(n.useState)(!1),D=Object(i.a)(P,2),A=D[0],E=D[1],B=Object(n.useState)({summary:"",details:"",progress:"backlog",category_name:"",category_id:"",project_id:""}),L=Object(i.a)(B,2),_=L[0],H=L[1],U=Object(n.useState)(!0),J=Object(i.a)(U,2),R=J[0],Y=J[1];console.log(c);var G={backlog:c.filter((function(e){return"backlog"===e.progress})),todo:c.filter((function(e){return"todo"===e.progress})),progress:c.filter((function(e){return"progress"===e.progress})),review:c.filter((function(e){return"review"===e.progress})),done:c.filter((function(e){return"done"===e.progress}))};function z(){w(!1)}function F(){E(!1)}function W(e){e.preventDefault(),""===m?Y(!1):(Y(!0),fetch("/users").then((function(e){e.ok&&e.json().then((function(e){console.log(e);var a=e.find((function(e){return e.username===m}));console.log(a.id);var n={user_id:a.id,project_id:t.id};a&&fetch("/teams",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(){x(""),z()}))}))})))}function K(){fetch("/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)}).then((function(e){return e.json()})).then((function(e){s([].concat(Object(r.a)(c),[e])),H({summary:"",details:"",progress:"backlog",category_name:"",category_id:"",project_id:""}),F()}))}function M(e){if("category_id"===e.target.name){var t,a=C.find((function(t){return t.id===parseInt(e.target.value)}));H(Object(j.a)(Object(j.a)({},_),{},(t={},Object(l.a)(t,"category_name",a.name),Object(l.a)(t,e.target.name,e.target.value),t)))}else H(Object(j.a)(Object(j.a)({},_),{},Object(l.a)({},e.target.name,e.target.value)))}Object(n.useEffect)((function(){fetch("/categories").then((function(e){return e.json()})).then((function(e){return k(e)}))}),[]);var V=C.map((function(e){return Object(h.jsx)("option",{value:e.id,children:e.name},e.id)}));return Object(h.jsxs)(p.a,{children:[Object(h.jsx)(f.a,{children:Object(h.jsx)(b.a,{lg:12,children:Object(h.jsx)("h1",{className:"text-center my-4",children:t.name.toUpperCase()})})}),Object(h.jsx)(f.a,{className:"proj-btn",style:{marginBottom:"35px"},children:Object(h.jsx)(b.a,{className:"d-flex justify-content-end",children:Object(h.jsx)(O.a,{onClick:function(){w(!0)},children:"Add Member"})})}),Object(h.jsx)(f.a,{children:Object(h.jsx)(I,{setActiveTask:a,optionList:V,taskCategories:G,setTaskList:s,taskList:c})}),Object(h.jsx)(f.a,{children:Object(h.jsx)(b.a,{className:"d-flex justify-content-end",children:Object(h.jsx)(O.a,{className:"my-4",onClick:function(){H(Object(j.a)(Object(j.a)({},_),{},Object(l.a)({},"project_id",t.id))),E(!0)},children:"Add Task"})})}),Object(h.jsxs)(g.a,{show:S,onHide:z,children:[Object(h.jsx)(g.a.Header,{closeButton:!0,children:Object(h.jsx)(g.a.Title,{children:"Add a Collaborator"})}),Object(h.jsx)(g.a.Body,{children:Object(h.jsxs)(u.a,{onSubmit:W,children:[Object(h.jsx)(u.a.Control,{type:"text",name:"username",placeholder:"Username",onChange:function(e){x(e.target.value)},value:m}),R?null:Object(h.jsx)(u.a.Text,{className:"invalid-input",style:{color:"red"},children:"You must enter a name."})]})}),Object(h.jsxs)(g.a.Footer,{children:[Object(h.jsx)(O.a,{variant:"secondary",onClick:z,children:"Close"}),Object(h.jsx)(O.a,{type:"submit",variant:"primary",onClick:W,children:"Add User"})]})]}),Object(h.jsxs)(g.a,{show:A,onHide:F,children:[Object(h.jsx)(g.a.Header,{closeButton:!0,children:Object(h.jsx)(g.a.Title,{children:"Add a Task"})}),Object(h.jsx)(g.a.Body,{children:Object(h.jsxs)(u.a,{onSubmit:K,children:[Object(h.jsx)(u.a.Text,{className:"invalid-input",children:"Task Summary"}),Object(h.jsx)(u.a.Control,{type:"text",name:"summary",placeholder:"Task Summary",onChange:M,value:_.summary}),R?null:Object(h.jsx)(u.a.Text,{className:"invalid-input",style:{color:"red"},children:"You must enter a summary."}),Object(h.jsx)(u.a.Text,{className:"invalid-input",children:"Task Details"}),Object(h.jsx)(u.a.Control,{as:"textarea",name:"details",placeholder:"Task Details",onChange:M,value:_.details}),Object(h.jsx)(u.a.Text,{className:"invalid-input",children:"Task Category"}),Object(h.jsxs)(u.a.Select,{name:"category_id",onChange:M,children:[Object(h.jsx)("option",{children:"Choose a Category"}),V]})]})}),Object(h.jsxs)(g.a.Footer,{children:[Object(h.jsx)(O.a,{variant:"secondary",onClick:F,children:"Close"}),Object(h.jsx)(O.a,{type:"submit",variant:"primary",onClick:K,children:"Add Task"})]})]})]})},L={backgroundColor:"#354a38",width:"80vw",height:"40vh",border:"1px solid black",borderRadius:"15px",overflow:"hidden",padding:"15px"};var _=function(e){var t=e.activeTask,a=e.setActiveTask,c=e.optionList,s=Object(n.useState)(!1),r=Object(i.a)(s,2),o=r[0],d=r[1],m=Object(n.useState)(!0),x=Object(i.a)(m,2),y=x[0],v=(x[1],Object(n.useState)({summary:"",details:"",category_name:"",category_id:""})),C=Object(i.a)(v,2),k=C[0],T=C[1];function N(){d(!1)}function S(e){T(Object(j.a)(Object(j.a)({},k),{},Object(l.a)({},e.target.name,e.target.value)))}function w(){var e;(console.log(t),""!==k.summary)?(a(Object(j.a)(Object(j.a)({},t),{},(e={},Object(l.a)(e,"summary",k.summary),Object(l.a)(e,"details",k.details),e))),fetch("/tasks/".concat(t.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)}).then((function(e){return e.json()})).then((function(e){console.log(e),N()}))):console.log("cannot apply changes")}return Object(h.jsxs)(p.a,{className:"task-cont",children:[Object(h.jsx)(f.a,{children:Object(h.jsxs)("h3",{className:"my-4",children:["Task Summary: ",t.summary]})}),Object(h.jsx)(f.a,{children:Object(h.jsxs)("h4",{className:"my-4",children:["Category: ",t.category_name]})}),Object(h.jsxs)(f.a,{children:[Object(h.jsx)("h4",{className:"my-4",children:"Details"}),Object(h.jsx)(p.a,{style:L,children:t.details})]}),Object(h.jsx)(f.a,{children:Object(h.jsx)(b.a,{className:"my-4 d-flex justify-content-end",children:Object(h.jsx)(O.a,{onClick:function(){T({summary:t.summary,details:t.details,category_name:t.category_name,category_id:t.category_id}),d(!0)},children:"Edit Task"})})}),Object(h.jsxs)(g.a,{show:o,onHide:N,children:[Object(h.jsx)(g.a.Header,{closeButton:!0,children:Object(h.jsx)(g.a.Title,{children:"Edit Your Details"})}),Object(h.jsx)(g.a.Body,{children:Object(h.jsxs)(u.a,{onSubmit:w,children:[Object(h.jsx)(u.a.Text,{className:"invalid-input",children:"Task Summary"}),Object(h.jsx)(u.a.Control,{type:"text",name:"summary",placeholder:"Task Summary",onChange:S,value:k.summary}),y?null:Object(h.jsx)(u.a.Text,{className:"invalid-input",style:{color:"red"},children:"You must enter a summary."}),Object(h.jsx)(u.a.Text,{className:"invalid-input",children:"Task Details"}),Object(h.jsx)(u.a.Control,{as:"textarea",name:"details",placeholder:"Task Details",onChange:S,value:k.details}),Object(h.jsx)(u.a.Text,{className:"invalid-input",children:"Task Category"}),Object(h.jsxs)(u.a.Select,{name:"category_id",onChange:S,children:[Object(h.jsx)("option",{children:"Choose a Category"}),c]})]})}),Object(h.jsxs)(g.a.Footer,{children:[Object(h.jsx)(O.a,{variant:"secondary",onClick:N,children:"Close"}),Object(h.jsx)(O.a,{type:"submit",variant:"primary",onClick:w,children:"Apply Changes"})]})]})]})},H=a(95),U=a(68),J=a(92);var R=function(e){var t=e.user,a=e.setCurrentUser,n=Object(o.f)();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(H.a,{style:{backgroundColor:"#59386e"},variant:"dark",expand:!1,children:Object(h.jsxs)(p.a,{fluid:!0,children:[Object(h.jsx)(H.a.Brand,{onClick:function(){t?n.push("/home"):n.push("/"),n.go(0)},children:"KanbanD"}),Object(h.jsx)(H.a.Toggle,{"aria-controls":"offcanvasNavbar"}),Object(h.jsxs)(H.a.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",style:{backgroundColor:"#59386e",color:"white"},children:[Object(h.jsx)(U.a.Header,{closeButton:!0,children:Object(h.jsx)(U.a.Title,{id:"offcanvasNavbarLabel",children:"KanbanD"})}),Object(h.jsx)(U.a.Body,{children:Object(h.jsxs)(J.a,{className:"justify-content-end flex-grow-1 pe-3",children:[t?Object(h.jsxs)("h4",{children:["Hello ",t.username,"!"]}):null,t?Object(h.jsx)(O.a,{onClick:function(){fetch("/logout",{method:"DELETE"}).then((function(e){e.ok&&(n.push("/"),a(null))}))},children:"Logout"}):null]})})]})]})})})};var Y=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),l=Object(i.a)(s,2),j=l[0],d=l[1],b=E("activeProject",[]),u=Object(i.a)(b,2),O=u[0],p=u[1],f=Object(n.useState)([]),g=Object(i.a)(f,2),y=g[0],v=g[1],k=E("activeTask",[]),T=Object(i.a)(k,2),N=T[0],S=T[1],w=E("taskList",[]),P=Object(i.a)(w,2),D=P[0],A=P[1];Object(n.useEffect)((function(){fetch("/me").then((function(e){e.ok&&e.json().then((function(e){c(e),d(null===e||void 0===e?void 0:e.projects),console.log(e)}))})),fetch("/categories").then((function(e){return e.json()})).then((function(e){console.log(e),v(e)}))}),[]);var I=y.map((function(e){return Object(h.jsx)("option",{value:e.id,children:e.name},e.id)}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(R,{user:a,setCurrentUser:c}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",children:Object(h.jsx)(m,{setCurrentUser:c,setUserProjects:d})}),Object(h.jsx)(o.a,{exact:!0,path:"/signup",children:Object(h.jsx)(x,{setCurrentUser:c})}),Object(h.jsx)(o.a,{exact:!0,path:"/home",children:Object(h.jsx)(C,{currentUser:a,addNewProject:function(e){d([].concat(Object(r.a)(j),[e]))},userProjects:j,setUserProjects:d,setActiveProject:p,setTaskList:A})}),Object(h.jsx)(o.a,{exact:!0,path:"/project",children:Object(h.jsx)(B,{activeProject:O,setActiveTask:S,taskList:D,setTaskList:A})}),Object(h.jsx)(o.a,{exact:!0,path:"/task",children:Object(h.jsx)(_,{activeTask:N,setActiveTask:S,optionList:I})})]})]})};s.a.render(Object(h.jsx)(d.a,{children:Object(h.jsx)(Y,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.f410d045.chunk.js.map