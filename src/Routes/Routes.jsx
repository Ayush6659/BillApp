import { createBrowserRouter } from "react-router-dom";
import Register from "../Components/Users/Register";
import Login from "../Components/Users/Login";
import Main from "../Components/main/Main";


let routes = createBrowserRouter(
    [
        {
            path: "/Register",
            element:<Register></Register>

        },
        {
            path:"/",
            element:<Login></Login>
        },
        {
            path:"/home",
            element:<Main></Main>
        }
    ])
    export default routes