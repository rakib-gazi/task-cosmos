import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";

const PostDetails = () => {
  const post = useLoaderData();
  const { darkTheme } = useContext(AuthContext);

  return (
    <div className="container mx-auto pt-16">
      <div className="px-2 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-100 rounded-b-3xl px-6 pb-6 pt-12 mb-6">
          <div className="">
            <img
              src={post.thumbnail}
              alt=""
              className="h-full w-full rounded-3xl"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-btm-footer font-bold text-2xl pb-6">
                {post.title}
              </h2>
              <p className="text-lg text-logo font-bold">
                Category:{" "}
                <span className="text-black font-normal text-base">
                  {post.category}
                </span>
              </p>
              <p className="text-lg text-logo font-bold">
                Location:{" "}
                <span className="text-black font-normal text-base">
                  {post.location}
                </span>
              </p>
              <p className="text-lg text-logo font-bold">
                No. of Volunteers Needed:{" "}
                <span className="text-black font-normal text-base">
                  {post.totalVolunteer}
                </span>
              </p>
              <p className="text-lg text-logo font-bold">
                Deadline:{" "}
                <span className="text-black font-normal text-base">
                  {post.deadline}
                </span>
              </p>
              <p className="text-lg text-logo font-bold">
                Organizer Name:{" "}
                <span className="text-black font-normal text-base">
                  {post.name}
                </span>
              </p>
              <p className="text-lg text-logo font-bold">
                Organizer Email:{" "}
                <span className="text-black font-normal text-base">
                  {post.email}
                </span>
              </p>
              <p className="text-lg text-logo font-bold">
                Description:{" "}
                <span className="text-black font-normal text-base">
                  {post.description}
                </span>
              </p>
            </div>
            <div>
              {post.totalVolunteer === 0 ? (
                <>
                  <div className="text-center text-red-500 font-bold">
                    No volunteers needed at the moment.
                  </div>
                  <button
                    disabled
                    className="btn bg-gray-400 cursor-not-allowed text-white font-bold w-full "
                  >
                    Be a Volunteer
                  </button>
                </>
              ) : (
                <Link
                  to={`/be-a-volunteer/${post._id}`}
                  className="btn bg-btm-footer hover:bg-active text-white hover:text-black font-bold w-full"
                >
                  Be a Volunteer
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
