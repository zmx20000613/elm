webpackJsonp([18],{"2Y+w":function(t,n){},DtC2:function(t,n){},EjVG:function(t,n,e){"use strict";e("xCN/");var o={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"header"},[t._t("home"),t._v(" "),t._t("goback"),t._v(" "),t._t("citys"),t._v(" "),t.headerTitle?e("section",[e("p",{staticClass:"headerTitle"},[t._v(t._s(t.headerTitle))])]):t._e(),t._v(" "),t.show?e("span",{on:{click:function(n){return t.$router.go(-1)}}},[e("p",{staticClass:"goback"},[e("van-icon",{attrs:{name:"arrow-left"}})],1)]):t._e()],2)])},staticRenderFns:[]};var a=e("VU/8")({data:function(){return{}},props:["headerTitle","show"],components:{},computed:{},mounted:function(){},created:function(){},methods:{}},o,!1,function(t){e("DtC2")},"data-v-eb36852c",null);n.a=a.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),a={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"router-fade"}},[n("keep-alive",[n("router-view")],1)],1)],1)},staticRenderFns:[]};var i=e("VU/8")({name:"App"},a,!1,function(t){e("j3FZ")},null,null).exports,s=e("ZWLj"),r=e("EjVG"),c=e("Muz9"),l=e.n(c),u={data:function(){return{arr:[],str:[],user:"",fooe:!1,fooeuser:!1}},components:{Header:r.a},computed:{groupcitys:function(){for(var t={},n=65;n<=90;n++)this.str[String.fromCharCode(n)]&&(t[String.fromCharCode(n)]=this.str[String.fromCharCode(n)]);return t}},mounted:function(){var t=this;l.a.get("http://elm.cangdu.org/v1/cities?type=hot").then(function(n){console.log(n),t.arr=n.data}),l.a.get("http://elm.cangdu.org/v1/cities?type=group").then(function(n){t.str=n.data,console.log(t.str)})},created:function(){localStorage.taken?this.fooeuser=!0:this.fooe=!0},methods:{zmxfn1:function(){history.go(-1)},group:function(t){window.localStorage.setItem("id",t)}}},p={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"bigbox"},[o("Header",[o("div",{staticClass:"zmxapp",attrs:{slot:"home"},slot:"home"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.fooe,expression:"fooe"}]},[o("router-link",{attrs:{to:"/login"}},[o("span",[t._v("登录")])]),t._v(" "),o("router-link",{attrs:{to:"/sign"}},[o("span",[t._v("注册")])])],1),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.fooeuser,expression:"fooeuser"}]},[o("img",{attrs:{src:e("YZZq"),alt:""}})])])]),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"zmxbox1"},[o("span",[t._v("北京")]),o("span",{staticClass:"zmxspan4",on:{click:t.zmxfn1}},[t._v(">")])]),t._v(" "),o("div",{staticClass:"zmxbox2"}),t._v(" "),o("div",{staticClass:"zmxhot"},[o("p",{staticClass:"zmxhotp"},[t._v("热门城市")]),t._v(" "),o("ul",{staticClass:"citys"},t._l(t.arr,function(n,e){return o("li",{key:e},[t._v("\n               "+t._s(n.name)+"\n         ")])}),0)]),t._v(" "),o("div",{staticClass:"zmxgroup"},[o("div",{staticClass:"zmxgroup-p"},t._l(t.groupcitys,function(n,e){return o("span",{key:e},[t._v("\n          \n          "+t._s(e)+"\n\n         "),o("ul",{},t._l(n,function(n,e){return o("li",{key:e,on:{click:function(e){return t.group(n.id)}}},[o("router-link",{attrs:{to:{name:"citys",query:{citys:n.id}}}},[t._v(t._s(n.name))])],1)}),0)])}),0)])],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"zmxbox"},[n("span",{staticClass:"zmxspan1"},[this._v("当前定位城市")]),this._v(" "),n("span",{staticClass:"zmxspan2"},[this._v("定位不准时请在列表中选择")])])}]};var m=e("VU/8")(u,p,!1,function(t){e("2Y+w")},"data-v-321718f9",null).exports;o.a.use(s.a);var d=new s.a({routes:[{path:"/",name:"home",component:m},{path:"/shop",name:"shop",component:function(){return Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"atPC"))}},{path:"/citys",name:"citys",component:function(){return e.e(7).then(e.bind(null,"Vt38"))}},{path:"/take",name:"take",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"DoIe"))}},{path:"/search",name:"search",component:function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"X0jh"))}},{path:"/mine",name:"mine",component:function(){return Promise.all([e.e(0),e.e(5)]).then(e.bind(null,"DBE9"))}},{path:"/my",name:"my",component:function(){return Promise.all([e.e(0),e.e(9)]).then(e.bind(null,"06fW"))}},{path:"/login",name:"login",component:function(){return e.e(8).then(e.bind(null,"PS24"))}},{path:"/sign",name:"sign",component:function(){return e.e(6).then(e.bind(null,"JLc5"))}},{path:"/xin",name:"in",component:function(){return Promise.all([e.e(0),e.e(12)]).then(e.bind(null,"2YhP"))}},{path:"/shoping",name:"shoping",component:function(){return e.e(15).then(e.bind(null,"GQnN"))}},{path:"/address",name:"address",component:function(){return Promise.all([e.e(0),e.e(13)]).then(e.bind(null,"7+n0"))}},{path:"/add",name:"add",component:function(){return e.e(11).then(e.bind(null,"zwZU"))}},{path:"/adddetail",name:"adddetail",component:function(){return e.e(14).then(e.bind(null,"SV47"))}},{path:"/ding",name:"ding",component:function(){return e.e(10).then(e.bind(null,"KRO2"))}},{path:"/affirm",name:"affirm",component:function(){return e.e(3).then(e.bind(null,"ZMnO"))}},{path:"/que",name:"que",component:function(){return e.e(16).then(e.bind(null,"NCpL"))}}]}),h=e("mvHQ"),f=e.n(h),v=e("2bvH");o.a.use(v.a);var g=new v.a.Store({state:{use:{},list:[],xiao1:"",shopcart:[]},getters:{},mutations:{add:function(t,n){t.use=n,console.log(t.use),window.localStorage.setItem("taken",f()(t.use))},getuser:function(t){localStorage.taken&&(t.use=JSON.parse(localStorage.getItem("taken")))},detail:function(t,n){t.list.unshift(n),console.log(t.list),window.localStorage.setItem("detail",f()(t.list))},detail1:function(t){localStorage.getItem("detail")&&(t.list=JSON.parse(localStorage.getItem("detail")))},xiao:function(t,n){t.xiao1=n},del:function(t,n){t.list.splice(n,1),window.localStorage.setItem("detail",f()(t.list))},imga:function(t,n){t.use=n,window.localStorage.setItem("taken",f()(t.use))},cart:function(t,n){console.log(t.shopcart),console.log(n.name);for(var e=!1,o=0;o<t.shopcart.length;o++)t.shopcart[o].name==n.name&&(e=!0,t.shopcart[o].num++);0==e&&(t.shopcart.push(n),window.localStorage.setItem("shop",f()(t.shopcart)))},cart1:function(t){localStorage.shop&&(t.shopcart=JSON.parse(localStorage.getItem("shop")))}}}),_=e("xCN/");e("NPwK");o.a.use(_.b),o.a.config.productionTip=!1,o.a.prototype.http=l.a,new o.a({el:"#app",router:d,store:g,components:{App:i},template:"<App/>"})},NPwK:function(t,n){},YZZq:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAdCAIAAADU74AfAAAACXBIWXMAABJ0AAASdAHeZh94AAABaklEQVR42r2WsU4CQRCGt/XhfBAewjfQJ5BeKhtptTOhoSE2WJB4BYkkJhJDQg52zy8uGXBvdm8X0MkUy93cvzPzzz/BXNzX53XTGXH5vLmeWpzDqYj9mV3WzaHx82Fuj0EknemXayL2tnK98bYM8RCO89PCDed28unWdvdwsW4KEClWPrt6+ZULqfHQG9fkIkoiAZw0RAJUrkJEsvDR1Biri+x8zM2r7UaUkodxTgFKFB4iDqpdNIfzINI7Hz36iFYtt1JQFjM+mvbHRCJ0q1OpIJKdTGIbFMb822qVPT2gLDd72d1VllaQzu3MSnZUEJONrhkgZOjaxqsEbyaxclRpV0lRd28zkiUdOosPfsov3mbMGvvq8d3luLo0jboF8g3qAi2aPb91c5wFvJtA/DSeOzNdqOMQIgKU1knMpVEhYloGCReByRicitjelX+G6IWc2NsxZzF7ApTp4ZJSWkQUyvT867+UUv8GqxFF0LYwZ7IAAAAASUVORK5CYII="},j3FZ:function(t,n){}},["NHnr"]);