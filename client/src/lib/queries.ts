import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query getLocations($search: String!) {
    locations (search: $search) {
      id
      name
      region 
      country
      url
    }
  }
`

export const GET_WEATHER = gql`
  query getWeather($search: String!, $fahrenheit: Boolean!, $imperial: Boolean!) {
    weather (search: $search, fahrenheit: $fahrenheit, imperial: $imperial) {
      current {
        temperature
        condition {
          icon
          text
        }
      }
    }
  }
`
