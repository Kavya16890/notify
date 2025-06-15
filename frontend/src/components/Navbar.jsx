import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="">
      <nav className="shadow-lg py-5 bg-zin">
        <ul className="flex items-center gap-2">
          <h1 className="text-2xl ml-3">Notify</h1>
          <Link to={"/"} className="ml-3">
            Home
          </Link>
          <Link to={"/about"} className="ml-3">
            About
          </Link>
          <button
            onClick={() => props.setDarkMode(!props.darkMode)}
            className="px-2 py-1 rounded bg-blue-500 hover:bg-blue-600 transition-all text-white justify-end"
          >
            {props.darkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
