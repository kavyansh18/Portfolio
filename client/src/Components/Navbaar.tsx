import { NavLink } from "react-router-dom";

const Navbaar = () => {
  return (
    <div className="w-full flex justify-center items-center z-50">
    <div className="fixed top-2 flex gap-2 px-10 pb-2 rounded-full  hover:px-16 z-50 transition-all duration-950 ease-in-out backdrop-filter backdrop-blur-3xl bg-white bg-opacity-5">
      <div>
        <NavLink
          to="/"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-2 dark:p-[1px] p-[2px]"
          // activeClassName="active-link-class" // Add this if you want to apply active styles
          type="button"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] "  />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-8 text-m font-medium text-white backdrop-blur-3xl bg-sky-500 dark:bg-slate-950 hover:bg-blue-600 dark:hover:bg-neutral-800 transition duration-300 ease-in-out">
            Home
          </span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-2 dark:p-[1px] p-[2px]"
          // activeClassName="active-link-class" // Add this if you want to apply active styles
          type="button"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-8 text-m font-medium text-white backdrop-blur-3xl bg-sky-500 dark:bg-slate-950 hover:bg-blue-600 dark:hover:bg-neutral-800 transition duration-300 ease-in-out">
            Connect
          </span>
        </NavLink>
      </div>
    </div>
    </div>
  );
};

export default Navbaar;
