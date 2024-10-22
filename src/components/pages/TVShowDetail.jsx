import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
import ActorList from "../MediaDetail/ActorList";
import Banner from "../MediaDetail/Banner";
import RelatedMediaList from "../MediaDetail/RelatedMediaList";
import TVShowInfo from "../MediaDetail/TVShowInfo";
import SeasonList from "../MediaDetail/SeasonList";

const TVShowDetail = () => {
  const { id } = useParams();

  const { data: TVShowInfor, loading } = useFetch({
    url: `/tv/${id}?append_to_response=content_ratings,aggregate_credits,videos`,
  });

  const { data: recommanDationResponse, loading: isRecommandationLoading } =
    useFetch({
      url: `/tv/${id}/recommendations`,
    });

  const relatedTVShow = recommanDationResponse.results || [];

  if (loading) {
    return <Loading />;
  }

  console.log("TVShowInfor:" + { TVShowInfor });

  const certification = (TVShowInfor.content_ratings?.results || []).find(
    (result) => result.iso_3166_1 === "US",
  )?.rating;

  const crews = (TVShowInfor.aggregate_credits?.crew || [])
    .filter((crew) => {
      const jobs = (crew.jobs || []).map((j) => j.job);
      return ["Director", "Writer"].some((job) => jobs.find((j) => j === job));
    })
    .slice(0, 5)
    .map((crew) => ({ id: crew.id, name: crew.name, job: crew.jobs[0].job }));

  const trailerVideoKey = (TVShowInfor.videos?.results || []).find(
    (video) => video.type === "Trailer",
  )?.key;

  return (
    <div>
      <Banner
        title={TVShowInfor.name}
        backdropPath={TVShowInfor.backdrop_path}
        posterPath={TVShowInfor.poster_path}
        certification={certification}
        crews={crews}
        point={TVShowInfor.vote_average}
        releaseDate={TVShowInfor.first_air_date}
        genres={TVShowInfor.genres}
        overview={TVShowInfor.overview}
        trailerVideoKey={trailerVideoKey}
      />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="container">
          <div className="flex-[2]">
            <ActorList
              actors={(TVShowInfor.aggregate_credits?.cast || []).map(
                (cast) => ({
                  ...cast,
                  character: cast.roles[0]?.character,
                  episodeCount: cast.roles[0].episode_count,
                }),
              )}
            />
            <SeasonList seasons={TVShowInfor.seasons || [].reverse()} />
            <RelatedMediaList
              mediaList={relatedTVShow}
              loading={isRecommandationLoading}
              title="More like this"
              className="mt-6"
            />
          </div>
          <div className="flex-1">
            <TVShowInfo TVShowInfo={TVShowInfor} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TVShowDetail;
