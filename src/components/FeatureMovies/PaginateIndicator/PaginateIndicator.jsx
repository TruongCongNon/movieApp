const PaginateIndicator = ({ movies, activeMovieId, setActiveMovieId }) => {
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
        {/* <li className="h-1 w-7 cursor-pointer bg-slate-100"></li>
        <li className="h-1 w-7 cursor-pointer bg-slate-600"></li>
        <li className="h-1 w-7 cursor-pointer bg-slate-600"></li>
        <li className="h-1 w-7 cursor-pointer bg-slate-600"></li> */}
      </ul>
    </div>
  );
};
export default PaginateIndicator;
