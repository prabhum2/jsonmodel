(this.webpackJsonpjsonmodel=this.webpackJsonpjsonmodel||[]).push([[0],{114:function(e,t){},127:function(e,t,n){},159:function(e,t,n){},161:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(29),c=n.n(s),o=(n(97),n(98),n(46)),r=n(9),l=n.n(r),d=n(25),p=n(6),j=n(60),u=(n(68),n(69),n(70),n(71),n(75)),h=n.n(u),b=n(77),m=n.n(b),x=n(23),f=n(10),O=function(e){var t=Object.keys(e)[0];return console.log("obj",t),e[t]},g=function(e){return Object.keys(e)[0]},y=n(164),v=n(41),D=n(67),S=n(163),N=n(27),C=(n(127),n(66)),w=n.n(C),P=n(51),k=n.n(P),J=n(52),T=n.n(J),A=n(5),E=function(e){var t=function t(n,i,s,c){console.log("Object Key ====="+i);var o=Object.keys(n)[0],r=n[o],l=o.split(":"),d=[];if("object"==r.type&&r.hasOwnProperty("properties"))for(var p=0;p<r.properties.length;p++)d.push(t(r.properties[p],i+"."+p,!0,c));return Object(A.jsxs)("div",{style:{marginLeft:"2.25rem"},children:[s?Object(A.jsx)("span",{style:{marginLeft:"2.25rem"}}):null,Object(A.jsx)(x.b,{onClick:e.plusHandlerFactory(i,c),width:"10px",children:Object(A.jsx)(h.a,{})}),Object(A.jsx)(y.a,{width:"160px",id:"outlined-basic",variant:"outlined",name:"propertyNamespace",placeholder:"Property Namespace",defaultValue:"",value:l[0],onChange:e.updateHandlerFactory("keyT",i)}),Object(A.jsx)(y.a,{width:"120px",id:"outlined-basic",placeholder:"Property Name",variant:"outlined",name:"propertyName",value:l[1],onChange:e.updateHandlerFactory("keyN",i)}),Object(A.jsx)(y.a,{width:"120px",id:"outlined-basic",placeholder:"Property Title",variant:"outlined",name:"propertyTitle",value:r.title,onChange:e.updateHandlerFactory("title",i)}),Object(A.jsx)(y.a,{width:"150px",id:"outlined-basic",placeholder:"Property Data Type",variant:"outlined",name:"propertyType",value:r.type,onChange:e.updateHandlerFactory("type",i)}),Object(A.jsx)(y.a,{width:"150px",id:"outlined-basic",placeholder:"Property Description",variant:"outlined",name:"propertyDescription",value:r.description,onChange:e.updateHandlerFactory("description",i)}),Object(A.jsx)(y.a,{width:"100px",id:"outlined-basic",placeholder:"examples",variant:"outlined",name:"examples",value:r.examples,onChange:e.updateHandlerFactory("examples",i)}),Object(A.jsx)(x.b,{onClick:a(i,c),width:"10px",children:Object(A.jsx)(m.a,{})}),Object(A.jsx)("br",{}),Object(A.jsx)("br",{}),d.map((function(e,t){return console.log("nv",t),e}))]})},n=function(t){return function(){console.log("function index==",t),e.currentIndex(t)}},a=function(t,n){return console.log("delete click call => ",t,n),function(){console.log("delete actual call => ",t,n),e.deleteProperty(t,n)}},i=function(t,n){var a=t.jsonData.class.$id,i=a.split("/");return a=i[i.length-1],e.setschemaName(a),Object(A.jsx)(y.a,{placeholder:"class"===t.type?"Class Name":"mixin"===t.type?"Mixin Name":"Datatype Name",name:"schemaName",id:"schemaName",width:"100px",type:"text",variant:"filled",defaultValue:a,value:a,onChange:function(t){return e.onSchemaChange(t,n,"schemaName")}})};return Object(A.jsx)("div",{style:{display:"flex",flexDirection:"column-reverse",overflow:"scroll"},children:e.schemas.map((function(a,s){console.log("SCHEMAMAP",a.jsonData.class.title),console.log("index === ",s);var c=O(a.jsonData.class.definitions);return console.log("propertiessss",c),a.minimized?Object(A.jsxs)("div",{onClick:n(s),style:{border:"5px solid ".concat("class"===a.type?"#9498DC":"mixin"===a.type?"#B582A3":"#D66D6C"),height:"100px",minWidth:"300px",background:"lightgrey",borderRadius:"10px",margin:"20px",padding:"10px"},children:[i(a,s),Object(A.jsxs)(v.a,{justifyContent:"end",children:[Object(A.jsx)(x.a,{width:"size-115",marginEnd:"size-10",onPress:function(){return e.onWindowAction(!1,s)},children:Object(A.jsx)(T.a,{})}),Object(A.jsxs)(D.c,{children:[Object(A.jsx)(x.a,{width:"size-115",children:Object(A.jsx)(w.a,{})}),Object(A.jsx)(D.a,{variant:"destructive",title:"Delete ".concat(a.type," Schema"),primaryActionLabel:"Delete",onPrimaryAction:function(){return e.deleteSchema(s)},cancelLabel:"Cancel",children:"This will permanently delete the selected Schema. Continue?"})]})]})]},s):Object(A.jsxs)("div",{onClick:n(s),style:{border:"5px solid ".concat("class"===a.type?"#9498DC":"mixin"===a.type?"#B582A3":"#D66D6C"),height:"500px",minWidth:"640px",background:"lightgrey",borderRadius:"10px",margin:"20px",padding:"10px",overflow:"scroll",position:"relative"},children:[Object(A.jsxs)(v.a,{justifyContent:"end",children:[Object(A.jsx)(x.a,{width:"size-115",marginEnd:"size-10",onPress:function(){return e.onWindowAction(!0,s)},children:Object(A.jsx)(k.a,{})}),Object(A.jsxs)(D.c,{children:[Object(A.jsx)(x.a,{width:"size-115",children:Object(A.jsx)(w.a,{})}),Object(A.jsx)(D.a,{variant:"destructive",title:"Delete ".concat(a.type," Schema"),primaryActionLabel:"Delete",onPrimaryAction:function(){return e.deleteSchema(s)},cancelLabel:"Cancel",children:"This will permanently delete the selected Schema. Continue?"})]})]}),Object(A.jsxs)("div",{children:[i(a,s),Object(A.jsx)(y.a,{name:"schemaTitle",placeholder:"class"===a.type?"Class Title":"mixin"===a.type?"Mixin Title":"Datatype Title",variant:"filled",width:"100px",defaultValue:a.jsonData.class.title,value:a.jsonData.class.title,onChange:function(t){return e.onSchemaChange(t,s,"schemaTitle")}}),Object(A.jsx)(y.a,{name:"schemaDescription",placeholder:"class"===a.type?"Class Description":"mixin"===a.type?"Mixin Description":"Datatype Description",variant:"filled",width:"130px",defaultValue:a.jsonData.class.description,value:a.jsonData.class.description,onChange:function(t){return e.onSchemaChange(t,s,"schemaDescription")}}),"mixin"===a.type?Object(A.jsxs)(S.a,{width:"160px",onSelectionChange:function(t,n){return e.onmixinChange(t,n)},placeholder:"Class Name",children:[Object(A.jsx)(N.a,{children:"Profile"},"profile"),Object(A.jsx)(N.a,{children:"Experience event"},"experience event"),Object(A.jsx)(N.a,{children:"Product"},"product")]}):null,"class"===a.type?Object(A.jsxs)(S.a,{width:"120px",marginTop:"10px",onSelectionChange:function(t,n){return e.onClassChange(t,n)},placeholder:"Behaviour",children:[Object(A.jsx)(N.a,{children:"Record"},"record"),Object(A.jsx)(N.a,{children:"Timeseries"},"timeseries")]}):null,Object(A.jsxs)(S.a,{width:"130px",marginTop:"10px",onSelectionChange:function(t){return e.onMetaStatusChange(t)},placeholder:"Meta Status",children:[Object(A.jsx)(N.a,{children:"Experimental"},"experimental"),Object(A.jsx)(N.a,{children:"Stable"},"stable")]})]}),Object(A.jsx)("br",{}),Object(A.jsxs)("div",{style:{marginLeft:"2.25rem"},children:[Object(A.jsx)(x.b,{variant:"contained",onClick:function(t){return e.addDynamicPropertyRow(s)},children:"Add Property"}),Object(A.jsx)("br",{}),Object(A.jsx)("br",{}),Object(A.jsx)("table",{children:Object(A.jsx)("tbody",{children:Object(A.jsx)("tr",{children:c.properties.map((function(e,n){return t(e,n,!1,s)}))})})})]})]},s)}))})},z=n(92),F=n(90),M=n.n(F),R=n(91),H=n(28),L=n(81),B=n(82),I=n(54),q=n(83),W=n(86),$=n.n(W),V=function(e){var t=Object(a.useState)({}),i=Object(p.a)(t,2),s=i[0],c=i[1],o=Object(a.useState)(!1),r=Object(p.a)(o,2),l=r[0],d=r[1],j=Object(a.useState)(""),u=Object(p.a)(j,2),h=u[0],b=u[1],m=Object(a.useState)(""),O=Object(p.a)(m,2),g=O[0],S=O[1],N=Object(a.useState)(""),C=Object(p.a)(N,2),w=C[0],P=C[1],J=Object(a.useState)(""),E=Object(p.a)(J,2),F=E[0],W=E[1],V=n(153).createPullRequest,Z=new(R.a.plugin(V))({auth:"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"});Object(a.useEffect)((function(){if(e.jsonData){var t=JSON.stringify(e.jsonData);t=t.replace("definitionName",e.schemaName),"mixin"===e.type&&(t=t.replace("meta:extends","meta:intendedToExtend"));var n=JSON.parse(t);c(n)}else c(void 0)}),[e.jsonData]);var K=function(e){d(e)};var U=function(t){if(function(e){try{JSON.parse(JSON.stringify(e))}catch(t){return!1}return!0}(t))return e.getobjectfromJson(t)};return Object(A.jsx)("div",{style:{display:"flex",flexDirection:"column",width:"100%",margin:"5px",backgroundColor:"#1E1E1E"},children:l?Object(A.jsxs)("div",{children:[" ",Object(A.jsx)(x.a,{width:"size-115",marginEnd:"size-10",onPress:function(){return K(!1)},children:Object(A.jsx)(T.a,{})})]}):Object(A.jsxs)("div",{children:[Object(A.jsxs)("div",{style:{position:"absolute",right:"30px",bottom:"10px",margin:"10px",zIndex:"10"},children:[Object(A.jsx)(x.a,{width:"size-115",marginEnd:"size-10",onPress:function(){return K(!0)},children:Object(A.jsx)(k.a,{})}),Object(A.jsxs)(D.c,{children:[Object(A.jsx)(x.a,{width:"size-100",children:Object(A.jsx)($.a,{})}),function(t){var n;return Object(A.jsxs)(D.b,{children:[Object(A.jsx)(H.a,{children:Object(A.jsx)(v.a,{alignItems:"center",gap:"size-100",children:Object(A.jsx)(H.b,{children:"Create a Pull Request"})})}),Object(A.jsx)(L.a,{}),Object(A.jsx)(B.a,{children:Object(A.jsxs)(I.a,{children:[Object(A.jsx)(y.a,{label:"Title",placeholder:"Pull Request Title",autoFocus:!0,onChange:b}),Object(A.jsx)(y.a,{label:"Description",placeholder:"Pull Request Description",onChange:S}),Object(A.jsx)(y.a,{label:"Branch",placeholder:"main",onChange:P}),Object(A.jsx)(y.a,{label:"Username",placeholder:"mprabhak@adobe.com",onChange:W})]})}),Object(A.jsx)(B.b,{}),Object(A.jsxs)(q.a,{children:[Object(A.jsx)(x.b,{variant:"secondary",onPress:t,children:"Cancel"}),Object(A.jsx)(x.b,(n={variant:"cta",onPress:t},Object(f.a)(n,"onPress",(function(){!function(){var t={};e.schemas.map((function(n,a){if(console.log("obj",n),""===e.behaviour&&"mixin"===n.type)alert("Please select behaviour");else{console.log(e.schemaName),console.log(n.type),console.log(g),console.log(w),console.log(s),console.log("test");var i=JSON.stringify(n.jsonData.class);i=i.replace("definitionName",n.jsonData.schemaName);var c="";"mixin"===n.type?(console.log(n.jsonData),i=i.replace("meta:extends","meta:intendedToExtend"),c="components/mixins/".concat(n.jsonData.behaviour,"/").concat(n.jsonData.schemaName,".schema.json")):c="components/classes/".concat(n.jsonData.schemaName,".schema.json");var o=JSON.parse(i);console.log(o),t[c]={content:JSON.stringify(o,null,"\t")}}})),Z.createPullRequest({owner:"adobe",repo:"xdm",title:"".concat(h," Created by ").concat(F),body:"".concat(g," "),base:"master",head:"".concat(w),changes:[{files:t,commit:"commiting json file"}]}).then((function(e){console.log(e.data.number),alert("PR Created"),b(""),S(""),P(""),W("")}))}()})),Object(f.a)(n,"children","Create"),n))]})]})}]})]}),Object(A.jsx)(z.a,{id:"json-panel-1",placeholder:null!==s&&void 0!==s?s:{},locale:M.a,confirmGood:!1,width:"100%",height:"100%",onChange:function(e){return U(e.jsObject)},colors:{string:"#DAA520"}})]})})},Z=(n(159),{"meta:license":["Copyright 2020 Adobe Systems Incorporated. All rights reserved.","This work is licensed under a Creative Commons Attribution 4.0 International (CC BY 4.0) license","you may not use this file except in compliance with the License. You may obtain a copy of the License at https://creativecommons.org/licenses/by/4.0/"],$id:"https://ns.adobe.com/xdm/",$schema:"http://json-schema.org/draft-06/schema#",title:"",type:"object","meta:extensible":!0,"meta:abstract":!0,"meta:extends":["https://ns.adobe.com/xdm/data/"],description:"",definitions:{definitionName:{properties:[]}},allOf:[],"meta:Status":"experimental"}),K=function(){var e,t,n,i,s=Object(a.useState)(""),c=Object(p.a)(s,2),r=c[0],u=c[1],h=Object(a.useState)(""),b=Object(p.a)(h,2),m=b[0],f=b[1],y=Object(a.useState)(0),v=Object(p.a)(y,2),D=v[0],S=v[1],N=Object(a.useState)([]),C=Object(p.a)(N,2),w=C[0],P=C[1],k=function(e,t,n){console.log("AASSSSS",e);var a=JSON.parse(JSON.stringify(w)),i=n.toString(),s={};i.includes(".")?s=a[n.split(".")[0]].jsonData.class.definitions:s=a[D].jsonData.class.definitions;(s=function(e,t,n,a){var i=O(e),s=(t+="").split(".");i=i.properties[s[0]];for(var c=1;c<s.length;c++)i=(i=O(i)).properties[s[c]];var o=null,r=null,l=null,d=O(i);switch(n){case"title":d.title=a;break;case"type":d.type=a;break;case"description":d.description=a;break;case"examples":a=a.split(",");for(var p=[],j=0;j<a.length;j++)if(""!==a[j])if(isNaN(a[j]))p.push(a[j]);else{var u=parseInt(a[j]);p.push(u)}else p.push(a[j]);d.examples=p;break;case"keyT":r=(o=g(i)).split(":"),l="".concat(a,":").concat(r[1]),Object.defineProperty(i,l,Object.getOwnPropertyDescriptor(i,o)),delete i[o];break;case"keyN":r=(o=g(i)).split(":"),l="".concat(r[0],":").concat(a),Object.defineProperty(i,l,Object.getOwnPropertyDescriptor(i,o)),delete i[o]}return e}(s,n,t,e),i.includes("."))?a[n.split(".")[0]].jsonData.class.definitions=s:a[D].jsonData.class.definitions=s;P(a)},J=function(e,t,n){console.log(e.target.name);var a=JSON.parse(JSON.stringify(w)),i=t.toString(),s={};if(i.includes(".")){t.split(".");s=a[n].jsonData.class.definitions}else s=a[n].jsonData.class.definitions;if(s=function(e,t){for(var n=e.definitionName,a=(t+="").split("."),i=0;i<a.length;i++)n=O(n.properties[a[i]]);return n.type="object",n.properties||(n.properties=[]),n.properties.push({":":{title:"",type:"",description:"",examples:""}}),e}(s,t),i.includes(".")){t.split(".");a[n].jsonData.class.definitions=s,P(a)}else a[n].jsonData.class.definitions=s,P(a)},T=function(e){var t=JSON.parse(JSON.stringify(w[e]));console.log("clicked add properties");var n,a=(n=t.jsonData.class.definitions,console.log("json changed",n),O(n).properties.push({":":{title:"",type:"",description:"",examples:""}}),n);S(e);var i=JSON.parse(JSON.stringify(w));i[e].jsonData.class.definitions=a,P(i)},z=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0!==(n=JSON.parse(JSON.stringify(w))).length?(a=n.length+1,S(a-1)):S(0),console.log(D),e.t0=t,e.next="class"===e.t0?6:"mixin"===e.t0?10:15;break;case 6:return i={type:"class",minimized:!1,jsonData:{class:Z,schemaName:r,behaviour:m}},n.push(i),P(n),e.abrupt("break",16);case 10:return s={type:"mixin",minimized:!1,jsonData:{class:Z,schemaName:r,behaviour:m}},n.push(s),P(n),console.log(w),e.abrupt("break",16);case 15:return e.abrupt("break",16);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{style:{background:"linear-gradient(to left, #e66465, #9198e5)",color:"white",height:48,textAlign:"center",paddingTop:10},children:"Experience Data Model (XDM) Tool 2.0"}),Object(A.jsxs)("div",{style:{width:"100%",height:"100vh",background:"blue",display:"flex"},children:[Object(A.jsx)("div",{style:{background:"#DEE2E6",width:"120px",padding:"10px"},children:[{type:"class",label:"Add Class",style:{background:"#9498DC"}},{type:"mixin",label:"Add Mixin",style:{background:"#B582A3"}}].map((function(e,t){return Object(A.jsx)(x.a,{width:"100px",marginBottom:"10px",UNSAFE_style:Object(o.a)(Object(o.a)({},e.style),{},{color:"#ffffff"}),onPress:function(){return z(e.type)},children:e.label},t)}))}),Object(A.jsxs)(j.Splitter,{style:{height:"100%",width:"100%"},layout:"horizontal",children:[Object(A.jsx)(j.SplitterPanel,{children:Object(A.jsx)(E,{onWindowAction:function(e,t){return function(e,t){console.log("HERE",e,t);var n=JSON.parse(JSON.stringify(w));n[t].minimized=e,P(n)}(e,t)},onSchemaChange:function(e,t,n){return function(e,t,n){console.log("name",e);var a=JSON.parse(JSON.stringify(w));switch(S(t),n){case"schemaName":u(e);var i="";i="class"===a[t].type?"classes":"mixins",a[t].jsonData.class.$id="https://ns.adobe.com/xdm/".concat(i,"/").concat(e),a[D].jsonData.class["meta:extends"]="https://ns.adobe.com/xdm/data/".concat(m),a[t].jsonData.class.allOf=[{$ref:"#/definitions/".concat(e)}],a[t].jsonData.schemaName=e;break;case"schemaTitle":a[t].jsonData.class.title=e;break;case"schemaDescription":a[t].jsonData.class.description=e}P(a)}(e,t,n)},schemas:w,deleteSchema:function(e){return function(e){var t=JSON.parse(JSON.stringify(w));P(t.filter((function(t,n){return n!==e})))}(e)},behaviour:m,updateHandlerFactory:function(e,t){return function(n){k(n,e,t)}},addDynamicPropertyRow:function(e){return T(e)},plusHandlerFactory:function(e,t){return function(n){S(t),console.log("currentindex",t),J(n,e,t)}},onClassChange:function(e,t){return function(e,t){var n=JSON.parse(JSON.stringify(w));n[D].jsonData.class["meta:extends"]="https://ns.adobe.com/xdm/data/".concat(e),f(e),n[D].jsonData.behaviour=e,P(n)}(e)},onmixinChange:function(e,t){return function(e,t){var n=JSON.parse(JSON.stringify(w));n[D].jsonData.class["meta:extends"]="https://ns.adobe.com/xdm/classes/".concat(e),f(e),n[D].jsonData.behaviour=e,P(n)}(e)},deleteProperty:function(e,t){var n=JSON.parse(JSON.stringify(w)),a=function(e,t){var n=e.definitionName;if(t.toString().includes(".")){var a=(t+="").split(".");n=n.properties[a[0]];for(var i=1;i<a.length-1;i++)n=(n=O(n)).properties[a[i]],console.log(n);var s=t[t.length-1];console.log(s);var c=O(n);console.log("vallllllllllll",c),c.properties.splice(s),c.type="string"}else n.properties.splice(t,1);return e}(w[D].jsonData.class.definitions,e);n[t].jsonData.class.definitions=a,P(n)},currentIndex:function(e){return S(e)},schemaName:r,onMetaStatusChange:function(e){return function(e){var t=JSON.parse(JSON.stringify(w));t[D].jsonData.class["meta:Status"]=e,P(t)}(e)},setschemaName:function(e){return u(e)}})}),Object(A.jsx)(j.SplitterPanel,{size:22,children:Object(A.jsx)(V,{jsonData:null!==(e=null===(t=w[D])||void 0===t?void 0:t.jsonData.class)&&void 0!==e?e:void 0,getobjectfromJson:function(e){return function(e){var t=JSON.parse(JSON.stringify(w));t[D].jsonData.class=e,P(t)}(e)},schemaName:r,behaviour:m,schemas:w,type:null!==(n=null===(i=w[D])||void 0===i?void 0:i.type)&&void 0!==n?n:""})})]})]})]})};var U=function(){return Object(A.jsx)(K,{})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,165)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))},_=n(16),G=n(162);c.a.render(Object(A.jsx)(i.a.StrictMode,{children:Object(A.jsx)(_.a,{theme:G.a,colorScheme:"light",children:Object(A.jsx)(U,{})})}),document.getElementById("root")),Y()},97:function(e,t,n){},98:function(e,t,n){}},[[161,1,2]]]);
//# sourceMappingURL=main.a7fe48a5.chunk.js.map