import{c as U}from"./config-0fcvTnOY.js";import{k as N,d as S,l as O,w as f,o as j,a as t,t as b,f as k,b as p,j as M,r as $,m as G,n as H,c as J,V as L,e as K,u as P,p as Q}from"./index-BBymKEWy.js";import{M as q}from"./Template-DR9MoYn1.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{I as R}from"./search-B_vgYZko.js";async function W(){try{const n=await U.get("/api/v1/profiles/admin/participants",{headers:{Authorization:`Bearer ${N("accessToken")}`,"Content-Type":"application/json"}});return n==null?void 0:n.data}catch{return null}}async function X(){try{const n=await U.get("/api/v1/bets/admin/participants",{headers:{Authorization:`Bearer ${N("accessToken")}`,"Content-Type":"application/json"}});return n==null?void 0:n.data}catch{return null}}async function Y(n){try{const r=await U.post(`/api/v1/profiles/admin/participants/${n}/block`,{},{headers:{Authorization:`Bearer ${N("accessToken")}`}});return r==null?void 0:r.data}catch{return null}}async function Z(n,r,o){try{const e=await U.patch(`/api/v1/profiles/admin/participants/${n}/note`,{note:r},{headers:{Authorization:`Bearer ${N("accessToken")}`,noteVersion:`${o}`}});return e==null?void 0:e.data}catch{return null}}const x={class:"modal-blocked__content"},ee={class:"modal-blocked-title"},te={class:"modal-blocked-list"},oe={class:"modal-blocked-item"},se={class:"modal-blocked-name"},ae={class:"modal-blocked-item"},le={class:"modal-blocked-name"},ne={class:"modal-blocked-item"},ie={class:"modal-blocked-name"},de={class:"modal-blocked-item"},re={class:"modal-blocked-name"},ce={class:"modal-blocked-item"},ue={class:"modal-blocked-name"},me={class:"modal-blocked-item"},pe={class:"modal-blocked-name"},ve={class:"modal-blocked__buttons"},ke=S({__name:"ModalBlockUser",props:{active:{type:Boolean},userInfo:{}},emits:["close","block"],setup(n,{emit:r}){return(o,e)=>(j(),O(q,{onClose:e[2]||(e[2]=l=>o.$emit("close")),active:o.active,class:"modal-blocked"},{default:f(()=>{var l,s,u,V,g,B,C;return[t("div",x,[t("h2",ee,b((l=o.userInfo)!=null&&l.blocked?"Разблокировать?":"Заблокировать?"),1),t("ul",te,[t("li",oe,[t("p",se,[e[3]||(e[3]=k(" id:")),t("span",null,b((s=o.userInfo)==null?void 0:s.id),1)])]),t("li",ae,[t("p",le,[e[4]||(e[4]=k(" Telegram id:")),t("span",null,b((u=o.userInfo)==null?void 0:u.telegramId),1)])]),t("li",ne,[t("p",ie,[e[5]||(e[5]=k(" Ранг:")),t("span",null,b((V=o.userInfo)==null?void 0:V.rank),1)])]),t("li",de,[t("p",re,[e[6]||(e[6]=k(" Имя:")),t("span",null,b((g=o.userInfo)==null?void 0:g.name),1)])]),t("li",ce,[t("p",ue,[e[7]||(e[7]=k(" Ставок:")),t("span",null,b((B=o.userInfo)==null?void 0:B.surname),1)])]),t("li",me,[t("p",pe,[e[8]||(e[8]=k(" Выигранных:")),t("span",null,b((C=o.userInfo)==null?void 0:C.won),1)])])])]),t("div",ve,[p(M,{onClick:e[0]||(e[0]=_=>o.$emit("close"))},{default:f(()=>e[9]||(e[9]=[k(" Отмена ")])),_:1}),p(M,{onClick:e[1]||(e[1]=_=>{var T;return o.$emit("block",(T=o.userInfo)==null?void 0:T.id)})},{default:f(()=>{var _;return[k(b((_=o.userInfo)!=null&&_.blocked?"Разблокировать?":"Заблокировать?"),1)]}),_:1})])]}),_:1},8,["active"]))}}),fe=E(ke,[["__scopeId","data-v-36504d2a"]]),be={class:"modal-blocked__content"},_e={class:"modal-blocked__buttons"},$e=S({__name:"ModalNoteEdits",props:{active:{type:Boolean},name:{},surname:{},telegramId:{},note:{}},emits:["close","save"],setup(n,{emit:r}){const o=n,e=$(o.note);return G(()=>o.note,l=>{e.value=l}),(l,s)=>(j(),O(q,{onClose:s[3]||(s[3]=u=>l.$emit("close")),active:l.active,class:"modal-blocked"},{default:f(()=>[t("div",be,[p(H,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=u=>e.value=u),label:"Записка о пользователе",variant:"filled"},null,8,["modelValue"])]),t("div",_e,[p(M,{onClick:s[1]||(s[1]=u=>l.$emit("close"))},{default:f(()=>s[4]||(s[4]=[k(" Отмена ")])),_:1}),p(M,{onClick:s[2]||(s[2]=u=>l.$emit("save",e.value))},{default:f(()=>s[5]||(s[5]=[k(" Сохранить ")])),_:1})])]),_:1},8,["active"]))}}),ye=E($e,[["__scopeId","data-v-7038f714"]]),Ie={class:"page-content"},he={class:"content members-wrapper"},we={class:"title-block"},Ve={class:"switch-wrapper"},ge=["onClick"],Be={class:"input-column"},Ce=S({__name:"Members",setup(n){const r=$({}),o=$(!1),e=$(!1),l=$({}),s=$(""),u=$([]);function V(c){l.value=u.value.find(a=>(a==null?void 0:a.id)===c),e.value=!0}async function g(c){r.value=u.value.find(a=>a.id===c),o.value=!0}async function B(c){await Y(c),r.value.blocked=!r.value.blocked,o.value=!1}async function C(c){var a,v;await Z((a=l.value)==null?void 0:a.id,c,(v=l.value)==null?void 0:v.noteVersion),e.value=!1,_()}async function _(){var h,w,i,y,z,A,D,F;const c=await W(),a=await X(),v=c==null?void 0:c.users,m=a==null?void 0:a.users;if(v&&m){const I={};for(let d=0;d<v.length;d++)I[(h=v[d])==null?void 0:h.id]=v[d];for(let d=0;d<m.length;d++)((w=m[d])==null?void 0:w.id)in I&&(I[(i=m[d])==null?void 0:i.id].betsCount=(y=m[d])==null?void 0:y.count,I[(z=m[d])==null?void 0:z.id].lost=(A=m[d])==null?void 0:A.lost,I[(D=m[d])==null?void 0:D.id].won=(F=m[d])==null?void 0:F.won);u.value=Object.values(I)}}_();const T=[{title:"ID",key:"id"},{title:"Telegram id",key:"telegramId"},{title:"Имя",key:"name"},{title:"Фамилия",key:"surname"},{title:"Ставок",key:"won"},{title:"Выигранных",key:"won"},{title:"Ранг",key:"rank"},{title:"Блокировка",key:"blocked",width:"50px"},{title:"Заметка",key:"note",width:"30%"}];return(c,a)=>{var v,m,h,w;return j(),J("div",Ie,[t("section",he,[t("div",we,[p(L,{"hide-details":"",modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=i=>s.value=i),class:"search-input","max-width":"470",label:"Search",variant:"underlined"},{"append-inner":f(()=>[p(P(R))]),_:1},8,["modelValue"])]),p(K,{headers:T,items:u.value,search:s.value},{"item.blocked":f(({item:i})=>[t("div",Ve,[p(Q,{class:"switch-mo",modelValue:i.blocked,color:"primary","hide-details":""},null,8,["modelValue"]),t("div",{onClick:y=>g(i.id),class:"switch-control"},null,8,ge)])]),"item.note":f(({item:i})=>[t("div",Be,[p(L,{onFocus:y=>V(i==null?void 0:i.id),variant:"solo",density:"compact","hide-details":"",height:"32px",modelValue:i.note,"onUpdate:modelValue":y=>c.changeuserNote(y,i.id),label:"Введите текст"},null,8,["onFocus","modelValue","onUpdate:modelValue"])])]),_:1},8,["items","search"])]),p(fe,{onBlock:B,onClose:a[1]||(a[1]=i=>o.value=!1),userInfo:r.value,active:o.value},null,8,["userInfo","active"]),p(ye,{onClose:a[2]||(a[2]=i=>e.value=!1),onSave:C,name:(v=l.value)==null?void 0:v.name,surname:(m=l.value)==null?void 0:m.surname,telegramId:(h=l.value)==null?void 0:h.telegramId,note:(w=l.value)==null?void 0:w.note,active:e.value},null,8,["name","surname","telegramId","note","active"])])}}}),je=E(Ce,[["__scopeId","data-v-46468271"]]);export{je as default};