import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import FormField from "./FormField";
import GenresInput from "./FormInput/GenresInput";
import MediaTypeInput from "./FormInput/MediaTypeInput";
import RatingInput from "./FormInput/RatingInput";
90;
const SearchForm = ({ setSearchFormValues }) => {
  const [searchParam] = useSearchParams();
  const mediaType = searchParam.get("mediaType");
  console.log({ mediaType });
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      mediaType: ["tv", "movie"].includes(mediaType) ? mediaType : "movie",
      genres: [],
      rating: "All",
    },
  });
  const onSubmit = (data) => {
    console.log({ formData: data });
  };
  const formValues = watch();
  useEffect(() => {
    setSearchFormValues(formValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(formValues)]);

  // console.log(formValues);
  return (
    <div className="rounded-lg border p-4 shadow-md">
      <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          name="mediaType"
          label="mediaType"
          control={control}
          Component={MediaTypeInput}
        />
        <FormField
          name="genres"
          label="Genres"
          control={control}
          Component={GenresInput}
        />
        <br />
        <FormField
          name="rating"
          label="Rating"
          control={control}
          Component={RatingInput}
        />
        {/* <input type="submit" className="cursor-pointer" /> */}
      </form>
    </div>
  );
};
export default SearchForm;
