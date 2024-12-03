import { location } from "../tests/location.ts"

const weather = {
  location: location,
}

export const resolvers = {
  Query: {
    weather: () => weather,
  }
}
