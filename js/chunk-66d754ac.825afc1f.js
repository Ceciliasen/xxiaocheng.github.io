(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66d754ac"],{1854:function(t,a,e){"use strict";var i=e("3e92"),s=e.n(i);s.a},"2afb":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"movie-comment"},[e("p",{staticClass:"movie-comment-title"},[t._v("\n    "+t._s(t.title)+" 的短评 · · · · ·\n    "),e("small",{staticClass:"rating-count"},[t._v("(全部 "+t._s(t.ratingCount)+" 条)")])]),e("hr"),e("el-breadcrumb",{attrs:{separator:"/"}},[e("el-breadcrumb-item",[e("a",{on:{click:t.newRating}},[t._v("最新")])]),e("el-breadcrumb-item",{attrs:{"aria-current":"page"}},[e("a",{on:{click:t.hotRating}},[t._v("最热")])])],1),e("commentCard",{attrs:{ratingsProp:t.ratings}}),e("hr"),t.nextPage?e("div",{staticClass:"load-more",on:{click:t.loadMore}},[t._v("加载更多")]):t._e()],1)},s=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",t._l(t.comments,function(a,i){return t.comments?e("div",{staticClass:"rating"},[e("hr"),e("el-card",{attrs:{"body-style":{padding:"0px"},shadow:"hover"}},[e("div",{staticClass:"comment-head"},[e("a",[e("img",{staticClass:"image avatar",attrs:{src:a.user_avatar}})]),e("router-link",{attrs:{to:"/people/"+a.username}},[e("span",{staticClass:"name"},[t._v(t._s(a.username))])]),2===a.cate?e("span",{staticClass:"cate"},[t._v("看过")]):t._e(),1===a.cate?e("span",{staticClass:"cate"},[t._v("在看")]):t._e(),0===a.cate?e("span",{staticClass:"cate"},[t._v("想看")]):t._e(),e("el-rate",{staticClass:"rating-score",attrs:{disabled:"","text-color":"#ff9900"},model:{value:a.score/2,callback:function(e){t.$set(a,"score / 2",e)},expression:"rating.score / 2"}}),e("span",{staticClass:"time rating-time"},[t._v(t._s(a.when.replace("T"," ")))]),e("a",{staticClass:"report",on:{click:function(a){return t.ratingAction(i,"report")}}},[e("i",{staticClass:"material-icons"},[t._v("error_outline")])]),!0===a.me_like_rating?e("a",{staticClass:"like like-status",on:{click:function(a){return t.ratingAction(i,"unlike")}}},[e("i",{staticClass:"material-icons"},[t._v("favorite")]),e("span",{staticClass:"like-count"},[t._v(t._s(a.like_count))])]):t._e(),!1===a.me_like_rating?e("a",{staticClass:"like unlike-status",on:{click:function(a){return t.ratingAction(i,"like")}}},[e("i",{staticClass:"material-icons"},[t._v("favorite")]),e("span",{staticClass:"like-count"},[t._v(t._s(a.like_count))])]):t._e()],1),e("div",{staticStyle:{padding:"14px"}},[e("div",{staticClass:"bottom clearfix"},[e("p",[t._v("\n                   "+t._s(a.comment)+"\n          ")])])])])],1):t._e()}),0)},o=[],c={inheritAttrs:!1,props:["ratingsProp"],data:function(){return{comments:[]}},watch:{ratingsProp:function(t){this.comments=t}},methods:{ratingAction:function(t,a){var e=this,i="/rating/"+this.comments[t].id,s=new URLSearchParams;s.append("cate",a),this.$http.post(i,s).then(function(i){if(e.showMessage(i.data.message,"success"),"report"!==a){var s=e.comments[t];"like"===a?(s.me_like_rating=!0,s.like_count=s.like_count+1,e.$set(e.comments,t,s)):"unlike"===a&&(s.me_like_rating=!1,s.like_count=s.like_count-1,e.$set(e.comments,t,s))}}).catch(function(t){e.showMessage(t.response.data.message,"error")})},showMessage:function(t,a){this.$message({showClose:!0,message:t,type:a})}}},r=c,l=(e("5202"),e("2877")),u=Object(l["a"])(r,n,o,!1,null,null,null),g=u.exports,m={components:{commentCard:g},props:["title","movieId"],data:function(){return{thisMovieId:this.movieId,score:3.5,ratings:[],ratingCount:0,ratingCate:"",nextPage:"",loading:!1}},watch:{movieId:function(t,a){this.thisMovieId=t,this.fetchRating("new",1)}},mounted:function(){this.fetchRating("new",1)},methods:{newRating:function(){this.ratings=[],this.fetchRating("new",1)},hotRating:function(){this.ratings=[],this.fetchRating("hot",1)},fetchRating:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(this.loading=!0,a?this.ratingCate=a:a=this.ratingCate,this.thisMovieId){if(e>0){var s="/movie/"+this.thisMovieId+"/rating";i=s}this.$http.get(i,{params:{sort:a,page:e}}).then(function(a){t.ratingCount=a.data.data.total,t.ratings=t.ratings.concat(a.data.data.items),t.nextPage=a.data.data.next,t.loading=!1}).catch(function(a){console.log("get ratings error."),t.loading=!1})}},showMessage:function(t,a){this.$message({showClose:!0,message:t,type:a})},loadMore:function(){this.fetchRating(url=this.nextPage)}}},h=m,d=(e("1854"),Object(l["a"])(h,i,s,!1,null,null,null));a["default"]=d.exports},"3e92":function(t,a,e){},5202:function(t,a,e){"use strict";var i=e("f597"),s=e.n(i);s.a},f597:function(t,a,e){}}]);
//# sourceMappingURL=chunk-66d754ac.825afc1f.js.map