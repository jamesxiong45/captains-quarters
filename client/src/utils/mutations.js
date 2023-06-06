import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const CREATE_CAPTAIN = gql`
    mutation createCaptain($name: String, $background: Input, $firstMate: Input, $crewMembers: Input, $createdBy: Input) {
        createCaptain(name: $name, background: Input, firstMate: Input, crewMembers: Input, createdBy: Input) {
            _id
            name
            background
            firstMate
            crewMembers
            createdby
        }
    }
`;

