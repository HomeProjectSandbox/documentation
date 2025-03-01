FROM ubuntu:latest

WORKDIR /app

COPY . .

RUN apt update && apt install -y nodejs && apt install -y npm
RUN npm i -g npx

#MD ["sleep", "3600"]
CMD ["sh", "-c", "make build_doc "]