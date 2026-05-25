# How to connect opencode zen to langchain

[doc](https://opencode.ai/docs/go/)


```
conf = load_dotenv()

ZEN_URL="https://opencode.ai/zen/go/v1"         #https://opencode.ai/docs/go/
zen_api_key = os.environ.get('ZEN_API_KEY')

llm = ChatOpenAI(
    model="deepseek-v4-flash",      #zen go model
    base_url=ZEN_URL,
    api_key=zen_api_key
)
```

Example: https://github.com/HomeProjectSandbox/Ai_staff/tree/main/opencode_zen/example_0_go/example