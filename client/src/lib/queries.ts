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

export const GET_CURRENT = gql`
  query getCurrent($search: String!, $fahrenheit: Boolean!, $imperial: Boolean!) {
    current (search: $search, fahrenheit: $fahrenheit, imperial: $imperial)  {
      temperature
      locationName
      country
      condition {
        icon
        text
      }
    }
  }
`

export const GET_WIND = gql`
  query getWind($search: String!) {
    current (search: $search)  {
      wind_mph
      wind_kph
      wind_degree
      wind_dir
    }
  }
`
