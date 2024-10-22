import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import SearchForm from "../SearchForm/SearchForm";
import RelatedMediaList from "../MediaDetail/RelatedMediaList";

const SearchPage = () => {
  const [searchFormValues, setSearchFormValues] = useState({
    defaultValues: {
      mediaType: "movie",
      genres: [],
      rating: "All",
    },
  });
  const [minRating, maxRating] =
    searchFormValues.rating === "All"
      ? [0, 100]
      : searchFormValues.rating?.split("-") || [0, 100];
  const { data } = useFetch({
    url: `/discover/${searchFormValues?.mediaType || []}?sort_by=popularity.desc&with_genres=${searchFormValues.genres?.join(",")}&vote_average.gte=${minRating / 10}&vote_average.lte=${maxRating / 10}`,
  });

  console.log("SR" + { data });
  // console.log()
  return (
    <div>
      <div className="container flex-col">
        <p className="flex text-[5vw] font-bold sm:text-[1.5vw]">Search</p>
        <div className="flex gap-6">
          <div className="flex-1">
            <SearchForm setSearchFormValues={setSearchFormValues} />
          </div>
          <div className="flex-[3]">
            <RelatedMediaList mediaList={data.results || []} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchPage;
