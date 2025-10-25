import React, { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../utils/firebase.config";
import toast, { Toaster } from "react-hot-toast";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success("Profile Updated Successfully!");
        document.getElementById("my_modal_5").close();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="card min-h-screen flex justify-center items-center text-center">
      <Toaster />
      <div className="bg-white p-20 rounded-2xl shadow-lg">
        <h1 className="text-5xl font-semibold mb-6">Profile</h1>
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full border mx-auto mb-5 object-cover"
          />
        ) : (
          <div className="btn btn-circle border-blue-400 mb-5">
            <FaUser size={30} />
          </div>
        )}
        <h2 className="text-3xl font-semibold mb-2">{user?.displayName}</h2>
        <p className="text-xl mb-6">{user?.email}</p>
        <button
          className="btn btn-primary btn-outline"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Update Profile
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-base-200">
            <h3 className="font-bold text-lg mb-4">Update Your Profile!</h3>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input border-none rounded-lg w-full"
                placeholder="Update your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label className="label">Photo URL</label>
              <input
                type="url"
                className="input border-none rounded-lg w-full"
                placeholder="Update your image"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                required
              />
            </fieldset>
            <div className="modal-action">
              <button
                onClick={handleUpdate}
                className="btn btn-primary btn-outline w-full"
              >
                Update
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyProfile;
