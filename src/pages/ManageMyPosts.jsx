import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";
import { BsGrid3X3Gap } from "react-icons/bs";
import { HiMiniBars4 } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
const ManageMyPosts = () => {
  const { user, darkTheme } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [requestPosts, setRequestPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [layout, setLayout] = useState("three-column-layout");
  const [layoutRequest, setLayoutRequest] = useState(
    "request-three-column-layout"
  );
  const axiosSecure = useAxios();
  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(`/volunteerPost?email=${user.email}`)
      .then((res) => setPosts(res.data));
    setLoading(false);
  }, [user.email]);
  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(`/volunteer-request-post?email=${user.email}`)
      .then((res) => setRequestPosts(res.data));
    setLoading(false);
  }, [user.email]);
  const handleThreeColumnLayout = () => {
    setLayout("three-column-layout");
  };

  const handleFormLayout = () => {
    setLayout("form-layout");
  };
  const handleRequestThreeColumnLayout = () => {
    setLayoutRequest("request-three-column-layout");
  };

  const handleRequestFormLayout = () => {
    setLayoutRequest("form-layout-request");
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undone this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        axios
          .delete(
            `https://ph-assignment-11-server-pink.vercel.app/volunteerPost/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              setLoading(false);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingPosts = posts.filter((post) => post._id !== id);
              setPosts(remainingPosts);
            }
          });
      }
    });
  };
  const handleRequestDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undone this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        axios
          .delete(
            `https://ph-assignment-11-server-pink.vercel.app/volunteer-request-post/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              setLoading(false);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingRequestPosts = requestPosts.filter(
                (post) => post._id !== id
              );
              setRequestPosts(remainingRequestPosts);
            }
          });
      }
    });
  };
  return (
    <div className="container mx-auto mb-16 px-4 pt-24">
      <div className="">
        <div className="grid grid-cols-2 justify-between items-end mt-12 px-4">
          <h1
            className={`${
              darkTheme ? "text-white" : "text-btm-footer "
            } font-bold text-base lg:text-3xl`}
          >
            My volunteer Need posts
          </h1>
          <div className="flex justify-end items-center gap-4">
            <BsGrid3X3Gap
              onClick={handleThreeColumnLayout}
              className={`${
                darkTheme
                  ? "text-3xl text-white cursor-pointer"
                  : "text-3xl text-btm-footer cursor-pointer"
              }`}
            />
            <HiMiniBars4
              onClick={handleFormLayout}
              className={`${
                darkTheme
                  ? "text-3xl text-white cursor-pointer"
                  : "text-3xl text-btm-footer cursor-pointer"
              }`}
            />
          </div>
        </div>
        <div
          className={`${
            darkTheme ? "  divider-secondary" : " divider-neutral"
          } divider`}
        ></div>
        {layout === "three-column-layout" ? (
          loading ? (
            <div className="flex justify-center py-10">
              <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
          ) : posts.length === 0 ? (
            <div className="flex justify-center items-center py-12 px-4 rounded-3xl shadow-xl">
              <h1
                className={`${
                  darkTheme ? "text-white " : "text-btm-footer "
                }font-bold text-3xl`}
              >
                No data Available
              </h1>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className={`card card-side  shadow-xl ${
                    darkTheme ? "bg-active" : "bg-base-100"
                  }`}
                >
                  <figure>
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="h-full w-48 object-cover"
                    />
                  </figure>
                  <div
                    className={`${
                      darkTheme
                        ? "text-black card-body px-4 py-3"
                        : "card-body px-4 py-3"
                    }`}
                  >
                    <h2 className="card-title text-base">{post.title}</h2>
                    <p className="flex gap-2 items-center text-sm">
                      <IoLocationSharp /> {post.location}
                    </p>
                    <p className="flex gap-2 items-center text-sm">
                      <span className="font-bold">No. of Volunteer:</span>{" "}
                      {post.totalVolunteer}
                    </p>
                    <p className="flex gap-2 items-center text-sm">
                      <span className="font-bold">Category:</span>{" "}
                      {post.category}
                    </p>
                    <p className="flex gap-2 items-center text-sm">
                      <span className="font-bold">Deadline:</span>{" "}
                      {post.deadline}
                    </p>
                    <div className="flex  items-center gap-2 pt-2">
                      <Link to={`/update-my-post/${post._id}`}>
                        <button className="bg-btm-footer text-white font-bold px-4 rounded-xl py-1">
                          Update
                        </button>
                      </Link>
                      <button onClick={() => handleDelete(post._id)}>
                        <div className="bg-red-600 text-white font-bold px-4 rounded-xl py-1">
                          Delete
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="overflow-x-auto my-6 ">
            <table className="table table-xs">
              <thead>
                <tr
                  className={`${
                    darkTheme
                      ? "text-white font-bold text-base"
                      : "text-black font-bold text-base"
                  }`}
                >
                  <th>SL</th>
                  <th>Title</th>
                  <th>Location</th>
                  <th>No. of Volunteer</th>
                  <th className="max-w-96">category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {posts.length === 0 ? (
                  <tr>
                    <td
                      colSpan="6"
                      className={`${
                        darkTheme
                          ? "text-white text-center text-xl"
                          : "text-center text-xl"
                      }`}
                    >
                      No data Available
                    </td>
                  </tr>
                ) : (
                  posts.map((post, index) => (
                    <tr
                      key={post._id}
                      className={`${darkTheme ? "text-white" : ""}`}
                    >
                      <th>{index + 1}</th>
                      <td>{post.title}</td>
                      <td>{post.location}</td>
                      <td>{post.totalVolunteer}</td>
                      <td className="max-w-96">{post.category}</td>
                      <td>
                        <div className="flex  items-center gap-1">
                          <Link to={`/update-my-post/${post._id}`}>
                            <FiEdit
                              className={`${
                                darkTheme
                                  ? "text-white text-xl font-bold"
                                  : "text-logo text-xl font-bold"
                              }`}
                            />
                          </Link>
                          <button onClick={() => handleDelete(post._id)}>
                            <MdDelete className="text-red-600 text-2xl font-bold" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div>
        <div className="grid grid-cols-2 justify-between items-end mt-12 px-4">
          <h1
            className={`${
              darkTheme ? "text-white" : "text-btm-footer "
            } font-bold text-base lg:text-3xl`}
          >
            My Volunteer Request Post
          </h1>
          <div className="flex justify-end items-center gap-4">
            <BsGrid3X3Gap
              onClick={handleRequestThreeColumnLayout}
              className={`${
                darkTheme
                  ? "text-3xl text-white cursor-pointer"
                  : "text-3xl text-btm-footer cursor-pointer"
              }`}
            />
            <HiMiniBars4
              onClick={handleRequestFormLayout}
              className={`${
                darkTheme
                  ? "text-3xl text-white cursor-pointer"
                  : "text-3xl text-btm-footer cursor-pointer"
              }`}
            />
          </div>
        </div>
        <div
          className={`${
            darkTheme ? "  divider-secondary" : " divider-neutral"
          } divider`}
        ></div>
        {layoutRequest === "request-three-column-layout" ? (
          requestPosts.length === 0 ? (
            <div className="flex justify-center items-center py-12 px-4 rounded-3xl shadow-xl">
              <h1
                className={`${
                  darkTheme ? "text-white " : "text-btm-footer "
                }font-bold text-3xl`}
              >
                No data Available
              </h1>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {requestPosts.map((post) => (
                <div
                  key={post._id}
                  className={`card card-side  shadow-xl ${
                    darkTheme ? "bg-active" : "bg-base-100"
                  }`}
                >
                  <figure>
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="h-full w-48 object-cover"
                    />
                  </figure>
                  <div
                    className={`${
                      darkTheme
                        ? "text-black card-body px-4 py-3"
                        : "card-body px-4 py-3"
                    }`}
                  >
                    <h2 className="card-title text-base">{post.title}</h2>
                    <p className="flex gap-2 items-center text-sm">
                      <IoLocationSharp /> {post.location}
                    </p>
                    <p className="flex gap-2 items-center text-sm">
                      <span className="font-bold">No. of Volunteer:</span>{" "}
                      {post.totalVolunteer}
                    </p>
                    <p className="flex gap-2 items-center text-sm">
                      <span className="font-bold">Category:</span>{" "}
                      {post.category}
                    </p>
                    <p className="flex gap-2 items-center text-sm">
                      <span className="font-bold">Deadline:</span>{" "}
                      {post.deadline}
                    </p>
                    <div className="flex  items-center gap-2 pt-2">
                      <button onClick={() => handleRequestDelete(post._id)}>
                        <div className="bg-red-600 text-white font-bold px-4 rounded-xl py-1">
                          Cancel
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="overflow-x-auto my-6 ">
            <table className="table table-xs">
              <thead>
                <tr
                  className={`${
                    darkTheme
                      ? "text-white font-bold text-base"
                      : "text-black font-bold text-base"
                  }`}
                >
                  <th>SL</th>
                  <th>Title</th>
                  <th>Location</th>
                  <th>No. of Volunteer</th>
                  <th className="max-w-96">category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {requestPosts.length === 0 ? (
                  <tr>
                    <td
                      colSpan="6"
                      className={`${
                        darkTheme
                          ? "text-white text-center text-xl"
                          : "text-center text-xl"
                      }`}
                    >
                      No data Available
                    </td>
                  </tr>
                ) : (
                  requestPosts.map((post, index) => (
                    <tr
                      key={post._id}
                      className={`${darkTheme ? "text-white" : ""}`}
                    >
                      <th>{index + 1}</th>
                      <td>{post.title}</td>
                      <td>{post.location}</td>
                      <td>{post.totalVolunteer}</td>
                      <td className="max-w-96">{post.category}</td>
                      <td>
                        <div className="flex  items-center gap-1">
                          <button onClick={() => handleRequestDelete(post._id)}>
                            <div className="bg-red-600 text-white font-bold px-4 rounded-xl py-1">
                              Cancel
                            </div>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageMyPosts;
