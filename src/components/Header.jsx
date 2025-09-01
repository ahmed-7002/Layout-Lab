import React from 'react'

const Header = () => {
  return (
    <div>
        <div className="relative overflow-hidden shadow-lg">
  <img 
    src="https://plus.unsplash.com/premium_photo-1670963025175-85af13624678?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    alt="Hero Image" 
    className="w-full h-74 md:h-80 object-cover"
  />
  <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
    <div className="text-center text-white">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Layout Lab</h2>
      <p className="text-lg md:text-xl mb-6">Discover amazing code layouts for different <span className='font-bold'>React Components</span></p>
      
    </div>
  </div>
</div>
    </div>
  )
}

export default Header