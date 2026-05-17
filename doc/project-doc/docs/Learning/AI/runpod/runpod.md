---
sidebar_position: 1
---

# RUNPOD

[runpod](https://www.runpod.io/)  -  [documentation](https://docs.runpod.io/overview)
- add creadits (account -> billing)
- create api key (Settings -> api keys) (store it as env variable)
(store it as env variable in the bashrc or zshrc 
`export RUNPOD_API_KEY="your-secret-key"`)


## RUNPODCLI
[doc](https://docs.runpod.io/runpodctl/overview)

- [installation](https://docs.runpod.io/runpodctl/overview#macos)
- configure api key (`runpodctl doctor`) -> config saved to file: `$HOME/.runpod/config.toml`
- `runpodctl config --apiKey $RUNPOD_API_KEY`

```
runpodctl ssh info
cat $HOME/.runpod/ssh/runpodctl-ssh-key.pub

runpodctl pod list
runpodctl ssh info <pod_id>
->"in_account": true


SSH over exposed TCP
ssh over exposed tcp with <your key>

```


Pod template config:
https://docs.runpod.io/pods/configuration/expose-ports
ports http: 8888,11434,8080,9090
tcp port: 22
configure container and volume disk

[example langchain](https://github.com/HomeProjectSandbox/Ai_staff/tree/main/runpod/example0/example)

accessing service: `https://[POD_ID]-[INTERNAL_PORT].proxy.runpod.net`


install ollama
```
apt-get update
apt-get install -y zstd
curl -fsSL https://ollama.com/install.sh | sh

export OLLAMA_HOST='0.0.0.0:11434'
ollama serve
```


## Setting up claude code
https://www.youtube.com/watch?v=N7CQdYaeUEE

https://docs.ollama.com/integrations/claude-code

```
ollama pull qwen3.5:27b
curl -fsSL https://claude.ai/install.sh | bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc && source ~/.bashrc
ollama launch claude --model qwen3.5


ollama launch claude
```


```
export ANTHROPIC_AUTH_TOKEN=ollama
export ANTHROPIC_API_KEY=""
export ANTHROPIC_BASE_URL=<your ollama url>     #accessing service: `https://[POD_ID]-[INTERNAL_PORT].proxy.runpod.net`

claude --model qwen3.5
```
