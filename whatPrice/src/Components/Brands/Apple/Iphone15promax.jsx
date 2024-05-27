import useModelSpecs from "../../../Hooks/UseModelSpecs";
import ModelCard from "../../Cards/ModelCard";

function Iphone15promax() {
  const specs = useModelSpecs("Apple", "iphone15promax");
  const modelName = "iPhone 15 pro max";
  return (
    <div>
      <ModelCard specs={specs} modelName={modelName} />
    </div>
  );
}

export default Iphone15promax;
