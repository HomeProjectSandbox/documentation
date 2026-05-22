# CLAUDE DOCKER RUNPOD

How to setup claude cli with ollama + runpod


Dockerfile
```
FROM ubuntu:latest

WORKDIR /app

RUN apt -y update && apt -y install curl
RUN curl -fsSL https://claude.ai/install.sh | bash

# Add to .bashrc (will be used in interactive sessions)
RUN echo 'export PATH="/root/.local/bin:$PATH"' >> /root/.bashrc

# Set PATH for the container runtime
ENV PATH="/root/.local/bin:$PATH"

CMD ["/bin/bash", "-c", "echo 'Hello World' && sleep infinity"]
```

runpod
```
apt-get update
apt-get install -y zstd
curl -fsSL https://ollama.com/install.sh | sh

export OLLAMA_HOST='0.0.0.0:11434'
ollama serve

ollama pull qwen3.5:27b

```



```
docker build --no-cache -t claude_img .

docker run -d --name claude_cont -v </path/on/host>:/app claude_img

docker exec -it claude_cont /bin/bash
export ANTHROPIC_AUTH_TOKEN=ollama
#export ANTHROPIC_API_KEY=""
#export ANTHROPIC_BASE_URL=<your ollama url>     #accessing service: `https://[POD_ID]-[INTERNAL_PORT].proxy.runpod.net`

#claude --model qwen3.5     #your model name

```
