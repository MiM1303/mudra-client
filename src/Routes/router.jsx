import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Dashboard from "../Layout/Dashboard";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Main></Main>
        },
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
     
    }
  ]);