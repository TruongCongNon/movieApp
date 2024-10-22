import "../../index.css";
import { TOP_RATED_TABS, TRENDING_TABS } from "../../libs/constants";
import FeatureMovies from "../FeatureMovies/FeatureMovies";
import MediaList from "../MediaList/MediaList";

const HomePage = () => {
  return (
    <div>
      <FeatureMovies />
      <MediaList title="Trending" tabs={TRENDING_TABS} />
      <MediaList title="Top Rated" tabs={TOP_RATED_TABS} />
    </div>
  );
};
export default HomePage;
