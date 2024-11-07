---
sidebar_label: Specs
sidebar_position: 3
---
### Subswap API Documentation

---

This document provides an API reference for the Subswap contracts, specifically for the `ParentnetTreasury` and `SubnetTreasury` contracts. These contracts facilitate cross-chain asset transfers by minting, burning, locking, and unlocking tokens between chains.

---

## **Restricted Access Functions**

### **ParentnetTreasury**

1. **`changeEndpoint(address endpoint) -> void`**
   - **Description**: Allows the contract owner to set a new endpoint address.
   - **Parameters**:
     - `endpoint`: The address of the new endpoint.
   - **Access**: `onlyOwner`

2. **`setEndpoint(address endpoint) -> void`**
   - **Description**: Sets a new endpoint address, restricted to calls from the current endpoint.
   - **Parameters**:
     - `endpoint`: The address of the new endpoint.
   - **Access**: `onlyEndpoint`

3. **`mint(...) -> void`**
   - **Description**: Mints tokens on the `SubnetTreasury` chain in response to a cross-chain transfer.
   - **Parameters**:
     - `originalToken`: Address of the original token.
     - `name`: Name of the token.
     - `symbol`: Symbol of the token.
     - `account`: Address of the account receiving the minted tokens.
     - `amount`: Number of tokens to mint.
     - `sid`: Source chain ID.
   - **Access**: `onlyEndpoint`

### **SubnetTreasury**

1. **`changeEndpoint(address endpoint) -> void`**
   - **Description**: Allows the contract owner to set a new endpoint address.
   - **Parameters**:
     - `endpoint`: The address of the new endpoint.
   - **Access**: `onlyOwner`

2. **`setEndpoint(address endpoint) -> void`**
   - **Description**: Sets a new endpoint address, restricted to calls from the current endpoint.
   - **Parameters**:
     - `endpoint`: The address of the new endpoint.
   - **Access**: `onlyEndpoint`

3. **`unlock(address token, uint256 amount, address recv) -> void`**
   - **Description**: Unlocks tokens on the current chain, sending them to the specified address.
   - **Parameters**:
     - `token`: Address of the token to unlock.
     - `amount`: Amount of tokens to unlock.
     - `recv`: Address of the recipient.
   - **Access**: `onlyEndpoint`

---

## **Public Functions**

### **ParentnetTreasury**

1. **`burn(...) -> void`**
   - **Description**: Burns tokens on the `ParentnetTreasury` side to initiate a cross-chain transfer, sending a message to `SubnetTreasury` to mint tokens.
   - **Parameters**:
     - `rid`: Destination chain ID.
     - `rua`: Receiver’s address on the destination chain.
     - `originalToken`: Address of the original token on the source chain.
     - `token`: Address of the Treasury token to burn.
     - `amount`: Number of tokens to burn.
     - `recv`: Address to receive tokens on the destination chain.
   - **Events**:
     - Emits a `Burn` event with details of the burned amount and target chain.

2. **`test(uint256 rid, address rua, bytes memory data) -> void`**
   - **Description**: Sends arbitrary data to the specified chain via the endpoint, for testing purposes.
   - **Parameters**:
     - `rid`: Destination chain ID.
     - `rua`: Receiver’s address on the destination chain.
     - `data`: Encoded data to send.
  
3. **`getEndpoint() -> address`**
   - **Description**: Returns the current endpoint address.

### **SubnetTreasury**

1. **`lock(...) -> void`**
   - **Description**: Locks tokens on the `SubnetTreasury` side to initiate a cross-chain transfer, sending a message to `ParentnetTreasury` to mint tokens.
   - **Parameters**:
     - `rid`: Destination chain ID.
     - `rua`: Receiver’s address on the destination chain.
     - `token`: Address of the token to lock.
     - `amount`: Amount of tokens to lock.
     - `recv`: Address to receive tokens on the destination chain.
   - **Events**:
     - Emits a `Lock` event with details of the locked amount and target chain.

2. **`getChainId() -> uint256`**
   - **Description**: Returns the chain ID of the current chain.
  
3. **`getEndpoint() -> address`**
   - **Description**: Returns the current endpoint address.

---

## **Algorithms and Rules**

### **Minting and Burning**

- **Minting (ParentnetTreasury)**
  - When `SubnetTreasury` locks tokens on its chain, it sends a message to `ParentnetTreasury` to mint an equivalent amount on the destination chain.
  - If a Treasury token contract does not exist for the original token, a new one is created and mapped to the original token in `treasuryMapping`.

- **Burning (ParentnetTreasury)**
  - To initiate a cross-chain transfer back to the original chain, the `burn` function is called to destroy tokens on `ParentnetTreasury`. 
  - After burning, a message is sent to `SubnetTreasury` to unlock an equivalent amount on the destination chain.

### **Locking and Unlocking**

- **Locking (SubnetTreasury)**
  - Tokens are locked on `SubnetTreasury` by transferring them from the caller’s address to the contract. 
  - The contract then sends a cross-chain message to `ParentnetTreasury` to mint equivalent tokens on the destination chain.

- **Unlocking (SubnetTreasury)**
  - In response to a burn action on `ParentnetTreasury`, the `SubnetTreasury` unlocks tokens on its chain and sends them to the specified recipient.

### **Endpoint and Cross-Chain Communication**

- All cross-chain messages are handled through the `IEndpoint` interface, which abstracts the low-level cross-chain communication.
- Each function that initiates cross-chain actions (mint, burn, lock, unlock) encodes data using `abi.encodeWithSelector` to create a message payload, ensuring proper handling of contract-specific calls on the destination chain.
  
