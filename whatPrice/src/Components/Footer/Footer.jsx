import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold">About Us</h2>
            <p className="text-sm">
              We are committed to providing the best service and products. Your
              satisfaction is our priority.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <h2 className="text-lg font-bold">Quick Links</h2>
            <ul className="text-sm">
              <li>
                <NavLink
                  to="/"
                  className="hover:underline"
                  activeClassName="underline"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Nees"
                  className="hover:underline"
                  activeClassName="underline"
                >
                  News
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover:underline"
                  activeClassName="underline"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h2 className="text-lg font-bold">Follow Us</h2>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="..." />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="..." />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="..." />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
