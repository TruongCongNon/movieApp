import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
import ActorList from "../MediaDetail/ActorList";
import Banner from "../MediaDetail/Banner";

import MovieInfo from "../MediaDetail/MovieInfo";
import RelatedMediaList from "../MediaDetail/RelatedMediaList";

export default function MovieDetail() {
  const { id } = useParams();

  const { data: movieInfo, loading } = useFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits,videos`,
  });
  const { data: recommanDationResponse, loading: isRelatedMovieLoading } =
    useFetch({
      url: `/movie/${id}/recommendations`,
    });
  const relatedMovies = recommanDationResponse.results || [];

  const certification = (
    (movieInfo.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((releaseDate) => releaseDate.certification)?.certification;

  const crews = (movieInfo.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, name: crew.name, job: crew.job }));
  if (loading) {
    return <Loading />;
  }

  const trailerVideoKey = (movieInfo.videos?.results || []).find(
    (video) => video.type === "Trailer",
  )?.key;

  console.log("MovieDetail -> " + trailerVideoKey);
  return (
    <div>
      <Banner
        title={movieInfo.title}
        backdropPath={movieInfo.backdrop_path}
        posterPath={movieInfo.poster_path}
        certification={certification}
        crews={crews}
        point={movieInfo.vote_average}
        releaseDate={movieInfo.release_date}
        genres={movieInfo.genres}
        overview={movieInfo.overview}
        trailerVideoKey={trailerVideoKey}
      />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="container">
          <div className="flex-[2]">
            <ActorList actors={movieInfo.credits?.cast || []} />
            <RelatedMediaList
              mediaList={relatedMovies}
              loading={isRelatedMovieLoading}
              title="More like this"
              className="mt-6"
            />
          </div>
          <div className="flex-1">
            <MovieInfo movieInfo={movieInfo} />
          </div>
        </div>
      </div>
    </div>
  );
}
