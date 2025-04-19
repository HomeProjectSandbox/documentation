---
sidebar_position: 1
---

Use raspberry pi imager to copy the os image to the sd card. (raspiban os lite)

After first login ->
```
sudo raspi-config -> 1 System Options -> S5 Boot / Auto Login -> B2 Console Autologin

after that ssh to the raspberry pi with ssh username@ip
```

static ip
```
nmcli device status
sudo nmtui
sudo systemctl restart NetworkManager
```
