---
sidebar_position: 3
---

Deploy portainer (CE- community edition) as docker continer

[link](https://docs.portainer.io/start/install-ce/server/docker)

```
docker volume create portainer_data

docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:lts
```

Login: https://localhost:9443