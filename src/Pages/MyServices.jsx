import React, { use, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import LatestCard from "../Component/LatestCard";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const MyServices = () => {
  const { user } = use(AuthContext);
    const Modalref = useRef();
    const [Category,setCategory] = useState("")
    const [Price,setPrice] = useState("")
    // console.log(category,price)
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/services?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [user]);
  // console.log(service);

  // Services Delete handle
  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/services/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = service.filter((booking) => booking._id !== id);
              setService(remaining);
            }
          });
      }
    });
  };

  // Services Update handle
  const handleupdate=async(id)=>{
    // console.log(id)
    
    const updatedData = {
    name: Category,
    price: Price,
  };

  const response = await fetch(`http://localhost:3000/services/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  const data = await response.json();
  
  console.log("Update result:", data);
  // live data show
  setService(prevServices =>
    prevServices.map(service =>
      service._id === id ? { ...service, ...updatedData } : service
    )
  );
  toast.success("Update successfully")
  }

  return (
    <div className="px-5 sm:px-10 md:px-30  mx-auto">
      <div className="border-b-4 border-blue-600 pb-4 my-15">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" text-center text-4xl font-bold"
        >
          My Services
        </motion.h1>
      </div>
      <div className="">
        <table className="table">
          <thead>
            <tr className="text-lg font-bold">
              <th>Sl No</th>
              <th>Image</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {service.map((i, idx) => (
              <tr key={idx}>
                <th>{(idx += 1)}</th>
                <th>
                  <img
                    src={i.thumbnail}
                    alt={i.category}
                    className="w-13 h-13 object-cover rounded"
                  />
                </th>
                <th>{i.category}</th>
                <th>$ {i.price}</th>

                <th className="flex gap-2">
                  <button
                  onClick={() => Modalref.current.showModal()}
                    
                    className="btn btn-accent btn-outline"
                  >
                    Update
                  </button>
                  <dialog
                  ref={Modalref}
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg text-center border-b-1 border-gray-200 pb-3">
                      Update Your Service!
                    </h3>
                    
                    <div>
                      <div className="flex gap-7 mt-6">
                        <div>
                          <label htmlFor="">Category</label>
                          <input
                          onChange={(e) => setCategory(e.target.value)}
                            type="text"
                            name="name"
                            placeholder="Update category"
                            className="input mt-2"
                          />
                        </div>
                        <div>
                          <label htmlFor="">Price</label>
                          <input
                            type="number"
                            onChange={(e) => setPrice(e.target.value)}
                            name="price"
                            placeholder="Update Price"
                            className="input mt-2"
                          />
                        </div>
                      </div>
                      <button onClick={()=>handleupdate(i._id)} className="btn btn-primary w-full mt-4">
                        Update
                      </button>
                    </div>

                    <div className="modal-action ">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn mr-4">Cencel</button>
                      </form>
                    </div>
                  </div>
                </dialog>
                  <button
                    onClick={() => handleRemove(i._id)}
                    className="btn btn-error btn-outline"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyServices;
