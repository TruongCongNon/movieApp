import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Images from "../../images/Images";
import { useModelContext } from "../../../context/ModelProvider";
import { Link } from "react-router-dom";

const Movie = (props) => {
  console.log({ props });
  const {
    data: { id, backdrop_path, title, release_date, overview },
  } = props;
  const { openPopup } = useModelContext();
  console.log("MV -> " + props.trailerVideoKey);
  return (
    <div>
      <Images
        src={
          backdrop_path &&
          `https://image.tmdb.org/t/p/original/${backdrop_path}`
        }
        className="aspect-video w-full brightness-50"
        width={900}
        height={500}
      />
      <div className="absolute bottom-[30%] left-8 w-1/2 sm:w-1/3">
        <div className="mb-2 font-bold sm:text-[2vw]">{title}</div>
        <div>
          <p className="mt-0.5 text-[2.2vw] sm:text-[1.2vw]">{release_date}</p>
        </div>
        <div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold">Overview</p>
            <p>{overview}</p>
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={() => {
              openPopup(
                <iframe
                  title="Trailer"
                  src={`https://www.youtube.com/embed/${props.trailerVideoKey}`}
                  className="aspect-video w-[50vw]"
                  allowFullScreen
                />,
              );
            }}
            className="mr-4 rounded-md bg-white px-4 py-2 text-sm text-black lg:text-lg"
          >
            <FontAwesomeIcon icon={faPlay} /> Trailer
          </button>
          <Link to={`/movie/${id}`}>
            <button className="rounded-md bg-slate-300/35 px-4 py-2 text-10 text-white lg:text-lg">
              View Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
