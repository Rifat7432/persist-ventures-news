import Card from "../../assets/Components/Card/Card";
import Carousel from "../../assets/Components/Carousel/Carousel";
import { setTotalData, storNewsData } from "../../redux/features/newsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  useGetEverythingQuery,
  useGetHeadlineQuery,
} from "../../redux/services/API";
import FilterNews from "./FilterNews";
import Pagination from "./Pagination";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const {
    querys: query,
    value,
    page,
    type,
  } = useAppSelector((state) => state.news);
  const headlineQuery = {
    sources: query.sources,
    language: query.language ? query.language : "en",
    q: query.q,
    category: query.sources ? undefined : query.category,
    country: query.sources ? undefined : query.country,
    page: page,
  };
  const { data: allHeadline, isLoading } = useGetHeadlineQuery({
    apiKey: "32241a5e4d344043a43dbcfa8ad43711",
    ...headlineQuery,
    pageSize: 21,
  });
  const allNewsQuery = {
    sources: query.sources ? query.sources : "bbc-news",
    language: query.language ? query.language : "en",
    q: query.q,
    page: page,
  };
  const { data: allNews } = useGetEverythingQuery({
    apiKey: "32241a5e4d344043a43dbcfa8ad43711",
    ...allNewsQuery,
    pageSize: 21,
  });
  if (isLoading) {
    return (
      <div className="w-10 mx-auto mt-52">
        <span className="loading loading-spinner loading-lg text-info"></span>
      </div>
    );
  }
  if (allHeadline && type === "Headline") {
    dispatch(storNewsData(allHeadline.articles));
    dispatch(setTotalData({ totalResults: allHeadline.totalResults }));
  }
  if (allNews && type === "Everything") {
    dispatch(storNewsData(allNews.articles));
    dispatch(setTotalData({ totalResults: allNews.totalResults }));
  }
  if (value.length === 0) {
    return (
      <div>
        <h1 className="w-full text-center text-4xl font-bold text-slate-900 mt-52">
          No Data Found
        </h1>
      </div>
    );
  }
  return (
    <div>
      <FilterNews></FilterNews>
      <div className="w-11/12 mx-auto max-w-7xl">
        <Carousel></Carousel>
      </div>
      <div>
        <div className="w-11/12 mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {value.map((news) => (
            <Card article={news}></Card>
          ))}
        </div>
        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default HomePage;
