import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import Swal from "sweetalert2";
import { AuthContext } from "../components/AuthProvider";
import axios from "axios";
const AddVolunteer = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const { user } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const handleVolunteer = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const title = form.get("title");
    const thumbnail = form.get("thumbnail");
    const location = form.get("location");
    const totalVolunteer = Number(form.get("totalVolunteer"));
    const category = form.get("category");
    const deadline = format(new Date(form.get("deadline")), "dd-MM-yyyy");
    const name = form.get("name");
    const email = form.get("email");
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
    if (!totalVolunteer ) {
      allErrors.totalVolunteer = "No. of total volunteer is required";
      isError = true;
    }
    else if (isNaN(totalVolunteer)){
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
    if (!description) {
      allErrors.description = "Description is required";
      isError = true;
    }
    setErrors(allErrors);
    if (isError) {
      return;
    }
    const volunteerPost = {
      title,
      thumbnail,
      location,
      totalVolunteer,
      category,
      deadline,
      name,
      email,
      description,
    };
    axios
      .post("https://ph-assignment-11-server-pink.vercel.app/addVolunteerPost", volunteerPost)
      .then((res) => {
        if (res.data?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Volunteer Post added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
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
      e.target.reset();
  };
  return (
    <div className="container mx-auto pt-16">
      <div className="shadow-2xl rounded-b-2xl">
        <div className="bg-footer">
          <h1 className="text-base lg:text-4xl font-extrabold font-white py-24 text-center text-btm-footer">
            Add volunteer need post
          </h1>
        </div>
        <div className="card bg-base-100 w-full shrink-0  my-12">
          <form className="card-body " onSubmit={handleVolunteer}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Post Title </span>
                </label>
                <input
                  type="Text"
                  name="title"
                  placeholder="Post Title "
                  className="input input-bordered"
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
                  placeholder="Post Cover Image/Thumbnail link"
                  className="input input-bordered"
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
                  placeholder="Location "
                  className="input input-bordered"
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
                  placeholder="No. of volunteers needed"
                  className="input input-bordered"
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
                <select
                  className="select select-bordered"
                  name="category"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Pick one
                  </option>
                  <option>healthcare</option>
                  <option>education</option>
                  <option>social service</option>
                  <option>animal welfare</option>
                </select>
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
                <>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    placeholderText="Select Deadline"
                    className="input input-bordered w-full"
                    dateFormat="dd/MM/yyyy"
                  />

                  <input
                    type="hidden"
                    name="deadline"
                    value={selectedDate ? selectedDate.toISOString() : ""}
                  />
                </>
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
                {user && (
                  <input
                    type="Text"
                    name="name"
                    defaultValue={user.displayName}
                    placeholder="Organizer name"
                    className="input input-bordered"
                    readOnly
                  />
                )}
                {errors.name && (
                  <p className="py-1 text-red-600 text-sm ">{errors.name}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Organizer email</span>
                </label>
                {user && (
                  <input
                    type="email"
                    defaultValue={user.email}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    readOnly
                  />
                )}

                {errors.email && (
                  <p className="py-1 text-red-600 text-sm ">{errors.email}</p>
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
                className="textarea textarea-bordered textarea-lg w-full"
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
                Add Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVolunteer;
