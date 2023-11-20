import { createBrowserRouter,redirect } from "react-router-dom";
import App from "./App";
import Login from "./Login";

const router = createBrowserRouter([
    { path : "/", Component : App , loader : () => sessionStorage.getItem("token") ? null : redirect("/login")},
    { path : "/login", Component : Login},
]);

export default router;