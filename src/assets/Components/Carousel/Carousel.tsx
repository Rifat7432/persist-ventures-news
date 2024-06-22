import { TArticle } from "../../../global/globalInterface";
import { useAppSelector } from "../../../redux/hooks/hooks";

const Carousel = () => {
  const { value } = useAppSelector((state) => state.news);
  // get and set source
  return (
    <>
      {value && (
        <div>
          <div className="carousel w-full">
            {value.slice(0,10).map((news: TArticle) => (
              <div
                key={news.image}
                id={`item${value.indexOf(news) + 1}`}
                className="carousel-item relative w-full"
              >
                <img
                  src={news.image}
                  className="w-full rounded-lg sm:h-[500px] mt-20"
                />
                <div className="absolute top-1/3 sm:top-2/3 left-10">
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
            {value.slice(0,10).map((img: TArticle) => (
              <a
                key={img.image}
                href={`#item${value.indexOf(img) + 1}`}
                className="btn btn-xs"
              >
                {value.indexOf(img) + 1}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
