import React from "react";

const ForgetPassForm = ({ email }) => {
    // console.log(email)
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="card w-1/3">
        <fieldset className=" fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            className="input w-full bg-base-200 border-none rounded-lg"
            placeholder="Enter your email address"
          />
          <button
            // type="button"
            href="https://mail.google.com/"
            className="btn btn-outline btn-primary"
          >
            Reset
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default ForgetPassForm;
