import React from 'react'

const Reviews = () => {
  return (
    <div>
    <h1 className='text-3xl'>Reviews</h1>
    <div className="stats md:shadow lg:shadow">
  
  <div className="stat sm:hidden lg:inline lg:border-r-2 lg:border-black Hide overflow-hidden">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Likes</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat sm:border-none md:border-2 md:border-black Border-Hide">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">5* Reviews</div>
    <div className="stat-value text-secondary">50</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat sm:hidden md:inline lg: inline Hide">
    <div className="stat-figure text-secondary">
      {/* <div className="avatar online"> */}
         <div className="w-16 rounded-full">
        {/* </div>  */}
      </div>
    </div>
    <div className="stat-value">99%</div>
    <div className="stat-title">"Would use again"</div>
    <div className="stat-desc text-secondary">99% "would recommend"</div>
  </div>
  
</div>
    </div>
  )
}

export default Reviews