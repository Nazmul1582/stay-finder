import { Link, useRouteError } from "react-router-dom";
import image from '../../assets/images/Page_not_found.png'
import Head from "../../layout/Head";

const NotFound = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <section className="min-h-screen">
            <Head pageTitle="Not Found" />
            <div className="container mx-auto">
                <div className="grid place-items-center">
                    <img className="max-w-xs lg:max-w-lg" src={image} alt="page not found" />
                    <Link to="/"><button className="btn btn-success">Go To Home</button></Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;