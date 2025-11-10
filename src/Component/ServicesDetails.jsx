import { Star } from 'lucide-react';
import React from 'react'
import { useLoaderData, useNavigate } from 'react-router'

const ServicesDetails = () => {
    const navigate = useNavigate();
    const data = useLoaderData()
    // console.log(data.provider.name)
    const {title,category, shortDescription,createdAt, price,provider:{city},provider:{email}, provider: {name} ,provider:{badge} ,priceUnit,rating,reviewsCount,verified,thumbnail,} = data;
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
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition">
              Book This Service
            </button>
          </div>
        </div>
      </div>
    </div>
        
    </div>
    
  )
}

export default ServicesDetails