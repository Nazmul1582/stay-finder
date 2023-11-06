import { Link, useNavigate } from 'react-router-dom';
import image from '../../assets/images/signup.png'
import useAuth from '../../hooks/useAuth'
import { useState } from 'react';

const SignUp = () => {
  const {createUser} = useAuth()
  const [error, setError] = useState("");
  const [loading, setLoading] = useState()
  const navigate = useNavigate()

    const handleSignUp = async(event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length < 6){
          return setError("Password must be 6 characters or longer.")
        }
        
        try{
          setError("")
          setLoading(true);
          await createUser(email, password, name)
          navigate("/")
        }catch(err){
          setLoading(false);
          setError(err.message);
        }        
    }

    return (
    <section className="py-20 bg-base-100">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
            Unlock a world of exclusive benefits by creating an account with us. Join our community of travelers and gain access to a host of features and perks
            </p>
            <img src={image} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-xl shadow-success/30 bg-base-100 border border-success">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <button disabled={loading} className="btn btn-success">Sign Up</button>
              </div>
            </form>
            <p className='text-center mb-6'>Already have an account? <Link className='text-success font-bold underline' to="/sign-in">Sign In</Link></p>
            {error && <p className='text-center text-red-500 mb-6'>{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
