import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Main/Main";
import Home from "../component/Home/Home";
import Register from "../component/Register/Register";
import Login from "../component/Login/Login";
import ChefCard from "../component/Home/ChefCard/ChefCard";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/register',
                element:<Register/>
            }
            ,
            {
                path:'/login',
                element:<Login/>
            }
            ,
            {
                path:'/details/:id',
                element:<ChefCard/>,
                loader: async ({ params }) => {
                    await fetch(`/details/${params.id}`);
                    console.log(params.id);
                    return await fetch('public.json')
                }

            }
        ]
    }
]);
export default router;