import { Star } from 'lucide-react';
import React, { use, useRef } from 'react'
import { useLoaderData, useNavigate } from 'react-router'
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const ServicesDetails = () => {
    const navigate = useNavigate();
    const data = useLoaderData()
    const bidModalref = useRef();
    const {user} =use(AuthContext)
    // console.log(data.provider.name)
    const {title,category, shortDescription,createdAt, price,provider:{city},provider:{email}, provider: {name} ,provider:{badge} ,priceUnit,rating,reviewsCount,verified,thumbnail,} = data;
    
    const handleBookingSubmit=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const price = form.price.value;
        const serviceId = form.id.value;

        const bookingData = {
            serviceId,
            serviceTitle : title,
            customerName : name,
            customerEmail : email,
            bookingDate : date,
            offeredPrice : price,
        }

        // console.log(bookingData)

        fetch('http://localhost:3000/bookings',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(bookingData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                toast.success('Booking Successfully!')
                form.reset();
                bidModalref.current.close();
            }
        })
    }
    
    return (
    <div className='my-20'>
        <button
        onClick={() => navigate(-1)}
        href="/products"
        className="inline-flex md:ml-90 items-center text-sm text-gray-600 hover:underline mb-4"
      >
        ← Back To Products
      </button>

         <div className=" p-6 flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Left Side */}
        <div>
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-64 object-cover rounded-lg"
          />

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Service Description
            </h3>
            <p className="text-gray-600 mt-2">{shortDescription}</p>

            <div className="mt-3">
              <p className="text-gray-900 font-semibold">
                ${price}{" "}
                <span className="text-gray-500 text-sm">
                  ({priceUnit})
                </span>
              </p>
            </div>

            <div className="flex items-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-xs text-gray-500 ml-1">
                ({reviewsCount} reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* Title & Category */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {title}
            </h1>
            <p className="text-purple-600 text-sm font-medium mt-1">
              {category}
            </p>
          </div>

          {/* Service Details */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-semibold text-gray-800 mb-2">Service Details</h3>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Service ID:</span> {data._id}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Status:</span>{" "}
              <span className="text-green-600 font-semibold">
                {verified ? "Verified" : "Pending"}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Created:</span>{" "}
              {new Date(createdAt).toLocaleDateString()}
            </p>
          </div>

          {/* Provider Info */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-semibold text-gray-800 mb-2">
              Provider Information
            </h3>
            <p className="text-sm text-gray-700 font-medium">
              {name}
            </p>
            <p className="text-sm text-gray-600">{city}</p>
            <p className="text-sm text-gray-600">{email}</p>
          </div>

          {/* Action Button */}
          <div>
            <button onClick={() => bidModalref.current.showModal()} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
              Book This Service
            </button>

            {/* MODAL OPEN */}
            <dialog
                  ref={bidModalref}
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg text-center border-b-1 border-gray-200 pb-3">
                      Book This Service!
                    </h3>
                    
                    <form onSubmit={handleBookingSubmit}>
                      <div className="flex gap-7 mt-6">
                        <div>
                          <label htmlFor="">Name</label>
                          <input
                            type="text"
                            defaultValue={user?.displayName}
                            readOnly
                            name="name"
                            placeholder="Your Name"
                            className="input mt-2"
                          />
                        </div>
                        <div>
                          <label htmlFor="">Email</label>
                          <input
                            type="email"
                            defaultValue={user?.email}
                            readOnly
                            name="email"
                            placeholder="Your Email"
                            className="input mt-2"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col mt-2">
                        <label htmlFor="">Booking Date</label>
                        <input
                        name='date'
                          type="date"
                          placeholder="Select booking date"
                          className="input mt-2 w-full"
                        />
                      </div>
                      <div className="flex flex-col mt-2">
                        <label htmlFor="">Your Price</label>
                        <input
                          type="number"
                          name="price"
                          placeholder="Enter your offered price"
                          className="input mt-2 w-full"
                        />
                      </div>
                      <div className="flex flex-col mt-2">
                        <label htmlFor="">Service ID</label>
                        <input
                        name='id'
                          type="text"
                          placeholder=""
                          readOnly
                            value={data._id}
                          className="input mt-2 w-full"
                        />
                      </div>
                      <button className="btn btn-primary w-full mt-4">
                        Submit Booking
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
    </div>
        
    </div>
    
  )
}

export default ServicesDetails