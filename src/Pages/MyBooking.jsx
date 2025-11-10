import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyBooking = () => {
  const { user } = use(AuthContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user]);
  console.log(bookings);
  return (
    <div className="md:w-10/12 mx-auto my-10">
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Provider</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((i,idx) => (

              <tr>
                <th>{(idx += 1)}</th>
                <th>{i.serviceTitle}</th>
                <th>$ {i.offeredPrice}</th>
                <th>{i.serviceDetails.provider.name}</th>
                <th><button className="btn bg-blue-600 text-white">Delete</button></th>
              </tr>

          ))}
          </tbody>

          
        </table>
      </div>
    </div>
  );
};

export default MyBooking;

// {new Date(booking.bookingDate).toLocaleDateString()}
