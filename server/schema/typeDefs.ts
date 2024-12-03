export const typeDefs = `#graphql

type Location {
  id: ID!
  name: String!
  region: String!
  country: String!
  url: String!
}

type Weather {
  location: Location
}

type Query {
  weather: Weather
}
`;
