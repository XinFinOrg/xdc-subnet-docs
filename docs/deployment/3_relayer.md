---
sidebar_label: "3. Deploy the Relayer"
sidebar_position: 4
---

# Run the Relayer
**There are some prerequisite when running relayer**
* Docker: make sure you have the latest docker installed, for more details, refer to: https://www.docker.com/ for the installation guideline
## Set Environment variables
Create a .env file containing all the env variables you want to set.
1. `SUBNET_URL` : This is the URL to your subnet with RPC port specified. e.g http://66.94.121.151:8545
2. `MAINNET_URL` : This is the XDC mainnet URL with RPC port specified.
3. `SC_ADDRESS` : This is the smart contract address for this subnet that has been uploaded in the mainnet.
4. `MAINNET_WALLET_PK` : This is the wallet key that will be used for submit subnet data into mainnet. You will need to have credits in it first.
5. `SLACK_WEBHOOK` : (Optional) If relayer detected forking of your subnet, this is the URL where we will push alerting message to. You are required to set up slack bot and install it in the relevant channel first. For details, see slack doc: https://api.slack.com/messaging/webhooks \n
Once you are done with the slack setup, find the slack webhook url and put it here. It shall look like `https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX`
6. `PORT` -> (Optional) Port where the server will be started on. default to 3000 if not set

## Start the relayer!
1. Pull the image from docker hub by running `docker pull xinfinorg/relayer:latest` (This registry is working in progress)
2. Run the cli command to start the service: `docker run -d --env-file .env xinfinorg/relayer`

You are all set!