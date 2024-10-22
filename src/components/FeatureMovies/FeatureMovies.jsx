import { useEffect, useState } from "react";

import Movie from "./Movie/Movie";
import PaginateIndicator from "./PaginateIndicator/PaginateIndicator";
import Interval from "./Interval/Interval";
import Loading from "../Loading/Loading";
import useFetch from "../../hooks/useFetch";

const FeatureMovies = () => {
  const [activeMovieId, setActiveMovieId] = useState(null);
  const { data: popularMovieResponse } = useFetch({
    url: `/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&include_video=true`,
  });

  const { data: videoRespone } = useFetch(
    {
      url: `/movie/${activeMovieId}/videos`,
    },
    { enabled: !!activeMovieId },
  );
  const trailerVideoKey = (videoRespone?.results || []).find(
    (video) => video.type === "Trailer" && video.site === "YouTube",
  )?.key;

  const movies = (popularMovieResponse.results || []).slice(0, 4);
  console.table("FM =>  " + trailerVideoKey);
  useEffect(() => {
    if (movies[0]?.id) {
      setActiveMovieId(movies[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(movies)]),
    popularMovieResponse.results || [];

  return (
    <div className="relative text-white">
      {movies.length > 0 ? (
        <>
          {movies
            .filter((movie) => movie.id === activeMovieId)
            .map((movie) => (
              <Movie
                key={movie.id}
                data={movie}
                trailerVideoKey={trailerVideoKey}
              />
            ))}
          <Interval
            movies={movies}
            activeMovieId={activeMovieId}
            setActiveMovieId={setActiveMovieId}
          />
        </>
      ) : (
        <Loading />
      )}
      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};

export default FeatureMovies;
