import { ApolloProvider } from "@apollo/client";
import TrendingCollections from "./components/TrendingCollections";
import Client from "./client";
import ProtectedRoute from "./components/ProtectedRoute";

const client = Client();

export default function App() {
  return (
    <div className="p-16 font-sans text-3xl">
      <h1 className="font-bold">Trending Collections</h1>
      <ProtectedRoute>
        <ApolloProvider client={client}>
          <TrendingCollections />
        </ApolloProvider>
      </ProtectedRoute>
    </div>
  );
}
