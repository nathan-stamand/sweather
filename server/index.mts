import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const port = 8000;

const typeDefs = `#graphql
type Forecast {
  location: String
  current: String 
  forecast: String
}

type Query {
  forecast: Forecast
}
`;

const forecast = {
  location: 'this is the location data',
  current: "this is the current day's data",
  forecast: 'this is the forecast data',
}

const resolvers = {
  Query: {
    forecast: () => forecast,
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port }
});

console.log(`Server running at ${url}`)

export default {}
