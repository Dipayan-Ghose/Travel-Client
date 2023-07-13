import Main from "./Main";

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Packages from "../Pages/Packages";
import SeatSelection from "../Components/SeatSelection/SeatSelection";
export const Route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/packages",
        element: <Packages></Packages>,
      },
      {
        path: "/selectSeat/:seatClass",
        element: <SeatSelection></SeatSelection>
      }
    ],
  },
  {
    path: "*",
    element: <h1>error page</h1>,
  },
]);
