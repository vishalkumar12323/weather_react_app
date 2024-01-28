import { gql } from "apollo-server-express";

const typeDefs = `
  input search {
    q: String
    lat: Float
    lon: Float
    units: String
  }
  type main {
    temp: Float
    feels_like: Float
    temp_min: Float
    temp_max: Float
    pressure: Int
    humidity: Int
  }
  type Details {
    main: String
    icon: String
  }
  type wind {
    speed: Float
  }
  type system {
    country: String
    sunrise: Int
    sunset: Int
  }

  type weather {
    name: String
    visibility: Int
    main: main
    weather: [Details]
    wind: wind
    dt: Int
    sys: system
    timezone: Int
  }
`;
export { typeDefs };
