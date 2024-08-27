---
sidebar_label: "Homepage"
sidebar_position: 1
---


# Homepage

Once subnet is successfully deployed. The homepage will show the following.

![Homepage 1](./img/homepage_1.png)

1. The Subnet blockchain state. You can see the current 'Not Confirmed' and 'Confirmed' blocks. 'Confirmed' or 'committed' blocks should be 3 blocks behind latest blocks.
2. The Subnet blockchain AS KNOWN by the Parentchain. The Relayer periodically calls the Checkpoint Smart Contract to update the Subnet status (default every 2 minutes).
3. The Network Info card shows the Subnet throughput state, by default Blocktime should be every 2 seconds. It also indicates the Parentchain network
4. The Relayer Info card shows the Relayer status. Which Checkpoint Smart Contract (CSC) it calls, Subnet blocks in the backlog, and the remaining wallet funds.
5. The Masternodes Info card shows the Subnet nodes status. By default, all Subnet nodes are Masternodes and all should be active.





In the lower half of the homepage there are more information as shown.

![Homepage 2](./img/homepage_2.png)



1. This card shows further details of subnet blocks, including their height, hash, proposer, and confirmation status. The left side of 'confirmation status' shows the block being committed in the Subnet chain and the right side shows the block hash being recorded in the Parent chain. 

2. This card shows a detailed view of the subnet nodes including their address. The status also differrentiates inactive nodes to 'penalty' or 'standby'

3. Additionally, you can select the UI theme (light or dark) by toggling this button.