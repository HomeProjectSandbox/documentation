# How to create rag from docusaurus docs

Basic implementation to create rag chat bot from docusaurus documents. Currently only the text is embedded (in the future we can generate text from the pictures with simple llm call and we can embedded that as well).

## Creating the project
[project](https://github.com/ujvaritamas/docusaurus_rag)

```
uv init docusaurus_rag
```


## Convert docs and store them to vectordb

- Walk docs/, notes/, lists/, posts/ directories
- parse each md, mdx file
  - store the content + reference to the filepath + metadata
- chunking 
  - https://docs.langchain.com/oss/python/integrations/splitters/markdown_header_metadata_splitter
```
uv add langchain-text-splitters

@dataclass
class ParsedFile:
    content: str
    path: str
    metadata: dict
    docs: list[documents.Document]

    def split(self):
        headers_to_split_on = [
            ("#", "Header 1"),
            ("##", "Header 2"),
            ("###", "Header 3"),
        ]
        markdown_splitter = MarkdownHeaderTextSplitter(headers_to_split_on)

        self.docs = markdown_splitter.split_text(self.content)
```
- after the text chunked/splitted to documents - need to embedd
  - Generate embeddings via Ollama 
    - have different embedding models (https://ollama.com/search?c=embedding)
      - select based on the model context window (chunks need to fit), based on your hardware
        - currently i am working on an old laptop (8Gb memory, old  intel i7-6500U cpu)
      - -> `embeddinggemma:300m`
```
ollama pull embeddinggemma:300m
ollama list
ollama serve

uv add langchain-ollama
```
  - use [chroma vectorstore](https://docs.langchain.com/oss/python/integrations/vectorstores/chroma)
```
uv add "langchain-chroma>=0.1.2"
```