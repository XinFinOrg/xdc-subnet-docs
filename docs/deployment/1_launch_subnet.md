---
sidebar_label: "1. Launch a Subnet"
sidebar_position: 1
---

# Launch a Subnet

## Overview
  For the convenience of deploying Subnet, we have provided the Subnet Deployment Generator. The Subnet Deployment Generator is configuration generator for all components of subnet deployment. It generates all the necessary files and configs from a simple initial docker.env file. The required parameters are 

    1. How many machines will you use to deploy subnet?
    2. How many subnet nodes will you deploy in total?
    3. IP address of the main machine
    4. Parentchain wallet with funds

  In this setup the main machine (machine1) will host all the subnet services(relayer, stats, frontend) while the subnet miner nodes will be spread out among all machines.
  
  The IP address of the main machine is needed for subnet connectivity, this is the IP that is known to all other machines, could be private or public (preferrably private)

  Once generated, the commands to startup the subnet is also provided as a generated `commands.txt` file.

  The deployment is docker based, the main deployment file is `docker-compose.yml`. The `docker-compose.env` is the injection point to all configs. Then, ENVs for the services and subnet nodes are in `*.env` files. Other files include `genesis.json` file to initialize subnet chain, `deployment.json` to deploy the checkpoint smartcontract, and `keys.json` the keypairs for subnet nodes + grandmaster node. Again, these files will be generated by the Subnet Deployment Generator (SDG).

## Requirements
  - OS: Linux. Only Linux is supported for full deployment. 

  - OS: Mac is only supported for single machine testing environment. Specify MacOS with 'OS=mac' in 'docker.env' file. Please also refer [common issues](./2_debug_guide.md#common-issues).
  
  - docker, docker compose V2. For manual installation of docker compose V2 please refer to: https://docs.docker.com/compose/install/linux/
  
## Steps
  1. Create a `docker.env` file with parameters similar to [`docker.env.example`](https://github.com/XinFinOrg/XinFin-Node/blob/master/subnet/deployment-generator/script/docker.env.example). Detailed parameters explanation [here](./3_configs_explanation.md).

  2. Pull the `generator.sh` script from the generator Github repo
  ```
  curl -O https://raw.githubusercontent.com/XinFinOrg/XinFin-Node/master/subnet/deployment-generator/script/generate.sh
  ```
  
  3. Generate configurations, this will create a new `generated` directory
  ```
  chmod +x generate.sh
  ./generate.sh
  cd generated
  ```

  4. follow the generated instructions in `commands.txt` to start Subnet Nodes and [make sure they are mining](./2_debug_guide.md#subnet-nodes).

  5. follow the generated instructions in `commands.txt` to deploy the upgradable Checkpoint Smart Contract(CSC). If CSC deployment was successful, you should see CSC addresses in `common.env`, the added ENVs include `PROXY_GATEWAY`, `FULL_CSC`, `LITE_CSC`, `CHECKPOINT_CONTRACT`.

  6. follow the generated instructions in `commands.txt` to start the Subnet Services (relayer, stats-server, frontend)

  7. Check out the Subnet UI at `<MAIN_IP>:5000`

### Removing Subnet
  1.  Change the commands in `commands.txt` to `docker compose ... down`
  ```
  docker compose --env-file docker-compose.env --profile <profile_name> down 
  ```

  2. Repeat 1. for every docker `--profile` that was started. 

  3. Inside `generated` directory, remove `bootnodes`, `stats-service`, and `xdcchain*` directories
