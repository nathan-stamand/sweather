import { location } from "../tests/location.ts"

export const resolvers = {
  Query: {
    weather: async (_, { search }, { dataSources }) => {
      return dataSources.weatherAPI.getWeather(search);
    },
    locations: async (_, { search }, { dataSources }) => {
      return dataSources.weatherAPI.getLocations(search);
    },
  }
}
