import { Link } from "react-router-dom";
import { Url } from "../../../types/url"
import React from "react";
import { getFullUrl } from "../../../api/get";

type Props = {
  url: Url,
}

export const UrlLine:React.FC<Props> = ({url}) => {
  const {
    id,
    shortUrl,
    createdByName,
  } = url;
  const jwtToken = localStorage.getItem("jwtToken");

  const handleRedirect = async () => {
    try {
      const response = await getFullUrl(shortUrl);

      window.location.href = response;
    } catch {

    }
  }

  return (
    <tr className="item">
      <td className="item__value item__value--url" onClick={handleRedirect}>
        {shortUrl}
      </td>
      <td className="item__value">
        {createdByName}
      </td>
      <td className="item__value">
        {jwtToken && (
           <Link to={`/${id}`}>Details</Link>
        )}
      </td>
    </tr>
  );
}