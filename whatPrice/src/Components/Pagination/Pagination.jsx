import { NavLink } from "react-router-dom";
function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav className="flex justify-end">
      <ul className="flex mr-3 mt-2">
        {pageNumber.map((number, index) => (
          <li key={index} className="bg-white px-3 py-1 border">
            <NavLink
              onClick={() => paginate(number)}
              className="text-md font-bold text-neutral-700"
            >
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
