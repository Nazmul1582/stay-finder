import Featured from "./Featured";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import SpecialOffers from "./SpecialOffers";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <>
            <Hero />
            <Featured />
            <Testimonial />
            <SpecialOffers />
            <Newsletter />
        </>
    );
};

export default Home;