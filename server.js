var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");
const fs = require("fs");
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
type Tail {
    id: Int
    title: String
    description: String
}

type Query {
    full_tails: [Tail]
    full_tail(id: Int): Tail
}

schema {
    query: Query
}`);

var root = {
  full_tail: ({ id }) => {
    const file = fs.readFileSync("./data.json", "utf8");
    const parsedTails = JSON.parse(file);
    return parsedTails.find((tail) => tail.id === id);
  },
};

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
