import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddVolunteer from "../pages/AddVolunteer";
import PrivateRoute from "./PrivateRoute";
import ManageMyPosts from "../pages/ManageMyPosts";
import UpdateMyPosts from "../pages/UpdateMyPosts";
import AllPosts from "../pages/AllPosts";
import PostDetails from "../pages/PostDetails";
import BeVolunteer from "../pages/BeVolunteer";
import ErrorPage from "../pages/ErrorPage";
import Activities from "../components/Activities";
import CityActivities from "../pages/CityActivities";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "*",
        element:<ErrorPage></ErrorPage> , 
      },
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addVolunteer",
        element: <PrivateRoute><AddVolunteer></AddVolunteer></PrivateRoute>,
      },
      {
        path: "/city-wise-activities",
        element: <CityActivities></CityActivities>,
      },
      {
        path: "/manage-my-post",
        element: <PrivateRoute><ManageMyPosts></ManageMyPosts></PrivateRoute>,
      },
      {
        path: `/update-my-post/:id`,
        loader: ({params})=> fetch(`https://ph-assignment-11-server-pink.vercel.app/volunteerPost/${params.id}`),
        element: <PrivateRoute><UpdateMyPosts></UpdateMyPosts></PrivateRoute>,
      },
      {
        path: `/all-volunteer-need-posts`,
        element: <AllPosts></AllPosts>,
      },
      {
        path: `/post/:id`,
        loader: ({params})=> fetch(`https://ph-assignment-11-server-pink.vercel.app/volunteerPost/${params.id}`),
        element: <PrivateRoute><PostDetails></PostDetails></PrivateRoute>,
      },
      {
        path: `/be-a-volunteer/:id`,
        loader: ({params})=> fetch(`https://ph-assignment-11-server-pink.vercel.app/volunteerPost/${params.id}`),
        element: <PrivateRoute><BeVolunteer></BeVolunteer></PrivateRoute>,
      },
    ],
  },
]);

export default router;
