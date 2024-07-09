import ToggleSwitch from "../Components/ToggleSwitch";
import Navbaar from "../Components/Navbaar.tsx";
import '../Components/UI/ToggleSwitch.css'

export function Homepg() {
  return (
    <div className="relative">
      <Navbaar />
      <div className="h-[34rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
        <p className="text-4xl sm:text-7xl font-bold relative  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 ">
          Hi, I'm Kavyansh
        </p>
        <ToggleSwitch />
      </div>
    </div>
  );
}

export default Homepg;
