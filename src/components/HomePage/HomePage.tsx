import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
<div className="main__list">
  <table className="list">
    <thead>
      <tr className="item">
        <th className="item__value item__value--header">
          URL
        </th>
        <th className="item__value item__value--header">
          User
        </th>
        <th className="item__value item__value--header">
          Info
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="item">
        <td className="item__value item__value--url">
          https://www.google.com/api/EwXDH0G
        </td>
        <td className="item__value">
          Hovis
        </td>
        <td className="item__value">
          <Link to="/1">Details</Link>
        </td>
      </tr>
      {/* Добавьте другие строки, если необходимо */}
    </tbody>
  </table>
</div>

  );
}