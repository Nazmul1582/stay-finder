import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import userImage from '../../assets/images/user.png'

const Header = () => {
  const { currentUser, logout } = useAuth();

  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/rooms">Rooms</Link>
      </li>
      {
        currentUser && <li>
        <Link to="/my-bookings">My Bookings</Link>
      </li>
      }
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 py-3 border-b border-success">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="text-xl md:text-3xl font-blackHanSans text-success">
            StayFinder
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-3">
          {currentUser ? (
            <>
              <div className="flex items-center gap-1">
                <p className="font-bold hidden md:block">{currentUser.displayName}</p>
                <img className="w-12 h-12 rounded-full border-2 border-success" src={currentUser.photoURL ? currentUser.photoURL : userImage} alt="user image" />
              </div>
              <Link to="/sign-in" onClick={logout} className="btn btn-success">
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/sign-in" className="btn btn-success btn-outline">
                Sign In
              </Link>
              <Link to="/signup" className="btn btn-success hidden md:flex">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
