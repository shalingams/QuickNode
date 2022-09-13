import { ICollectionViewProps, Collection } from "../graphql/types";
import Stats from "./Stats";

const CollectionView = (props: ICollectionViewProps) => {
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="py-3 px-6">Collection</th>
            <th className="py-3 px-6">Stats</th>
          </tr>
        </thead>
        <tbody>
          {props.collection.map((item: Collection, index: Number) => {
            return (
              <tr
                key={`${index}-tr`}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="py-4 px-6">({item.symbol}) {item.name} <br />{item.address}</td>
                <td className="py-4 px-6"><Stats stats={item.stats} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CollectionView;
