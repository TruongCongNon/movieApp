import { useState } from "react";
import CicularProgressBar from "../CicularProgressBar/CicularProgressBar";
import Images from "../images/Images";

const SeasonList = ({ seasons = [] }) => {
  const [isShowMoreSeasonList, setIsShowMoreSeasonList] = useState(false);
  const currentSeason = isShowMoreSeasonList ? seasons : seasons.slice(0, 1);
  console.log(currentSeason);
  return (
    <div className="mt-8 text-[1.3vw]">
      <p className="mb-4 text-[1.4vw] font-bold">Season</p>
      <div className="space-y-4">
        {currentSeason.map((season) => (
          <div
            key={season.id}
            className="flex gap-4 rounded-lg border border-slate-200 p-3 shadow-md"
          >
            <div className="w-1/4">
              <Images
                width={130}
                height={195}
                src={
                  season.poster_path &&
                  `https://media.themoviedb.org/t/p/w300${season.poster_path}`
                }
                className="rounded-lg"
              />
            </div>
            <div className="space-y-1">
              <p className="text-[1.4vw] font-bold">{season.name}</p>
              <div className="flex items-center gap-2">
                <CicularProgressBar
                  percent={Math.round(season.vote_average * 10)}
                  size={2.5}
                  strokeWidth={0.2}
                />
                <p className="font-bold"> Rating</p>
              </div>
              <p>
                <span className="font-bold">Release Date: </span>
                {season.air_date}
              </p>
              <p>{season.episode_count} Episodes</p>
              <p>{season.overview ? season.overview : "No data"}</p>
            </div>
          </div>
        ))}
        <p
          className="mt-2 cursor-pointer"
          onClick={() => {
            setIsShowMoreSeasonList(!isShowMoreSeasonList);
          }}
        >
          {isShowMoreSeasonList ? "Show Less" : "Show More"}
        </p>
      </div>
    </div>
  );
};
export default SeasonList;
