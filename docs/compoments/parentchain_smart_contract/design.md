---
sidebar_position: 1
---

# Design

- What does it do?

    The contract allows the mainnet to verify, checkpoint and secure subnet blocks. 

- Why smart contract?

  1. Instances of XDC subnet could be pretty different based on the use cases. It is unlikely that one mainnet module can cover all subnet use cases.

  2. Adding code to the mainnet incur extra development, maintenance, etc. 

  3. Subnet headers do not impact mainnet consensus, so it is not necessary to implement it at mainnet code level.

  4. EVM is sufficient for the processing.

  5. EVM can handle the variations in point 1.

- What are the smart contract's main features?

  1. It introduces the concept of a grand master node, which is the XDC mainnet account of the owner of the associated subnet

  2. It allows anyone to submit subnet headers to it. The smart contract will verify the headers and maintain the header chain.

  3. It allows the grand master to register subnet validator set changes. Such changes submitted by anyone else will be reject.

  4. It provides APIs that allow users to query the confirmation status of subnet headers in XDC mainnet. Thus, it provides XDC mainnet security to the subnet.