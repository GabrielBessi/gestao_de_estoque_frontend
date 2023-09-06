import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login/login";
import RegisterPage from "../pages/register/register";
import HomePage from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
]);

export default router;
