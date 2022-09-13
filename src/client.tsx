import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }: any) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }: any) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "https://graphql.icy.tools/graphql",
    headers: { "x-api-key": "e2612441d9cf4849b9970d68c318eba1" },
  }),
]);

export default function Client() {
  const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
  });
  return client;
}
