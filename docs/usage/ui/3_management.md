---
sidebar_label: "Subnet Management"
sidebar_position: 3
---

# Subnet Management

Subnet management is used for adding and removing Masternodes in the Subnet. To manage the subnet, you need to use the Grandmaster Account, as only the Grandmaster has the right to manage the Subnet.

You can find the Grandmaster Key in the `keys.json` file.

After making a modification with Subnet management, the change will take effect in the next epoch (900 blocks).

When adding a Masternode address in the management, the new Masternode server should also be started up and added to the network.

## 1. Log in to the Wallet and Connect to the Subnet

To manage the subnet, you need to use your **Grandmaster Account**. Find the **Grandmaster Key** in the `keys.json` file and import this account into your wallet.

![import_account](img/import_account.png)

1. Go to the correct tab and switch to the **Grandmaster Account**.
2. Click the `Connect Wallet` button.
   ![connect_wallet](img/connect_wallet.png)

3. Choose your wallet and allow the subnet network to be added. The wallet will automatically switch to this network, as shown below:
   ![switch_to_subnet](img/switch_subnet.png)

   If the wallet doesn’t switch to the subnet automatically, follow the instructions on the page to fill in the network details manually and connect to the subnet.

4. Connect the account and network.
   ![account_connection](img/account_connect.png)

You will see a confirmation page like this:

![successful_connection_confirmation](img/successful_connection_confirmation.png)

## 2. Node Operations

### 2.1 Add candidate

1. Switch to the **Master List** Tab
2. Click the `Add a new master candidate` button to add the node as a master node. **Delegation amount** must be at least `10,000,000` Subnet tokens.
   ![add_master_node_candidate](img/add_master_node_candidate.png)

### 2.2 Change Node Delegation

- In the list, select the node you want to change the delegation for, then click the `Promote` / `Demote` button and enter the new delegation amount.

  - If increasing the delegation, ensure the total delegation amount is over `10,000,000` Subnet tokens; otherwise, the transaction will fail.There is no extra benefit in delegating more than 10,000,000 tokens to an address
  - If decreasing the delegation, ensure the remaining amount is still at least `10,000,000` Subnet tokens; otherwise, the transaction will fail.

    ![promote_node_delegate](img/promote_node_delegate.png)

### 2.3 Remove a Node

1. In the **Master List** Tab, select the node you want to remove, and click the `Remove` button.
2. After removal, the node’s delegated XDC will be reset to zero, and the node information will be removed from the list after one epoch.
   ![remove_master_node](img/remove_master_node.png)
