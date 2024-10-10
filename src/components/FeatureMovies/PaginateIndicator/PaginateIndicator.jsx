import { useEffect } from "react";

const PaginateIndicator = ({ movies, activeMovieId, setActiveMovieId }) => {
  // useEffect(() => {
  //   console.log(movies.length);
  //   const interval = setInterval(() => {
  //     setActiveMovieId((currentIndex) => (currentIndex + 1) % movies.length);
  //   }, 2000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [movies.length, setActiveMovieId]);
  return (
    <div className="absolute bottom-[10%] right-8">
      <ul className="flex gap-2">
        {movies.map((movie) => (
          <li
            onClick={() => setActiveMovieId(movie.id)}
            key={movie.id}
            className={`h-1 w-7 cursor-pointer ${activeMovieId === movie.id ? "bg-slate-100" : "bg-slate-600"}`}
          ></li>
        ))}
      </ul>
    </div>
  );
};
export default PaginateIndicator;
