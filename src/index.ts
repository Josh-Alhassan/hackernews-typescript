import { ApolloServer } from "apollo-server";
import { schema } from "./schema";

export const server = new ApolloServer({
  schema,
});

const port = 3000;

server
  .listen({ port })
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  })
  .catch((error) => {
    console.error("Error starting server:", error);
    process.exit(1);
  });
// This code sets up an Apollo Server with a GraphQL schema defined in the `schema.ts` file.
// The server listens on port 3000 and logs the URL when it's ready.
