const data = [
  {
    id: "1",
    name: "GraphQL",
    message: "Hello GraphQL",
  },
];

const queries = {
  Hello: () => data,
};

export const resolvers = { queries };
