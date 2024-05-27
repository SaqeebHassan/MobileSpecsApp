import { Outlet } from "react-router-dom";
import MobileNames from "./Components/Api/MobileNames";

function Root() {
  return (
    <>
      <MobileNames />
      <Outlet />
    </>
  );
}

export default Root;
