import {  useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
const Login = () => {
  const {  LogInWIthGoogle, setUser, darkTheme } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleGoogleLogIn = () => {
    LogInWIthGoogle()
      .then((result) => {
        Swal.fire({ 
          position: "center",
          icon: "success",
          title: "Successfully Logged in",
          showConfirmButton: false,
          timer: 1500
        });
        setUser(result.user);
        // navigate(location?.state? location.state : '/');
      })
      .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
          position: "center",
          icon: "error",
          title: {errorCode},
          showConfirmButton: false,
          timer: 1500
        });
      });
  };
  return (
    <div className="px-3 mt-16">
        <h1 className={`${darkTheme ? 'text-center text-white font-bold text-2xl pt-12' : 'text-center text-logo font-bold text-2xl pt-12'}`}>
        Task Cosmos
        </h1>
      <div className=" pb-8">
        <div className="card w-full max-w-lg shrink-0 mx-auto ">
          <div className="card-body pt-3 pb-0">
            <button
              onClick={handleGoogleLogIn}
              type="submit"
              className=" outline outline-1 outline-green-logo rounded-md py-3 bg-white  "
            >
              <div className="flex flex-row gap-4 items-center justify-center">
                <FcGoogle className="text-3xl" />
                <span className={`${darkTheme ? 'text-black font-semibold' : 'font-semibold'}`}>Login with Google</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
