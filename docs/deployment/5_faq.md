---
sidebar_label: "4. FAQ"
sidebar_position: 4
---

# Frequently Asked Questions

 - How many Subnet nodes should I have?

  Even one node is enough to start the Subnet blockchain! However, for better decantralized security, 3+ nodes is recommended. At least 2/3 of all nodes must be online and honest to mine blocks.

 - For testing, should I checkpoint the Subnet to devnet or testnet?
 
  Testnet, devnet will be less stable due to frequent development changes.

 - Where are all the Subnet tokens, how do I use the Subnet?

  In XDC-Subnet all initial tokens are assigned to the Grandmaster wallet (check keys.json). You can transfer them to any wallet address. Check [Faucet](../usage/2_faucet.md).

- How can I manage Subnet tokens?

  1. Check [here](../usage/2_faucet.md) for how you can use the Subnet Faucet to easily transfer Subnet tokens to your users.
  2. You can use any web3 wallet and connect to the Subnet RPC as a custom network, then transfer to other addresses.

 - How can I easily give out Subnet tokens to my users?
 
  We have provided a Faucet server for you to deploy under `generated/scripts/faucet-server.sh`. Anyone with access to the faucet page can request for tokens.
  Please check (faucet page)

 - Which files contain sensitive data and private keys?

  common.env, contract_deploy.env, keys.json, and subnet*.env. Please make sure these files are kept securely.

- This function didn't work/I have encoutered an unexpected bug

  For troubleshooting we can help you at [Telegram Support Group](./3_troubleshooting.md#telegram-troubleshooting-support-group) and we will check as soon as possible.

  Other channels for suggestions/requests include [XDC Forum](https://forum.xinfin.org/) and [GitHub Issues](https://github.com/XinFinOrg/XDC-Subnet/issues)

- How do I change the Relayer Wallet/Parentchain Wallet?

  You can [update services configs](./2_configs_explanation.md#updating-services-configs) in common.env to change the Relayer key
