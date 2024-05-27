import { useState, useEffect } from "react";

function useModelSpecs(brandName, modelName) {
  const [specs, setSpecs] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3100/api/${brandName}/${modelName}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setSpecs(resp);
      });
  }, [brandName, modelName]);
  return specs;
}

export default useModelSpecs;
