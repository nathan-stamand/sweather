import { location } from "../tests/location.ts"
import locations from "../tests/locations.ts"

const weather = {
  location: location,
}

export const resolvers = {
  Query: {
    weather: () => weather,
    locations: (parent, args, contextValue, info) => {
      return locations;
    },
  }
}
