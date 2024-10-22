import Loading from "../Loading/Loading";
import MovieCard from "../MovieCard/MovieCard";

const RelatedMediaList = ({ mediaList = [], loading, title, className }) => {
  return (
    <div className={className}>
      {title && <p className="mb-4 text-[1.5vw] font-bold">{title}</p>}
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-3 gap-2 text-[1vw] sm:grid-cols-4">
          {mediaList.map((media) => (
            <MovieCard
              key={media.id}
              id={media.id}
              title={media.title || media.name}
              releaseDate={media.release_date || media.first_air_date}
              poster={media.poster_path}
              point={media.vote_average}
              mediaType={media.media_type}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default RelatedMediaList;
