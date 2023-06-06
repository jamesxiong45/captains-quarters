import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query users {
        users {
            _id
            username
            captains {
                _id
                name
            }
        }
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            captains {
                _id
                name
            }
        }
    }
`;

export const QUERY_CAPTAINS = gql`
    query captains {
        captains {
            _id
            name
        }
    }
`;

export const QUERY_SINGLE_CAPTAIN = gql`
    query captain($captainId: ID!) {
        captain(captainId: $captainId) {
            _id
            name
            background {
                name
                stats
                corePowers
            }
            firstMate {
                name
                background
            }
            crewMembers {
                name
                background
            }
        }
    }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      captains {
        _id
        name
      }
    }
  }
`;