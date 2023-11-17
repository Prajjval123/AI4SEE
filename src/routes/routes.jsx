import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import LandingPage from "../pages/Home/LandingPage/LandingPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <LandingPage/>
        }
      ]
    },
  ]);

export default router;