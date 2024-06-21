import { categories, countries, languages } from "../../global/globalConstant";
import { setQuery } from "../../redux/features/newsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

const FilterNews = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.news.querys);

  const { category: Category, country: Country, language: Language ,q} = query;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="sm:w-3/5 w-11/12 mx-auto mt-10 mb-10 max-w-[920px]">
        {/* search input form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            dispatch(setQuery({ q: formData.get("q") as string }));
          }}
        >
          <label className="input input-bordered input-info flex items-center gap-2">
            <input name="q" defaultValue={q} type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </form>
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Select Country */}
        <select
          onChange={(e) => dispatch(setQuery({ country: e.target.value }))}
          className="select select-info mx-auto w-full xl:w-48 lg:w-40 max-w-xs"
        >
          <option value={""} selected={Country ? "" === Country : true}>
            Select Country
          </option>
          {countries.map((country) => (
            <option
              selected={Country ? country.value === Country : false}
              key={country.value}
              value={country.value}
            >
              {country.option}
            </option>
          ))}
        </select>
        {/* Select category */}
        <select
          onChange={(e) => dispatch(setQuery({ category: e.target.value }))}
          className="select select-info mx-auto w-full xl:w-48 lg:w-40 max-w-xs"
        >
          <option value={""} selected={Category ? "" === Category : true}>
            Select category
          </option>
          {categories.map((category) => (
            <option
              selected={Category ? category.value === Category : false}
              key={category.value}
              value={category.value}
            >
              {category.option}
            </option>
          ))}
        </select>
        {/* Select Language */}
        <select
          onChange={(e) => dispatch(setQuery({ language: e.target.value }))}
          className="select select-info mx-auto w-full xl:w-48 lg:w-40 max-w-xs"
        >
          <option value={""} selected={Language ? "" === Language : true}>
            Select Language
          </option>
          {languages.map((language) => (
            <option
              selected={Language ? language.value === Language : false}
              key={language.value}
              value={language.value}
            >
              {language.option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterNews;
