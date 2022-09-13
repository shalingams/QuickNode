import { useEffect, useState } from "react";
import { useQuery} from "@apollo/client";
import { GET_TRENDING_COLLECTIONS } from "../graphql/queries";
import CollectionView from "./CollectionView";

export default function TrendingCollections() {
  const { error, loading, data } = useQuery(GET_TRENDING_COLLECTIONS);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    if (data) {
      setCollection(dataMapping(data));
    }
  }, [data]);

  const dataMapping = (data: any) => {
    return data.trendingCollections.edges.map((edge: any) => edge.node);
  };

  const content = () => {
    if (loading) {
      return (
        <div role="status" className="max-w-sm animate-pulse">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <span className="sr-only">Loading...</span>
        </div>
      );
    }
    if (error) {
      return (
        <div
          className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          <span className="font-medium">Error:</span> {error.message}
        </div>
      );
    }
    if (collection) {
      return <CollectionView collection={collection} />;
    }
  };

  return <div className="bg-color-red-400">{content()}</div>;
}
