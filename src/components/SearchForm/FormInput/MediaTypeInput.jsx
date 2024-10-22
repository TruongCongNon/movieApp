const MediaTypeInput = ({ onChange, name, value }) => {
  return (
    <div className="accent-black">
      <input
        type="radio"
        name={name}
        value="movie"
        onChange={onChange}
        checked={value === "movie"}
        id="search-type-movie"
        className="mr-1"
      />
      <label htmlFor="search-type-movie">Movie</label>
      <br />
      <input
        type="radio"
        name={name}
        value="tv"
        onChange={onChange}
        checked={value === "tv"}
        id="search-type-tv"
        className="mr-1"
      />
      <label htmlFor="search-type-tv">TV Show</label>
    </div>
  );
};
export default MediaTypeInput;
