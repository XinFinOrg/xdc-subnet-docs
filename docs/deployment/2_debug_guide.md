---
sidebar_label: "2. Debug Guide (How to know if my subnet is running?)"
sidebar_position: 2
---

# Debug guide (how to know if my subnet is running?)
  ## Subnet Nodes

  1. Check chainstate with curl, you can change `localhost:8545` to your subnet node's RPC PORT
  
      Call current block api

      ```
      curl --location 'http://localhost:8545' \
      --header 'Content-Type: application/json' \
      --data '{"jsonrpc":"2.0","method":"XDPoS_getV2BlockByNumber","params":["latest"],"id":1}'
      ```

      Check current peers
      
      ```
      curl --location 'http://localhost:8545' \
      --header 'Content-Type: application/json' \
      --data '{"jsonrpc":"2.0","method":"admin_peers","params":[],"id":1}'
      ```

  2. Check chainstate inside docker

      Exec into the subnet container
      
      ```
      docker exec -it <container_name> bash
      ```

      Attach to the API process

      ```
      XDC attach /work/xdcchain/XDC.ipc
      ```

      Call current block api
        
      ```
      XDPoS.getV2Block()
      ```

      Check current peers

      ```
      admin.peers
      ```

  3. Check logs, assuming log level 4 (default 2), you want to look for logs with blockNum, and blockNum should increase with time.
      
      ```
      docker logs -f <container_name> 
      ```



  ## Subnet Services
  1. Bootnode

  Check logs, you should see messages from all subnet nodes
    ```
    docker logs -f <container_name> 
    ```

  2. Relayer 

  Check logs, you should see blocks being periodically submitted
    ```
    docker logs -f <container_name> 
    ```

  3. Stats-server

  Check logs, in `<deployment folder>/stats-service/logs/debug`, you should see block data and history data being received.
  
  4. Frontend

  Check logs or check errors through developer console in web browser.


  ## Common Issues

  1. Subnet node does not boot with error log `Fatal: Error starting protocol stack: listen unix /work/xdcchain/XDC.ipc: bind: invalid argument`

  This is due to the volume mount path being too long. The mounth path is your current directory (also can check with `pwd` command). Please move the `generated` folder to a shorter path and try again.

  2. Docker image startup fails with `SIGKILL` or `Error code: 137` found in logs. (Issue found in Frontend image)

  This error occurs because Docker ran Out Of Memory (OOM). You can increase the memory limit in [Docker settings](https://docs.docker.com/desktop/settings/mac/#:~:text=lower%20the%20number.-,Memory,-.%20By%20default%2C%20Docker)

