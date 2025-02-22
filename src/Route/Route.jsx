import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import TaskBoard from "../pages/TaskBoard";


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
        path: "/task-board",
        element: <TaskBoard></TaskBoard>,
      }
    ],
  },
]);

export default router;
