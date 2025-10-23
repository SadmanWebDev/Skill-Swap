// import React, { useState } from "react";
// import { useAuth } from "../../providers/AuthProvider"; // your Auth context
// import { updateProfile } from "firebase/auth";
// import { toast } from "react-hot-toast";

// const Profile = () => {
//   const { user } = useAuth();
//   const [isEditing, setIsEditing] = useState(false);
//   const [name, setName] = useState(user?.displayName || "");
//   const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       await updateProfile(user, {
//         displayName: name,
//         photoURL: photoURL,
//       });
//       toast.success("Profile updated successfully!");
//       setIsEditing(false);
//     } catch (error) {
//       toast.error("Failed to update profile.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 px-4 py-8">
//       <div className="card w-full sm:w-96 bg-base-100 shadow-xl">
//         <div className="card-body items-center text-center">
//           <div className="avatar">
//             <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//               <img
//                 src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
//                 alt="Profile"
//               />
//             </div>
//           </div>

//           <h2 className="text-2xl font-bold mt-4">
//             {user?.displayName || "User Name"}
//           </h2>
//           <p className="text-gray-600">{user?.email}</p>

//           {!isEditing ? (
//             <button
//               onClick={() => setIsEditing(true)}
//               className="btn btn-primary btn-sm mt-4"
//             >
//               Update Profile
//             </button>
//           ) : (
//             <form onSubmit={handleUpdate} className="mt-4 w-full">
//               <div className="form-control mb-3">
//                 <label className="label">
//                   <span className="label-text font-semibold">Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="input input-bordered w-full"
//                   required
//                 />
//               </div>

//               <div className="form-control mb-3">
//                 <label className="label">
//                   <span className="label-text font-semibold">Photo URL</span>
//                 </label>
//                 <input
//                   type="text"
//                   value={photoURL}
//                   onChange={(e) => setPhotoURL(e.target.value)}
//                   className="input input-bordered w-full"
//                 />
//               </div>

//               <div className="flex gap-3 justify-center mt-4">
//                 <button type="submit" className="btn btn-success btn-sm">
//                   Save Changes
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setIsEditing(false)}
//                   className="btn btn-error btn-sm"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
