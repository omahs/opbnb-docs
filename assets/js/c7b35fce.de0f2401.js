"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[787],{62002:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>g,toc:()=>b});var a=r(87462),s=(r(67294),r(3905)),i=r(26389),m=r(94891),o=r(75190),l=r(47507),n=r(24310),p=r(63303),d=(r(75035),r(85162));const u={id:"head-group-member",title:"Queries a list of HeadGroupMember items.",description:"Queries a list of HeadGroupMember items.",sidebar_label:"Queries a list of HeadGroupMember items.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"HeadGroupMember",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{group_member:{type:"object",properties:{id:{type:"string",title:"id is an unique u256 sequence for each group member. It also be used as NFT tokenID"},group_id:{type:"string",title:"group_id is the unique id of the group"},member:{type:"string",title:"member is the account address of the member"}}}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"member",in:"query",required:!1,schema:{type:"string"}},{name:"group_owner",in:"query",required:!1,schema:{type:"string"}},{name:"group_name",in:"query",required:!1,schema:{type:"string"}}],tags:["Query"],description:"Queries a list of HeadGroupMember items.",method:"get",path:"/greenfield/storage/head_group_member",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Queries a list of HeadGroupMember items.",description:{type:"text/plain"},url:{path:["greenfield","storage","head_group_member"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"member",value:""},{disabled:!1,key:"group_owner",value:""},{disabled:!1,key:"group_name",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},c=void 0,g={unversionedId:"greenfield-api/head-group-member",id:"greenfield-api/head-group-member",title:"Queries a list of HeadGroupMember items.",description:"Queries a list of HeadGroupMember items.",source:"@site/docs/greenfield-api/head-group-member.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/head-group-member",permalink:"/opbnb-docs/docs/greenfield-api/head-group-member",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"head-group-member",title:"Queries a list of HeadGroupMember items.",description:"Queries a list of HeadGroupMember items.",sidebar_label:"Queries a list of HeadGroupMember items.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"HeadGroupMember",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{group_member:{type:"object",properties:{id:{type:"string",title:"id is an unique u256 sequence for each group member. It also be used as NFT tokenID"},group_id:{type:"string",title:"group_id is the unique id of the group"},member:{type:"string",title:"member is the account address of the member"}}}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"member",in:"query",required:!1,schema:{type:"string"}},{name:"group_owner",in:"query",required:!1,schema:{type:"string"}},{name:"group_name",in:"query",required:!1,schema:{type:"string"}}],tags:["Query"],description:"Queries a list of HeadGroupMember items.",method:"get",path:"/greenfield/storage/head_group_member",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Queries a list of HeadGroupMember items.",description:{type:"text/plain"},url:{path:["greenfield","storage","head_group_member"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"member",value:""},{disabled:!1,key:"group_owner",value:""},{disabled:!1,key:"group_name",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null}},y={},b=[{value:"Queries a list of HeadGroupMember items.",id:"queries-a-list-of-headgroupmember-items",level:2}],h={toc:b};function f(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"queries-a-list-of-headgroupmember-items"},"Queries a list of HeadGroupMember items."),(0,s.kt)("p",null,"Queries a list of HeadGroupMember items."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"member",in:"query",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"group_owner",in:"query",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"group_name",in:"query",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A successful response.")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"group_member"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!1,name:"id",required:!1,schemaName:"id is an unique u256 sequence for each group member. It also be used as NFT tokenID",qualifierMessage:void 0,schema:{type:"string",title:"id is an unique u256 sequence for each group member. It also be used as NFT tokenID"},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"group_id",required:!1,schemaName:"group_id is the unique id of the group",qualifierMessage:void 0,schema:{type:"string",title:"group_id is the unique id of the group"},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"member",required:!1,schemaName:"member is the account address of the member",qualifierMessage:void 0,schema:{type:"string",title:"member is the account address of the member"},mdxType:"SchemaItem"}))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "group_member": {\n    "id": "string",\n    "group_id": "string",\n    "member": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"An unexpected error response.")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(n.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);