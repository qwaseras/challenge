FROM hasura/graphql-engine:v2.1.1

RUN mkdir -p /hasura

CMD graphql-engine \
    --database-url ${HASURA_GRAPHQL_DATABASE_URL} \
    serve \
    --server-port ${PORT}