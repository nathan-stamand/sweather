export const resolvers = {
  Query: {
    current: async (_, { search, fahrenheit, imperial }, { dataSources }) => {
      return dataSources.weatherAPI.getCurrent(search, fahrenheit, imperial);
    },
    wind: async (_, { search }, { dataSources }) => {
      return dataSources.weatherAPI.getCurrent(search);
    },
    locations: async (_, { search }, { dataSources }) => {
      return dataSources.weatherAPI.getLocations(search);
    },
  }
}
