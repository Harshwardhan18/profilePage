import gql from 'graphql-tag'

const GET_OPPORTUNITIES = gql`query getOpportunities{
  allOpportunity(only:"") {
    data {
      id
      title
      duration
      earliest_start_date
      cover_photo
    }
  }
}`

const GET_OPPORTUNITY = gql`
query opportunity($id: ID) {
	getOpportunity(id: $id) {
    applications_close_date
    available_openings
    title
    backgrounds{
      constant_name
    }
    organisation {
      name
    }
    city {
      city_details
    }
    cover_photo
    duration
    description
    earliest_start_date
    latest_end_date
    role_info {
      learning_points_list
    }
    study_levels {
      name
    }
    nationalities {
      constant {
        name
      }
      constant_name
    }
    selection_processes {
      edges {
        node {
          title
          no_of_days
        }
      }
    }
    languages {
      constant_name
    }
    skills {
      constant_name
    }
    specifics_info {
      salary
      salary_currency {
        alphabetic_code
      }
    }
  }
}`

export default {
  GET_OPPORTUNITIES,
  GET_OPPORTUNITY
}
