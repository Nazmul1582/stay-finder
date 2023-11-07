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
                path: "rooms",
                element: <Rooms />,
                loader: () => fetch('http://localhost:5000/rooms')
            },
            {
                path: "room-details",
                element: <RoomDetails />
            },
            {
                path: "my-bookings",
                element: <PrivateRoute><MyBookings /></PrivateRoute>
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