import { Link } from "react-router-dom";
import { Url } from "../../../types/url"
import React from "react";

type Props = {
  url: Url,
}

export const UrlLine:React.FC<Props> = ({url}) => {
  const {
    id,
    shortUrl,
    createdByName,
  } = url;

  return (
    <tr className="item">
      <td className="item__value item__value--url">
        {shortUrl}
      </td>
      <td className="item__value">
        {createdByName}
      </td>
      <td className="item__value">
        <Link to={`/${id}`}>Details</Link>
      </td>
    </tr>
  );
}