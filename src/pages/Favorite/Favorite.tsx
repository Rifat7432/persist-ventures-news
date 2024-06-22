import Card from "../../assets/Components/Card/Card";
import { useAppSelector } from "../../redux/hooks/hooks";
import FavoritePagination from "./FavoritePagination";

const Favorite = () => {
  const { favorite } = useAppSelector((state) => state.news);
  // if no favorite data
  if (favorite.length === 0) {
    return (
      <div>
        <h1 className="w-full text-center text-4xl font-bold text-slate-900 mt-52">
          No Favorite News Found
        </h1>
      </div>
    );
  }
  return (
    <div>
      <div className="w-11/12 max-w-7xl mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {favorite.map((news) => (
          <Card article={news}></Card>
        ))}
        {/* // Pagination  component */}
        <FavoritePagination></FavoritePagination>
      </div>
    </div>
  );
};

export default Favorite;
