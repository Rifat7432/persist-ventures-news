import { setPage } from "../../redux/features/newsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { arrayRange } from "../../utils/handelFilter";

const Pagination = () => {
  const dispatch = useAppDispatch();
  // get all current page and total articles
  const { totalResults, page } = useAppSelector((state) => state.news);
  // creating an array of pages start 1 to last page
  const pageArray = arrayRange(1, Math.round(totalResults / 12), 1);
  // last page
  const lastPage = pageArray[pageArray.length - 1];
  // showing  first and last page in start and end but in middle i show 7 more page dynamically with an array of number
  // start is the current page dynamically show
  const start = page === 1 ? page : page - 1;
  // end is the current page + 7 dynamically show
  const end = 7 + page >= lastPage ? lastPage - 1 : 7 + page;
  // endMini is the current page + 2 dynamically show it is for lower then sm: in tailwind
  const endMini = 1 + page >= lastPage ? lastPage - 1 : 1 + page;
  return (
    <>
      {pageArray.length && (
        <div className="join flex justify-center my-10 w-11/12 mx-auto">
          <button
            disabled={page === 1}
            onClick={() => dispatch(setPage({ page: page - 1 }))}
            className="join-item btn  btn-outline"
          >
            ❮❮
          </button>

          {pageArray.length > 10 && (
            <>
              <input
                onClick={() => dispatch(setPage({ page: 1 }))}
                className={`join-item  btn btn-square ${
                  page === 1
                    ? "bg-indigo-500 hover:bg-indigo-600 checked:bg-indigo-500"
                    : ""
                }`}
                type="radio"
                name="options"
                aria-label={`${1}`}
                checked={1 === page}
              />
              {/* show only sm: */}
              {pageArray
                .slice(start + 8 >= lastPage ? end - 8 : start, end)
                .map((num) => (
                  <input
                    key={num}
                    onClick={() => {
                      dispatch(setPage({ page: num }));
                    }}
                    className={`join-item hidden sm:inline-flex btn btn-square ${
                      page === num
                        ? "bg-indigo-500 hover:bg-indigo-600 checked:bg-indigo-500"
                        : ""
                    }`}
                    type="radio"
                    name="options"
                    aria-label={`${num}`}
                    checked={num === page}
                  />
                ))}
              {/* show only lower then sm: */}
              {pageArray
                .slice(start + 2 >= lastPage ? endMini - 2 : start, endMini)
                .map((num) => (
                  <input
                    key={num}
                    onClick={() => {
                      dispatch(setPage({ page: num }));
                    }}
                    className={`join-item sm:hidden  btn btn-square ${
                      page === 1
                        ? "bg-indigo-500 hover:bg-indigo-600 checked:bg-indigo-500"
                        : ""
                    }`}
                    type="radio"
                    name="options"
                    aria-label={`${num}`}
                    checked={num === page}
                  />
                ))}
              {!(8 + page >= lastPage) && (
                <button className="join-item btn hidden sm:inline-flex btn-disabled">
                  ...
                </button>
              )}
              <input
                onClick={() => dispatch(setPage({ page: lastPage }))}
                className={`join-item  btn btn-square ${
                  page === lastPage
                    ? "bg-indigo-500 hover:bg-indigo-600 checked:bg-indigo-500"
                    : ""
                }`}
                type="radio"
                name="options"
                aria-label={`${lastPage ? lastPage : 9999}`}
                checked={lastPage === page}
              />
            </>
          )}
          {pageArray.length <= 10 && (
            <>
              {pageArray.map((num) => (
                <input
                  key={num}
                  onClick={() => dispatch(setPage({ page: num }))}
                  className={`join-item  btn btn-square ${
                    page === lastPage
                      ? "bg-indigo-500 hover:bg-indigo-600 checked:bg-indigo-500"
                      : ""
                  }`}
                  type="radio"
                  name="options"
                  aria-label={`${num}`}
                  checked={num === page}
                />
              ))}
            </>
          )}
          <button
            disabled={page === lastPage}
            onClick={() => dispatch(setPage({ page: page + 1 }))}
            className="join-item btn  btn-outline"
          >
            ❯❯
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;
