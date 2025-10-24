import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { FaEye, FaEyeSlash, FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { googleSignIn, signIn, error } = use(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    signIn(email, password)
      .then(() => navigate(`${location.state ? location.state : "/"}`))
      .catch((error) => console.log(error));

    form.reset();
    setEmail("");
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
          Login your account
        </h1>
        <div className="border border-base-300 my-10"></div>
        <form onSubmit={handleLogin} className="card-body p-0">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
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
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <div>
              <button
                type="button"
                className="link link-hover"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Forget Password?
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <fieldset>
                    <label className="label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      className="input w-full bg-base-200 border-none rounded-lg"
                      placeholder="Enter your email address"
                    />
                  </fieldset>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <a href="https://mail.google.com/" className="btn btn-primary btn-outline">
                        Reset
                      </a>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
            <button className="btn btn-primary mt-4">Login</button>
            <p className="flex justify-center text-md font-bold">or</p>
            {/* Google */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn bg-white btn-outline text-black border-[#e5e5e5]"
            >
              <FcGoogle size={24} /> Login with Google
            </button>
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
