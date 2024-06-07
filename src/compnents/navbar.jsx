// import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';


function Navbar() {
  return (
    <div className="flex h-screen bg-zinc-900">
    <div className="w-1/2 flex items-center justify-center bg-white">
      <img
        src="./images/ba.jpg"
        alt="Placeholder"
        className="object-cover h-full"
      />
    </div>
    <div className="w-1/2 flex flex-col justify-between p-6 bg-gray-50">
      <nav className="flex justify-end space-x-4">
        <a href="/home" className="text-gray-700 hover:text-gray-900">Home</a>
        <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
        <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
        <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
        <div className="flex items-center">
          <FaShoppingCart className="text-gray-700 hover:text-gray-900" size={24} />
        </div>
      </nav>
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Website</h1>
      </div>
    </div>
  </div>
);
}


export default Navbar
