import { Link, useNavigate } from 'react-router-dom';
import image from '../../assets/images/login.png'
import googleImage from '../../assets/images/google.png'
import facebookImage from '../../assets/images/facebook-icon.png'
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Head from '../../layout/Head';


const SignIn = () => {
    const [loading, setLoading] = useState()
    const [error, setError] = useState("")
    const { signIn, signInWithGoogle, signInWithFacebook } = useAuth();
    const navigate = useNavigate()

    const handleSignIn = async(event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length < 6){
          return setError("Password must be 6 characters or longer.")
        }
        
        try{
          setError("")
          setLoading(true)
          await signIn(email, password)
          navigate("/")
        }catch(err){
          setLoading(false)
          setError(err.message)
        }
    }
    const handleSignInWithGoogle = async() => {
      try{
        setError("")
        setLoading(true)
        await signInWithGoogle()
        navigate("/")
      }catch(err){
        setLoading(false)
        setError(err.message)
      }

    }
    const handleSignInWithFacebook = async() => {
      try{
        setError("")
        setLoading(true)
        await signInWithFacebook()
        navigate("/")
      }catch(err){
        setLoading(false)
        setError(err.message)
      }
    }

    return (
        <section className="py-10 bg-base-100">
          <Head pageTitle="Sign In" />
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign In now!</h1>
              <p className="py-6">
              Welcome back to our hotel booking platform. Sign in to access your account and manage your reservations with ease. Your next adventure awaits!
              </p>
              <img className='w-full' src={image} alt="sign in photo" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-xl shadow-success/30 bg-base-100 border border-success">
              <form onSubmit={handleSignIn} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button disabled={loading} className="btn btn-success">Sign In</button>
                </div>
                <div className="divider">OR</div>
                <div className="form-control">
                  <button onClick={handleSignInWithGoogle} className="btn btn-success bg-white hover:bg-white hover:shadow-success/30 hover:shadow-lg mb-5">
                    <img className='w-10' src={googleImage} alt="google logo" />
                    Sign In with Google
                </button>
                  <button onClick={handleSignInWithFacebook} className="btn btn-success bg-white hover:bg-white hover:shadow-success/30 hover:shadow-lg">
                    <img className='w-10' src={facebookImage} alt="facebook logo" />
                    Sign In with Facebook
                </button>
                </div>
              </form>
              <p className='text-center mb-6'>If you are new here, Please <Link className='text-success font-bold underline' to="/signup">Sign Up</Link></p>
              {error && <p className='text-center text-red-500 mb-6'>{error}</p>}
            </div>
          </div>
        </div>
      </section>
    );
};

export default SignIn;