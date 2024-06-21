import { useNavigate } from "react-router-dom";

const NotFound = () => {
  // not found route
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <h1 className="w-full text-center text-4xl font-bold text-slate-900 mt-52">
        <span className="text-teal-400">404</span> | Not Found
      </h1>
      <button
        onClick={() => {
          navigate(`/`);
        }}
        className="btn btn-info w-36 mx-auto my-10"
      >
        Return Home
      </button>
    </div>
  );
};

export default NotFound;
