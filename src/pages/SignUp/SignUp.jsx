import React from "react";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen text-primary">
      <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl p-18">
        <h1 className="text-3xl font-semibold text-center">
          Register your account
        </h1>
        <div className="border border-base-300 my-10"></div>
        <div className="card-body p-0">
          <fieldset className="fieldset">
            <label className="label">Your Name</label>
            <input
              type="text"
              name="name"
              className="input w-full bg-base-200 border-none rounded-lg"
              placeholder="Enter your name"
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
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full bg-base-200 border-none rounded-lg"
              placeholder="Enter your password"
            />
            <div>
              <label className="label">
                <input type="checkbox" defaultChecked className="checkbox" />
                Accept<span className="text-primary">Term & Conditions</span>
              </label>
            </div>
            <button className="btn btn-primary mt-4">SignUp</button>
            <p className="mt-5 text-center">
              Already Have An Account ?{" "}
              <Link className="text-secondary hover:underline" to="/login">
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
