import { useEffect, useState } from "react";
import "./FeatureMovies.css";
import Movie from "./Movie/Movie";
import PaginateIndicator from "./PaginateIndicator/PaginateIndicator";
import Interval from "./Interval/Interval";
// import Interval from "./Interval/Interval";

const FeatureMovies = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState(null);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTJlNDdlYTJkOTJkNzY0YjFhYTI2YmMwM2U2MGU3ZCIsIm5iZiI6MTcyODAxNDc0Ni40MDY1NSwic3ViIjoiNjZmZjY1YjFjOWExMGQ0NmVhN2NiOWFiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.lC1XUJDTN-irJFU4Q8FIKXaIjiEVETi-LH0AZHgmkv0`,
      },
    }).then(async (res) => {
      const data = await res.json();
      const popularMovies = data.results.slice(0, 4);
      setMovies(popularMovies);
      setActiveMovieId(popularMovies[0].id); // Đặt activeMovieId cho movie đầu tiên
      console.log(popularMovies);
    });
  }, []);

  // Kiểm tra giá trị activeMovieId
  console.log("Active Movie ID: ", activeMovieId);

  return (
    <div className="relative text-white">
      {movies.length > 0 ? (
        <>
          {movies
            .filter((movie) => movie.id === activeMovieId)
            .map((movie) => (
              <Movie key={movie.id} data={movie} />
            ))}
          <Interval
            movies={movies}
            activeMovieId={activeMovieId}
            setActiveMovieId={setActiveMovieId}
          />
        </>
      ) : (
        <div className="h-100vw text-black">Loading....</div>
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
