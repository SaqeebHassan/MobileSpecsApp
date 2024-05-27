import { NavLink } from "react-router-dom";

function Card({ posts, loading, setLoading }) {
  return (
    <>
      <ul className="flex flex-wrap mt-3">
        {posts.map((post, index) => (
          <li
            key={index}
            className="bg-slate-50 p-2 flex flex-col justify-center items-center w-1/2 md:w-1/5 border-r-2 border-b-2 hover:scale-100"
          >
            <NavLink
              to={`/${post.modelValue.replace(/\s+/g, "")}`}
              className="flex flex-col items-center gap-4"
            >
              <img src={post.image} alt="" className="w-3/4" />
            </NavLink>
            <div className="text-l font-bold">{post.modelValue}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Card;
