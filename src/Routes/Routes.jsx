import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: ([
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/sign-in",
                element: <SignIn />
            }
        ])
    }
])

export default router;