import { createBrowserRouter } from "react-router-dom";
import Register from "../Components/Users/Register";
import Login from "../Components/Users/Login";


let routes = createBrowserRouter(
    [
        {
            path: "/",
            element:<Register></Register>

        },
        {
            path:"/Login",
            element:<Login></Login>
        }
    ])
    export default routes