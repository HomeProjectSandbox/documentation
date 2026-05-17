# RAG

Creating a simple rag application with langchain (LLM (embedding) running on runpod environment)

ollama embedding models: https://ollama.com/search?c=embedding
- nomic-embed-text-v2-moe [link](https://ollama.com/library/nomic-embed-text-v2-moe)
    - multilingual MoE text embedding model
    - Supports ~100 languages and trained on over 1.6B pairs
    - Maximum Sequence Length: 512 tokens
    - Supported languages: english, hungarian...
    - 1.6B -> can run locally (no gpu)

- qwen3-embedding [link](https://ollama.com/library/qwen3-embedding)
- embeddinggemma [link](https://ollama.com/library/embeddinggemma)
- ...


We will use langchain [OllamaEmbeddings integration](https://docs.langchain.com/oss/python/integrations/embeddings/ollama)

```
ollama pull nomic-embed-text-v2-moe
```

## Indexing
- Load the data [prebuild loaders](https://docs.langchain.com/oss/python/integrations/document_loaders)
    - standard interface for reading data from different sources into langchain document format
    - Implements the [BaseLoader interface](https://reference.langchain.com/python/langchain-core/document_loaders/base/BaseLoader)
        - load() -> loads all doc at once
        - lazy_load() -> Streams documents lazily, useful for large datasets.

    - Example:
```
from langchain_community.document_loaders.csv_loader import CSVLoader

loader = CSVLoader(
    ...  # Integration-specific parameters here
)

# Load all documents
documents = loader.load()

# For large datasets, lazily load documents
for document in loader.lazy_load():
    print(document)
```

- Split: [Text splitters](https://docs.langchain.com/oss/python/integrations/splitters) break large Documents into smaller chunks
    - as large chunks are harder to search over and won’t fit in a model’s finite context window.
    - `uv add langchain-text-splitters`
    - chunk size:
        - Too small → lose context
        - Too big → inefficient + may exceed context
    - chunk_overlap
        - chunk_overlap=200 -> last 200 chars of chunk A appear again in chunk B
        - without that we can lose continuity

- Store: We need somewhere to store and index our splits, so that they can be searched over later. This is often done using a [VectorStore](https://docs.langchain.com/oss/python/integrations/vectorstores) and [Embeddings model](https://docs.langchain.com/oss/python/integrations/embeddings).
    - embed the splits
    - store them to vector store

- Retrieval and generation
    - Retrieve: Given a user input, relevant splits are retrieved from storage using a [Retriever](https://docs.langchain.com/oss/python/integrations/retrievers).
    - Generate: A model produces an answer using a prompt that includes both the question with the retrieved data


Example: https://github.com/HomeProjectSandbox/Ai_staff/tree/main/ollama_examples/example_simple_rag/ollama_simple_rag