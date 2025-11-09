import React, { use } from 'react'
import LatestCard from './LatestCard'

const Latest = ({latestData}) => {
    const data = use(latestData)
    console.log(data)
  return (
    <div className='w-10/12 mx-auto'>
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold  mb-4">
              Top Rated Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our selection of highly-rated service providers in your area
            </p>
        </div>
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    data.map(i=><LatestCard key={i.id}  i={i}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default Latest