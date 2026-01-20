import { Link } from "react-router";
import { ModeToggle } from "../ui/mode-toggle";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-20 flex items-center justify-between gap-3 px-5">
      <a href="/" className="font-bold text-2xl">
        Redux ET.
      </a>

      <div className="flex gap-8 font-medium ">
        <Link to={"/tasks"} className="hover:text-purple-600">
          Tasks
        </Link>
        <Link to={"/users"} className="hover:text-purple-600">
          Users
        </Link>
      </div>

      <div className="flex items-center gap-8">
        <ModeToggle />
        <div className="w-10 h-10 grid place-items-center font-bold bg-gray-300 rounded-full">
          A
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
