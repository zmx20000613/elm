webpackJsonp([14],{LUJe:function(t,e){},SV47:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("EjVG"),i=n("Muz9"),o=n.n(i),s={data:function(){return{text:"",arr:[],id:""}},components:{Header:a.a},computed:{},mounted:function(){},created:function(){this.id=localStorage.getItem("id")},methods:{address:function(){var t=this;o.a.get("http://elm.cangdu.org/v1/pois?type=nearby&city_id="+this.id+"&keyword="+this.text).then(function(e){console.log(e),t.arr=e.data}),console.log(this.text)},fn1:function(t){this.$store.commit("xiao",t.name),this.$router.push({path:"/add"})}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box-detail"},[n("Header",{attrs:{show:"true",headerTitle:"搜索地址"}}),t._v(" "),n("div",{staticClass:"detail"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",name:"",id:"",placeholder:"小区/写字楼/学校等"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.address}},[t._v("确认")])]),t._v(" "),n("div",{staticClass:"wei"},[t._v("\n          为了满足商家的送餐要求,建议您从列表中选择地址\n    ")]),t._v(" "),n("div",{staticClass:"connect"},[n("ul",t._l(t.arr,function(e,a){return n("li",{key:a,on:{click:function(n){return t.fn1(e)}}},[n("p",[t._v(t._s(e.name))]),t._v(" "),n("p",[t._v(t._s(e.address))])])}),0)])],1)},staticRenderFns:[]};var d=n("VU/8")(s,r,!1,function(t){n("LUJe")},"data-v-25270796",null);e.default=d.exports}});