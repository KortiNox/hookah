import{u as x,a as j,r as n,j as e,L as f,c as p,b as w,P as v,A as N,H as k,S}from"./index-DmsAmc_u.js";const $="_head_m9pnf_1",m={head:$},y="_head_593dw_1",E="_icon_593dw_11",F="_card_593dw_19",A="_footer_593dw_29",I="_name_593dw_35",L="_description_593dw_51",P="_price_593dw_67",b="_rating_593dw_87",C="_link_593dw_137",M="_added_593dw_145",D="_plus_593dw_163",a={head:y,icon:E,card:F,footer:A,name:I,description:L,price:P,rating:b,"add-to-card":"_add-to-card_593dw_109",link:C,added:M,plus:D};function H(s){const t=x(),i=j(c=>c.cart.items),[d,o]=n.useState(i.some(c=>c.id===s.id)),l=c=>{c.preventDefault(),d||(t(p.add(s.id)),o(!0))};return e.jsx(f,{to:`/hookah/product/${s.id}`,className:a.link,children:e.jsxs("div",{className:a.card,children:[e.jsxs("div",{className:a.head,style:{backgroundImage:`url('${s.image}')`},children:[e.jsx("div",{className:a.price,children:s.price}),e.jsx("button",{className:`${a["add-to-card"]} ${d?a.added:""}`,onClick:l,children:d?"Добавлено в закладки":e.jsx("div",{className:a.plus,children:"+"})}),e.jsxs("div",{className:a.rating,children:[s.rating," ",e.jsx("img",{src:"star-icon.svg",alt:"Рейтинг",className:a.icon})]})]}),e.jsxs("div",{className:a.footer,children:[e.jsx("div",{className:a.name,children:s.name}),e.jsx("div",{className:a.description,children:s.description})]})]})})}const R="_wrapper_1xjis_1",X={wrapper:R};function q({products:s}){return e.jsx("div",{className:X.wrapper,children:s.map(t=>e.jsx(H,{id:t.id,name:t.name,description:t.description.join(", "),rating:t.rating,price:t.price,image:t.image},t.id))})}function B(){const[s,t]=n.useState([]),[i,d]=n.useState(!1),[o,l]=n.useState(),[c,u]=n.useState();n.useEffect(()=>{h(c)},[c]);const h=async _=>{try{d(!0);const{data:r}=await w.get(`${v}/items`,{params:{name:_}});t(r),d(!1)}catch(r){console.error(r),r instanceof N&&(console.log(o),l(r.message)),d(!1);return}},g=_=>{u(_.target.value)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:m.head,children:[e.jsx(k,{children:"Миксы"}),e.jsx(S,{className:m.search,placeholder:"Введите микс",onChange:g})]}),e.jsxs("div",{children:[!i&&s.length>0&&e.jsx(q,{products:s}),i&&e.jsx(e.Fragment,{children:"Загрузка..."}),!i&&s.length===0&&e.jsx(e.Fragment,{children:"Не найдено 2"})]})]})}export{B as Menu,B as default};