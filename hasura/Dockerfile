FROM hasura/graphql-engine:v2.1.1.cli-migrations-v3

COPY ./migrations /hasura-migrations
COPY ./metadata /hasura-metadata

CMD graphql-engine \
    --database-url ${HASURA_GRAPHQL_DATABASE_URL} \
    serve \
    --server-port ${HASURA_SERVER_PORT}