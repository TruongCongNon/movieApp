import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Netflix from "../../assets/images/netflix.png"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
const Header = () => {
  return (
    <header className=" h-14 bg-slate-950 flex text-white justify-between px-8 items-center ">
    <div className="flex items-center gap-4 ">
       <img src={Netflix} alt="" className="w-16 sm:w-28" />
       <a href="">Phim</a>
       <a href="">Truyền hình </a>
    </div>
    <div>
       <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer size-5" />
    </div>
 </header>
  )
}
export default Header