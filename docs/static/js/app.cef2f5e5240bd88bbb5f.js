webpackJsonp([1],{"/PvA":function(t,e){},"1WO5":function(t,e){},"79PR":function(t,e){},AqYs:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4Ny41IDEwMCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMxNjk3ZjY7fS5jbHMtMntmaWxsOiM3YmM2ZmY7fS5jbHMtM3tmaWxsOiMxODY3YzA7fS5jbHMtNHtmaWxsOiNhZWRkZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5BcnRib2FyZCA0NjwvdGl0bGU+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI0My43NSAwIDIzLjMxIDAgNDMuNzUgNDguMzIiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iNDMuNzUgNjIuNSA0My43NSAxMDAgMCAxNC41OCAyMi45MiAxNC41OCA0My43NSA2Mi41Ii8+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMyIgcG9pbnRzPSI0My43NSAwIDY0LjE5IDAgNDMuNzUgNDguMzIiLz48cG9seWdvbiBjbGFzcz0iY2xzLTQiIHBvaW50cz0iNjQuNTggMTQuNTggODcuNSAxNC41OCA0My43NSAxMDAgNDMuNzUgNjIuNSA2NC41OCAxNC41OCIvPjwvc3ZnPgo="},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{src:n("AqYs"),contain:"",height:"200"}})],1),t._v(" "),a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),t._v(" "),a("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),a("br"),t._v("please join our online\n        "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),t._v(" "),a("v-flex",{attrs:{"mb-5":"",xs12:""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),t._v(" "),a("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),t._v(" "),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),t._v(" "),a("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),t._v(" "),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),t._v(" "),a("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1)],1)],1)},staticRenderFns:[]};var i=n("VU/8")({data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},r,!1,function(t){n("79PR")},null,null).exports,o=n("FXzt"),s={name:"Test",components:{Container:o.a,Draggable:o.b},data:function(){return{list:[{id:1,name:"할일"},{id:2,name:"진행중"},{id:3,name:"예정"},{id:4,name:"완료"}],items:[{id:1,name:"a"},{id:2,name:"b"},{id:3,name:"c"},{id:4,name:"d"},{id:5,name:"e"}]}},methods:{}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("v-layout",{attrs:{row:""}},t._l(t.list,function(e){return n("v-flex",{key:e.id,attrs:{"ma-1":""}},[n("Container",[n("Draggable",[n("v-card",[n("v-card-title",[t._v("\n                "+t._s(e.name)+"\n              ")]),t._v(" "),t._l(t.items,function(e){return n("v-card",{key:e.id},[n("Container",[n("Draggable",[n("p",[t._v("\n                      "+t._s(e.name)+"\n                    ")])])],1)],1)})],2)],1)],1)],1)}),1)],1)],1)},staticRenderFns:[]};var d=n("VU/8")(s,l,!1,function(t){n("/PvA")},null,null).exports,c=n("Gu7T"),u=n.n(c),m=function(t,e){var n=e.removedIndex,a=e.addedIndex,r=e.payload;if(null===n&&null===a)return t;var i=[].concat(u()(t)),o=r;return null!==n&&(o=i.splice(n,1)[0]),null!==a&&i.splice(a,0,o),i},g=function(t,e){for(var n=[],a=0;a<t;a++)n.push(e(a));return n},h={name:"Test2",components:{Container:o.a,Draggable:o.b},data:function(){return{list:[{id:0,name:"하고싶은 일",cards:[{id:0,name:"test"},{id:1,name:"a"},{id:2,name:"b"},{id:3,name:"c"},{id:4,name:"d"},{id:5,name:"e"}]},{id:1,name:"할일",cards:[{id:0,name:"r"},{id:1,name:"asda"},{id:2,name:"qweqwe"},{id:3,name:"vdf"},{id:4,name:"sadg"},{id:5,name:"e"}]}]}},methods:{getCardPayload:function(t){return function(t){console.log(t)}},onDragStart:function(t){console.log(t);t.isSource,t.payload,t.willAcceptDrop},onDragEnter:function(){console.log("hi")},onListDrop:function(t){console.log("ListDrop"),console.log(t);var e=this.list;e=m(e,t),this.list=e},onCardDrop:function(t){console.log("CardDrop"),console.log(t)}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Container",{attrs:{orientation:"horizontal"},on:{drop:t.onListDrop}},t._l(t.list,function(e){return n("Draggable",{key:e.id},[n("v-card",[n("v-card-title",[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),n("Container",{attrs:{orientation:"vertical","group-name":"cards","get-child-payload":t.getCardPayload(e.id),"drag-class":"card-ghost","drop-class":"card-ghost-drop"},on:{"drag-start":t.onDragStart,"drag-enter":t.onDragEnter,drop:t.onCardDrop}},t._l(e.cards,function(e){return n("Draggable",{key:e.id},[n("v-btn",[t._v("\n              "+t._s(e.name)+"\n            ")])],1)}),1),t._v(" "),n("v-btn",[t._v("\n        + Add a card\n      ")])],1)],1)}),1)],1)},staticRenderFns:[]};var v=n("VU/8")(h,f,!1,function(t){n("t10j")},null,null).exports,p=n("woOf"),_=n.n(p),b=n("y3QZ"),y=n.n(b),A={name:"Test3",components:{Container:o.a,Draggable:o.b},data:function(){return{lists:y.a,addNewListFlag:!0,newCardName:"",newListName:""}},methods:{onColumnDrop:function(t){var e=_()({},this.lists);e.children=m(e.children,t),this.lists=e},onCardDrop:function(t,e){if(null!==e.removedIndex||null!==e.addedIndex){var n=_()({},this.lists),a=n.children.filter(function(e){return e.id===t})[0],r=n.children.indexOf(a),i=_()({},a);i.children=m(i.children,e),n.children.splice(r,1,i),this.lists=n}},getCardPayload:function(t){var e=this;return function(n){return e.lists.children.filter(function(e){return e.id===t})[0].children[n]}},dragStart:function(){console.log("drag started")},log:function(){var t;(t=console).log.apply(t,arguments)},addNewList:function(){if(""!==this.newListName){var t=this.lists.children.length;this.lists.children.push({id:""+t,type:"container",name:this.newListName,props:{orientation:"vertical",className:"card-container"},footerFlag:!0,children:[]}),this.newListName="",this.addNewListFlag=!this.addNewListFlag}},addNewCard:function(t,e){if(""!==e){var n=this.lists.children[t].children.length;this.lists.children[t].children.push({type:"draggable",id:""+t+n,props:{className:"card",style:{backgroundColor:"red"}},data:e}),this.lists.children[t].newCardName="",this.lists.children[t].footerFlag=!this.lists.children[t].footerFlag}}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Container",{attrs:{orientation:"horizontal","drag-class":"card-ghost","drop-class":"card-ghost-drop","drag-handle-selector":".card-header"},on:{drop:function(e){t.onColumnDrop(e)},"drag-start":t.dragStart}},[t._l(t.lists.children,function(e){return n("Draggable",{key:e.id,staticClass:"list"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),n("Container",{attrs:{"group-name":"col","get-child-payload":t.getCardPayload(e.id),"drag-class":"card-ghost","drop-class":"card-ghost-drop"},on:{drop:function(n){return t.onCardDrop(e.id,n)},"drag-start":function(e){return t.log("drag start",e)},"drag-end":function(e){return t.log("drag end",e)}}},t._l(e.children,function(e){return n("Draggable",{key:e.id},[n("div",{staticClass:"card-content"},[t._v("\n              "+t._s(e.data)+"\n            ")])])}),1),t._v(" "),e.footerFlag?n("div",{staticClass:"card-footer",on:{click:function(t){e.footerFlag=!e.footerFlag}}},[t._v("\n          + Add another card\n        ")]):t._e(),t._v(" "),e.footerFlag?t._e():n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newCardName,expression:"column.newCardName"}],staticClass:"card-content new-card-textarea",attrs:{placeholder:"Enter a title for this card..."},domProps:{value:e.newCardName},on:{input:function(n){n.target.composing||t.$set(e,"newCardName",n.target.value)}}}),t._v(" "),n("button",{staticClass:"addCardBtn",on:{click:function(n){t.addNewCard(e.id,e.newCardName)}}},[t._v("Add Card")]),t._v(" "),n("button",{on:{click:function(t){e.footerFlag=!e.footerFlag}}},[t._v("X")]),t._v(" "),n("button",[t._v("dd")])])],1)])}),t._v(" "),n("Draggable",{staticClass:"list"},[t.addNewListFlag?n("div",{attrs:{id:"add-list"},on:{click:function(e){t.addNewListFlag=!t.addNewListFlag}}},[t._v("\n          + Add another list\n        ")]):t._e(),t._v(" "),t.addNewListFlag?t._e():n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newListName,expression:"newListName"}],attrs:{placeholder:"Enter list title..."},domProps:{value:t.newListName},on:{input:function(e){e.target.composing||(t.newListName=e.target.value)}}}),t._v(" "),n("button",{staticClass:"addCardBtn",on:{click:t.addNewList}},[t._v("Add List")]),t._v(" "),n("button",{on:{click:function(e){t.addNewListFlag=!t.addNewListFlag}}},[t._v("X")]),t._v(" "),n("button",[t._v("dd")])])])],2)],1)},staticRenderFns:[]};var N=n("VU/8")(A,C,!1,function(t){n("uGpz")},null,null).exports,x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"toolbar"},[e("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABfAAAAXwBsrqMZwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADISURBVEiJ7ZJLCsJAEESrm1xDRM/hB117jPlk42VchARyDneK6D3cSLxGu4pobDEZZ6GQWs3UVNdjoIF/F9UHa+2KiDYARl92noloXRTFFgD4TiLKIpQDwFhEsvqSPDwMAICZF3meH5pTxpglM+9aZoa1x82QNggAZVnuu2TeAmKrB/QAXcaYqeZba+dNL9GCn8TMR+dcu2wIoIt6QHeAc26iBb33sxCAtkUnbUNEJKT/6QdVUIOuywtARFIA1wjlFRGlEXp+RDeOHTMUxB8lNQAAAABJRU5ErkJggg=="}}),this._v(" "),e("img",{attrs:{src:"https://img.icons8.com/color/24/000000/trello.png"}}),this._v(" "),e("span",[this._v("vue-trello-clone")]),this._v(" "),e("button",[e("span",{staticClass:"mr-2"},[this._v("GITHUB")])])])}]};var w={name:"App",components:{HelloWorld:i,Test:d,Test2:v,Test4:N,Toolbar:n("VU/8")({name:"Toolbar"},x,!1,function(t){n("lx64")},null,null).exports},data:function(){return{}}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Toolbar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var M=n("VU/8")(w,D,!1,function(t){n("1WO5")},null,null).exports,k=n("/ocq"),F=["Lorem","Ipsum","Consectetur","Eiusmod"],I=["azure","beige","bisque","blanchedalmond","burlywood","cornsilk","gainsboro","ghostwhite","ivory","khaki"],j={type:"container",props:{orientation:"horizontal"},children:g(4,function(t){return{id:"column"+t,type:"container",name:F[t],props:{orientation:"vertical",className:"card-container"},children:g(+(10*Math.random()).toFixed()+5,function(e){return{type:"draggable",id:""+t+e,props:{className:"card",style:{backgroundColor:(n=Math.floor(10*Math.random()),I[n])}},data:"Lorem".slice(0,Math.floor(150*Math.random())+30)};var n})}})},L={name:"Test3",components:{Container:o.a,Draggable:o.b},data:function(){return{scene:j}},methods:{onColumnDrop:function(t){var e=_()({},this.scene);e.children=m(e.children,t),this.scene=e},onCardDrop:function(t,e){if(null!==e.removedIndex||null!==e.addedIndex){var n=_()({},this.scene),a=n.children.filter(function(e){return e.id===t})[0],r=n.children.indexOf(a),i=_()({},a);i.children=m(i.children,e),n.children.splice(r,1,i),this.scene=n}},getCardPayload:function(t){var e=this;return function(n){return e.scene.children.filter(function(e){return e.id===t})[0].children[n]}},dragStart:function(){console.log("drag started")},log:function(){var t;(t=console).log.apply(t,arguments)}}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Container",{attrs:{orientation:"horizontal"},on:{drop:function(e){t.onColumnDrop(e)},"drag-start":t.dragStart}},t._l(t.scene.children,function(e){return n("Draggable",{key:e.id,staticClass:"list"},[n("v-card",{attrs:{color:"rgba(224,227,230)"}},[n("v-card-title",[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),n("Container",{attrs:{"group-name":"col","get-child-payload":t.getCardPayload(e.id),"drag-class":"card-ghost","drop-class":"card-ghost-drop"},on:{drop:function(n){return t.onCardDrop(e.id,n)},"drag-start":function(e){return t.log("drag start",e)},"drag-end":function(e){return t.log("drag end",e)}}},t._l(e.children,function(e){return n("Draggable",{key:e.id,staticClass:"card"},[n("v-card",{attrs:{color:"rgba(255,255,255)"}},[t._v("\n              "+t._s(e.data)+"\n            ")])],1)}),1),t._v(" "),n("v-btn",[t._v("\n          + Add a button\n        ")])],1)],1)}),1)],1)},staticRenderFns:[]};var z=n("VU/8")(L,S,!1,function(t){n("SboF")},"data-v-dbbf5b38",null).exports,T=n("DAYN"),P={name:"Test5",components:{draggable:n.n(T).a},data:function(){return{list:[,{id:0,name:"a"},{id:1,name:"b"},{id:2,name:"c"}],myArray:[{id:1,name:"A"},{id:1,name:"B"},{id:1,name:"C"}]}}},H={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("draggable",{attrs:{options:{group:"people"}},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}},model:{value:t.list,callback:function(e){t.list=e},expression:"list"}},[t._l(t.list,function(e){return n("div",{key:e.id},[t._v(t._s(e.name))])}),t._v(" "),t._l(t.list,function(e){return n("v-card",{key:e.id},[t._v(t._s(e.name))])})],2)],1)},staticRenderFns:[]};var R=n("VU/8")(P,H,!1,function(t){n("yGkE")},null,null).exports;a.a.use(k.a);var E=new k.a({mode:"history",routes:[{path:"/",name:"HelloWorld",component:i},{path:"/test2",name:"Test2",component:v},{path:"/test3",name:"Test3",component:z},{path:"/test4",name:"Test4",component:N},{path:"/test5",name:"Test5",component:R}]});n("mHwJ");a.a.config.productionTip=!1,new a.a({el:"#app",router:E,components:{App:M},template:"<App/>"})},SboF:function(t,e){},lx64:function(t,e){},mHwJ:function(t,e){},t10j:function(t,e){},uGpz:function(t,e){},y3QZ:function(t,e){t.exports={props:{},children:[{id:"0",type:"container",name:"할일",props:{orientation:"vertical",className:"card-container"},footerFlag:!0,newCardName:"",children:[{type:"draggable",id:"00",props:{className:"card",style:{backgroundColor:"black"}},data:"testA"},{type:"draggable",id:"01",props:{className:"card",style:{backgroundColor:"red"}},data:"testB"}]}]}},yGkE:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cef2f5e5240bd88bbb5f.js.map