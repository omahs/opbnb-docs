"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[6580],{80066:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>n,toc:()=>l});var s=o(87462),r=(o(67294),o(3905));const a={title:"Storage Provider",order:2},i="Storage Provider",n={unversionedId:"guide/greenfield-blockchain/modules/storage-provider",id:"guide/greenfield-blockchain/modules/storage-provider",title:"Storage Provider",description:"Abstract",source:"@site/docs/guide/greenfield-blockchain/modules/storage-provider.md",sourceDirName:"guide/greenfield-blockchain/modules",slug:"/guide/greenfield-blockchain/modules/storage-provider",permalink:"/opbnb-docs/docs/guide/greenfield-blockchain/modules/storage-provider",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/docs/guide/greenfield-blockchain/modules/storage-provider.md",tags:[],version:"current",frontMatter:{title:"Storage Provider",order:2}},d={},l=[{value:"Abstract",id:"abstract",level:2},{value:"Key Workflow",id:"key-workflow",level:2},{value:"Join the network",id:"join-the-network",level:3},{value:"Leave the network",id:"leave-the-network",level:3},{value:"Reputation",id:"reputation",level:3},{value:"State",id:"state",level:2},{value:"StorageProvider",id:"storageprovider",level:3},{value:"Params",id:"params",level:3},{value:"Deposit Pool",id:"deposit-pool",level:3},{value:"Message",id:"message",level:2},{value:"MsgCreateStorageProvider",id:"msgcreatestorageprovider",level:3},{value:"MsgEditStorageProvider",id:"msgeditstorageprovider",level:3},{value:"MsgDeposit",id:"msgdeposit",level:3}],p={toc:l};function g(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,s.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"storage-provider"},"Storage Provider"),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"The storage providers (SP) are storage service infrastructures that organizations or individuals provide and the\ncorresponding roles they play. They use Greenfield as the ledger and the single source of truth. Each SP can and\nwill respond to users' requests to write (upload) and read (download) data, and serve as the gatekeeper for\nuser rights and authentications."),(0,r.kt)("p",null,"The SP module is responsible for managing and keeping storage providers in the network. This includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Metadata"),": Basic information, such as address, tokens, and status, about each SP."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Deposit"),": Aspiring SPs must stake tokens to guarantee their capacity to offer storage services."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Slash"),": Stored data on an SP is occasionally challenged. If the challenge succeeds, the SP is penalized by losing some of its staked tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reputation"),": We are implementing a reputation system to assess the quality of each SP's service. Users can select an SP based on its reputation score to store their data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Exit"),": SPs can leave voluntarily as long as they adhere to specific rules and recover their staked tokens. Greenfield may also force an SP to exit if it lacks sufficient staked tokens or its reputation score falls below the minimum requirements for an SP.")),(0,r.kt)("h2",{id:"key-workflow"},"Key Workflow"),(0,r.kt)("h3",{id:"join-the-network"},"Join the network"),(0,r.kt)("p",null,'SPs have to register themselves first by depositing BNB tokens on the Greenfield blockchain as their "Service Stake".\nThe validators will go through a dedicated governance procedure to vote for the SPs of their election. SPs are encouraged to\nadvertise their information and prove to the community their capability, as SPs have to provide a professional storage\nsystem with high-quality SLA.'),(0,r.kt)("p",null,"It will take several transactions to join the greenfield storage network for storage provider."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The funding account of SP should grant the governance module account to deduct tokens for staking;"),(0,r.kt)("li",{parentName:"ol"},"The SP submit a ",(0,r.kt)("inlineCode",{parentName:"li"},"CreateStorageProvider")," proposal to governance module;"),(0,r.kt)("li",{parentName:"ol"},"Deposit enough BNB tokens for the proposal;"),(0,r.kt)("li",{parentName:"ol"},"The validators should either vote ",(0,r.kt)("inlineCode",{parentName:"li"},"Pass")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"reject")," for the proposal;"),(0,r.kt)("li",{parentName:"ol"},"When more than half of the validators have voted, the storage provider will be automatically created on chain.")),(0,r.kt)("h3",{id:"leave-the-network"},"Leave the network"),(0,r.kt)("p",null,'When the SPs join or leave the network, they have to follow a series of actions to ensure data redundancy for the\nusers; otherwise, their "Service Stake" will be fined. This is achieved through the data availability challenge and\nvalidator governance votes.'),(0,r.kt)("h3",{id:"reputation"},"Reputation"),(0,r.kt)("p",null,"We'll introduce a reputation system for storage provider to evaluate the quality of service of SP."),(0,r.kt)("h2",{id:"state"},"State"),(0,r.kt)("h3",{id:"storageprovider"},"StorageProvider"),(0,r.kt)("p",null,"The storage provider can be in one of these several statuses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"STATUS_IN_SERVICE"),": The SP is in service. it can serve user's Create/Upload/Download request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"STATUS_IN_JAILED"),": The SP has been slashed many times, and its deposit tokens is insufficient."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"STATUS_GRACEFUL_EXITING"),": The SP is exiting gracefully. All the object stored in it will be shifted to another sp."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"STATUS_OUT_OF_SERVICE"),": The SP is out of service. it can be a short-lived service unavailable. Users are unable\nto store or get payload data on it.")),(0,r.kt)("p",null,"The storage providers metadata should be primarily stored and accessed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"OperatorAddr"),", an EIP712 account address\nfor the operator of the storage provider. Three additional indices are maintained per storage provider metadata in\norder to fulfill required lookups for SealObject/Deposit/Slash/GetApproval."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"StorageProvider: ",(0,r.kt)("inlineCode",{parentName:"li"},"0x21 | OperatorAddr -> ProtocolBuffer(StorageProvider)")),(0,r.kt)("li",{parentName:"ul"},"StorageProviderByFundingAddress: ",(0,r.kt)("inlineCode",{parentName:"li"},"0x22 | FundingAddress -> OperatorAddr")),(0,r.kt)("li",{parentName:"ul"},"StorageProviderBySealAddress: ",(0,r.kt)("inlineCode",{parentName:"li"},"0x23 | SealAddress -> OperatorAddr")),(0,r.kt)("li",{parentName:"ul"},"StorageProviderByApprovalAddress: ",(0,r.kt)("inlineCode",{parentName:"li"},"0x24 | ApprovalAddress -> OperatorAddr"))),(0,r.kt)("p",null,"Each storage provider's state is stored in a ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageProvider")," struct."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'message StorageProvider {\n  option (gogoproto.equal) = false;\n  option (gogoproto.goproto_stringer) = false;\n\n  // operator_address defines the address of the sp\'s operator; It also is the unique index key of sp.\n  string operator_address = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // fund_address define the account address of the storage provider for deposit, remuneration.\n  string funding_address = 2 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // seal_address define the account address of the storage provider for sealObject\n  string seal_address = 3 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // approval_address define the account address of the storage provider for ack CreateBucket/Object.\n  string approval_address = 4 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // total_deposit define the deposit token\n  string total_deposit = 5 [\n    (cosmos_proto.scalar) = "cosmos.Int",\n    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",\n    (gogoproto.nullable) = false\n  ];\n  // status is the status of sp, which can be (in_service/read_only_service/graceful_exiting/out_of_service)\n  Status status = 6;\n  // endpoint is the service address of the storage provider\n  string endpoint = 7;\n  // description defines the description terms for the validator.\n  Description description = 8 [(gogoproto.nullable) = false];\n}\n')),(0,r.kt)("h3",{id:"params"},"Params"),(0,r.kt)("p",null,"Params is a module-wide configuration structure that stores system parameters\nand defines overall functioning of the SP module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'// Params defines the parameters for the module.\nmessage Params {\n  option (gogoproto.equal) = true;\n  option (gogoproto.goproto_stringer) = false;\n\n  // deposit_denom defines the staking coin denomination.\n  string deposit_denom = 1;\n  // min_deposit_amount defines the minimum deposit amount for storage providers.\n  string min_deposit = 2 [\n    (cosmos_proto.scalar) = "cosmos.Int",\n    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",\n    (gogoproto.nullable) = false\n  ];\n}\n')),(0,r.kt)("h3",{id:"deposit-pool"},"Deposit Pool"),(0,r.kt)("p",null,"The SP module uses its module account to manage all the staking tokens deposited by storage providers."),(0,r.kt)("h2",{id:"message"},"Message"),(0,r.kt)("h3",{id:"msgcreatestorageprovider"},"MsgCreateStorageProvider"),(0,r.kt)("p",null,"A storage provider is created using the ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgCreateProvider")," messages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgCreateStorageProvider {\n  option (cosmos.msg.v1.signer) = "creator";\n\n  string creator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  Description description = 2 [(gogoproto.nullable) = false];\n  string sp_address = 3 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  string funding_address = 4 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  string seal_address = 5 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  string approval_address = 6 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  string endpoint = 7;\n  cosmos.base.v1beta1.Coin deposit = 8 [(gogoproto.nullable) = false];\n}\n')),(0,r.kt)("p",null,"This message is expected to fail if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Another storage provider with this operator/seal/funding/approval address is already registered;"),(0,r.kt)("li",{parentName:"ul"},"The initial deposit tokens do not belong to the denomination that is specified as the deposit denomination of the SP module;"),(0,r.kt)("li",{parentName:"ul"},"The deposit tokens is insufficient.")),(0,r.kt)("h3",{id:"msgeditstorageprovider"},"MsgEditStorageProvider"),(0,r.kt)("p",null,"The metadata of a storage provider can be edited by using ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgEditStorageProvider")," messages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'// MsgEditStorageProvider defines a SDK message for editing an existed SP.\nmessage MsgEditStorageProvider {\n  option (cosmos.msg.v1.signer) = "sp_address";\n\n  string sp_address = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  string endpoint = 2;\n  Description description = 3 [(gogoproto.nullable) = false];\n}\n')),(0,r.kt)("p",null,"This message is expected to fail if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The storage provider is not existed;"),(0,r.kt)("li",{parentName:"ul"},"The description fields are too large.")),(0,r.kt)("h3",{id:"msgdeposit"},"MsgDeposit"),(0,r.kt)("p",null,"When the deposit tokens of a storage provider are insufficient, it can use ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgDeposit")," messages to resupply the\ndeposit tokens."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'// MsgDeposit defines a SDK message to deposit token for SP.\nmessage MsgDeposit {\n  option (cosmos.msg.v1.signer) = "creator";\n\n  // creator is the msg signer, it should be SP address or sp\'s fund address\n  string creator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // sp_address is the operator address of sp\n  string sp_address = 2 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // deposit is a mount of token which used to deposit for SP\n  cosmos.base.v1beta1.Coin deposit = 3 [(gogoproto.nullable) = false];\n}\n')),(0,r.kt)("p",null,"This message is expected to fail if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The storage provider doesn't existed;"),(0,r.kt)("li",{parentName:"ul"},"The tokens that are deposited do not belong to the denomination that is specified as the deposit denomination of the SP module.")))}g.isMDXComponent=!0}}]);