import { Helmet } from "react-helmet";

const Head = ({pageTitle}) => {
    return (
        <Helmet>
            <title>{pageTitle} - Stay Finder</title>
        </Helmet>
    );
};

export default Head;