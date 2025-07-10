import { createBrowserRouter } from "react-router-dom";
import Register from "../Components/Users/Register";
import Login from "../Components/Users/Login";
import Main from "../Components/main/Main";
import { Children } from "react";
import About from "../Components/main/About/About";
import AddBills from "../Components/main/AddBills/AddBills";
import Home from "../Components/main/Home/Home";
import FilterBills from "../Components/main/Filterbills/FilterBills";
import UpdateBills from "../Components/main/updateBills/UpdateBills";


let routes = createBrowserRouter([
    {
        path: "/Register",
        element: <Register></Register>

    }, {
        path: "/",
        element: <Login></Login>
    }, {
        path: "/home",
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },{
                path: "about",
                element: <About></About>
            },{
                path: "AddBills",
                element: <AddBills></AddBills>
            },{
                path: "FilterBills",
                element: <FilterBills></FilterBills>
            },{
                path:"updateBills",
                element:<UpdateBills></UpdateBills>

            }


        ]


    }
])
export default routes