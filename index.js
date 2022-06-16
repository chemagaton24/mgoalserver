const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");

const PORT = process.env.port || 4000

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen({port: PORT}).then(({ url }) => {
    console.log(`Now running on ${url}`);
});