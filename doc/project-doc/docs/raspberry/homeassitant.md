---
sidebar_position: 5
---
# Homeassistant setup

## Setup gosound smartplug
- Insert the Gosund smart plug into the socket you want to use.
- Scan the QR code on the Gosund box.
- Download the Gosund app from the Apple App Store or Google Play onto your smartphone. (tuya smart)
- Open the Gosund app and sign up with your email address.
- In the app, select Add Device.
- On the next screen, select Add Manually and tap Socket (Wi-Fi).

## Home assistant setup
install hacs
```
Go inside the container with docker exec -it <name of the container running homeassistant> bash

wget -O - https://get.hacs.xyz | bash -
Restart Home Assistant.
```

- In Home Assistant, go to Settings > Devices & services.
- In the bottom right corner, select + Add integration.
- Search for HACS and select it.
- with hacs add local tuya integration (reboot needed)

Local tuya setup
- Do not configure cloud api account
- configure -> add new device (host is the IP , device id from tuya app, name can be anythin, Local key: )
- Local key 
  - npm i @tuyapi/cli -g
  - tuya-cli help
  - tuya-cli wizard
- set static ip to the smartplug...

settings -> devices and services -> integrations - add integration - tuya