(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"2e20":function(t,e,a){"use strict";a("77d0")},"5ace":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"signup"},[a("h5",[t._v("Welcome, Create a new account!")]),a("div",{staticClass:"loginPage"},[a("div",{staticClass:"login-field"},[a("label",{attrs:{for:"email"}},[t._v("First Name*")]),a("q-input",{staticClass:"text-input",attrs:{"lazy-rules":"",rules:[function(t){return t&&t.length>0||"First Name Required"}],outlined:""},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})],1),a("div",{staticClass:"login-field"},[a("label",{attrs:{for:"email"}},[t._v("Last Name*")]),a("q-input",{staticClass:"text-input",attrs:{"lazy-rules":"",rules:[function(t){return t&&t.length>0||"Last Name Required"}],outlined:""},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1),a("div",{staticClass:"login-field"},[a("label",{attrs:{for:"email"}},[t._v("Email*")]),a("q-input",{staticClass:"text-input",attrs:{"lazy-rules":"",rules:[function(t){return t&&t.length>0||"E-mail Required"}],outlined:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("div",{staticClass:"login-field"},[a("label",{attrs:{for:"email"}},[t._v("Phone Number*")]),a("q-input",{staticClass:"text-input",attrs:{"lazy-rules":"",rules:[function(t){return t&&t.length>0||"Phone Number Required"}],outlined:""},model:{value:t.phoneNumber,callback:function(e){t.phoneNumber=e},expression:"phoneNumber"}})],1),a("div",{staticClass:"login-field1"},[a("label",{attrs:{for:"password"}},[t._v("Password*")]),a("q-input",{staticClass:"text-input",attrs:{"lazy-rules":"",rules:[function(t){return t&&t.length>0||"Password Required"}],outlined:"",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("q-btn",{staticClass:"signup-button",attrs:{color:"primary",label:"Sign Up"},on:{click:function(e){return t.handleSubmit()}}}),a("h6",{staticClass:"bottom-line"},[t._v("\n      Already have an account?\n      "),a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[t._v("Login")])],1)],1)])},i=[],l={name:"Login",data(){return{email:"",password:"",firstName:"",lastName:"",phoneNumber:""}},methods:{goToHome(){this.$router.push("/welcome")},goToSignUp(){this.$router.push("/signup")},handleSubmit(){const t={email:this.email,firstName:this.firstName,lastName:this.lastName,phoneNumber:this.phoneNumber,password:this.password};console.log(t)}}},n=l,r=(a("2e20"),a("2877")),o=a("27f9"),u=a("9c40"),c=a("eebe"),m=a.n(c),d=Object(r["a"])(n,s,i,!1,null,"32baf1bb",null);e["default"]=d.exports;m()(d,"components",{QInput:o["a"],QBtn:u["a"]})},"77d0":function(t,e,a){}}]);