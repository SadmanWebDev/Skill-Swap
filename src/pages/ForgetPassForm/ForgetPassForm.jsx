import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router";

const ForgetPassForm = () => {
  const emailRef = useRef();
  const location = useLocation();

  const handleReset = (e) => {
    e.preventDefault();
    window.location.href = "https://mail.google.com/";
  };

  useEffect(() => {
    if (location.state?.email) {
      emailRef.current.value = location.state.email;
    }
  }, [location.state]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="card bg-base-100 p-20 rounded-2xl w-1/3">
        <fieldset className=" fieldset">
          <input
            ref={emailRef}
            type="email"
            name="email"
            className="input w-full bg-base-200 border-none rounded-lg"
            placeholder="Enter your email address"
          />
          <button
            onClick={handleReset}
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
