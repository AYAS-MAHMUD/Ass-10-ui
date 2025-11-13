import React, { useEffect, useState } from "react";
import LatestCard from "../Component/LatestCard";
import { motion } from "framer-motion";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://homehero-sandy.vercel.app/Services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log(services)

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);

  // ✅ Filter button click handler
  const handleFilter = () => {
    console.log("filter clicked")
    fetch(
      `https://homehero-sandy.vercel.app/service?minPrice=${minPrice || 0}&maxPrice=${
        maxPrice || Infinity
      }`
    )
      .then(res => res.json())
      .then(data => setServices(data));
  };

  return (
    <div className="px-5 sm:px-10 md:px-30 ">
      <div className="border-b-4 border-blue-600 pb-4 mt-5">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" text-center text-4xl font-bold"
        >
          All Services
        </motion.h1>
      </div>
      {/* filter data by price */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-3  rounded-2xl p-4 mb-5 w-full md:w-auto">
        <h3 className="text-lg font-semibold mb-2 md:mb-0">
          Filter by Price
        </h3>

        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-32 px-3 py-2 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-32 px-3 py-2 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        <button
          onClick={handleFilter}
          className="px-5 py-2 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition"
        >
          Apply
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((i) => (
          <LatestCard key={i.id} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Services;
