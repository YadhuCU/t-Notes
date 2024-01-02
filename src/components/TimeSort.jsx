import { useRef } from "react";
export const TimeSort = () => {
  const allList = useRef(null);
  const handlActive = (e) => {
    Array.from(allList.current.children).forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });
    e.currentTarget.classList.add("active");
  };
  return (
    <ul
      ref={allList}
      className="my-4 flex gap-8 md:gap-14 border-b py-2 w-full"
    >
      {["All", "Todays", "This Week", "This Month"].map((item) => (
        <li
          onClick={(e) => handlActive(e)}
          key={item}
          className={`cursor-pointer text-sm md:text-md relative ${
            item == "All" && "active"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
