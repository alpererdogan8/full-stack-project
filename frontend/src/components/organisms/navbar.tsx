import { Logo } from "../../assets/logo";
import Search from "../molecules/search";
const Navbar = () => {
  return (
    <nav className="w-full shadow-md py-4 px-1  md:px-8 md:py-3.5 flex items-center justify-between md:min-h-[5.5rem] ">
      <div className="flex justify-between px-1 md:gap-8 items-center   w-full">
        <div className="flex items-center gap-2  md:gap-8">
          <Logo className="w-8 md:w-auto" />

          <div className=" text-xl md:text-2xl font-semibold"> Albums</div>
        </div>
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
