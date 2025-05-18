import { useState } from "react";
import { FaBell } from 'react-icons/fa';           // Font Awesome
import { MdNotifications } from 'react-icons/md';  // Material Design
import { IoIosNotifications } from 'react-icons/io'; // Ionicons
import { FaEnvelope } from 'react-icons/fa';         // Font Awesome
import { MdMessage } from 'react-icons/md';          // Material Design
import { BsChatDots } from 'react-icons/bs';         // Bootstrap Icons
import { HiOutlineChat } from 'react-icons/hi';      // Heroicons
import { NavLink } from "react-router-dom";



function navbar() {
    const [image, setImage] = useState('https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ');
  return (
    <div className="text-center z-50 fixed top-0 left-0 right-0 mb-2 inline-flex items-center justify-between gap-x-2 bg-white/10 backdrop-blur-md rounded-md shadow-xl p-1 w-full  text-white border-1 border-blue-700/50">
          <div className="logo">
              <img className="w-25 h-14 object-fit" src='https://i.ibb.co/8nWq2JTs/sample-0-4.jpg' alt="logo" />
          </div>
          <div className="search flex-1 md:max-w-[70%] inline-flex gap-x-2 ">
                  <input className="w-full p-2 rounded-xl bg-white/5 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-blue-500" type="search" name="search" id="search" placeholder="Search contact" />
                  <label htmlFor="search" className="w-40 p-2 cursor-pointer rounded-xl  border-1 border-white/20 hover:bg-blue-500  bg-blue-500/30">Search</label>
          </div>

            <div className="flex space-x-4 text-xl text-gray-600">
                <FaBell className="hover:text-blue-500/50 cursor-pointer text-2xl text-blue-500" />
                <FaEnvelope className="hover:text-blue-500/50 cursor-pointer text-2xl text-blue-500" />
            </div>

          <div className="profile ">
            <NavLink to='/myprofile'>
              {image && (
                    <img
                      src={image}
                      alt="Profile"
                      className="w-13 h-13 cursor-pointer rounded-full object-cover border-2 border-blue-500"
                    />
                  )}
                </NavLink>
          </div>


    </div>
  )
}

export default navbar