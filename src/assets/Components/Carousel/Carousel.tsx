import { TArticle } from "../../../global/globalInterface";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { useGetHeadlineQuery } from "../../../redux/services/API";

const Carousel = () => {
  const query = useAppSelector((state) => state.news.querys.sources);
  // get and set source
  const source = query ? query : "bbc-news";
  // get headline acceding to source
  const { data,isLoading } = useGetHeadlineQuery({
    apiKey: import.meta.env.VITE_API_KEY,
    sources: source,
  });
  //loading state
  if (isLoading) {
    return (
      <div className="w-10 mx-auto mt-52">
        <span className="loading loading-spinner loading-lg text-info"></span>
      </div>
    );
  }
  return (
    <>
      {data?.articles && (
        <div>
          <div className="carousel w-full">
            {data?.articles.map((news: TArticle) => (
              <div
                key={news.urlToImage}
                id={`item${data?.articles.indexOf(news) + 1}`}
                className="carousel-item relative w-full"
              >
                <img
                  src={news.urlToImage}
                  className="w-full rounded-lg sm:h-[500px] mt-20"
                />
                <div className="absolute top-2/3 left-10">
                  <h2 className="text-2xl font-bold text-[#313131]">
                    {news.title}
                  </h2>
                  <p className="text-xl font-semibold text-[#313131]">
                    {news.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            {data?.articles.map((img: TArticle) => (
              <a
                href={`#item${data?.articles.indexOf(img) + 1}`}
                className="btn btn-xs"
              >
                {data?.articles.indexOf(img) + 1}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
