const current = `
  last_updated_epoch: Int
  last_updated: String
  temp_c: Int
  temp_f: Int
  is_day: Boolean
  condition: Condition
  wind_mph: Int
  wind_kph: Int
  wind_degree: Int
  wind_dir: String
  pressure_mb: String
  pressure_in: String
  precip_mm: Int
  precip_in: Int
  humidity: Int
  cloud: Int
  feelslike_c: Int
  feelslike_f: Int
  windchill_c: Int
  windchill_f: Int
  heatindex_c: Int
  heatindex_f: Int
  dewpoint_c: Int
  dewpoint_f: Int
  vis_km: Int
  vis_miles: Int
  uv: Int
  gust_mph: Int
  gust_kph: Int
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
  snow_cm: Int
  will_it_rain: Boolean
  chance_of_rain: Int
  will_it_snow: Boolean
  chance_of_snow: Int
}

type Day {
  maxtemp_c: Int
  maxtemp_f: Int
  mintemp_c: Int
  mintemp_f: Int
  avgtemp_c: Int
  avgtemp_f: Int
  maxwind_mph: Int
  maxwind_kph: Int
  totalprecip_mm: Int
  totalprecip_in: Int
  totalsnow_cm: Int
  avgvis_km: Int
  avgvis_miles: Int
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
