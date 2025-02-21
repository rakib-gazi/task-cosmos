import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../components/AuthProvider";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import bVolunteer from "../assets/bevolunteer.jpg";

const BeVolunteer = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const handleVolunteerUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const postId = form.get("postId");
    const title = form.get("title");
    const thumbnail = form.get("thumbnail");
    const location = form.get("location");
    const totalVolunteer = Number(form.get("totalVolunteer"));
    const category = form.get("category");
    const deadline = form.get("deadline");
    const name = form.get("name");
    const email = form.get("email");
    const volunteerName = form.get("volunteerName");
    const volunteerEmail = form.get("volunteerEmail");
    const suggestion = form.get("suggestion");
    const status = form.get("status");
    const description = form.get("description");
    setErrors({});
    let isError = false;
    const allErrors = {};
    if (!title) {
      allErrors.title = "Title is required";
      isError = true;
    }
    if (!thumbnail) {
      allErrors.thumbnail = "Thumbnail is required";
      isError = true;
    }
    if (!location) {
      allErrors.location = "Location is required";
      isError = true;
    }
    if (!totalVolunteer) {
      allErrors.totalVolunteer = "No. of total volunteer is required";
      isError = true;
    } else if (isNaN(totalVolunteer)) {
      allErrors.totalVolunteer = "No. of total volunteer must be a number";
      isError = true;
    }
    if (!category) {
      allErrors.category = "Category is required";
      isError = true;
    }
    if (!deadline) {
      allErrors.deadline = "Deadline is required";
      isError = true;
    }
    if (!name) {
      allErrors.name = "Organizer name is required";
      isError = true;
    }
    if (!email) {
      allErrors.email = "Organizer email is required";
      isError = true;
    }
    if (!volunteerName) {
      allErrors.volunteerName = "Volunteer name is required";
      isError = true;
    }
    if (!volunteerEmail) {
      allErrors.volunteerEmail = "Volunteer Email is required";
      isError = true;
    }
    if (!suggestion) {
      allErrors.suggestion = "Suggestion is required";
      isError = true;
    }
    if (!status) {
      allErrors.status = "Status is required";
      isError = true;
    }
    if (!description) {
      allErrors.description = "Description is required";
      isError = true;
    }
    setErrors(allErrors);
    if (isError) {
      return;
    }
    const volunteerRequest = {
      postId,
      title,
      thumbnail,
      location,
      totalVolunteer,
      category,
      deadline,
      name,
      email,
      volunteerName,
      volunteerEmail,
      suggestion,
      status,
      description,
    };
    setLoading(true);
    axios
      .post(`https://ph-assignment-11-server-pink.vercel.app/volunteer-request`, volunteerRequest)
      .then((res) => {
        if (res.data?.insertedId ) {
          setLoading(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Volunteer Post added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed to add Volunteer Post",
          text:
            error.message || "Something went wrong. Please try again later.",
          showConfirmButton: true,
        });
      });
      
  };
  return (
    <div className="container mx-auto">
      <div className="shadow-2xl rounded-b-2xl mt-16">
        <div className="">
          <img src={bVolunteer} alt="" className="h-60 w-full" />
        </div>
        <div className="card bg-base-100 w-full shrink-0  my-12">
          <form className="card-body " onSubmit={handleVolunteerUpdate}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <input type="hidden" name="postId" value={data._id} />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Post Title </span>
                </label>
                <input
                  type="Text"
                  name="title"
                  defaultValue={data.title}
                  placeholder="Post Title "
                  className="input input-bordered"
                  readOnly
                />
                {errors.title && (
                  <p className="py-1 text-red-600 text-sm ">{errors.title}</p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Thumbnail URL</span>
                </label>
                <input
                  type="Text"
                  name="thumbnail"
                  defaultValue={data.thumbnail}
                  placeholder="Post Cover Image/Thumbnail link"
                  className="input input-bordered"
                  readOnly
                />
                {errors.thumbnail && (
                  <p className="py-1 text-red-600 text-sm ">
                    {errors.thumbnail}
                  </p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location </span>
                </label>
                <input
                  type="Text"
                  name="location"
                  defaultValue={data.location}
                  placeholder="Location "
                  className="input input-bordered"
                  readOnly
                />
                {errors.location && (
                  <p className="py-1 text-red-600 text-sm ">
                    {errors.location}
                  </p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">No. of volunteers needed </span>
                </label>
                <input
                  type="Text"
                  name="totalVolunteer"
                  defaultValue={data.totalVolunteer}
                  placeholder="No. of volunteers needed"
                  className="input input-bordered"
                  readOnly
                />
                {errors.totalVolunteer && (
                  <p className="py-1 text-red-600 text-sm ">
                    {errors.totalVolunteer}
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category </span>
                </label>
                <input
                  type="Text"
                  name="category"
                  defaultValue={data.category}
                  placeholder="No. of volunteers needed"
                  className="input input-bordered"
                  readOnly
                />
                {errors.category && (
                  <p className="py-1 text-red-600 text-sm ">
                    {errors.category}
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Deadline </span>
                </label>
                <input
                  type="Text"
                  name="deadline"
                  defaultValue={data.deadline}
                  placeholder="No. of volunteers needed"
                  className="input input-bordered"
                  readOnly
                />
                {errors.deadline && (
                  <p className="py-1 text-red-600 text-sm ">
                    {errors.deadline}
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Organizer name </span>
                </label>
                
                  <input
                    type="Text"
                    name="name"
                    defaultValue={data.name}
                    placeholder="Organizer name"
                    className="input input-bordered"
                    readOnly
                  />
                {errors.name && (
                  <p className="py-1 text-red-600 text-sm ">{errors.name}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Organizer email</span>
                </label>
                  <input
                    type="email"
                    defaultValue={data.email}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    readOnly
                  />

                {errors.email && (
                  <p className="py-1 text-red-600 text-sm ">{errors.email}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Volunteer name </span>
                </label>
                {user && (
                  <input
                    type="Text"
                    name="volunteerName"
                    defaultValue={user.displayName}
                    placeholder="Volunteer name"
                    className="input input-bordered"
                    readOnly
                  />
                )}
                {errors.volunteerName && (
                  <p className="py-1 text-red-600 text-sm ">{errors.volunteerName}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">volunteer email</span>
                </label>
                {user && (
                  <input
                    type="email"
                    defaultValue={user.email}
                    name="volunteerEmail"
                    placeholder="volunteer email"
                    className="input input-bordered"
                    readOnly
                  />
                )}

                {errors.volunteerEmail && (
                  <p className="py-1 text-red-600 text-sm ">{errors.volunteerEmail}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Suggestion </span>
                </label>
                <input
                  type="Text"
                  name="suggestion"
                  placeholder="Suggestion "
                  className="input input-bordered"
                  
                />
                {errors.suggestion && (
                  <p className="py-1 text-red-600 text-sm ">{errors.suggestion}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Status </span>
                </label>
                <input
                  type="Text"
                  name="status"
                  defaultValue="Requested"
                  placeholder="Status "
                  className="input input-bordered"
                  
                />
                {errors.status && (
                  <p className="py-1 text-red-600 text-sm ">{errors.status}</p>
                )}
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                placeholder="Description"
                defaultValue={data.description}
                className="textarea textarea-bordered textarea-lg w-full"
                readOnly 
              ></textarea>
              {errors.description && (
                <p className="py-1 text-red-600 text-sm ">
                  {errors.description}
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-active text-black font-bold hover:bg-active"
              >
                {loading ? <span className="loading loading-spinner loading-lg text-primary"></span> : "Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BeVolunteer;
