---
sidebar_position: 1
---

# Design

## Overview
The main job of the parent chain smart contract is to receive the block data of the subnet node, and verify and store it

![](sc-overview.jpg)


## Specifics
#### Checkpoint

1.checkpoint will use these parameters to constructe the contract first

   - `address[]  initial_validator_set `: List of initial validator addresses
   - `bytes genesis_header`: block0HexRLP
   - `bytes block1_header`: block1HexRLP
   - `uint64 gap`: GAP block number on public chain
   - `uint64 epoch`: EPOCH block number on public chain

2.relayer need to fetch every block data from subnet node

![](sc-checkpoint.jpg)

#### Lite Checkpoint
1.lite checkpoint will use these parameters to constructe the contract first

   - `address[]  initialValidatorSet `: List of initial validator addresses
   - `bytes block1`: block1HexRLP
   - `uint64 gap`: GAP block number on public chain
   - `uint64 epoch`: EPOCH block number on public chain

2.relayer need to fetch gap/epoch block data from subnet node

![](sc-litecheckpoint.jpg)