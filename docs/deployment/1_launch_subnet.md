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

  The deployment is docker based, the main deployment file is `docker-compose.yml`. The `docker-compose.env` is the injection point to all configs. Then, ENVs for the services and subnet nodes are in `*.env` files. Other files include `genesis.json` file to initialize subnet chain, `deployment.json` to deploy the checkpoint smartcontract, and `keys.json` the keypairs for subnet nodes + grandmaster node.

## Requirements
  - OS: Linux. Only Linux is supported right now, due to [docker network limitation](https://docs.docker.com/network/drivers/host/#:~:text=The%20host%20networking%20driver%20only%20works%20on%20Linux%20hosts%2C%20and%20is%20not%20supported%20on%20Docker%20Desktop%20for%20Mac%2C%20Docker%20Desktop%20for%20Windows) 
  
  - docker, docker compose V2. For manual installation of docker compose V2 please refer to: https://docs.docker.com/compose/install/linux/
  
## Steps
  1. Create a `docker.env` file with parameters similar to [`docker.env.example`](https://github.com/XinFinOrg/XinFin-Node/blob/master/subnet/deployment-generator/docker.env.example). Detailed parameters explanation [here](https://xinfinorg.github.io/xdc-subnet-docs/deployment/configs_explanation).

  2. Pull latest subnet-generator image
  ```
  docker pull xinfinorg/subnet-generator:latest
  ```
  
  3. Generate configurations, this will create a new `generated` directory
  ```
  docker run --env-file docker.env -v $(pwd)/generated:/app/generated xinfinorg/subnet-generator:latest && cd generated
  ```

  4. follow the generated instructions in `commands.txt` to start Subnet Nodes and [make sure they are mining](https://xinfinorg.github.io/xdc-subnet-docs/deployment/debug_guide#subnet-nodes).

  5. follow the generated instructions in `commands.txt` to deploy the Checkpoint Smart Contract. 
  ```
  docker run                                                           \
    --env-file docker.env                                              \
    -v $(pwd)/generated/deployment.json:/app/generated/deployment.json \
    --entrypoint 'bash' xinfinorg/subnet-generator:latest ./deploy_csc.sh
  ```

  6. follow the generated instructions in `commands.txt` to deploy the Subnet Services (relayer, stats-server, frontend)

  7. Check out the Subnet UI at `<MAIN_IP>:5000`

### Removing Subnet
  1.  Change the commands in `commands.txt` to `docker compose ... down`
  ```
  docker compose --env-file docker-compose.env --profile <profile_name> down 
  ```

  2. Repeat 1. for every docker `--profile` that was started. 

  3. Inside `generated` directory, remove `bootnodes`, `stats-service`, and `xdcchain*` directories
