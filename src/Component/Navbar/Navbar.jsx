import React, { useState } from "react";
import "./Navbar.css";
import { PiCaretUp, PiCaretDown } from "react-icons/pi";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen ,setIsOpen] = useState(false);
  return (
    <div className=" navbar h-20 py-2 ">
      <nav className="flex px-20 h-16">
       
          <div className="flex justify-center items-center  gap-x-24 px-16">
            <a href="#topic" className="navbar-brand  flex justify-center items-center gap-x-2" >
              <i className="bi-back  text-2xl"></i>
              <span className=" text-3xl font-extrabold">Topic</span>
            </a>
            <div className="flex items-center   gap-x-28 py-2 ">
              <ul className="flex  justify-between  gap-x-16">
                <li className=" flex justify-center items-center" >
                  <a href="#section_1"className=" active text-white  flex justify-center items-center p-1 m-1 text-sm active:text-blue-400 hover:text-orange-400 ">HOME</a>
                </li>
                <li className=" flex justify-center items-center" >
                  <a href="#section_2" className=" flex justify-center items-center p-1 m-1 text-sm text-white hover:text-orange-400">BROWSE TOPICS</a>
                </li>
                <li className=" flex justify-center items-center">
                  <a href="#section_3" className=" flex justify-center items-center p-1 m-1 text-sm text-white hover:text-orange-400">HOW IT WORKS</a>
                </li>
                <li className=" flex justify-center items-center">
                  <a href="#section_4" className=" flex justify-center items-center p-1 m-1 text-sm text-white hover:text-orange-400">FAQ</a>
                </li>
                <li onClick={()=>setIsOpen(!isOpen)} className=" relative flex justify-center items-center">
                  <a href="#section_5" className=" flex justify-center items-center gap-x-2 p-1 m-1 text-sm text-white hover:text-orange-400">
                  
                  <span>PAGES</span>
                  {isOpen ? <PiCaretUp/> : <PiCaretDown/>}
                  
                  </a>
                  {isOpen && <div className="absolute border w-[150px] top-20 flex flex-col gap-y-2 py-2 px-3 rounded-[20px]"><h1 className="text-lg font-bold  hover:text-white"><Link to={"/topic-listing"}>Topic Listing</Link></h1>
                  <h1 className="text-lg font-bold  hover:text-white"><Link to={"/contact-us"}>Contact Us</Link></h1></div>}
                </li>
              </ul>
              <div className="p-2">
                <a href="#profile" className="bi-person bg-white border p-2 rounded-full"></a>
              </div>
            </div>
          </div>
       
      </nav>
    </div>
  );
};

export default Navbar;
