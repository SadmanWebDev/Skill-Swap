import React, { use } from "react";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const MyProfile = () => {
  const { user } = use(AuthContext);

  const handleUpdate = () =>{
    toast.success("Profile Updated!")
  }
  return (
    <div className="card min-h-screen flex justify-center items-center text-center ">
        <Toaster/>
      <div className="bg-white/20 backdrop-blur-xl p-20 rounded-2xl shadow-lg">
        {/* Your Profile Content Here */}
        <h1 className="text-5xl font-semibold mb-6">Profile</h1>
        <div className="btn btn-circle border-blue-400 mb-5">
          <FaUser size={30}></FaUser>
        </div>

        <h2 className="text-3xl font-semibold mb-2  ">{user?.displayName}</h2>
        <p className="text-xl mb-6">{user?.email}</p>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-primary btn-outline"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Update Profile
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-base-200">
            <h3 className="font-bold text-lg">Update Your Profile!</h3>
            <form>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input border-none rounded-lg"
                  placeholder="Update your name"
                />
                <label className="label">Photo URL</label>
                <input
                  type="URL"
                  className="input border-none rounded-lg"
                  placeholder="Update your Image"
                  required
                />
                
              </fieldset>
            </form>
            <div className="modal-action">
              <form method="dialog">
                <button onClick={handleUpdate} className="btn btn-primary btn-outline">Update</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyProfile;
