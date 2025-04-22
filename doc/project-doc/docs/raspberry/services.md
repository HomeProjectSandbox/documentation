---
sidebar_position: 4
---

# Services

## Portainer
https://github.com/HomeProjectSandbox/home_services/blob/main/portainer/README.md

## Pihole

Ran as docker container
```
sudo docker run -d --name pihole -p 53:53/tcp -p 53:53/udp -p 80:80/tcp -p 443:443/tcp -e TZ=Europe/Budapest -e FTLCONF_dns_listeningMode=all -v ./etc-pihole:/etc/pihole -v ./etc-dnsmasq.d:/etc/dnsmasq.d --cap-add NET_ADMIN --restart unless-stopped pihole/pihole:latest
```

change password
```
#enter to the container using docker exec -it <container name> bash

pihole setpassword
```

check the ui: `http://<hostIP>/admin`

or: https://github.com/HomeProjectSandbox/home_services/blob/main/pihole/README.md

## Homeassistant
https://github.com/HomeProjectSandbox/home_services/tree/main/homeassitant