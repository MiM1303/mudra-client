import {
    createBrowserRouter,
} from "react-router-dom";
// import Main from "../Layout/Main";
import Dashboard from "../Layout/Dashboard";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
      children: [
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Registration></Registration>
        },
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "my-account",
            element: <Login></Login>
        },
        {
            path: "register",
            element: <Registration></Registration>
        },
      ]
    }
  ]);