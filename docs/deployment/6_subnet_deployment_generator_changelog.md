---
sidebar_label: "Subnet Deployment Generator Changelog"
sidebar_position: 6
---

# Subnet Deployment Generator Changelog

### v0.2.1 - 2024/01/09
  - New generation style, pulls script from github to run multiple docker images instead of generating from single image.
  - New Checkpoint Smart Contract (CSC) deployment image
  - Supports upgradable CSC
  - Bump components versions
  - Fix bugs
  - Code refactor, optimization
### v0.1.6
  - Bump relayer version to support gas fee changes
### v0.1.5
  - Added OS=mac option in 'docker.env'. This option is intended for single machine testing environment only.
### v0.1.4
  - Added custom keys functionality
    'docker.env' now accepts GRANDMASTER_PK and SUBNETS_PK. Where SUBNETS_PK can have multiple keys separated by a comma ','. Number of subnet keys must equal NUM_SUBNET. Keys are randomized if not provided.
  - Added RELAYER_MODE in 'docker.env', CSC deployment will select from 'full' or 'lite' smart contract, default 'full'.
  - Automate CHECKPOINT_CONTRACT copy-paste step (manual action no longer required).
  - PARENTCHAIN_WALLET is no longer required in 'docker.env', the address will be derived from PARENTCHAIN_WALLET_PK. 
  - Disabled parentchain observer in docker-compose.yml, unused for now (due to long startup time).
  - Bump default subnet components stable versions