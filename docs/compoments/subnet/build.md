---
sidebar_position: 2
---

# Building a Subnet
This is a guide for building your own XDC subnet with a bootnode, several master nodes, and customized genesis file.

## Build
1. Visit [https://github.com/XinFinOrg/XDC-Subnet/](https://github.com/XinFinOrg/XDC-Subnet/) and clone the code, or use the following command
```
git clone https://github.com/XinFinOrg/XDC-Subnet.git
```

1. In the cloned directory, build three tools: `XDC`, `bootnode`, and `puppeth` by running `make XDC`, `make bootnode`, and `make puppeth`. The tools will be placed inside directory `./build/bin`.

## Configuration
1. Run `./build/bin/puppeth` and follow its instructions, specifically
    1. when seeing "Please specify a network name to administer", enter the network name as you wish. e.g., network001.
    2. when seeing "What would you like to do?", choose "2. Configure new genesis".
    3. when seeing "Which consensus engine to use?", choose "3. XDPoS - delegated-proof-of-stake".
    4. as for other options, choose the options as you wish.
    5. after the last step which is "Specify your chain/network ID if you want an explicit one", your genesis file is generated in your home directory and you can push "Ctrl-C" to exit `puppeth`.
2. Copy the genesis file from your home directory to your working directory. The genesis file is located at `$HOME/.puppeth/network001` where `$HOME` is your home directory and `network001` is your network name. This is a json file and you can rename it to `network001.json`.

## Start the Subnet
We provide you two options: 
### Local setup
Follow the instruction in this repo [https://github.com/XinFinOrg/Local_DPoS_Setup](https://github.com/XinFinOrg/Local_DPoS_Setup) to start the subnet in your local environment.
### Private network
Follow the instruction in  [the ethereum repo](https://github.com/ethereum/go-ethereum#operating-a-private-network) (section Operating a private network
) to start your private subnet.
