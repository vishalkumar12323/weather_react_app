import { gql } from "apollo-server-express";

const queries = `
  Weather(location: search): weather
`;

export { queries };
