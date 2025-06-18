import { createBrowserRouter } from "react-router-dom";
import Register from "../Components/Users/Register";


let routes = createBrowserRouter(
    [
        {
            path: "/",
            element:<Register></Register>

        }
    ])
    export default routes