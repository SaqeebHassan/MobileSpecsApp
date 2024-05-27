import { useState, useEffect } from "react";

function useCommonModels() {
  const [commonModels, setCommonModels] = useState({});
  useEffect(() => {
    fetch("http://localhost:3100/api/common-brand")
      .then((resp) => resp.json())
      .then((resp) => {
        setCommonModels(resp);
      });
  }, []);
  return commonModels;
}
export default useCommonModels;
