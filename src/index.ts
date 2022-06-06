import { ApolloServer, gql } from 'apollo-server';

// 1 - Query
const typeDefs = gql`

    type Query {
        info: String!
    }
`;

// 2 - Resolvers
const resolvers = {
    Query: {
        info: () => 'Hello world'
    }
};

// 3- Server
const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen()
    .then(({ url }) => {
    console.log(`Server ready at ${url}`);
});