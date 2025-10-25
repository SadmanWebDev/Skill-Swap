import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const { createUser, googleSignIn, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    setError("");

    createUser(email, password)
      .then(() => {
        toast.success("Signup Successful!");
        navigate("/");
        e.target.reset();
      })
      .catch((error) => setError(error.message));
    setUser();
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success("Google Login Successful!");
        navigate("/");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-primary">
      <Toaster />
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
              {error && <p className="text-error">{error}</p>}
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              SignUp
            </button>
            <p className="flex justify-center">or</p>
            {/* Google */}
          </fieldset>
        </form>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="btn bg-white btn-outline text-black border-[#e5e5e5]"
        >
          <FcGoogle size={24} /> Login with Google
        </button>
        <p className="mt-5 text-xs text-center">
          Already Have An Account ?{" "}
          <Link className="text-secondary hover:underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
