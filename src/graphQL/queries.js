import gql from 'graphql-tag'

const GET_OPPORTUNITIES = gql`query getOpportunities{
  allOpportunity(only:"") {
    data {
      id
      title
      duration
      earliest_start_date
    }
  }
}`

export default {
  GET_OPPORTUNITIES
}
