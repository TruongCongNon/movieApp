import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Netflix from "../../assets/images/netflix.png";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="lg:h-19 flex h-14 items-center justify-between bg-slate-950 px-8 text-white">
      <div className="flex items-center gap-4 lg:gap-6">
        <Link to="/">
          <img src={Netflix} alt="" className="w-16 sm:w-28" />
        </Link> 
        <Link className="lg:text-xl" to="/search?mediaType=movie">
          Movie
        </Link>
        <Link className="lg:text-xl" to="/search?mediaType=tv">
          TV Show
        </Link>
      </div>
      <div>
        <Link to="/search">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="size-5 cursor-pointer"
          />
        </Link>
      </div>
    </header>
  );
};
export default Header;
