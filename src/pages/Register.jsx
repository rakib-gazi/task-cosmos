import { useContext, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
const Register = () => {
  const { createUser, LogInWIthGoogle, setUser, darkTheme } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [nameError, setNameError] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    setNameError("");
    setPhotoError("");
    setEmailError("");
    setPassError("");
    const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    let isError = false;
    if (!name) {
      setNameError("Name is required");
      isError = true;
    }
    if (!photo) {
      setPhotoError("Photo link is required");
      isError = true;
    }
    if (!email) {
      setEmailError("Email is required");
      isError = true;
    }
    if (!password) {
      setPassError("Password is required");
      isError = true;
    } else if (password.length < 6) {
      setPassError("Password must be 6 character long");
      isError = true;
    } else if (!passwordRegx.test(password)) {
      setPassError(
        "Password must include at least one uppercase & one lowercase letter."
      );
      isError = true;
    }
    if (isError) {
      return;
    }
    createUser(email, password)
      .then((user) => {
        const newUser = user.user;
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          setUser((prevUser) => ({
            ...prevUser,
            displayName: name,
            photoURL: photo,
          }));
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Logged in",
            showConfirmButton: false,
            timer: 1500,
          });
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.message ? error.message : "Invalid Email or Password",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    e.target.reset();
  };
  const handleGoogleLogIn = () => {
    LogInWIthGoogle()
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logged in",
          showConfirmButton: false,
          timer: 1500,
        });
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.message ? error.message : "Invalid Email or Password",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="px-3 mt-16">
      <h1 className={`${darkTheme ? 'text-center text-white font-bold text-2xl pt-12' : 'text-center text-logo font-bold text-2xl pt-12'}`}>
        Signup Here
        
      </h1>
      <div className=" pb-8">
        <div className="card w-full max-w-lg shrink-0 mx-auto ">
          <form onSubmit={handleSignUp} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </div>
            {nameError && (
              <p className="py-1 text-red-600 text-sm ">{nameError}</p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="photo"
                name="photo"
                placeholder="Enter your photo URL"
                className="input input-bordered"
              />
            </div>
            {photoError && (
              <p className="py-1 text-red-600 text-sm ">{photoError}</p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your  email"
                className="input input-bordered"
              />
            </div>
            {emailError && (
              <p className="py-1 text-red-600 text-sm ">{emailError}</p>
            )}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
              />
              <div
                onClick={handleShowPassword}
                className="absolute bottom-3 right-3 cursor-pointer"
              >
                {showPassword ? (
                  <LuEyeOff className="text-2xl" />
                ) : (
                  <LuEye className="text-2xl" />
                )}
              </div>
            </div>
            {passError && (
              <p className="py-1 text-red-600 text-sm ">{passError}</p>
            )}
            <div className="form-control mt-1">
              <button
                type="submit"
                className="rounded-md py-3 bg-logo hover:bg-green-logo text-white"
              >
                Signup
              </button>
            </div>
          </form>
          <div className="divider card-body py-0">OR</div>
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
          <div className="card-body pt-4">
            <p className="font-semibold">
              Already have an account?{" "}
              <Link
                to="/login"
                className={`${darkTheme ? 'text-footer text-base md:text-xl underline hover:text-blue-600' : 'text-logo text-base md:text-xl underline hover:text-blue-600'}`}
              >
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
