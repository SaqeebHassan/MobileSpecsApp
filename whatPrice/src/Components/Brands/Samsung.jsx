import useModelInfo from "../../Hooks/UseBrandModels";
import Card from "../Cards/Card";

function Samsung() {
  const samsungModels = useModelInfo("Samsung");

  console.log(samsungModels);

  return (
    <>
      <div className="mb-2 p-3 bg-neutral-700  text-white">
        <strong>Samsung</strong>
      </div>
      <div className="flex justify-center flex-wrap">
        {/* {samsungModels.map((model, index) => (
          <Card
            key={index}
            modelName={model.modelName}
            imageUrl={model.image}
          />
        ))} */}
      </div>
    </>
  );
}

export default Samsung;
