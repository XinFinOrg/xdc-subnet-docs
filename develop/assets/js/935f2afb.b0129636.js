"use strict";(self.webpackChunkxdc_subnet_docs=self.webpackChunkxdc_subnet_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"defaultSidebar":[{"type":"link","label":"Welcome","href":"/xdc-subnet-docs/","docId":"intro"},{"type":"category","label":"Introduction","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Motivation & Design Rationale","href":"/xdc-subnet-docs/introduction/intro","docId":"introduction/intro"},{"type":"link","label":"Architecture","href":"/xdc-subnet-docs/introduction/architecture","docId":"introduction/architecture"}],"href":"/xdc-subnet-docs/category/introduction"},{"type":"category","label":"Components","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Subnet Chain","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Design","href":"/xdc-subnet-docs/components/subnet/design","docId":"components/subnet/design"},{"type":"link","label":"API","href":"/xdc-subnet-docs/components/subnet/api","docId":"components/subnet/api"}],"href":"/xdc-subnet-docs/category/subnet-chain"},{"type":"category","label":"Checkpoint Smart Contract","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Design","href":"/xdc-subnet-docs/components/checkpoint_smart_contract/design","docId":"components/checkpoint_smart_contract/design"},{"type":"link","label":"Specs","href":"/xdc-subnet-docs/components/checkpoint_smart_contract/spec","docId":"components/checkpoint_smart_contract/spec"}],"href":"/xdc-subnet-docs/category/checkpoint-smart-contract"},{"type":"category","label":"Relayer","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Design","href":"/xdc-subnet-docs/components/relayer/design","docId":"components/relayer/design"},{"type":"link","label":"Relayer Mode","href":"/xdc-subnet-docs/components/relayer/relayer_mode","docId":"components/relayer/relayer_mode"}],"href":"/xdc-subnet-docs/category/relayer"},{"type":"category","label":"API Library","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Specs","href":"/xdc-subnet-docs/components/API_library/api","docId":"components/API_library/api"}],"href":"/xdc-subnet-docs/category/api-library"}],"href":"/xdc-subnet-docs/category/components"},{"type":"category","label":"Deployment Guide","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"1. Launch a Subnet","href":"/xdc-subnet-docs/deployment/launch_subnet","docId":"deployment/launch_subnet"},{"type":"link","label":"2. Debug Guide (How to know if my subnet is running?)","href":"/xdc-subnet-docs/deployment/debug_guide","docId":"deployment/debug_guide"},{"type":"link","label":"3. Deployment and Configs Explanation","href":"/xdc-subnet-docs/deployment/configs_explanation","docId":"deployment/configs_explanation"},{"type":"link","label":"4. Blockchain Explorer","href":"/xdc-subnet-docs/deployment/blockchain_explorer","docId":"deployment/blockchain_explorer"},{"type":"link","label":"5. Upgrading the Subnet","href":"/xdc-subnet-docs/deployment/upgrading_the_subnet","docId":"deployment/upgrading_the_subnet"},{"type":"link","label":"Subnet Deployment Generator Changelog","href":"/xdc-subnet-docs/deployment/subnet_deployment_generator_changelog","docId":"deployment/subnet_deployment_generator_changelog"}],"href":"/xdc-subnet-docs/category/deployment-guide"},{"type":"category","label":"UI Usage Guide","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Homepage","href":"/xdc-subnet-docs/usage/homepage","docId":"usage/homepage"},{"type":"link","label":"Confirmation Checker","href":"/xdc-subnet-docs/usage/confirmation_checker","docId":"usage/confirmation_checker"},{"type":"link","label":"Subnet Management","href":"/xdc-subnet-docs/usage/management","docId":"usage/management"}],"href":"/xdc-subnet-docs/category/ui-usage-guide"}]},"docs":{"components/API_library/api":{"id":"components/API_library/api","title":"Specifications","description":"TBW","sidebar":"defaultSidebar"},"components/checkpoint_smart_contract/design":{"id":"components/checkpoint_smart_contract/design","title":"Design","description":"Overview","sidebar":"defaultSidebar"},"components/checkpoint_smart_contract/spec":{"id":"components/checkpoint_smart_contract/spec","title":"spec","description":"APIs","sidebar":"defaultSidebar"},"components/relayer/design":{"id":"components/relayer/design","title":"Design","description":"Background","sidebar":"defaultSidebar"},"components/relayer/relayer_mode":{"id":"components/relayer/relayer_mode","title":"Relayer Mode","description":"There are 2 relayer modes \'Full\' and \'Lite\' where the default mode is \'Full\'. In the full mode, all subnet block headers are checkpointed to the parent chain. In the lite mode, only the Epoch and Epoch gap subnet block headers are checkpointed in the parent chain (blocks 451,900,1351,1800, and so on). The Epoch and Epoch gap blocks stores important information regarding subnet validators selection. For further reading please check Checkpoint Smart Contract.","sidebar":"defaultSidebar"},"components/subnet/api":{"id":"components/subnet/api","title":"API","description":"Subnet-specific APIs","sidebar":"defaultSidebar"},"components/subnet/design":{"id":"components/subnet/design","title":"Design","description":"XDC subnet is a blockchain network tailored for private and consortium use cases. It is powered by XDC2.0, which is the core engine of XDC network and enables state-of-the-art security against Byzantine attacks with forensics, fast transaction confirmation, and low energy consumption. It is also designed to enable secure checkpointing to XDC mainnet, so that it can harness the security, finality, and accountability of mainnet.","sidebar":"defaultSidebar"},"deployment/blockchain_explorer":{"id":"deployment/blockchain_explorer","title":"Blockchain Explorer","description":"You may optionally use an external blocks explorer if you require verbose browsing such as block detail, accounts browsing, contracts browsing. We can recommend Chainlens-free as one of the solution. Please follow the instructions as the previous link. You only need to pass one of the Subnet\'s RPC as a variable in the docker-compose command, which will most likely be NODEENDPOINT=http8545 or NODEENDPOINT=http8545.","sidebar":"defaultSidebar"},"deployment/configs_explanation":{"id":"deployment/configs_explanation","title":"Configs Explanation","description":"The kickstart file \'docker.env\'","sidebar":"defaultSidebar"},"deployment/debug_guide":{"id":"deployment/debug_guide","title":"Debug guide (how to know if my subnet is running?)","description":"## Subnet Nodes","sidebar":"defaultSidebar"},"deployment/launch_subnet":{"id":"deployment/launch_subnet","title":"Launch a Subnet","description":"Overview","sidebar":"defaultSidebar"},"deployment/subnet_deployment_generator_changelog":{"id":"deployment/subnet_deployment_generator_changelog","title":"Subnet Deployment Generator Changelog","description":"v0.3.2 - 2024/08/15","sidebar":"defaultSidebar"},"deployment/upgrading_the_subnet":{"id":"deployment/upgrading_the_subnet","title":"Upgrading the Subnet","description":"Upgrading the Checkpoing Smart Contract (CSC)","sidebar":"defaultSidebar"},"intro":{"id":"intro","title":"Welcome","description":"Welcome to the technical documentation site of XDC enterprise private subnet! We are continuously adding materials to it.","sidebar":"defaultSidebar"},"introduction/architecture":{"id":"introduction/architecture","title":"Architecture","description":"The architecture consists of the following four main components owned by the customer:","sidebar":"defaultSidebar"},"introduction/intro":{"id":"introduction/intro","title":"Motivation & Design Rationale","description":"As a leading Layer-1 (L1) public blockchain, XDC network has attrated many enterprise and institutional customers. Besides the high performance and high security that XDC already offers, these customers also demand privacy, meaning that their transactions and ledger should not be disclosed to the public. This requirement prohibits them from directly submitting transactions to XDC. Instead, they should only checkpoint snapshots of their ledger to XDC in order to extract XDC\'s security.","sidebar":"defaultSidebar"},"usage/confirmation_checker":{"id":"usage/confirmation_checker","title":"Confirmation Checker","description":"After navigating with the left menu bar to the Confirmation Checker of the Subnet, this will be shown.","sidebar":"defaultSidebar"},"usage/homepage":{"id":"usage/homepage","title":"Homepage","description":"Once subnet is successfully deployed. The homepage will show the following.","sidebar":"defaultSidebar"},"usage/management":{"id":"usage/management","title":"Subnet Management","description":"WIP","sidebar":"defaultSidebar"}}}')}}]);