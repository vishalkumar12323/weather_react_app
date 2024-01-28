import { gql } from "@apollo/client";

const GET_DATA = gql`
  query Weather($location: search) {
    Weather(location: $location) {
      temp: Float
      temp_max: Float
      temp_min: Float
      humidity: Int
      feels_like: Float
      pressure: Int
      visibility: Int
      dt: Int
      timezone: Int
      name: String
      country: String
      sunrise: Int
      sunset: Int
      details: String
      icon: String
      speed: Float
    }
  }
`;

export { GET_DATA };
