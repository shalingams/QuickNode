import { ApolloProvider } from "@apollo/client";
import Client from "./client";

const client = Client();

export default function App() {
  return (
    <div className="p-16 font-sans text-3xl">
      <h1 className="font-bold">Trending Collections</h1>
      <ApolloProvider client={client}>
        {/* Collection goes here */}
      </ApolloProvider>
    </div>
  );
}
