import React, { use, useRef } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const {user,updateprofile} = use(AuthContext)
  const bidModalref = useRef();
  const handleUpdateprofile=(e)=>{
    e.preventDefault()
    const name = e.target.name.value;
    const url = e.target.url.value;
    updateprofile(name,url)
    .then(()=>{
      alert("Update Profile")
    })
    .catch(error=>{
      console.log(error)
    })

  }

  return (
    <div className="flex flex-col items-center min-h-screen py-20">
      <h1 className="text-3xl font-bold  mb-2">My Profile</h1>
      <p className=" mb-8">
        Manage your profile information and settings
      </p>

      <div className=" bg-white rounded-2xl shadow-md w-full max-w-md py-10 md:max-w-xl text-center overflow-hidden">
        <div className="h-28 bg-gradient-to-r from-gray-800 to-gray-900"></div>
        <div className="-mt-12 flex justify-center">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-50 h-50 rounded-full border-4 border-white object-cover"
            />
          ) : (
            <div className="w-34 h-34 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center text-gray-500 text-3xl font-semibold">
              ?
            </div>
          )}
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-1">
            {user.displayName}
          </h2>
          <hr className="w-12 mx-auto border-gray-300 mb-4" />

          <div className="text-left space-y-2">
            <p className="text-gray-600 text-sm text-center">
              <span className="font-semibold uppercase text-gray-400 ">
                Email:
              </span>{" "}
              {user.email}
            </p>
            <p className="text-gray-600 text-sm text-center">
              <span className="font-semibold uppercase text-gray-400">
                Last Login:
              </span>{" "}
              {user.metadata.lastSignInTime}
            </p>
          </div>

          <button onClick={() => bidModalref.current.showModal()} className="mt-6 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
            Edit Profile
          </button>

            <dialog
                  ref={bidModalref}
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg text-center border-b-1 border-gray-200 pb-3">
                      Update Your Profile!
                    </h3>
                    
                    <form onSubmit={handleUpdateprofile}>
                      <div className="flex gap-7 mt-6">
                        <div>
                          <label htmlFor="">Name</label>
                          <input
                            type="text"
                            
                            name="name"
                            placeholder="Your Name"
                            className="input mt-2"
                          />
                        </div>
                        <div>
                          <label htmlFor="">Image URL</label>
                          <input
                            type="text"
                            
                            name="url"
                            placeholder="Your image URL"
                            className="input mt-2"
                          />
                        </div>
                      </div>



                      <button className="btn btn-primary w-full mt-4">
                        Update
                      </button>
                    </form>

                    <div className="modal-action ">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn mr-4">Cencel</button>
                      </form>
                    </div>
                  </div>
                </dialog>
        </div>
      </div>
    </div>
  );
};

export default Profile;

