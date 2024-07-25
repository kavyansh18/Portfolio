import { NavLink } from "react-router-dom";

const Navbaar = () => {
  return (
    <div className="w-full flex lg:justify-center lg:items-center justify-start items-start lg:ml-0 ml-9 z-50">
    <div className="fixed lg:top-2 top-6 flex gap-2 lg:px-10 px-2 pb-2 rounded-full  hover:px-16 z-50 transition-all duration-950 ease-in-out backdrop-filter backdrop-blur-3xl bg-white bg-opacity-5">
      <div>
        <NavLink
          to="/"
          className="relative inline-flex h-10 overflow-hidden rounded-full focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-2 dark:p-[1px] p-[2px]"
          // activeClassName="active-link-class" // Add this if you want to apply active styles
          type="button"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] "  />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full lg:px-8 px-5 lg:text-m text-sm font-medium text-white backdrop-blur-3xl bg-sky-500 dark:bg-slate-950 hover:bg-blue-600 dark:hover:bg-neutral-800 transition duration-300 ease-in-out">
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
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full lg:px-8 px-5 lg:text-m text-sm font-medium text-white backdrop-blur-3xl bg-sky-500 dark:bg-slate-950 hover:bg-blue-600 dark:hover:bg-neutral-800 transition duration-300 ease-in-out">
            Connect
          </span>
        </NavLink>
      </div>
    </div>
    </div>
  );
};

export default Navbaar;
