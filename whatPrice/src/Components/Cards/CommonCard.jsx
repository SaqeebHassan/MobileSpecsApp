import { NavLink } from "react-router-dom";

function CommonCard({ models }) {
  return (
    <>
      <ul className="flex flex-wrap bg-slate-100 justify-end">
        {Object.entries(models?.Apple || {}).map(([key, values], index) => (
          <li
            key={index}
            className="p-2 flex flex-col justify-center items-center w-1/2 md:w-1/5 border-r-2 border-b-2 hover:scale-100"
          >
            <NavLink
              to={values.phoneDetails.modelValue.replace(/\s+/g, "")}
              className="flex flex-col items-center gap-4"
            >
              <img src={values.phoneDetails.image} alt="" className="w-3/4" />
            </NavLink>
            <strong>{values.phoneDetails.modelValue}</strong>
          </li>
        ))}
        <NavLink
          to={models?.Apple?.iphone15promax?.phoneDetails.brandValue}
          className={`
        mr-6 border-b-2 border-neutral-700
        `}
        >
          Apple
        </NavLink>
      </ul>
      <ul className="flex flex-wrap bg-slate-100 justify-end">
        {Object.entries(models?.Huawei || {}).map(([key, values], index) => (
          <li
            key={index}
            className="p-2 flex flex-col justify-center items-center w-1/2 md:w-1/5 border-r-2 border-b-2 hover:scale-100"
          >
            <NavLink
              to={values.phoneDetails.modelValue.replace(/\s+/g, "")}
              className="flex flex-col items-center gap-4"
            >
              <img src={values.phoneDetails.image} alt="" className="w-3/4" />
            </NavLink>
            <strong>{values.phoneDetails.modelValue}</strong>
          </li>
        ))}
        <NavLink
          to={models?.Huawei?.pura70ultra?.phoneDetails.brandValue}
          className={`
        mr-6 border-b-2 border-neutral-700
        `}
        >
          Huawei
        </NavLink>
      </ul>
    </>
  );
}

export default CommonCard;
