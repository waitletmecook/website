import React from 'react'

export const Navbar = () => {
  return (
    <header className="w-full bg-white border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <logo className="flex items-center space-x-2">
          <a href='#home' className="w-12 h-12 flex items-center justify-center bg-[#4C40F7] text-white rounded-[15px] 
          font-bold text-3xl  drop-shadow-xl drop-shadow-indigo-600/50">
            C
          </a> 
        </logo>

        <nav className="flex items-center space-x-10 font-semibold text-xl">
          <a href="#home" className="text-indigo-600 hover:text-indigo-700 transition">Home</a>
          <a href="#works" className="text-gray-700 hover:text-indigo-600 transition">Works</a>
          <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">About</a>
        </nav>

        <button className="w-[150px] h-[52px] bg-[#4C40F7] drop-shadow-xl drop-shadow-indigo-600/50 text-white 
        font-semibold px-5 py-2 rounded-xl hover:bg-indigo-700 transition ">
          Contact us
        </button>
      </div>
    </header> 
  )
}