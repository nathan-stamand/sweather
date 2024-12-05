export const typeDefs = `#graphql

type Location {
  id: ID!
  name: String!
  region: String!
  country: String!
  url: String!
}

type Condition {
  text: String
  icon: String
  code: Int
}

type Current {
  id: ID!
  temperature: Float
  locationName: String
  country: String
  # last_updated_epoch: Float
  # last_updated: String
  temp_c: Float
  temp_f: Float
  # is_day: Boolean
  condition: Condition
  wind_mph: String
  wind_kph: String
  wind_degree: Int
  wind_dir: String
  # pressure_mb: String
  # pressure_in: String
  # precip_mm: Int
  # precip_in: Float
  # humidity: Int
  # cloud: Int
  feelslike_c: Float
  feelslike_f: Float
  # windchill_c: Float
  # windchill_f: Float
  # heatindex_c: Int
  # heatindex_f: Int
  # dewpoint_c: Int
  # dewpoint_f: Int
  # vis_km: Float
  # vis_miles: Float
  # uv: Int
  # gust_mph: Float
  # gust_kph: Float
}

type Query {
  current(search: String!, fahrenheit: Boolean, imperial: Boolean): Current
  condition(search: String!): Current
  temperature(search: String!): Current
  wind(search: String!): Current
  location(search: String!): Current 
  locations(search: String!): [Location]
}
`
