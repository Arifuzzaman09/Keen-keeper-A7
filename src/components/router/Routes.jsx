import { createBrowserRouter } from "react-router";
import RootLoyout from "../../Layout/RootLoyout";
import HomePage from "../../pages/homepage/HomePage";
import NotFound from "../../pages/Notfound/NotFound";
import AppDetails from "../../pages/appdetails/AppDetails";

export const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <RootLoyout></RootLoyout>,
      children:[
      {
        path:"/",
        element: <HomePage></HomePage>
      },
      {
        path:"/:id",
        element:<AppDetails></AppDetails>
      },
      {
        path:"/timeline",
        element: <h2>timeline</h2>
      },
      {
        path:"/stats",
        element: <h2>Stats</h2> 
      }
      ],
      errorElement: <NotFound></NotFound>
    }
  ]
)