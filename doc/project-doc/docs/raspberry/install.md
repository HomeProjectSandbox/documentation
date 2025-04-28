---
sidebar_position: 1
---

# Installaiton
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


### Change wifi network
ssh to the node ssh <user>@ip

disable wireless connection (use cable)
`sudo ip link set wlan0 down`

Get mac address
`ifconfig eth0 | grep "broadcast\|ether" | awk '{print toupper($2)}'`

Configure the router -> set static ip
TPLINK setting: http://192.168.0.1
IP MAC Binding ->  <num-num-num...> ip