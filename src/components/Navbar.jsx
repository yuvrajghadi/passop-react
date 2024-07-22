import React from 'react'

const navbar = () => {
  return (
    <nav className="bg-violet-900 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-lg font-bold"><h1 className='text-white font-bold text-center'>PASSWARDMANAGER</h1></div>
      <div className="hidden md:flex space-x-4">
        <a href="#" className="text-white hover:font-bold">Home</a>
        <a href="#" className="text-white hover:font-bold">About</a>
        <a href="#" className="text-white hover:font-bold">Contact</a>
      </div>
      <div className="md:hidden">
        <button className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>
  )
}

export default navbar
