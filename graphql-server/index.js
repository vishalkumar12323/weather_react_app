import { config } from "dotenv";
import express from "express";
import core from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { _types } from "./graphql/_types.js";

// configure env variables.
config();

const init = async () => {
  const app = express();
  const port = process.env.PORT || 8080;

  const server = new ApolloServer({
    typeDefs: `
        ${_types.typeDefs}
        type Query {
          ${_types.queries}
        }
    `,
    resolvers: {
      Query: {
        ..._types.resolvers.queries,
      },
    },
  });

  await server.start();
  app.use(express.json());
  app.use(core());
  app.use("/get-weather", expressMiddleware(server));

  app.listen(port, () => console.log(`graphql-server running on port:${port}`));
};
init();
