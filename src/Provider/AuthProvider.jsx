import { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxios from "../hooks/useAxios";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const customAxios = useAxios();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const userEmail = user?.email || currentUser?.email;
      const loggedUser = { email: userEmail };

      console.log("currentUser", user);
      setCurrentUser(user);
      setLoading(false);

      // if user exist then issue a token
      if (currentUser) {
        customAxios
          .post("/login", loggedUser)
          .then((res) => {
            console.log("token response", res.data);
          })
          .catch((error) => console.log(error));
      } else {
        customAxios
          .post("/logout", loggedUser)
          .then((res) => console.log(res.data))
          .catch((error) => console.log(error.message));
      }
    });
    return unsubscribe;
  }, [currentUser, customAxios]);

  const createUser = async (email, password, username) => {
    // create user
    await createUserWithEmailAndPassword(auth, email, password);

    // update profile
    await updateProfile(auth.currentUser, { displayName: username });

    // set user
    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signInWithFacebook = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  const authInfo = {
    currentUser,
    loading,
    createUser,
    signIn,
    logout,
    signInWithGoogle,
    signInWithFacebook
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
          <span className="loading loading-bars loading-lg text-success mx-auto"></span>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
