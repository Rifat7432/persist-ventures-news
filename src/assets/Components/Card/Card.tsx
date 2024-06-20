import { useNavigate } from "react-router-dom";
import { TArticle } from "../../../global/globalInterface";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { storANewsData } from "../../../redux/features/newsSlice";

const Card = ({ article }: { article: TArticle }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  return (
      <div className="card w-full sm:w-96 md:w-80 lg:w-96 mx-auto bg-base-100 shadow-xl image-full">
        <figure>
          <img src={article?.urlToImage} alt="article" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{article?.title}</h2>
          <div className="card-actions justify-start">
            <button onClick={()=>{
              dispatch(storANewsData(article))
              navigate(`detail/${article?.title}`)
              }} className="btn btn-info">View Detail</button>
          </div>
        </div>
      </div>
  );
};

export default Card;
