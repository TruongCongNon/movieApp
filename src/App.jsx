import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./index.css"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import Netflix from "./assets/netflix.png"
const App = () => {
  return (
    <div>
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
    </div>
  )
}
export default App
