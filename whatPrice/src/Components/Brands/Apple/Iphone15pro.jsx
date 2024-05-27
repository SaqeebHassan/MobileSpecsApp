import useModelSpecs from "../../../Hooks/UseModelSpecs";
import ModelCard from "../../Cards/ModelCard";

function Iphone15pro() {
  const specs = useModelSpecs("Apple", "iphone15pro");
  const modelName = "iPhone 15 pro";
  return (
    <div>
      <ModelCard specs={specs} modelName={modelName} />
    </div>
  );
}

export default Iphone15pro;
