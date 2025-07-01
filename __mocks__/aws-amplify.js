export const graphqlOperation = (query, variables) => ({
  query,
  variables,
});

export const API = {
  graphql: jest.fn(graphqlOperation),
}; 