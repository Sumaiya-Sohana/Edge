import { createBrowserRouter } from "react-router";
import Mainl from "../Layout/MainL/Mainl";
import Homepage from "../Homepage/Homepage";
import ToDo from "../ToDo/ToDo";
import About from "../About/About";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Mainl></Mainl>,
    children: [
        {
            path:"/",
            element: <Homepage></Homepage>
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/todo",
            element: <ToDo></ToDo>
        },
    ]
  },
]);
export default router;