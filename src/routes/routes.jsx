import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login/login";
import RegisterPage from "../pages/register/register";
import HomePage from "../pages/home";
import ViewStorage from "../pages/viewStorage";

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
  {
    path: "view-storage",
    element: <ViewStorage />,
  },
]);

export default router;
