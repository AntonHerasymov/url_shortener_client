import { useEffect, useState } from "react";
import { getUrls } from "../../api/get";
import { Url, UrlDto } from "../../types/url";
import { UrlLine } from "./blocks/UrlLine";
import { AddUrl } from "../../api/post";

const urlToSend: UrlDto = {
  id: 0,
  fullUrl: "string",
  shortUrl: "string",
  userId: 0,
  createdDate: "2023-11-25T11:47:29.199Z",
}

export const HomePage = () => {
  const [urls, setUrls] = useState<Url[]>([]);
  const [newUrl, setNewUrl] = useState('');
  const jwtToken = localStorage.getItem("jwtToken");


  useEffect(() => {
    getUrls()
      .then(data => setUrls(data));
  },[]);
  
  const handleAddNewUrl =  async () => {
    urlToSend.fullUrl = newUrl;

    try {
     const data: Url = await AddUrl(urlToSend);

      if(data) {
        setUrls((prevUrls) => [...prevUrls,data]);
      }

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="main__list">
      {jwtToken && (
        <form className="main__form">
                <label htmlFor="">Url: </label>
                <input
                  className="main__input" 
                  type="text" 
                  name="url" 
                  id="urlInput"
                  value={newUrl}
                  onChange={(event) => setNewUrl(event.target.value)}
                />

                <input
                  onClick={handleAddNewUrl} 
                  type="button" 
                  value='Add'/>
          </form>
      )}
     

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
          {urls.map(item => (
            <UrlLine key={item.id} url={item}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}