import { TArticle } from "../../../global/globalInterface";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { useGetHeadlineQuery } from "../../../redux/services/API";

const Carousel = () => {
  const query = useAppSelector((state) => state.news.querys.sources);
  const source = query ? query : "bbc-news";
  const { data,isLoading } = useGetHeadlineQuery({
    apiKey: "32241a5e4d344043a43dbcfa8ad43711",
    sources: source,
  });
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
                  className="w-full rounded-lg h-[500px] mt-20"
                />
                <div className="absolute top-96 left-10">
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
