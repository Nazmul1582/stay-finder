import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const { currentUser } = useAuth();

    if(currentUser){
        return children
    }
    else return <Navigate to="/sign-in" replace />
};

export default PrivateRoute;