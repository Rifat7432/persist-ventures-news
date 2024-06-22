import { setFavoritePage } from "../../redux/features/newsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { arrayRange } from "../../utils/handelFilter";


const FavoritePagination = () => {
  const dispatch = useAppDispatch();
  // get all current page and total articles
  const { favorite, favoritePage } = useAppSelector((state) => state.news);
  // creating an array of pages start 1 to last page
  const pageArray = arrayRange(1, Math.round(favorite.length / 12), 1);
  // last page
  const lastPage = pageArray[pageArray.length - 1];
  // showing  first and last page in start and end but in middle i show 7 more page dynamically with an array of number
  // start is the current page dynamically show
  const start = favoritePage === 1 ? favoritePage : favoritePage - 1;
  // end is the current page + 7 dynamically show
  const end = 7 + favoritePage >= lastPage ? lastPage - 1 : 7 + favoritePage;
  // endMini is the current page + 2 dynamically show it is for lower then sm: in tailwind
  const endMini =
    1 + favoritePage >= lastPage ? lastPage - 1 : 1 + favoritePage;
  return (
    <>
      {pageArray.length && (
        <div className="join flex justify-center my-10 w-11/12 mx-auto">
          <button
            disabled={favoritePage === 1}
            onClick={() =>
              dispatch(setFavoritePage({ favoritePage: favoritePage - 1 }))
            }
            className="join-item btn  btn-outline"
          >
            ❮❮
          </button>

          {pageArray.length > 10 && (
            <>
              <input
                onClick={() => dispatch(setFavoritePage({ favoritePage: 1 }))}
                className={`join-item  btn btn-square ${
                  favoritePage === 1
                    ? "bg-indigo-500 hover:bg-indigo-600 checked:bg-indigo-500"
                    : ""
                }`}
                type="radio"
                name="options"
                aria-label={`${1}`}
                checked={1 === favoritePage}
              />
              {/* show only sm: */}
              {pageArray
                .slice(start + 8 >= lastPage ? end - 8 : start, end)
                .map((num) => (
                  <input
                    key={num}
                    onClick={() => {
                      dispatch(setFavoritePage({ favoritePage: num }));
                    }}
                    className={`join-item hidden sm:inline-flex btn btn-square ${
                      favoritePage === num
                        ? "bg-indigo-500 hover:bg-indigo-600 checked:bg-indigo-500"
                        : ""
                    }`}
                    type="radio"
                    name="options"
                    aria-label={`${num}`}
                    checked={num === favoritePage}
                  />
                ))}
              {/* show only lower then sm: */}
              {pageArray
                .slice(start + 2 >= lastPage ? endMini - 2 : start, endMini)
                .map((num) => (
                  <input
                    key={num}
                    onClick={() => {
                      dispatch(setFavoritePage({ favoritePage: num }));
                    }}
                    className={`join-item sm:hidden  btn btn-square ${
                      favoritePage === 1
                        ? "bg-indigo-500 hover:bg-indigo-600 checked:bg-indigo-500"
                        : ""
                    }`}
                    type="radio"
                    name="options"
                    aria-label={`${num}`}
                    checked={num === favoritePage}
                  />
                ))}
              {!(8 + favoritePage >= lastPage) && (
                <button className="join-item btn hidden sm:inline-flex btn-disabled">
                  ...
                </button>
              )}
              <input
                onClick={() =>
                  dispatch(setFavoritePage({ favoritePage: lastPage }))
                }
                className={`join-item  btn btn-square ${
                  favoritePage === lastPage
                    ? "bg-indigo-500 hover:bg-indigo-600 checked:bg-indigo-500"
                    : ""
                }`}
                type="radio"
                name="options"
                aria-label={`${lastPage ? lastPage : 9999}`}
                checked={lastPage === favoritePage}
              />
            </>
          )}
          {pageArray.length <= 10 && (
            <>
              {pageArray.map((num) => (
                <input
                  key={num}
                  onClick={() =>
                    dispatch(setFavoritePage({ favoritePage: num }))
                  }
                  className={`join-item  btn btn-square ${
                    favoritePage === lastPage
                      ? "bg-indigo-500 hover:bg-indigo-600 checked:bg-indigo-500"
                      : ""
                  }`}
                  type="radio"
                  name="options"
                  aria-label={`${num}`}
                  checked={num === favoritePage}
                />
              ))}
            </>
          )}
          <button
            disabled={favoritePage === lastPage}
            onClick={() =>
              dispatch(setFavoritePage({ favoritePage: favoritePage + 1 }))
            }
            className="join-item btn  btn-outline"
          >
            ❯❯
          </button>
        </div>
      )}
    </>
  );
};

export default FavoritePagination;
