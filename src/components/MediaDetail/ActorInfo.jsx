import { Link } from "react-router-dom";
import Images from "../images/Images";

const ActorInfo = ({ id, name, character, profilePath, episodeCount }) => {
  return (
    <Link
      to={`/people/${id}`}
      className="rounded-lg border border-slate-300 bg-black shadow-lg"
    >
      <Images
        src={
          profilePath
            ? `https://media.themoviedb.org/t/p/w276_and_h350_face${profilePath}`
            : "/images/actorNoImage.svg"
        }
        width={276}
        height={350}
        alt=""
        className="w-full rounded-lg"
      />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        {episodeCount && (
          <p>
            <span>{episodeCount <= 1 ? "Episode" : "Episodes"}</span>
          </p>
        )}
      </div>
    </Link>
  );
};
export default ActorInfo;
