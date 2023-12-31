import Head from "../../layout/Head";
import Featured from "./Featured";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import SpecialOffers from "./SpecialOffers";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <>
            <Head pageTitle="Home" />
            <Hero />
            <Featured />
            <SpecialOffers />
            <Testimonial />
            <Newsletter />
        </>
    );
};

export default Home;