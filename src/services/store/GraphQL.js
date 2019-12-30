import { ApolloClient } from "apollo-boost";

const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/api"
});

export default client;