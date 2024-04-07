import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <Navbar />
      <div>
        <div className="flex flex-col gap-4 lg:gap-8 lg:flex-row justify-between p-6  lg:p-12">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold">
              Pick the Website Template You Love
            </h1>
          </div>
          <div className="border-b border-black flex justify-between p-4 lg:p-0">
            <input
              type="text"
              placeholder="Search all templates..."
              className="w-60 focus:outline-none placeholder:font-light placeholder:text-slate-400 placeholder:text-sm"
            />
            <button>
              <a href="#">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </a>
            </button>
          </div>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
