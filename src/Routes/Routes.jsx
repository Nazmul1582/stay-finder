import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Rooms from "../pages/Rooms/Rooms";
import MyBookings from "../pages/MyBookings/MyBookings";
import Contact from "../pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import NotFound from "../pages/NotFound/NotFound";
import Update from "../pages/Update/Update";
import Feedback from "../pages/Feedback/Feedback";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <NotFound />,
        children: ([
            {
                path: "/",
                element: <Home />
            },
            {
                path: "rooms",
                element: <Rooms />,
                // loader: () => fetch('http://localhost:5000/rooms')
                loader: () => fetch('https://stay-finder-server.vercel.app/rooms')
            },
            {
                path: "room-details/:id",
                element: <RoomDetails />,
                // loader: ({params}) => fetch(`http://localhost:5000/room-details/${params.id}`)
                loader: ({params}) => fetch(`https://stay-finder-server.vercel.app/room-details/${params.id}`)
            },
            {
                path: "my-bookings",
                element: <PrivateRoute><MyBookings /></PrivateRoute>
            },
            {
                path: "update/:id",
                element: <Update />,
                // loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
                loader: ({params}) => fetch(`https://stay-finder-server.vercel.app/bookings/${params.id}`)
            },
            {
                path: "/review/:id",
                element: <Feedback />,
                // loader: ({params}) => fetch(`http://localhost:5000/bookings-review/${params.id}`)
                loader: ({params}) => fetch(`https://stay-finder-server.vercel.app/bookings-review/${params.id}`)
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "signup",
                element: <SignUp />
            },
            {
                path: "sign-in",
                element: <SignIn />
            }
        ])
    }
])

export default router;