"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[8165],{99275:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={title:"Blockchain Events",icon:"actions",order:2},s="Blockchain Events",i={unversionedId:"api-sdk/events",id:"api-sdk/events",title:"Blockchain Events",description:"There are two categories of events in the cosmos-sdk documentation:",source:"@site/docs/api-sdk/events.md",sourceDirName:"api-sdk",slug:"/api-sdk/events",permalink:"/opbnb-docs/docs/api-sdk/events",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/docs/api-sdk/events.md",tags:[],version:"current",frontMatter:{title:"Blockchain Events",icon:"actions",order:2}},l={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"blockchain-events"},"Blockchain Events"),(0,o.kt)("p",null,"There are two categories of events in the cosmos-sdk documentation:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Old modules may not have typed events, which means their events are listed in a\nMarkdown document under the module's spec folder.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"New modules introduced in the cosmos-sdk or developed by the Greenfield team emit typed events,\nwhich are defined in a protobuf file. Therefore, for these modules, we can refer directly to their protobuf file."))),(0,o.kt)("p",null,"Here are the events grouped by modules that are emitted by the Greenfield blockchain:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/proto/cosmos/authz/v1beta1/event.proto"},"Authz"),": module to grant or revoke privileges to an account;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/x/bank/spec/04_events.md"},"Bank"),": module to transfer, delegate, mint or burn tokens;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/blob/master/proto/greenfield/bridge/event.proto"},"Bridge"),": module to make cross chain transfers between the Greenfield blockchain and the BSC;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/blob/master/proto/greenfield/challenge/events.proto"},"Challenge"),": module to generate and attest challenges;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/x/distribution/spec/06_events.md"},"Distribution"),": module to withdraw addresses, delegator rewards or validator commissions;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/x/feegrant/spec/04_events.md"},"Feegrant"),": module to manage allowances;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/x/gov/spec/04_events.md"},"Gov"),": module to submit proposal or vote for proposals;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/proto/cosmos/oracle/v1/event.proto"},"Oracle"),": module to claim cross chain packages;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/blob/master/proto/greenfield/payment/events.proto"},"Payment"),": module to manage the streaming payment; ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/x/slashing/spec/06_events.md"},"Slashing"),": module to penalize users of the chain;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/blob/develop/proto/greenfield/sp/events.proto"},"Storage Provider"),": module to manage storage providers;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/blob/master/proto/greenfield/storage/events.proto"},"Storage"),": module to manage buckets, objects or groups;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/x/staking/spec/07_events.md"},"Staking"),": module to delegate."))),(0,o.kt)("p",null,"This ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-cosmos-sdk/blob/master/docs/architecture/adr-032-typed-events.md"},"ADR")," also\nproposes adding affordances to emit and consume these events. For developers, they will only need to write ",(0,o.kt)("inlineCode",{parentName:"p"},"EventHandlers"),"\nwhich define the actions they desire to take."))}d.isMDXComponent=!0}}]);