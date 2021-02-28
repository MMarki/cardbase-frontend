(function(t){function e(e){for(var i,s,c=e[0],o=e[1],u=e[2],l=0,f=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],i=!0,c=1;c<r.length;c++){var o=r[c];0!==n[o]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var i={},n={app:0},a=[];function s(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=i,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(r,i,function(e){return t[e]}.bind(null,i));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=o;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"09a8":function(t,e,r){},1:function(t,e){},"207d":function(t,e,r){"use strict";r("edd4")},"4c3f":function(t,e,r){"use strict";r("50b0")},"50b0":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[["library","deck","packs"].includes(t.$route.name)?r("app-header"):t._e(),r("router-view")],1)},a=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"blogo"}},[r("h1",[t._v("Open Your Card Packs:")]),t.submitted?r("div",[r("button",{staticClass:"primary",on:{click:t.showPack}},[t._v("Next Pack")]),r("p",{staticClass:"alert"},[t._v("These cards have been saved to your library :)")]),t._l(t.cards,(function(e){return r("div",{key:e.name,staticClass:"single-card"},[r("img",{attrs:{src:t.getImagePath(e.imagePath)}}),r("p",[t._v(t._s(t._f("unAbbreviate")(e.rarity)))])])}))],2):t._e(),!t.submitted&&t.packCount>0?r("button",{staticClass:"primary",on:{click:t.addCards}},[t._v("Open Pack ("+t._s(t.packCount)+")")]):t._e(),t.submitted||0!==t.packCount?t._e():r("p",[t._v("No More Card Packs, Gamers")])])},c=[],o=(r("1276"),r("ac1f"),r("7db0"),r("2ca0"),r("d3b7"),r("25f0"),{data:function(){return{cards:[{}],submitted:!1,packCount:0,id:document.cookie.split("; ").find((function(t){return t.startsWith("user=")})).split("=")[1]}},methods:{addCards:function(){this.$http.get("http://104.162.128.255:5000/api/packs",{params:{id:this.id}}).then((function(t){this.cards=t.body,console.log(t)})),this.submitted=!0,this.packCount--},showPack:function(){this.cards=[],this.submitted=!1},getPackCount:function(){this.$http.get("http://104.162.128.255:5000/api/packCount",{params:{id:this.id}}).then((function(t){this.packCount=t.body[0].packCount}))},getImagePath:function(t){var e="/assets/cards/twitcher.png";return void 0!=t&&(e="/"+t),e}},created:function(){this.getPackCount()},filters:{unAbbreviate:function(t){var e=t;return"UNCOMN"===t&&(e="UNCOMMON"),e}}}),u=o,d=(r("6d60"),r("2877")),l=Object(d["a"])(u,s,c,!1,null,"52b787be",null),f=l.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Your Card Library:")]),r("div",{staticClass:"chip-container"},[Array.isArray(t.cards)?r("button",{class:t.filterConditions.common?"chip-active-common":"chip-inactive",on:{click:function(e){return t.updateFilter("common")}}},[t._v("COMMON")]):t._e(),Array.isArray(t.cards)?r("button",{class:t.filterConditions.uncommon?"chip-active-uncommon":"chip-inactive",on:{click:function(e){return t.updateFilter("uncommon")}}},[t._v("UNCOMMON")]):t._e(),Array.isArray(t.cards)?r("button",{class:t.filterConditions.rare?"chip-active-rare":"chip-inactive",on:{click:function(e){return t.updateFilter("rare")}}},[t._v("RARE")]):t._e(),Array.isArray(t.cards)?r("button",{class:t.filterConditions.noCost?"chip-active":"chip-inactive",on:{click:function(e){return t.updateFilter("noCost")}}},[t._v("NO COST")]):t._e(),Array.isArray(t.cards)?r("button",{class:t.filterConditions.oneCost?"chip-active":"chip-inactive",on:{click:function(e){return t.updateFilter("oneCost")}}},[t._v("ONE COST")]):t._e(),Array.isArray(t.cards)?r("button",{class:t.filterConditions.twoCost?"chip-active":"chip-inactive",on:{click:function(e){return t.updateFilter("twoCost")}}},[t._v("TWO COST")]):t._e(),Array.isArray(t.cards)?r("button",{class:t.filterConditions.threeCost?"chip-active":"chip-inactive",on:{click:function(e){return t.updateFilter("threeCost")}}},[t._v("THREE COST")]):t._e(),Array.isArray(t.cards)?r("button",{class:t.filterConditions.sacrifice?"chip-active-sacrifice":"chip-inactive",on:{click:function(e){return t.updateFilter("sacrifice")}}},[t._v("SACRIFICE")]):t._e()]),Array.isArray(t.cards)?t._e():r("p",[t._v("Open packs to build your library.")]),t._l(t.filteredCards,(function(e){return r("div",{key:e.name,staticClass:"single-card"},[Array.isArray(t.cards)?r("img",{attrs:{src:t.getImagePath(e.imagePath)}}):t._e(),Array.isArray(t.cards)?r("p",[t._v(t._s(e.quantity))]):t._e()])}))],2)},p=[],v=(r("4de4"),{data:function(){return{cards:[],id:document.cookie.split("; ").find((function(t){return t.startsWith("user=")})).split("=")[1],filterConditions:{common:!1,uncommon:!1,rare:!1,noCost:!1,oneCost:!1,twoCost:!1,threeCost:!1,sacrifice:!1}}},methods:{getImagePath:function(t){var e="/assets/cards/twitcher.png";return void 0!=t&&(e="/"+t),e},updateFilter:function(t){var e=this.filterConditions[t];for(var r in this.filterConditions)this.filterConditions[r]=!1;this.filterConditions[t]=!e}},created:function(){this.$http.get("http://104.162.128.255:5000/api/library",{params:{id:this.id}}).then((function(t){this.cards=t.body}))},computed:{filteredCards:function(){var t,e=!1;for(var r in this.filterConditions)!0===this.filterConditions[r]&&(e=!0);return e?Array.isArray(this.cards)?(this.filterConditions.common?t=this.cards.filter((function(t){return"COMMON"===t.rarity})):this.filterConditions.uncommon?t=this.cards.filter((function(t){return"UNCOMN"===t.rarity})):this.filterConditions.rare?t=this.cards.filter((function(t){return"RARE"===t.rarity})):this.filterConditions.noCost?t=this.cards.filter((function(t){return"NO"===t.cost})):this.filterConditions.oneCost?t=this.cards.filter((function(t){return"ON"===t.cost})):this.filterConditions.twoCost?t=this.cards.filter((function(t){return"TW"===t.cost})):this.filterConditions.threeCost?t=this.cards.filter((function(t){return"TH"===t.cost})):this.filterConditions.sacrifice&&(t=this.cards.filter((function(t){return"SO"===t.cost||"ST"===t.cost||"SH"===t.cost}))),t):null:this.cards}}}),m=v,y=(r("705f"),Object(d["a"])(m,h,p,!1,null,"1a07377e",null)),C=y.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"score-text"},[t._v(t._s("Deck Score: +"+t.deckScore))]),r("h5",{staticClass:"score-text"},[t._v(t._s("Deck Size: "+t.deckSize+"/30"))]),r("button",{class:t.isChanged?"primary":"inactive",on:{click:function(e){return t.saveDeck()}}},[t._v(t._s(t.isChanged?"SAVE DECK":"SAVED"))]),Array.isArray(t.cards)?r("div",{staticClass:"full-width"},[r("div",{staticClass:"nine columns first-column"},[r("h3",[t._v("Library")]),t._l(t.cards,(function(e){return r("div",{key:e.name,staticClass:"single-card"},[r("img",{attrs:{src:t.getImagePath(e.imagePath)}}),r("p",[t._v(t._s(e.reservedQuantity+"/"+e.quantity))]),r("div",{staticClass:"button-container"},[e.reservedQuantity>0?r("button",{staticClass:"subtract",on:{click:function(r){return t.subtractFromDeck(e)}}},[t._v("Subtract")]):t._e(),r("button",{staticClass:"add",class:e.reservedQuantity<e.quantity&&t.deckSize<30?"add":"add-inactive",on:{click:function(r){return t.addToDeck(e)}}},[t._v("Add")])])])}))],2),r("div",{staticClass:"three columns second-column"},[r("h3",[t._v("Deck")]),t._l(t.reservedCards,(function(e){return r("div",{key:e.name,staticClass:"single-chip",class:t.getColorClass(e.color)},[e.reservedQuantity>0?r("p",[t._v(t._s(e.reservedQuantity+"x "))]):t._e(),e.reservedQuantity>0?r("p",[t._v(t._s(e.name+" "))]):t._e(),e.reservedQuantity>0?r("img",{staticClass:"cost-icons",attrs:{src:t.getCostImage(e.cost)}}):t._e(),e.reservedQuantity>0?r("img",{attrs:{src:t.getRealRarity(e.rarity)}}):t._e()])}))],2)]):t._e()])},b=[],g=r("b85c"),k=(r("b0c0"),{data:function(){return{cards:[],id:document.cookie.split("; ").find((function(t){return t.startsWith("user=")})).split("=")[1],deckSize:0,isChanged:0}},methods:{getImagePath:function(t){console.log(t);var e="/assets/cards/twitcher.png";return void 0!=t&&(e="/"+t),e},addToDeck:function(t){t.reservedQuantity<t.quantity&&this.deckSize<30&&t.reservedQuantity<t.quantity&&(t.reservedQuantity+=1,this.isChanged=1)},subtractFromDeck:function(t){t.reservedQuantity>0&&(t.reservedQuantity-=1,this.isChanged=1)},saveDeck:function(){var t,e={params:{id:this.id,cards:[]}},r=Object(g["a"])(this.cards);try{for(r.s();!(t=r.n()).done;){var i=t.value;i.initialReservedQuantity!==i.reservedQuantity&&i.reservedQuantity<=i.quantity&&e.params.cards.push({name:i.name,reserved:i.reservedQuantity})}}catch(n){r.e(n)}finally{r.f()}this.$http.post("http://104.162.128.255:5000/api/saveDeck",e).then((function(){})),this.isChanged=0},getRealRarity:function(t){var e="/assets/common.png";if("COMMON"===t)e="/assets/common.png";else if("UNCOMN"===t)e="/assets/uncommon.png";else{if("RARE"!==t)return"ERROR";e="/assets/rare.png"}return e},getCostImage:function(t){var e="/assets/energy.png";if("ON"===t||"TW"===t||"TH"===t)e="/assets/energy.png";else if("NO"===t)e="/assets/energy-no.png";else{if("SO"!==t&&"ST"!==t&&"SH"!==t)return"ERROR";e="/assets/sacrifice.png"}return e},getColorClass:function(t){var e="chip-";return e+=t,e}},computed:{reservedCards:function(){if(Array.isArray(this.cards))return this.cards.filter((function(t){return t.reservedQuantity>0}))},deckScore:function(){var t=0,e=0,r=0,i=0;if(this.deckSize=0,Array.isArray(this.cards)){var n,a=this.cards.filter((function(t){return t.reservedQuantity>0})),s=Object(g["a"])(a);try{for(s.s();!(n=s.n()).done;){var c=n.value;this.deckSize+=1*c.reservedQuantity,"UNCOMN"===c.rarity?r+=1*c.reservedQuantity:"RARE"===c.rarity&&(i+=1*c.reservedQuantity),"NO"===c.cost&&(e+=1*c.reservedQuantity)}}catch(o){s.e(o)}finally{s.f()}}return t=Math.min(Math.floor(r/5),2)+Math.min(Math.floor(i/3),2)+Math.min(Math.floor(e/5),1),t}},created:function(){this.$http.get("http://104.162.128.255:5000/api/deck",{params:{id:this.id}}).then((function(t){if(this.cards=t.body,Array.isArray(this.cards))for(var e=0;e<this.cards.length;e++)this.cards[e].initialReservedQuantity=this.cards[e].reservedQuantity}))}}),O=k,A=(r("4c3f"),Object(d["a"])(O,_,b,!1,null,"241cf137",null)),S=A.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",[r("ul",[r("li",[r("router-link",{attrs:{to:"/library/",exact:""}},[t._v("Library")])],1),r("li",[r("router-link",{attrs:{to:"/deck/",exact:""}},[t._v("Deck")])],1),r("li",[r("router-link",{attrs:{to:"/packs/",exact:""}},[t._v("Packs")])],1)])])},w=[],M={data:function(){return{id:document.cookie.split("; ").find((function(t){return t.startsWith("user=")})).split("=")[1]}}},N=M,Q=(r("207d"),Object(d["a"])(N,P,w,!1,null,"3ef8915c",null)),R=Q.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("It's Time to Duel!")]),r("form",[r("label",[t._v("Username:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"Username",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),r("button",{on:{click:function(e){return e.preventDefault(),t.auth(e)}}},[t._v("Sign In")])]),t.error?r("div",[r("p",{staticClass:"alert"},[t._v("This is not a real username - please try again!")])]):t._e()])},E=[],T={data:function(){return{username:"",error:0}},methods:{auth:function(){console.log("posting!"),this.$http.post("http://104.162.128.255:5000/api/login",{username:this.username}).then((function(t){console.log(t.body),void 0!==t.body.id?(this.error=0,this.$router.push({name:"library"}),document.cookie="user="+t.body.id+"; path=/;"):this.error=1}))}}},j=T,D=(r("c189"),Object(d["a"])(j,x,E,!1,null,"17c797f2",null)),$=D.exports,F={components:{"add-cards":f,"show-cards":C,"build-deck":S,"app-header":R,login:$},data:function(){return{id:""}}},I=F,U=Object(d["a"])(I,n,a,!1,null,null,null),q=U.exports,z=r("28dd"),W=r("8c4f"),H=[{path:"/",name:"login",component:$},{path:"/library/",name:"library",component:C},{path:"/packs/",name:"packs",component:f},{path:"/deck/",name:"deck",component:S}];i["a"].use(z["a"]),i["a"].use(W["a"]);var L=new W["a"]({routes:H,mode:"history"});new i["a"]({el:"#app",render:function(t){return t(q)},router:L})},"6d60":function(t,e,r){"use strict";r("7afe")},"705f":function(t,e,r){"use strict";r("09a8")},"7afe":function(t,e,r){},"83aa":function(t,e,r){},c189:function(t,e,r){"use strict";r("83aa")},edd4:function(t,e,r){}});
//# sourceMappingURL=app.7590384e.js.map