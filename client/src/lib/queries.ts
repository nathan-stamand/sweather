import { gql } from "@apollo/client";

export const GET_WEATHER = gql`
  query Query {
    weather {
      location {
        name
      }
    }
  }
`
