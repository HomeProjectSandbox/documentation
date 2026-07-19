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
```