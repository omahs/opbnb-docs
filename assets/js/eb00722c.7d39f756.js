"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[4705],{60776:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>h,contentTitle:()=>p,default:()=>v,frontMatter:()=>g,metadata:()=>f,toc:()=>u});var n=t(87462),s=(t(67294),t(3905)),a=t(26389),o=t(94891),r=t(75190),d=t(47507),l=t(24310),m=t(63303),c=(t(75035),t(85162));const g={id:"signing-info",title:"SigningInfo queries the signing info of given cons address",description:"SigningInfo queries the signing info of given cons address",sidebar_label:"SigningInfo",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"SigningInfo",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{val_signing_info:{type:"object",properties:{address:{type:"string"},start_height:{type:"string",format:"int64",title:"Height at which validator was first a candidate OR was unjailed"},index_offset:{type:"string",format:"int64",description:"Index which is incremented each time the validator was a bonded\nin a block and may have signed a precommit or not. This in conjunction with the\n`SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`."},jailed_until:{type:"string",format:"date-time",description:"Timestamp until which the validator is jailed due to liveness downtime."},tombstoned:{type:"boolean",description:"Whether or not a validator has been tombstoned (killed out of validator set). It is set\nonce the validator commits an equivocation or for any other configured misbehiavor."},missed_blocks_counter:{type:"string",format:"int64",description:"A counter kept to avoid unnecessary array reads.\nNote that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`."}},description:"ValidatorSigningInfo defines a validator's signing info for monitoring their\nliveness activity.",title:"val_signing_info is the signing info of requested val cons address"}},title:"QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC\nmethod"}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"cons_address",description:"cons_address is the address to query signing info of",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],description:"SigningInfo queries the signing info of given cons address",method:"get",path:"/cosmos/slashing/v1beta1/signing_infos/{cons_address}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"SigningInfo queries the signing info of given cons address",description:{type:"text/plain"},url:{path:["cosmos","slashing","v1beta1","signing_infos",":cons_address"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) cons_address is the address to query signing info of",type:"text/plain"},type:"any",value:"",key:"cons_address"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},p=void 0,f={unversionedId:"greenfield-api/signing-info",id:"greenfield-api/signing-info",title:"SigningInfo queries the signing info of given cons address",description:"SigningInfo queries the signing info of given cons address",source:"@site/docs/greenfield-api/signing-info.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/signing-info",permalink:"/opbnb-docs/docs/greenfield-api/signing-info",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"signing-info",title:"SigningInfo queries the signing info of given cons address",description:"SigningInfo queries the signing info of given cons address",sidebar_label:"SigningInfo",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"SigningInfo",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{val_signing_info:{type:"object",properties:{address:{type:"string"},start_height:{type:"string",format:"int64",title:"Height at which validator was first a candidate OR was unjailed"},index_offset:{type:"string",format:"int64",description:"Index which is incremented each time the validator was a bonded\nin a block and may have signed a precommit or not. This in conjunction with the\n`SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`."},jailed_until:{type:"string",format:"date-time",description:"Timestamp until which the validator is jailed due to liveness downtime."},tombstoned:{type:"boolean",description:"Whether or not a validator has been tombstoned (killed out of validator set). It is set\nonce the validator commits an equivocation or for any other configured misbehiavor."},missed_blocks_counter:{type:"string",format:"int64",description:"A counter kept to avoid unnecessary array reads.\nNote that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`."}},description:"ValidatorSigningInfo defines a validator's signing info for monitoring their\nliveness activity.",title:"val_signing_info is the signing info of requested val cons address"}},title:"QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC\nmethod"}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"cons_address",description:"cons_address is the address to query signing info of",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],description:"SigningInfo queries the signing info of given cons address",method:"get",path:"/cosmos/slashing/v1beta1/signing_infos/{cons_address}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"SigningInfo queries the signing info of given cons address",description:{type:"text/plain"},url:{path:["cosmos","slashing","v1beta1","signing_infos",":cons_address"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) cons_address is the address to query signing info of",type:"text/plain"},type:"any",value:"",key:"cons_address"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null}},h={},u=[{value:"SigningInfo",id:"signinginfo",level:2}],y={toc:u};function v(e){let{components:i,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},y,t,{components:i,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"signinginfo"},"SigningInfo"),(0,s.kt)("p",null,"SigningInfo queries the signing info of given cons address"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"cons_address",description:"cons_address is the address to query signing info of",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(a.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A successful response.")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"val_signing_info"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"ValidatorSigningInfo defines a validator's signing info for monitoring their\nliveness activity.")),(0,s.kt)(l.Z,{collapsible:!1,name:"address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"start_height",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",title:"Height at which validator was first a candidate OR was unjailed"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"index_offset",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",description:"Index which is incremented each time the validator was a bonded\nin a block and may have signed a precommit or not. This in conjunction with the\n`SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`."},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"jailed_until",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Timestamp until which the validator is jailed due to liveness downtime."},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"tombstoned",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether or not a validator has been tombstoned (killed out of validator set). It is set\nonce the validator commits an equivocation or for any other configured misbehiavor."},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"missed_blocks_counter",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",description:"A counter kept to avoid unnecessary array reads.\nNote that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`."},mdxType:"SchemaItem"}))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "val_signing_info": {\n    "address": "string",\n    "start_height": "string",\n    "index_offset": "string",\n    "jailed_until": "2023-05-26T13:35:10.590Z",\n    "tombstoned": true,\n    "missed_blocks_counter": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"An unexpected error response.")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);