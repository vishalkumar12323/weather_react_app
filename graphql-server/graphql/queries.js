import { gql } from "apollo-server-express";

const queries = `
  getWeather(city: String!): [Weather]
`;
export { queries };
