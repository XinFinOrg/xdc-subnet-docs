---
sidebar_position: 2
---

# Architecture


The architecture consists of the following four main components owned by the customer:
1.	a subnet driven by the XDC2.0 consensus engine, with configurable parameters
2.	a relayer program that checkpoints subnet block headers to the XDC mainnet
3.	a smart contract in the XDC mainnet that verifies and records the checkpoints and maintain the subnet header chain 
4.	an API library that enables additional protection of subnet transactions through extra confirmation in the XDC mainnet 

![Docs Version Dropdown](./img/architecture.svg)