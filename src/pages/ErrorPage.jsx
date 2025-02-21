import { useNavigate } from "react-router-dom";
import error from "../assets/error.jpg";
const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); 
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 mb-12 mt-16">
        <img
          src={error}
          alt="404 Error , Page not found"
          className="h-96 w-96 rounded-3xl pt-12"
        />
        <button
          onClick={handleGoBack}
          className="text-xl text-white bg-logo rounded-full px-8 py-2 font-semibold"
        >
          Go Back
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
