---
sidebar_label: "4. Launch Stats UI"
sidebar_position: 5
---

# Launch your subnet stats UI
** NOTE: This is still working in progress**

### Step 0: Set up environment
1. Vist [https://github.com/XinFinOrg/XinFin-Node](https://github.com/XinFinOrg/XinFin-Node) and clone the code. i.e `git clone https://github.com/XinFinOrg/XinFin-Node`
2. Check the `subnet` directory. i.e `cd subnet`
3. Create empty environment files by running `./start.sh` (You may need admin permission to create file, run with `sudo bash ./start.sh`)

### Step 1: Host your stats service (Working In Progress)
1. Find the file with name of `.env.stats`
2. Fill in the environment variables in the `.env.stats`:
  - STATS_SECRET: A secret that you used between your stats service and the subnet node. 
3. Run `docker-compose up -d stats`
4. Open browser and access the stats server, verify correct information are being displayed