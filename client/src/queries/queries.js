import { gql } from "@apollo/client";

const GET_DATA = gql`
  query Weather($location: search) {
    Weather(location: $location) {
      name
      main {
        temp
        feels_like
        humidity
        pressure
        temp_max
        temp_min
      }
      dt
      timezone
      visibility
      sys {
        country
        sunrise
        sunset
      }
      weather {
        icon
        main
      }
      wind {
        speed
      }
    }
  }
`;

export { GET_DATA };
