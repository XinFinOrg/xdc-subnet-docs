---
sidebar_position: 2
sidebar_label: "Relayer Mode"
---

# Relayer Mode

There are 2 relayer modes 'Full' and 'Lite' where the default mode is 'Full'. In the full mode, all subnet block headers are checkpointed to the parent chain. In the lite mode, only the Epoch and Epoch gap subnet block headers are checkpointed in the parent chain (blocks 451,900,1351,1800, and so on). The Epoch and Epoch gap blocks stores important information regarding subnet validators selection. For further reading please check [Checkpoint Smart Contract](../checkpoint_smart_contract/design.md).

## Choosing Full or Lite Relayer

The Full mode has the advantage of being more 'complete' and more 'current' as blocks are getting confirmed in the parent chain almost immediately. The Lite mode has the advantage of using lower parent chain gas fee as the Relayer is only submitting to once every 450 blocks.

## Deployment

In the deployment `RELAYER_MODE` config is only relevant for Checkpoint Smart Contract (CSC) deployment. The relayer itself is able to detect the CSC type automatically and push block headers accordingly.



