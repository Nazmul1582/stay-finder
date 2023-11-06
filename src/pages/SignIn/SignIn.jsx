import { Link } from 'react-router-dom';
import image from '../../assets/images/login.png'
import { BiLogoGoogle } from 'react-icons/bi';


const SignIn = () => {
    return (
        <section className="py-10 bg-base-100">
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
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
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
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-success">Sign In</button>
                </div>
                <div className="divider">OR</div>
                <div className="form-control">
                  <button className="btn btn-success btn-outline"><BiLogoGoogle className='text-3xl' /> Sign In with Google</button>
                </div>
              </form>
              <p className='text-center mb-6'>If you are new here, Please <Link className='text-success font-bold underline' to="/signup">Sign Up</Link></p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default SignIn;