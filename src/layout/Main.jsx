import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";

const Main = () => {
    return (
        <div className="font-inter">
            <Header />
            <Outlet />
        </div>
    );
};

export default Main;