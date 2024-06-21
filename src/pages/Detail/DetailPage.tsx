import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { storFavoriteNewsData } from "../../redux/features/newsSlice";

const DetailPage = () => {
  const { newsData,favorite } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  // if no news Data
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
          <div className="rating flex justify-end">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-teal-300 checked:bg-teal-500"
              checked={favorite.includes(newsData)}
              onClick={()=>dispatch(storFavoriteNewsData(newsData))}
            />
          </div>
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
