import { location } from "../tests/location.ts"

const weather = {
  location: location,
}

export const resolvers = {
  Query: {
    weather: () => weather,
    locations: async (_, { search }, { dataSources }) => {
      return dataSources.weatherAPI.getLocations(search);
    },
  }
}
