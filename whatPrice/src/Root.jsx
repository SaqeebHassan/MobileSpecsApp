import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";
import MobileNames from "./Components/Api/MobileNames";

function Root() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <Header />
      <>
        <div>
          <div>
            <div>
              <MobileNames />
            </div>
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
}

export default Root;
