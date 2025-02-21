import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { FaLongArrowAltRight } from "react-icons/fa";

const VolunteerPostHome = () => {
  const data = useLoaderData();
  const { darkTheme } = useContext(AuthContext);

  return (
    <div className="mt-12 px-4">
      <h1 className= {`${darkTheme ? 'text-white' : 'text-btm-footer'} font-bold text-3xl`}>
        Volunteer Needs Now
      </h1>
      <div className="divider divider-neutral"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6  xl:gap-6 2xl:gap-3 px-2">
        {data.map((post) => (
          <div
            className={`card card-compact  shadow-xl ${
              darkTheme ? " bg-active text-black" : "bg-base-100"
            }`}
            key={post._id}
          >
            <figure>
              <img src={post.thumbnail} alt="Shoes" className="h-64 w-full" />
            </figure>
            <div className={`card-body `}>
              <h2 className="card-title text-btm-footer">{post.title}</h2>
              <p className="text-lg text-logo font-bold">
                Category:{" "}
                <span className="text-black font-normal text-base">
                  {post.category}
                </span>
              </p>
              <p className="text-lg text-logo font-bold">
                Deadline:{" "}
                <span className="text-black font-normal text-base">
                  {post.deadline}
                </span>
              </p>

              <div className="card-actions justify-end">
                <Link
                  to={`/post/${post._id}`}
                  className="btn bg-btm-footer hover:bg-active text-white hover:text-black font-bold w-full"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center my-8">
        <Link
          to={"/all-volunteer-need-posts"}
          className="flex justify-center items-center gap-2 btn bg-btm-footer hover:bg-active text-white hover:text-black font-bold text-medium shadow-2xl"
        >
          <button>View All</button>
          <FaLongArrowAltRight className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default VolunteerPostHome;
