import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Mobiles from "./Components/Mobiles/Mobiles.jsx";
import News from "./Components/News/News.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import StolenMobiles from "./Components/StolenMobiles/StolenMobiles.jsx";
import Apple from "./Components/Brands/Apple.jsx";
import Huawei from "./Components/Brands/Huawei.jsx";
import Samsung from "./Components/Brands/Samsung.jsx";
// Move to Brands Model page
import Iphone15promax from "./Components/Brands/Apple/Iphone15promax.jsx";
import Iphone15pro from "./Components/Brands/Apple/Iphone15pro.jsx";
import Pura70Ultra from "./Components/Brands/Huawei/Pura70Ultra.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />} />
      <Route path="Mobiles" element={<Mobiles />} />
      <Route path="News" element={<News />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="StolenMobiles" element={<StolenMobiles />} />
      <Route path="Apple" element={<Apple />} />
      <Route path="Huawei" element={<Huawei />} />
      <Route path="Samsung" element={<Samsung />} />
      <Route path="Iphone15promax" element={<Iphone15promax />} />
      <Route path="Iphone15pro" element={<Iphone15pro />} />
      <Route path="Pura70Ultra" element={<Pura70Ultra />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
