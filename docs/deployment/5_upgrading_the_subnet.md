---
sidebar_label: "5. Upgrading the Subnet"
sidebar_position: 5
---

# Upgrading the Subnet
## Upgrading the Checkpoing Smart Contract (CSC)
The CSC is deployed as an upgradable smart contract. For further reading please check [XDC-CSC](https://github.com/XinFinOrg/XDC-CSC). Upgrading can only be done by the original wallet that deployed the CSC. Under `generated` directory, specify the private key in `common.env` with the ENV `PARENTNET_WALLET_PK`. Then run the following command, specify the CSC version to upgrade with `<CSC_VERSION>` as a docker tag. 
  ```
  docker run --env-file common.env   \
    -v $(pwd)/../generated/:/app/config       \
    --network host                             \
    --entrypoint './docker/deploy_proxy.sh' xinfinorg/csc:<CSC_VERSION>
  ```

If the CSC upgrade keeps failing, it could be due to these 2 common reasons:
1. The wallet is out of funds.
2. The wallet is being used somewhere else causing a transaction clash, eg. the Relayer is using the same wallet.

<!-- ## Create a Subnet backup
1. Shutdown the subnet
```
```
2. Make a copy of `xdcchain` directory
```
``` -->
## Upgrading Subnet deployment
1. Go to `docker-compose.yml` under `generated` directory. 
2. Change the docker image tag of your desired component(s).
3. Run:
```
  docker compose --env-file docker-compose.env --profile machine1 up -d
  docker compose --env-file docker-compose.env --profile services up -d
```

Using `latest` tag is not recommended since not all components version are not guaranteed to be compatible.