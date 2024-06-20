import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hooks";

const DetailPage = () => {
  const { newsData } = useAppSelector((state) => state.news);
  const navigate = useNavigate();
  if (!newsData) {
    return (
      <div>
        <h1 className="w-full text-center text-4xl font-bold text-slate-900 mt-52">
          Nothing Found
        </h1>
      </div>
    );
  }
  const date = new Date(newsData?.publishedAt);
  return (
    <>
      <div className="card max-w-7xl w-11/12 mx-auto mt-20 lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={newsData?.urlToImage} alt="article" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{newsData?.title}</h2>
          <div>
            <p>{newsData?.description}</p>
          </div>

          <div className="md:flex w-full my-2">
            <p className="text-md font-semibold">
              Publisher: {newsData?.author}
            </p>
            <p className="text-md font-semibold">
              Published: {date.toLocaleDateString()}
            </p>
          </div>
          <div className="card-actions justify-end">
            <button onClick={() => navigate("/")} className="btn btn-info">
              Back Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
