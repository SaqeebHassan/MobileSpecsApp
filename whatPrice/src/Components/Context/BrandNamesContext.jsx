import { useContext, createContext, useEffect, useState } from "react";

export const NamesContext = createContext();

export const useNames = () => {
  return useContext(NamesContext);
};

export const NamesProvider = ({ children }) => {
  const [brandModels, setBrandModels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/api/brands-models")
      .then((response) => response.json())
      .then((data) => {
        setBrandModels(data);
      })
      .catch((error) => console.error("Error fetching brand models:", error));
  }, []);

  return (
    <NamesContext.Provider value={{ brandModels }}>
      {children}
    </NamesContext.Provider>
  );
};
