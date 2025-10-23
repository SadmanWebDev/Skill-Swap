import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SkillDetails from "../components/SkillDetails/SkillDetails";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
// import Profile from "../pages/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/skills/:id",
        Component: SkillDetails,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      // {
      //   path: "/profile",
      //   Component: Profile,
      // },
    ],
  },
]);
