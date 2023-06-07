"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[365],{43761:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var i=t(87462),r=(t(67294),t(3905));const n={title:"Data Integrity and Availability",order:6},o="Data Integrity and Availability",s={unversionedId:"guide/concept/data-availability",id:"guide/concept/data-availability",title:"Data Integrity and Availability",description:"There are three crucial aspects of data management: integrity, availability, and redundancy.",source:"@site/docs/guide/concept/data-availability.md",sourceDirName:"guide/concept",slug:"/guide/concept/data-availability",permalink:"/opbnb-docs/docs/guide/concept/data-availability",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/docs/guide/concept/data-availability.md",tags:[],version:"current",frontMatter:{title:"Data Integrity and Availability",order:6}},l={},d=[],c={toc:d};function p(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-integrity-and-availability"},"Data Integrity and Availability"),(0,r.kt)("p",null,"There are three crucial aspects of data management: ",(0,r.kt)("strong",{parentName:"p"},"integrity"),", ",(0,r.kt)("strong",{parentName:"p"},"availability"),", and ",(0,r.kt)("strong",{parentName:"p"},"redundancy"),". "),(0,r.kt)("p",null,"Below are some key points to ensure each aspect is met:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The primary storage provider must correctly store the object uploaded by the user."),(0,r.kt)("li",{parentName:"ul"},"The assigned data segments in both primary and secondary storage providers must be free of any loss, corruption, or counterfeit data."),(0,r.kt)("li",{parentName:"ul"},"Erasure coding pieces in secondary providers should enable recovery of the original data in the primary storage provider.")),(0,r.kt)("p",null,"To ensure data integrity and redundancy, checksum and redundancy setups must be established for objects.\nThese setups constitute part of the objects' metadata and must be verified by the storage providers and users upon\ncreating objects. The metadata will be stored on the Greenfield blockchain."),(0,r.kt)("p",null,"Collaboration between Greenfield and storage providers is crucial to ensure data integrity and availability, particularly to assign data segments in primary and secondary storage providers. To increase user confidence that their data is stored as promised, Greenfield has introduced a ",(0,r.kt)("a",{parentName:"p",href:"/opbnb-docs/docs/guide/greenfield-blockchain/modules/data-availability-challenge"},'"Proof-of-Challenge"')," approach."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'"Proof-of-Challenge" is proposed based on the assumptions: ',(0,r.kt)("strong",{parentName:"p"},"Greenfield is a self-sustained, service-oriented ecosystem."))),(0,r.kt)("p",null,"Stakeholders can trigger challenges in various ways, such as through user or via random events on the Greenfield blockchain.\nFollowing a challenge, ",(0,r.kt)("a",{parentName:"p",href:"/opbnb-docs/docs/guide/introduction/ecosystem#challenge-verifier"},"Challenge Verifier")," must conduct an ",(0,r.kt)("strong",{parentName:"p"},"off-chain audit")," of challenged data from storage providers. The Verifier Consortium will vote on the challenge results, and the failed outcomes will reduce the corresponding storage providers' staked BNB. Participants who submitted the challenge and the verifier receive rewards for their involvement in this process. Data that failed to pass a challenge will not face another challenge for a specific time to allow storage providers to restore the data."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/opbnb-docs/docs/guide/greenfield-blockchain/modules/data-availability-challenge"},"Data challenger module")," will elaborate further on challenges associated with data availability."))}p.isMDXComponent=!0}}]);