import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
const MyBooking = () => {
  const { user } = use(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user]);
  // console.log(bookings);

  // Remove booking
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
        fetch(`http://localhost:3000/bookings/${id}`, {
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
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
      }
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="md:w-10/12 mx-auto my-15"
    >
      <h2 className="text-3xl border-b-4  border-blue-600 pb-4 font-bold mb-6 text-center ">
        My Bookings : <span className="text-blue-600">{bookings.length}</span>
      </h2>
      <div>
        <table className="table">
          <thead>
            <tr className="text-lg font-bold">
              <th>Sl No</th>
              <th>Image</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Provider</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((i, idx) => (
              <tr>
                <th>{(idx += 1)}</th>
                <th>
                  <img
                    src={i.serviceDetails.thumbnail}
                    alt={i.serviceTitle}
                    className="w-13 h-13 object-cover rounded"
                  />
                </th>
                <th>{i.serviceTitle}</th>
                <th>$ {i.offeredPrice}</th>
                <th>{i.serviceDetails.provider.name}</th>
                <th>
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
    </motion.div>
  );
};

export default MyBooking;

// {new Date(booking.bookingDate).toLocaleDateString()}
