import { setPage } from "../../redux/features/newsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { arrayRange } from "../../utils/handelFilter";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const { totalResults, page } = useAppSelector((state) => state.news);
  const pageArray = arrayRange(1, Math.round(totalResults / 21), 1);
  const lastPage = pageArray[pageArray.length - 1];
  const end = 7 + page >= lastPage ? lastPage - 1 : 7 + page;
  const endMini = 1 + page >= lastPage ? lastPage - 1 : 1 + page;
  const start = page === 1 ? page : page - 1;
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
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label={`${1}`}
                checked={1 === page}
              />
              {pageArray
                .slice(start + 8 >= lastPage ? end - 8 : start, end)
                .map((num) => (
                  <input
                    key={num}
                    onClick={() => dispatch(setPage({ page: num }))}
                    className="join-item hidden sm:inline-flex btn btn-square"
                    type="radio"
                    name="options"
                    aria-label={`${num}`}
                    checked={num === page}
                  />
                ))}
              {pageArray
                .slice(start + 2 >= lastPage ? endMini - 2 : start, endMini)
                .map((num) => (
                  <input
                    key={num}
                    onClick={() => dispatch(setPage({ page: num }))}
                    className="join-item  sm:hidden btn btn-square"
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
                className="join-item btn btn-square"
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
                  className="join-item btn btn-square"
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
