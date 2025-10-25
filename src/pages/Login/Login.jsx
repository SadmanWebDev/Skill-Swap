import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { googleSignIn, signIn } = use(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const emailRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => navigate(`${location.state ? location.state : "/"}`))
      .catch((error) => setError(error.code));

    form.reset();
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => navigate(`${location.state ? location.state : "/"}`))
      .catch((error) => console.log(error.code));
  };

  const handleForgetPass = () => {
    const email = emailRef.current.value;
    navigate("/forget-password", { state: { email } });
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-primary">
      <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl p-18">
        <h1 className="text-3xl font-semibold text-center">
          Login your account
        </h1>
        <div className="border border-base-300 my-10"></div>
        <form onSubmit={handleLogin} className="card-body p-0">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full bg-base-200 border-none rounded-lg"
              placeholder="Enter your email address"
            />
            <div className="relative">
              <label className="label">Password</label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                className="input w-full bg-base-200 border-none rounded-lg"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute top-8 right-3 text-sm"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="button"
              className="link link-hover text-left"
              onClick={handleForgetPass}
            >
              Forget Password?
            </button>
            <button className="btn btn-primary mt-4">Login</button>
          </fieldset>
        </form>
        <p className="flex justify-center text-md font-bold">or</p>
        {/* Google */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="btn bg-white btn-outline text-black border-[#e5e5e5]"
        >
          <FcGoogle size={24} /> Login with Google
        </button>
        <p className="mt-5 text-xs text-center">
          Dont’t Have An Account ?{" "}
          <Link className="text-secondary hover:underline" to="/signup">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
