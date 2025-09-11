import { useEffect } from "react";

const Interval = ({ movies, setActiveMovieId }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMovieId((preIndex) => {
        const currentIndex = movies.findIndex((movie) => movie.id === preIndex);
        const nextIndex = (currentIndex + 1) % movies.length;
        return movies[nextIndex].id;
      });
    }, 7000);
    return () => clearInterval(interval);
  }, [movies, setActiveMovieId]);
};
export default Interval;
