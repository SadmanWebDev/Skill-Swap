import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { welcomeUser } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    welcomeUser(email, password);
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
              type="email"
              name="email"
              className="input w-full bg-base-200 border-none rounded-lg"
              placeholder="Enter your email address"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full bg-base-200 border-none rounded-lg"
              placeholder="Enter your password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-primary mt-4">Login</button>
            <p className="mt-5 text-center">
              Dont’t Have An Account ?{" "}
              <Link className="text-secondary hover:underline" to="/signup">
                SignUp
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
