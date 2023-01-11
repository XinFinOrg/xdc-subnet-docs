---
sidebar_position: 1
---

# Design

## Background

There is a strong demand from the banking industry to adopt XDC. One of their key requirements is the ability to support subnets so that banks are able to keep the sensitive transactions within their own domain (privacy concern). At the same time, they still want XDC network's protection of their transactions against attacks such as forking attacks (security concern). To this end, the subnet needs to checkpoint its headers to the XDC network. This will create an immutable history of the subnet on the XDC network, so that even if the subnet is attacked and diverged, people will still know the truth about the subnet.

The relayer is a standalone component that responsible for the checkpointing.

## Main Functionalities

The main functionalities of the relayer are:
1. Checkpoint subnet headers to the parent chain (XDC network) as smart contract transactions of the parent chain.
2. Monitor the consistency between the subnet chain and its header chain maintained in the parent chain's smart contract, and raise alarm if it finds discrepency.
3. (Grand-master only) When subnet masternode list changes, report the new list and the subnet block height when this change will apply to the parent chain.


## Architecture

@jerome some descriptions of the architecture diagram.
![architectural-diagram](relayer-diagram.jpg)
