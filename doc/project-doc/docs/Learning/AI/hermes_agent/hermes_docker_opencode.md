# Setuo hermes agent with docker

[docker setup](https://hermes-agent.nousresearch.com/docs/user-guide/docker)


setup with raspberry pi
`ssh <user>@raspi-ip` eg 192.168.1.100

create telegram bot.
[setup telegram](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/telegram)



```
mkdir -p ~/.hermes
docker run -it --rm \
  -v ~/.hermes:/opt/data \
  nousresearch/hermes-agent setup
```

```
docker run -d \
  --name hermes \
  --restart unless-stopped \
  -v ~/.hermes:/opt/data \
  -p 8642:8642 \
  nousresearch/hermes-agent gateway run
```
