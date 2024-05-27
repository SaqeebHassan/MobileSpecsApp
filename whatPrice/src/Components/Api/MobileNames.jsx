import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
function MobileNames() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/api/mobile-brands")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went Wrong");
        }
        return response.json();
      })
      .then((data) => {
        const brandNames = data.map((brand) => brand.brandName);
        setBrands(brandNames);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="bg-neutral-700">
      <nav className="mobile-nav w-full overflow-auto flex items-center h-16">
        <ul className="flex gap-5 mx-4">
          {brands.map((brand, index) => (
            <li key={index} className="text-white">
              <NavLink
                to={`/${brand}`}
                className={({ isActive }) =>
                  `text-md font-bold
              duration-200 
              ${isActive ? "text-green-600 border-b-2 pb-1" : "text-white"}`
                }
              >
                {brand}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MobileNames;
