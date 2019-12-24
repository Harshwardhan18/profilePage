import gql from "graphql-tag";

const GET_OPPORTUNITIES = gql`
  query getOpportunities($filter: OpportunityFilter) {
    allOpportunity(filters: $filter) {
      data {
        id
        title
        duration
        earliest_start_date
        cover_photo
      }
    }
  }
`;

const GET_OPPORTUNITY = gql`
  query opportunity($id: ID) {
    getOpportunity(id: $id) {
      applications_close_date
      available_openings
      title
      backgrounds {
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
  }
`;
const GET_BACKGROUNDS = gql`
  query {
    backgrounds: allConstants(type_id: "background") {
      id
      name
    }
  }
`;
const GET_SKILLS = gql`
  query {
    skills: allConstants(type_id: "skill") {
      id
      name
    }
  }
`;

const GET_LANGUAGES = gql`query {
      languages: allConstants(type_id:"language"){
        id
          name
      }
      }`;

const GET_COUNTRIES = gql`query {
        countries: allConstants(type_id:"country"){
          id
          name
        }
        }`;

export default {
  GET_OPPORTUNITIES,
  GET_OPPORTUNITY,
  GET_SKILLS,
  GET_LANGUAGES,
  GET_COUNTRIES,
  GET_BACKGROUNDS
};
