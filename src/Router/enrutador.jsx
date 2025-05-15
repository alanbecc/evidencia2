import Login from "../Pages/Login";
import Registro from "../Pages/Registro";
import Home from "../Pages/Home";


 export let routes = [

    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/registro",
        element: <Registro />,
    },
    {
        path: "/home",
        element:<Home/>
    }
    

]