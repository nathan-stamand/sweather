const current = `
  temperature: Float
  last_updated_epoch: Float
  last_updated: String
  temp_c: Float
  temp_f: Float
  is_day: Boolean
  condition: Condition
  wind_mph: Float
  wind_kph: Float
  wind_degree: Int
  wind_dir: String
  pressure_mb: String
  pressure_in: String
  precip_mm: Int
  precip_in: Float
  humidity: Int
  cloud: Int
  feelslike_c: Float
  feelslike_f: Float
  windchill_c: Float
  windchill_f: Float
  heatindex_c: Int
  heatindex_f: Int
  dewpoint_c: Int
  dewpoint_f: Int
  vis_km: Float
  vis_miles: Float
  uv: Int
  gust_mph: Float
  gust_kph: Float
`
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
  ${current}
}

type Forecast {
  forecastday: [ForecastDay]
}

type Hour {
  ${current}
  snow_cm: Float
  will_it_rain: Boolean
  chance_of_rain: Int
  will_it_snow: Boolean
  chance_of_snow: Int
}

type Day {
  maxtemp_c: Float
  maxtemp_f: Float
  mintemp_c: Float
  mintemp_f: Float
  avgtemp_c: Float
  avgtemp_f: Float
  maxwind_mph: Float
  maxwind_kph: Float
  totalprecip_mm: Int
  totalprecip_in: Float
  totalsnow_cm: Int
  avgvis_km: Float
  avgvis_miles: Float
  avghumidity: Int
  daily_will_it_rain: Boolean
  daily_chance_of_rain: Boolean
  daily_will_it_snow: Boolean
  daily_chance_of_snow: Boolean
  condition: Condition
  uv: Int
  hour: [Hour]
}

type ForecastDay {
  date: String
  date_epoch: Int
  day: Day
}

type Weather {
  location: Location
  current: Current
  forecast: Forecast
}

type Query {
  weather(search: String!): Weather
  locations(search: String!): [Location]
}
`
