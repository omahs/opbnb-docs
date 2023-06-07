"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[8834],{36125:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>y,toc:()=>g});var i=a(87462),p=(a(67294),a(3905)),l=a(26389),s=a(94891),n=a(75190),r=a(47507),d=a(24310),o=a(63303),m=(a(75035),a(85162));const c={id:"applied-plan",title:"AppliedPlan queries a previously applied upgrade plan by its name.",description:"AppliedPlan queries a previously applied upgrade plan by its name.",sidebar_label:"Applied Plan",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"AppliedPlan",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{height:{type:"string",format:"int64",description:"height is the block height at which the plan was applied."}},description:"QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC\nmethod."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"name",description:"name is the name of the applied plan to query for.",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],description:"AppliedPlan queries a previously applied upgrade plan by its name.",method:"get",path:"/cosmos/upgrade/v1beta1/applied_plan/{name}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"AppliedPlan queries a previously applied upgrade plan by its name.",description:{type:"text/plain"},url:{path:["cosmos","upgrade","v1beta1","applied_plan",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) name is the name of the applied plan to query for.",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},u=void 0,y={unversionedId:"greenfield-api/applied-plan",id:"greenfield-api/applied-plan",title:"AppliedPlan queries a previously applied upgrade plan by its name.",description:"AppliedPlan queries a previously applied upgrade plan by its name.",source:"@site/docs/greenfield-api/applied-plan.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/applied-plan",permalink:"/opbnb-docs/docs/greenfield-api/applied-plan",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"applied-plan",title:"AppliedPlan queries a previously applied upgrade plan by its name.",description:"AppliedPlan queries a previously applied upgrade plan by its name.",sidebar_label:"Applied Plan",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"AppliedPlan",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{height:{type:"string",format:"int64",description:"height is the block height at which the plan was applied."}},description:"QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC\nmethod."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"name",description:"name is the name of the applied plan to query for.",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],description:"AppliedPlan queries a previously applied upgrade plan by its name.",method:"get",path:"/cosmos/upgrade/v1beta1/applied_plan/{name}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"AppliedPlan queries a previously applied upgrade plan by its name.",description:{type:"text/plain"},url:{path:["cosmos","upgrade","v1beta1","applied_plan",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) name is the name of the applied plan to query for.",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null}},h={},g=[{value:"Applied Plan",id:"applied-plan",level:2}],f={toc:g};function b(e){let{components:t,...a}=e;return(0,p.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"applied-plan"},"Applied Plan"),(0,p.kt)("p",null,"AppliedPlan queries a previously applied upgrade plan by its name."),(0,p.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,p.kt)("summary",{style:{}},(0,p.kt)("strong",null,"Path Parameters")),(0,p.kt)("div",null,(0,p.kt)("ul",null,(0,p.kt)(n.Z,{className:"paramsItem",param:{name:"name",description:"name is the name of the applied plan to query for.",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,p.kt)("div",null,(0,p.kt)(l.Z,{mdxType:"ApiTabs"},(0,p.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,p.kt)("div",null,(0,p.kt)("p",null,"A successful response.")),(0,p.kt)("div",null,(0,p.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,p.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,p.kt)(o.Z,{mdxType:"SchemaTabs"},(0,p.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,p.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,p.kt)("summary",{style:{textAlign:"left"}},(0,p.kt)("strong",null,"Schema")),(0,p.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,p.kt)("ul",{style:{marginLeft:"1rem"}},(0,p.kt)(d.Z,{collapsible:!1,name:"height",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",description:"height is the block height at which the plan was applied."},mdxType:"SchemaItem"})))),(0,p.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,p.kt)(r.Z,{responseExample:'{\n  "height": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,p.kt)(m.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,p.kt)("div",null,(0,p.kt)("p",null,"An unexpected error response.")),(0,p.kt)("div",null,(0,p.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,p.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,p.kt)(o.Z,{mdxType:"SchemaTabs"},(0,p.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,p.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,p.kt)("summary",{style:{textAlign:"left"}},(0,p.kt)("strong",null,"Schema")),(0,p.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,p.kt)("ul",{style:{marginLeft:"1rem"}},(0,p.kt)(d.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,p.kt)(d.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,p.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,p.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,p.kt)("details",{style:{}},(0,p.kt)("summary",{style:{}},(0,p.kt)("strong",null,"details"),(0,p.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,p.kt)("div",{style:{marginLeft:"1rem"}},(0,p.kt)("li",null,(0,p.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,p.kt)(d.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,p.kt)(d.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,p.kt)("li",null,(0,p.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,p.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,p.kt)(r.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);