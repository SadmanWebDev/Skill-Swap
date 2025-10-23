import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import  auth  from '../../utils/firebase.config';
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photo.value;
    const password = e.target.password.value;

    // ✅ Password Validation
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

    // ✅ Create Account
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;

        // ✅ Update name & photo
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        });

        toast.success("Signup Successful!");
        navigate("/");
        e.target.reset();
      })
      .catch((err) => {
        setError(err.message);
        toast.error(err.message);
      });
  };

  // ✅ Google Login
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Google Login Successful!");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Toaster />
      <div className="card bg-base-100 w-full max-w-md shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-4">Create Account</h1>

        <form onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">Full Name</label>
            <input
              name="name"
              type="text"
              required
              className="input input-bordered"
              placeholder="Your Name"
            />
          </div>

          <div className="form-control">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              required
              className="input input-bordered"
              placeholder="Email Address"
            />
          </div>

          <div className="form-control">
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              required
              className="input input-bordered"
              placeholder="Profile Image URL"
            />
          </div>

          {/* ✅ Password Input with Eye Icon */}
          <div className="form-control relative">
            <label className="label">Password</label>
            <input
              name="password"
              type={showPass ? "text" : "password"}
              required
              className="input input-bordered"
              placeholder="Password"
            />

            <span
              className="absolute right-4 top-[52px] cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* ✅ Password Error Display */}
          {error && <p className="text-error text-sm mt-1">{error}</p>}

          <button className="btn btn-primary w-full mt-4" type="submit">
            Register
          </button>
        </form>

        {/* ✅ Google Login */}
        <button
          className="btn btn-outline w-full mt-3"
          onClick={handleGoogleLogin}
        >
          <FaGoogle /> Continue with Google
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-primary link font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
