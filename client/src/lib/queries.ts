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
  query getCurrent($search: String!) {
    current (search: $search)  {
      temperature
      condition {
        icon
        text
      }
    }
  }
`
