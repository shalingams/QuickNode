import { IStatsProps } from "../graphql/types";

const Stats = (props: IStatsProps) => {
  return (
    <div>
      <table>
        <tr>
          <th>Average: </th>
          <td>{props.stats.average}</td>
        </tr>
        <tr>
          <th>Total Sales: </th>
          <td>{props.stats.totalSales}</td>
        </tr>
        <tr>
          <th>Ceiling: </th>
          <td>{props.stats.ceiling}</td>
        </tr>
        <tr>
          <th>Floor</th>
          <td>{props.stats.floor}</td>
        </tr>
        <tr>
          <th>Volume: </th>
          <td>{props.stats.volume}</td>
        </tr>
      </table>
    </div>
  );
};

export default Stats;
