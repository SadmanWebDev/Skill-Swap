import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const SignUp = () => {
  const { createUser, googleSignIn, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password);
    setUser();
  };

  const handleGoogleLogin = () => {
    googleSignIn().then(() =>
      navigate(`${location.state ? location.state : "/"}`)
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-primary">
      <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl p-18">
        <h1 className="text-3xl font-semibold text-center">
          Register your account
        </h1>
        <div className="border border-base-300 my-10"></div>
        <form onSubmit={handleSignUp} className="card-body p-0">
          <fieldset className="fieldset">
            <label className="label">Your Name</label>
            <input
              type="text"
              name="name"
              className="input w-full bg-base-200 border-none rounded-lg"
              placeholder="Enter your name"
              required
            />
            <label className="label">Photo URL</label>
            <input
              type="URL"
              name="photoURL"
              className="input w-full bg-base-200 border-none rounded-lg"
              placeholder="Enter your Photo URL"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full bg-base-200 border-none rounded-lg"
              placeholder="Enter your email address"
              required
            />
            <div className=" relative">
              <label className="label">Password</label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                className="input w-full bg-base-200 border-none rounded-lg"
                placeholder="Enter your password"
                required
              />
              <button
              type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute top-8 right-3 text-sm"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div>
              <label className="label">
                <input type="checkbox" defaultChecked className="checkbox" />
                Accept<span className="text-primary">Term & Conditions</span>
              </label>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              SignUp
            </button>
            <p className="flex justify-center">or</p>
            {/* Google */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn bg-white btn-outline text-black border-[#e5e5e5]"
            >
              <FcGoogle size={24} /> Login with Google
            </button>
            <p className="mt-5 text-center">
              Already Have An Account ?{" "}
              <Link className="text-secondary hover:underline" to="/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
