import { Star } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion';

const LatestCard = ({i}) => {
    console.log(i)
  return (
    <motion.div initial={{ opacity: 0 ,y:20,scale:0.9}} whileInView={{opacity:1, y:0,scale:1}} transition={{ duration: 1 }}>
        <div  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform ">
      {/* Image */}
      <div className="relative h-78 overflow-hidden bg-gray-200">
        <img
          src={i.thumbnail}
          alt={i.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {i.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
          {i.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {i.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${
                  index < Math.floor(i.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            ({i.reviews} reviews)
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-2xl font-bold text-blue-600">${i.price}</p>
            <p className="text-xs text-gray-500">Per service</p>
          </div>
          {i.provider.verified && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">
              ✓ Verified
            </span>
          )}
        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
        >
          View Details
        </button>
      </div>
</div>
    </motion.div>
  )
}

export default LatestCard

