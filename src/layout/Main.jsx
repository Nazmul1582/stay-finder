import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";
import Footer from "../pages/shared/Footer";

const Main = () => {
    return (
        <div className="font-inter">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;