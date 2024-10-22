import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { groupBy } from "lodash";
import { useModelContext } from "../../context/ModelProvider";
import CicularProgressBar from "../CicularProgressBar/CicularProgressBar";
import Images from "../images/Images";

const Banner = ({
  title,
  backdropPath,
  posterPath,
  certification,
  crews,
  genres,
  releaseDate,
  overview,
  point = 0,
  trailerVideoKey,
}) => {
  const { openPopup } = useModelContext();
  if (!title) return null;

  const groupedCrews = groupBy(crews, "job");

  console.log("trailerVideoKey Banner -> " + trailerVideoKey);
  return (
    <div className="relative overflow-hidden bg-black text-white shadow-sm shadow-slate-800">
      <Images
        src={
          backdropPath && `https://image.tmdb.org/t/p/original${backdropPath}`
        }
        alt=""
        className="absolute inset-0 aspect-video w-full brightness-[0.2]"
        width={1200}
        height={800}
      />
      <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
        <div className="flex-1">
          <Images
            src={
              posterPath &&
              `https://image.tmdb.org/t/p/w600_and_h900_bestv2${posterPath}`
            }
            width={600}
            height={900}
            alt=""
            className="w-full"
          />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">{title}</p>
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">
              {certification}
            </span>
            <p>{releaseDate}</p>
            <p>{(genres || []).map((gener) => gener.name).join(",")}</p>
          </div>
          <div className="my-2 flex items-center gap-4">
            <div className="flex items-center gap-2 lg:py-7">
              <CicularProgressBar
                percent={Math.round((point || 0) * 10)}
                size={3.5}
                strokeWidth={0.3}
              />
              Raiting
            </div>
            <button
              onClick={() => {
                openPopup(
                  <iframe
                    title="Trailer"
                    src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                    className="aspect-video w-[50vw]"
                  />,
                );
              }}
            >
              <FontAwesomeIcon icon={faPlay} className="mr-1" /> Trailer
            </button>
          </div>
          <div>
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p>{overview}</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {Object.keys(groupedCrews).map((job) => (
              <div key={job}>
                <p className="font-bold">{job}</p>
                <p>{groupedCrews[job].map((crew) => crew.name).join(",")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
