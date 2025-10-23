import React, { use } from "react";
import logo from "/logo.png";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const { user, kickOutUser } = use(AuthContext);
  const handleSignOut = () => {
    kickOutUser()
  };
  return (
    <nav className="max-w-11/12 mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img className="w-10 " src={logo} alt="" />
          {user && <h2>{user.email}</h2>}
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <Link to="/">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-primary btn-circle mr-3"
              >
                <div className="indicator">
                  <FiHome size={20} />
                </div>
              </div>
            </Link>
            {user ? (
              <Link
                onClick={handleSignOut}
                className="btn btn-outline btn-primary mr-3"
              >
                SignOut
              </Link>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline btn-primary mr-3">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-outline btn-primary mr-3">
                  SignUp
                </Link>
              </>
            )}
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            ></div>
          </div>
          <Link to="/profile">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-outline btn-primary btn-circle border-0 "
            >
              <div className="w-10 rounded-full">
                <CgProfile size={40} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
