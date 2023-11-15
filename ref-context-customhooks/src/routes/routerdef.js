import { createBrowserRouter,redirect } from "react-router-dom";
import App from "../App";
import Login from "../Login";
import ContactUs from "../ContactUs";
import AboutUs from "../AboutUs";
import Products from "../Products";


const routes = createBrowserRouter([
    {path : "/", Component: App ,
      children : [
        {path : "/aboutus", Component: AboutUs},
        {path : "/products/:type", Component: Products}
      ]
      ,loader: () => { return localStorage.getItem("apptoken") ? null 
                : redirect("/login") }
    },
    {path : "/login", Component: Login},
    {path : "/contact", Component: ContactUs},
])

export default routes;