import { gql } from "@apollo/client";

export const LOGIN_EMPLOYEE_MUTATION = gql`
  mutation Mutation($input: LoginEmployee) {
    loginEmployee(input: $input) {
      token
    }
  }
`;
