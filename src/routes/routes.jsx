import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import LandingPage from "../pages/Home/LandingPage/LandingPage";
import ServiceDetails from "../pages/Home/Service/ServiceDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <LandingPage/>
        },
        {
          path: '/service/:id',
          element: <ServiceDetails/>
        },
      ]
    },
  ]);

export default router;