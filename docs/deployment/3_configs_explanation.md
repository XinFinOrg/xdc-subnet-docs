---
sidebar_label: "3. Deployment and Configs Explanation"
sidebar_position: 3
---

# Configs Explanation

## The kickstart file 'docker.env'
  docker.env is the basefile which kickstarts all configs generation
  
  ### Required Parameters
  Below is an example of the mimimum file required for configs generation.
  ```
  #deployment config
  CONFIG_PATH=~/XinFin-Node/subnet/deployment-generator

  #subnet config
  NETWORK_NAME=testsubnet
  NUM_SUBNET=5
  NUM_MACHINE=3
  MAIN_IP=192.168.1.1

  #parentchain config
  PARENTCHAIN=devnet
  PARENTCHAIN_WALLET=0x0000000000000000000000000000000000000000
  PARENTCHAIN_WALLET_PK=0x0000000000000000000000000000000000000000000000000000000000000000
  ```
  1. CONFIG_PATH - This is the path to the directory where you want to put the generated configs. Most likely it is your current directory.

  2. NETWORK_NAME - Your subnet Name

  3. NUM_SUBNET - The total number of subnet nodes you want to deploy.

  4. NUM_MACHINE - The number of machines that you want to deploy the subnet across. The generated configs will evenly spread the nodes across the machines.

  5. MAIN_IP - The IP address of the main machine(machine1) which will host subnet services and the bootnode. This IP should be known to all other machines, could be private or public (preferrably private).

  6. PARENTCHAIN - The Parentchain where the Checkpoint Smart Contract (CSC) will be deployed and where relayer will push block headers. Available: 'devnet', 'testnet', 'mainnet'. (Currently only 'devnet' is supported)

  7. PARENTCHAIN_WALLET_PK - The private key of Parentchain wallet

  ### Optional Parameters

  #### Versions Config

  By default, generated configs will use the current stable version which is hard coded in the generator (not latest). To customize version the specific component version parameter can be included. Set the value to the docker image version tag you want (eg. VERSION_SUBNET=v0.1.3, VERSION_RELAYER=latest). Brose [XDC dockerhub](https://hub.docker.com/u/xinfinorg) to check the available docker images. Below are the available parameters for versioning.

  ```
  VERSION_SUBNET
  VERSION_BOOTNODE
  VERSION_OBSERVER
  VERSION_RELAYER
  VERSION_STATS
  VERSION_FRONTEND
  ```

  #### Other Configs
  - RELAYER_MODE - 'full' or 'lite', this effects the type of Checkpoint Smart Contract(CSC) that is deployed. Defaults to 'full'. Please check [here](#WIP) for relayer mode documentation. 
  - GRANDMASTER_PK - The Grandmaster privatekey, only one is allowed. Random if not provided.
  - SUBNETS_PK - Subnet nodes' privatekeys, multiple keys separated by comma(,). Number of keys must equal NUM_SUBNET. Randomized by default. 
  - NETWORK_ID - If you want a specific number, must be between 1-65536. Default is random.
  - SERVICES_SECRET - A shared secret for authentication between the stats service and the subnet nodes. Default to a random string.
  - SLEEP - Debug parameter, set a timer(in seconds) to prevent the generator docker image from shutting down after generation finished. 
  

## Files under 'generated' directory 
After the generator has succesfully run, all generated files will be under 'generated' directory. These files can be edited if you would like to further customize your subnet. Below is a description of each generated file and how it is used.

- commands.txt - The generated instructions to launch the subnet.
- docker-compose.yml - The main deployment file. Includes docker images versions, startup commands, network configurations.
- docker-compose.env - The config injection path that docker uses to point to other *.env files.
- genesis.json - The 'block 0' of the Subnet. Initializes the blockchain for subnet nodes.
- genesis_input.yml - An intermediate file used in config generation.
- deployment.config.json - The config file used for CSC deployment.
- keys.json - Generated keypairs or custom keypairs by user input. Please be mindful to remove this file and keep the credentials securely.
- common.env - The config parameters for Subnet services.
- subnet*.env - The config parameters for each Subnet node.