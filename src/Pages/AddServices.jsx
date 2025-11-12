import React, { use, useState } from "react";
import axios from '../../node_modules/axios/lib/axios';
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { motion } from 'framer-motion';

const AddServices = () => {
  const {user} =use(AuthContext)
  // console.log(user)
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    shortDescription: "",
    price: "",
    priceUnit : "Per service",
    rating: '4',
    reviewsCount: "",
    varified: true,
    thumbnail: "",
    provider :{
      name : `${user.displayName}`,
      email : `${user.email}`,
      badge: "verified",
      city : "",

    },
    createdAt : "",

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submitted Data:", formData);
    // You can send the data to your backend here using fetch or axios
    axios.post('http://localhost:3000/services',formData)
    .then(data=>{
      toast.success("Your Service Submitted")
      console.log("Axios data ",data.data)
    })
  };

  return (
    <motion.div initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }} className="flex justify-center items-center min-h-screen ">
      <div className="border-1 border-amber-50 p-8 rounded-2xl shadow-xl w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-2">Submit Your Service</h1>
        <p className=" text-center mb-6">
          Share your professional service with our community
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Service Name */}
          <div>
            <label className="block font-medium mb-1">Service Name *</label>
            <input
              type="text"
              name="title"
              placeholder="e.g., Web Development, Graphic Design"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium mb-1">Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-black"
              required
            >
              <option value="">Select an option</option>
              <option value="Web Development">Web Development</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="App Development">App Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Painter">Painter</option>
              <option value="Math Teacher">Math Teacher</option>
              <option value="Cleaner">Cleaner</option>
              <option value="Electrician">Electrician</option>
              <option value="Plumber">Plumber</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium mb-1">Price *</label>
            <input
              type="number"
              name="price"
              placeholder="e.g., 99.99"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">Description *</label>
            <textarea
              name="shortDescription"
              placeholder="Describe your service in detail..."
              value={formData.shortDescription}
              onChange={handleChange}
              className="w-full border rounded-lg p-2.5 h-28 focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Service Image */}
          <div>
            <label className="block font-medium mb-1">Service Image *</label>
            <input
              type="url"
              name="thumbnail"
              placeholder="https://example.com/image.jpg"
              value={formData.thumbnail}
              onChange={handleChange}
              className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Provider Name */}
          <div>
            <label className="block font-medium mb-1">Provider Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Your name or company name"
              defaultValue={user.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              readOnly
              value={user.email}
              defaultValue={user.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2.5 rounded-lg hover:bg-gray-800 transition"
          >
            Submit Service
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default AddServices;

// All submissions are saved locally and can be viewed in your browser's developer console.