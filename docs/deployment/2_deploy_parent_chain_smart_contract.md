---
sidebar_label: "2. Deploy Parent Chain Smart Contract"
sidebar_position: 2
---

# Deploy Parent Chain Smart Contract
For now, the user needs to use console to finish all of the operations below. 

## Prerequisite
- Install [TruffleSuite](https://trufflesuite.com/docs/truffle/how-to/install/)
- Install [Git](https://git-scm.com/)
- An XDC account that has over 0.00125 xdc token.

## Generate the smart contract
```
# Clone contract repo

git clone https://github.com/XinFinOrg/XDC-Subnet.git
cd XDC-Subnet
git checkout mainnet_contract

# Compile contracts in the contracts folder and this automatically generates those json files in ./build/contracts

truffle compile

# Test contract functionality in local test network with test scripts written under ./test

truffle test
```

## Upload it to the parent chain
There are three files required for launching the contract.
1. `config.py`
    * `NODE_RPC`: Targeted XDC devnet, testnet or mainnet node RPC link
    * `DEPLOY_INIT_JSON`: Arguments to be provided into contract constructor
    * `SUBNET_CONTRACT_JSON`: Path to compiled Subnet JSON file 
    * `HEADER_CONTRACT_JSON`: Path to compiled HeaderReader JSON file
2. `DEPLOY_INIT_JSON`:
    * `genesis_header_encoded`: RLP encoded Genesis XDC block bytes in hexstring format
    * `block1_header_encoded`: RLP encoded XDC first block bytes in hexstring format
    * `validators`: List of initial validator addresses
    * `threshold`: The number of validator signatures to pass block verification
3. Create a `.env` file which contain a valid account privatekey

```
# Create and Activate python virtual env

python3 -m venv xdc
source xdc/bin/activate

# Git clone the modified web3

git clone https://github.com/span14/web3.py.git
cd web3.py
git fetch 
git checkout v5

# Install modified web3

python setup.py install

# Back to parent folder and run
cd ..
python contract_deployment.py
```

## Verify the deployment
In the console, if the deployment is correct, there should be no error report and there will be a file `address.txt` generated that stores the deployed smart address address. 