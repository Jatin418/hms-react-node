import * as React from "react";
import {useRoutes} from "react-router-dom"
import About from "./pages/About";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import Frontlayouts from "./layouts/Frontlayouts";
import Contactus from "./pages/Contact";
import Login from "./pages/Login";
import SignInSide from "./pages/Signin";
import SignUp from "./pages/Signup";
import ContactForm from "./pages/Test"

function Routes(){
   return useRoutes([
        {
            path:"/",
            element: <Frontlayouts />,
            children:[{
                path:"/",
                element: <Home />
            },{
                path:"about",
                element: <About />
            },{
                path:"contact-us",
                element:<Contactus />
            }]
        },
        {
                path:"login",
                element:<Login />
        },
        {
                path:"signin",
                element:<SignInSide />
        },
        {
            path: "signup",
            element: <SignUp />
        },
        {
            path: "test",
            element: <ContactForm />
        },
        {
            path:"dashboard",
            element: <Dashboard />
        }
    ])
}

export default Routes