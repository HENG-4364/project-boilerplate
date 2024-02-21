import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query EmployeeMe {
    employeeMe {
      id
      profile
      userName
      firstname
      lastname
      gender
      tel
      email
      address
      country
      created_at
      updated_at
    }
  }
`;