---
sidebar_position: 1
---

# Opencode setup (macos)

## Install
```
brew install anomalyco/tap/opencode
#or
#curl -fsSL https://opencode.ai/install | bash
```

## Configure
With OpenCode you can use any LLM provider by configuring their API keys.

If you are new to using LLM providers, we recommend using [OpenCode Zen](https://opencode.ai/docs/zen). It’s a curated list of models that have been tested and verified by the OpenCode team.

### Setup opencode zen
Zen works like any other provider in OpenCode. You login to OpenCode Zen and get your API key. It’s completely optional and you don’t need to use it to use OpenCode.

You sign in to OpenCode Zen, add your billing details, and copy your API key.

[opencode zen](https://opencode.ai/auth)

With [go](https://opencode.ai/docs/go/) subscription you can use popular opensource models with generous usage limits.
- GLM-5.1
- Qwen3.5 Plus
- Qwen3.6 Plus
- MiniMax M2.7
- Kimi K2.6
- ...

create api key, then:
```
opencode
/connect # -> zen api key
/models -> visible the opencode go models
```