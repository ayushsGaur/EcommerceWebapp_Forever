import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="mt-40">
      
      {/* Top Footer Section */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">

        {/* Logo + Description */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-0456-7890</li>
            <li>example@forever.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <hr />
      <p className="py-5 text-sm text-center">
        Copyright © 2024 forever.com — All Rights Reserved.
      </p>

    </div>
  )
}

export default Footer
