import useCommonModels from "../../Hooks/UseCommonModels";
import CommonCard from "../Cards/CommonCard";

function Home() {
  const commonModels = useCommonModels();
  return (
    <>
      <CommonCard models={commonModels} />
    </>
  );
}

export default Home;
