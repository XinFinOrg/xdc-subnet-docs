---
sidebar_label: "3. Troubleshooting"
sidebar_position: 3
---

# Debug guide (how to know if my subnet is running?)
  ## Common Issues

  1. Subnet node does not boot with error log `Fatal: Error starting protocol stack: listen unix /work/xdcchain/XDC.ipc: bind: invalid argument`

  This is due to the volume mount path being too long. The mounth path is your current directory (also can check with `pwd` command). Please move the `generated` folder to a shorter path and try again.

  2. Docker image startup fails with `SIGKILL` or `Error code: 137` found in logs. (Issue found in Frontend image)

  This error occurs because Docker ran Out Of Memory (OOM). You can increase the memory limit in [Docker settings](https://docs.docker.com/desktop/settings/mac/#:~:text=lower%20the%20number.-,Memory,-.%20By%20default%2C%20Docker)

