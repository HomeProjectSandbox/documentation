---
sidebar_position: 1
---
# postgress setup (docker)

```
docker pull postgres:17
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres:17

docker exec -it some-postgres /bin/bash

psql -U postgres


CREATE DATABASE mydb;

\c mydb

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100)
);

\dt

INSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com');

SELECT * FROM users;

\q  #exit psql prompt
```