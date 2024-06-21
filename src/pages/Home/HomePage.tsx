import { useEffect } from "react";
import Card from "../../assets/Components/Card/Card";
import Carousel from "../../assets/Components/Carousel/Carousel";
import { setTotalData, storNewsData } from "../../redux/features/newsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  useGetHeadlineQuery,
} from "../../redux/services/API";
import FilterNews from "./FilterNews";
import Pagination from "./Pagination";
import { TErrorData } from "../../global/globalInterface";
import toast from "react-hot-toast";

const HomePage = () => {
  const dispatch = useAppDispatch();
  // getting data from redux store
  const {
    querys: query,
    value,
    page,
  } = useAppSelector((state) => state.news);
  // query of headline
  const headlineQuery = {
    lang: query.language ? query.language : "en",
    q: query.q,
    category:  query.category,
    country:query.country,
    page: page,
    max: 12,
  };
  // get headline
  const {
    data: allHeadline,
    isLoading,
    error: getHeadlineError,
  } = useGetHeadlineQuery({
    apikey: import.meta.env.VITE_API_KEY,
    ...headlineQuery,
    
  });
 

  // showing errors by toast
  useEffect(() => {
    if (!allHeadline ||value.length === 0) {
      // get headline error
      if (getHeadlineError) {
        if ("status" in getHeadlineError) {
          //if user offline
          if (typeof getHeadlineError?.status === "string") {
            toast.error(`soothing went wrong`);
          }
          // any api relate error
          if (typeof getHeadlineError?.status === "number") {
            if ("data" in getHeadlineError) {
              const errorData: TErrorData = getHeadlineError.data as TErrorData;
              toast.error(`${errorData?.errors[0].split(".")[0]}`);
            }
          }
        }
      }
    }
  }, [getHeadlineError]);
  // loading state
  if (isLoading) {
    return (
      <div className="w-10 mx-auto mt-52">
        <span className="loading loading-spinner loading-lg text-info"></span>
      </div>
    );
  }
  // setting data if user want to see headline
  if (allHeadline) {
    dispatch(storNewsData(allHeadline.articles));
    dispatch(setTotalData({ totalResults: allHeadline.totalArticles }));
  }
  // if data don't set or get
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
      {/* // filter news component */}
      <FilterNews></FilterNews>
      <div className="w-11/12 mx-auto max-w-7xl">
      {/* //headline Carousel component */}
        <Carousel></Carousel>
      </div>
      <div>
        <div className="w-11/12 max-w-7xl mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* // news Card component */}
          {value.map((news) => (
            <Card article={news}></Card>
          ))}
        </div>
        {/* // Pagination  component */}
        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default HomePage;
