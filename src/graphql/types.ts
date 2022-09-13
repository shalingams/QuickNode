export type Stats = {
  totalSales: String;
  average: String;
  ceiling: String;
  floor: String;
  volume: String;
};

export type Collection = {
  address: String;
  name: String;
  stats: Stats;
  symbol: String | null;
};


export interface ICollectionViewProps {
  collection: Collection[];
}


export interface IStatsProps {
  stats: Stats;
}
