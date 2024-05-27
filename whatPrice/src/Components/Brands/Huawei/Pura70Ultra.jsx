import useModelSpecs from "../../../Hooks/UseModelSpecs";
import ModelCard from "../../Cards/ModelCard";

function Pura70Ultra() {
  const specs = useModelSpecs("Huawei", "pura70ultra");
  const modelName = "Huawei Pura 70 Ultra";
  return (
    <div>
      <ModelCard specs={specs} modelName={modelName} />
    </div>
  );
}

export default Pura70Ultra;
