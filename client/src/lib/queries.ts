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

export const GET_CONDITION = gql`
  query getCondition($search: String!) {
    current (search: $search)  {
      condition {
        text
        icon
      }
    }
  }
`

export const GET_LOCATION = gql`
  query getLocation($search: String!) {
    current (search: $search)  {
      locationName
      country
    }
  }
`

export const GET_TEMP = gql`
  query getTemp($search: String!) {
    current (search: $search)  {
      temp_f
      temp_c
      feelslike_f
      feelslike_c
    }
  }
`
