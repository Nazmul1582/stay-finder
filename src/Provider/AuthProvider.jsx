import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            console.log("currentUser", user);
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe;
    }, [])

    const createUser = async(email, password, username) => {
        
        // create user
        await createUserWithEmailAndPassword(auth, email, password)

        // update profile
        await updateProfile(auth.currentUser, {displayName: username})

        // set user
        const user = auth.currentUser;
        setCurrentUser({
            ...user
        })
    }

    const authInfo = {
        currentUser, 
        loading, 
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;