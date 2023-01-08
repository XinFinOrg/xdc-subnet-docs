---
sidebar_position: 1
---

# Design

## Background
There is a strong demand from the banking industry to adopt XDC. One of the key requirements to enter the field is the ability to support subnets so that banks are able to keep the sensitive transactions within their own domain (privacy concern) but at the same time, have the ability to continuously audit the result (hash) of the subnet transactions on the XDC mainnet (security concern).

Since the mainnet and subnets will be running as two independent node cluster, we will need to figure out a method to bridge them together to perform the auditing feature mentioned above. This is where “relayer” is coming into play.

## High-level architectural diagram
At high level, the relayer is able to:
1. Pull necessary data from both subnet and mainnet
2. Process and submit subnet block data as smart contract transactions into mainnet
3. When subnet masternodes list changes, report the new list and change height to the mainnet using grand-master account.

![architectural-diagram](relayer-diagram.jpg)