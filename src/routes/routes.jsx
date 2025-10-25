import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivetRoute from "../context/PrivetRoute";
import SkillDetails from "../components/SkillDetails/SkillDetails";
import MyProfile from "../pages/MyProfile/MyProfile";
import ForgetPassForm from "../pages/ForgetPassForm/ForgetPassForm";

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
        element: (
          <PrivetRoute>
            <SkillDetails></SkillDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/profile",
        Component: MyProfile,
      },
      {
        path: "/forget-password",
        Component: ForgetPassForm,
      },
    ],
  },
]);
