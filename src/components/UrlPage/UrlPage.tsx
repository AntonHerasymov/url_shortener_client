import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUrlById } from "../../api/get";
import { Url } from "../../types/url";

export const UrlPage = () => {
  const { urlId = '' } = useParams();
  const [url, setUrl] = useState<Url | null>(null);

  useEffect(() => {
    getUrlById(urlId)
      .then(data => setUrl(data));
  },[]);

  return (
    <div className="main__item">
      <span>
       {`Full Url: ${url?.fullUrl}`}  
      </span>

      <span>
        {`Short Url: ${url?.shortUrl}`}  
      </span>

      <span>
      {`Created By: ${url?.createdByName}`}  
      </span>

      <span>
      {`Created Date: ${url?.createdDate}`}  
      </span>
    </div>
  );
}