import { gql } from "apollo-server-express";

const typeDefs = `
  type Message {
    id: String
    name: String
    message: String
  }
  type Weather {
    
  }
`;
export { typeDefs };
