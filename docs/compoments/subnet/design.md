---
sidebar_position: 1
---

# Design

XDC Subnet is a blockchain network powered by XDC2.0 Protocol and tailored for users who aim to own their own network and harness the security, finality, and accountability of XDC main network (mainnet). XDC2.0 Protocol enables fast transaction confirmation, secure consensus, less fork generation, and low energy consumption for XDC subnet just as it does for XDC mainnet. Besides these outstanding properties, XDC subnet is tailored for private or consortium senarios --- the owner of the subset regulate the masternodes, configure the blockchain genesis, and customize blockchain parameters.

## XDC2.0 Protocol
Sitting at the core of the XDC network, no matter mainnet or subnet, XDC2.0 protocol is in charge of maintaining the consistency of the blockchain with strong security and performance guarantees. The masternodes, appointed by the owner, run the state-of-the-art XDC2.0 consensus protocol to settle block generation and verification and confirm transactions. Besides, XDC2.0 protocol enables its unique feature, namely forensic monitoring. When the adversary corrupts more than 1/3 masternodes and violates the safety, forensic monitoring can detect those actions and report an irrefutable evidence of the culprits.

## Your Owne Blockchain Network
XDC subnet is completely owned by you. You, the owner of the subnet, is capable of control several aspects of the subnet.

First, the masternode is regulated by the owner, who grant masternodes access to the network. The joining and leaving of masternodes are controlled by a smart contract only accessable by the owner. Also, underperforming or misbehaving masternodes could be expelled by the owner. This is in contrast with XDC mainnet, where masternodes join or leave willingly as long as they follow the rule enforced by the protocol.

Second, the blockchain genesis can be configured by the owner. The owner is able to distribute initial tokens and create accounts, as well as deploy system-level smart contracts on the blockchain.

Last, the owner is able to customize blockchain parameters, such as epoch length, max masternode number, the quorom certificate threshold, the reward per epoch, etc.

## Integrating with XDC mainnet
Integrating with XDC mainnet will enable subnet to harness the security, finality, and accountability of XDC mainnet.

The owner of XDC subnet needs to deploy a special contract on XDC mainnet, who has functions to upload block headers and record masternode changes. In this way, the subnet is tied to the mainnet and can gain additional advantages of XDC mainnet.

Subnet will upload blockchain's headers to XDC mainnet, where they will be validated and stored on chain. Hence as long as the mainnet is secure, the block header information of subnet is securely stored on the mainnet. Users can also query the mainnet for finality to enhence the confidence that the subnet transaction is indeed finalized. Subnet can also report the culprits to the forensic server of XDC mainnet when its forensic monitor module detect safety violations. When the culprit report is validated, necessary measurements should be taken by the owner to reestablish the security of the subnet.

It is worth noting that the subnet can be deployed as a standalone, independent blockchain network without integrating with XDC mainnet. The choice is up to the owner whether to harness the advantages of XDC mainnet.
-----------------
What are the distinctive features of the subnet? E.g., consensus engine, validator rotation mechanism, etc.

When writning this. First give an overview of the subnet instead of directly comparing it with XDC2.0 at XinFin parent chain - the reader may not know what XDC parent chain looks like.
