import React from 'react'

const footer = () => {
  return (
    <footer className="bottom-0 text-center w-full [background:radial-gradient(125%_125%_at_50%_10%,40%,#63e_100%)]">
    <div className="container mx-auto text-center text-white">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#" className="hover:font-bold">Privacy Policy</a>
        <a href="#" className="hover:font-bold">Terms of Service</a>
        <a href="#" className="hover:font-bold">Support</a>
      </div>
      <p className="text-sm">&copy; 2024 PASSWORDMANAGER. All rights reserved.</p>
    </div>
  </footer>
  
  )
}

export default footer
