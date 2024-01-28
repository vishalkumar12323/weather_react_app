const typeDefs = `
  input search {
    q: String
    lat: Float
    lon: Float
    units: String
  }

  type weather {
    temp: Float
    temp_max: Float
    temp_min: Float
    humidity: Int
    feels_like: Float
    pressure: Int
    visibility: Int,
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
`;
export { typeDefs };
