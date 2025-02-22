import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
const Navbar = () => {
  const { user, setUser, LogOutUser, theme, toggleTheme, darkTheme } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogOut = () => {
    LogOutUser()
      .then(() => {
        setUser(null);
        navigate("/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logged Out",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
          position: "center",
          icon: "error",
          title: { errorCode },
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const links = [
    
  ];
  return (
    <>
   
      {
      user && (
        <div className="bg-btm-footer fixed top-0 z-50 w-full">
          <div className="container mx-auto">
            <div className="navbar">
              <div className="navbar-start">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        darkTheme ? "text-white" : "text-white"
                      } `}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-logo rounded-box z-50 mt-3 w-72 p-2 shadow"
                  >
                    {links.map((link, index) => (
                      <li key={index}>{link}</li>
                    ))}
                  </ul>
                </div>
                <Link className=" text-xl">
                  <h1 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-white">Task Cosmos</h1>
                </Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="flex justify-center items-center gap-4 lg:gap-1 xl:gap-4 px-1 ">
                  {links.map((link, index) => (
                    <li key={index}>{link}</li>
                  ))}
                </ul>
              </div>
              <div className="navbar-end flex justify-end items-center gap-2">
                <label className="grid cursor-pointer place-items-center">
                  <input
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                    className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                  />
                  <svg
                    className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                  <svg
                    className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </label>

                {user?.email ? (
                  <>
                    <div className="dropdown dropdown-bottom dropdown-hover dropdown-end cursor-pointer">
                      <div className="avatar h-8 md:h-12 w-8 md:w-12">
                        <div className="ring-primary ring-offset-base-100 w-12 md:w-24 rounded-full ring ring-offset-2">
                          <img
                            src={
                              user?.photoURL ||
                              "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            }
                            alt={user.displayName}
                          />
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-footer rounded-box z-50 w-60 p-4 shadow flex flex-col gap-3"
                      >
                        <p
                          className={`${
                            darkTheme ? "font-bold text-black" : "font-bold"
                          }`}
                        >
                          Name: {user.displayName}
                        </p>
                        <div>
                          <button
                            onClick={handleLogOut}
                            className={`bg-active font-bold hover:bg-active px-2 lg:px-2 xl:px-6 py-1 lg:py-1 xl:py-2 rounded text-sm md:text-base ${
                              darkTheme
                                ? "text-white bg-btm-footer hover:bg-btm-footer"
                                : "bg-nav text-white hover:bg-nav"
                            }`}
                          >
                            Logout
                          </button>
                        </div>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive
                          ? `bg-active font-bold hover:bg-active px-1 lg:px-2 xl:px-6 py-1 lg:py-1 xl:py-2 rounded text-sm md:text-base ${
                              darkTheme ? "text-black" : ""
                            }`
                          : "bg-none text-white font-medium px-1 lg:px-2 xl:px-6 py-1 lg:py-1 xl:py-2 rounded text-sm md:text-base"
                      }
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      className={({ isActive }) =>
                        isActive
                          ? `bg-active font-bold hover:bg-active px-2 lg:px-2 xl:px-6 py-1 lg:py-1 xl:py-2 rounded text-sm md:text-base ${
                              darkTheme ? "text-black" : ""
                            }`
                          : "bg-none text-white font-medium px-2 lg:px-2 xl:px-6 py-2 lg:py-1 xl:py-2 rounded text-sm md:text-base"
                      }
                    >
                      Signup
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
