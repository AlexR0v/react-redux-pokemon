(this["webpackJsonpreact-redux-learning"]=this["webpackJsonpreact-redux-learning"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n(16),s=n.n(r),o=(n(44),n(45),n(13)),i=n(3),j=n(38),l=n(10),p=n(14),O=n.n(p),d=n(18),b=n(19),u=n.n(b),h=n(5),m={loading:!1,data:[],errorMsg:"",count:0},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POKEMON_LIST_LOADING":return Object(h.a)(Object(h.a)({},e),{},{loading:!0,errorMsg:""});case"POKEMON_LIST_FAIL":return Object(h.a)(Object(h.a)({},e),{},{loading:!1,errorMsg:"unable to get pokemon"});case"POKEMON_LIST_SUCCESS":return Object(h.a)(Object(h.a)({},e),{},{loading:!1,data:t.payload.results,errorMsg:"",count:t.payload.count});default:return e}},x=function(e){return function(){var t=Object(d.a)(O.a.mark((function t(n){var a,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"POKEMON_LIST_LOADING"}),15,a=15*e-15,t.next=6,u.a.get("https://pokeapi.co/api/v2/pokemon?limit=".concat(15,"&offset=").concat(a));case 6:c=t.sent,n({type:"POKEMON_LIST_SUCCESS",payload:c.data}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:"POKEMON_LIST_FAIL"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},f=n(35),v=n.n(f),k=function(e){var t=e.history,n=Object(c.useState)(""),r=Object(j.a)(n,2),s=r[0],i=r[1],p=Object(l.b)(),O=Object(l.c)((function(e){return e.pokemonList}));Object(c.useEffect)((function(){p(x(1))}),[p]);return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"search-wrapper",children:[Object(a.jsx)("p",{children:"Search: "}),Object(a.jsx)("input",{type:"text",onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("button",{onClick:function(){return t.push("/pokemon/".concat(s))},children:"Search"})]}),O.loading?Object(a.jsx)("h1",{children:"Loading...."}):0!==O.data.length?Object(a.jsx)("div",{className:"list-wrapper",children:O.data.map((function(e){return Object(a.jsxs)("div",{className:"pokemon-item",children:[Object(a.jsx)("p",{children:e.name}),Object(a.jsx)(o.b,{to:"/pokemon/".concat(e.name),children:"View"})]},e.name)}))}):""!==O.errorMsg?Object(a.jsx)("h1",{children:O.errorMsg}):Object(a.jsx)("h1",{children:"unable to get data"}),0!==O.data.length&&Object(a.jsx)(v.a,{pageCount:Math.ceil(O.count/20),pageRangeDisplayed:2,marginPagesDisplayed:1,onPageChange:function(e){return p(x(e.selected+1))},containerClassName:"pagination"})]})},M={loading:!1,data:[],errorMsg:""},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POKEMON_LOADING":return Object(h.a)(Object(h.a)({},e),{},{loading:!0,errorMsg:""});case"POKEMON_FAIL":return Object(h.a)(Object(h.a)({},e),{},{loading:!1,errorMsg:"unable to find pokemon"});case"POKEMON_SUCCESS":return Object(h.a)(Object(h.a)({},e),{},{loading:!1,errorMsg:"",data:t.payload});default:return e}},y=function(e){var t=e.match.params.pokemon,n=Object(l.b)(),r=Object(l.c)((function(e){return e.pokemon})),s=Object(l.c)((function(e){return e.pokemon.data}));Object(c.useEffect)((function(){var e;n((e=t,function(){var t=Object(d.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"POKEMON_LOADING"}),t.next=4,u.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e));case 4:a=t.sent,n({type:"POKEMON_SUCCESS",payload:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n({type:"POKEMON_FAIL"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))}),[n,t]);return Object(a.jsxs)("div",{className:"poke",children:[Object(a.jsx)("h1",{children:t}),0!==r.data.length?Object(a.jsxs)("div",{className:"pokemon-wrapper",children:[Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("h1",{children:"Sprites"}),Object(a.jsx)("img",{src:s.sprites.front_default,alt:""}),Object(a.jsx)("img",{src:s.sprites.back_default,alt:""}),Object(a.jsx)("img",{src:s.sprites.front_shiny,alt:""}),Object(a.jsx)("img",{src:s.sprites.back_shiny,alt:""})]}),Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("h1",{children:"Stats"}),s.stats.map((function(e){return Object(a.jsxs)("p",{children:[e.stat.name," ",e.base_stat]},e.stat.name)}))]}),Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("h1",{children:"Abilities"}),s.abilities.map((function(e){return Object(a.jsx)("p",{children:e.ability.name},e.ability.name)}))]})]}):s.loading?Object(a.jsx)("p",{children:"Loading..."}):""!==s.errorMsg?Object(a.jsx)("p",{children:s.errorMsg}):Object(a.jsx)("p",{children:"error getting pokemon"})]})};var S=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("nav",{children:Object(a.jsx)(o.c,{to:"/",children:"Search"})}),Object(a.jsxs)(i.d,{children:[Object(a.jsx)(i.b,{path:"/",exact:!0,component:k}),Object(a.jsx)(i.b,{path:"/pokemon/:pokemon",exact:!0,component:y}),Object(a.jsx)(i.a,{to:"/"})]})]})},_=n(11),E=n(36),L=n(37),I=Object(_.combineReducers)({pokemonList:g,pokemon:N}),P=Object(_.createStore)(I,Object(E.composeWithDevTools)(Object(_.applyMiddleware)(L.a)));s.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(l.a,{store:P,children:Object(a.jsx)(S,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.4009fb7e.chunk.js.map