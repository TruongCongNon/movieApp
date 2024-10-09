import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Movie = (props) => {
  console.log({ props });
  const {
    data: { backdrop_path, title, release_date, overview },
  } = props;

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        className="aspect-video brightness-50"
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
          <button className="mr-4 rounded-md bg-white px-4 py-2 text-10 text-black lg:text-lg">
            <FontAwesomeIcon icon={faPlay} /> Trailer
          </button>
          <button className="rounded-md bg-slate-300/35 px-4 py-2 text-10 text-white lg:text-lg">
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

// Movie.propTypes = {
//   data: PropTypes.shape({
//     backdrop_path: PropTypes.string,
//     title: PropTypes.string,
//     release_date: PropTypes.string,
//     overview: PropTypes.string,
//   }),
// };

export default Movie;
