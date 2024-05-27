import { useEffect, useState } from "react";

function useModelInfo(brandName) {
  const [models, setModels] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3100/api/${brandName}`)
      .then((resp) => resp.json())
      .then((resp) => setModels(resp));
  }, [brandName]);
  return models;
}

export default useModelInfo;
