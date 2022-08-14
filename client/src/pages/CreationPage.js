import { useEffect, useState } from "react";
import "../cssFiles/creationPageStyle.css";
function CreationPage() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  function getTexture(event) {
    console.log(event);
  }

  return (
    <div>
      {typeof backendData.textures === "undefined" ? (
        <p>loading...</p>
      ) : (
        <select onChange={(e) => getTexture(e.target.value)}>
          {backendData.textures.map((texture, i) => (
            <option key={i} value={texture + ".png"}>
              {texture}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default CreationPage;
