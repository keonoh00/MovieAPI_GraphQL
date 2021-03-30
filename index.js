import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolver.js";

// schema.graphql --> this is declaring what you will return to the user
// query defines what is required and type of returning element

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});

server.start(() => console.log("GraphQL Server Running"));