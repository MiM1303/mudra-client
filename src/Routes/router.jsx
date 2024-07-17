import {
    createBrowserRouter,
} from "react-router-dom";
// import Main from "../Layout/Main";
import Dashboard from "../Layout/Dashboard";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import MyAccount from "../pages/Dashboard/User/MyAccount";
import DashContent from "../pages/DashContent";

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
    // {
    //   path: "/my-account",
    //   element: <MyAccount></MyAccount>
    // },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "",
            element: <DashContent></DashContent>
        },
        {
          path: "my-account",
            element: <MyAccount></MyAccount>
        },
      ]
    }
  ]);