import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query getLocations($search: String!) {
    locations (search: $search) {
      name
      region 
      country
      url
    }
  }
`

export const GET_WEATHER = gql`
  query Query {
    weather {
      location {
        name
      }
    }
  }
`
