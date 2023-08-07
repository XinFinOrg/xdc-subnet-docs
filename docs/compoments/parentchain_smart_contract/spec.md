---
sidebar_label: Specs
sidebar_position: 2
---

## APIs
- Functions that have access restriction to authorized client
    - `reviseValidatorSet(address[], int, int)`: Update subnet block header signer list at destined height
    - `receiveHeader(bytes[])`: Validate and store subnet headers

- Functions that open for public access
    - `getHeader(byte32)`: Return entire block header in RLP encoding format
    - `getHeaderByNumber(int)`: Return block hash and number at input height
    - `getHeaderConfirmationStatus(byte32)`: Return block committing status
    - `getMainnetBlockNumber(byte32)`: Return mainnet block number that processed the subnet block header
    - `getLatestBlocks()`: Return latest committed block and submitted block

## Algorithms and Rules
Block header verification follows two principle rules:
1. Received block should have consistent round number and block number associated with its parent block.
2. Received block should have enough certificates signed by the list of block signers.

Once a block header is checked and stored, the contract will examine whether there are 3 consecutive blocks that have 3 consetive round number. If that is the case, all of the direct ancestor blocks that are prior to these 3 consecutive blocks will be committed. 
