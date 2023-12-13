import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";
import Footer from "../pages/shared/Footer";
import { CustomChat, FacebookProvider } from "react-facebook";

const Main = () => {
  return (
    <div className="font-inter">
      <Header />
      <Outlet />
      <Footer />
      <FacebookProvider appId="315102574689798" chatSupport>
        <CustomChat pageId="198124730045267" minimized={true} />
      </FacebookProvider>
    </div>
  );
};

export default Main;
