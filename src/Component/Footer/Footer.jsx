import React from "react";

const Footer = () => {
  return (
    <section className="footer-section py-16">
      <div className="container flex justify-center gap-x-16">
        <div className=" p-2">
          <a href="#topic">
            <i className="bi-back  text-2xl"></i>
            <span className=" text-3xl font-extrabold">Topic</span>
          </a>
        </div>
        <div className=" p-3 flex flex-col gap-y-2">
            <div className="text-xl text-blue-700 font-extrabold">Resources</div>
            <ul className="flex flex-col gap-y-1">
                <li className="hover:text-sky-500"><a href="#">Home</a></li>
                <li className="hover:text-sky-500"><a href="#">How it works</a></li>
                <li className="hover:text-sky-500"><a href="#">FAQs</a></li>
                <li className="hover:text-sky-500"><a href="#">Contact</a></li>
                
            </ul>
        </div>
        <div className=" p-3 flex flex-col gap-y-2">
            <div className="text-xl text-blue-700 font-extrabold">Information</div>
            <ul>
                <li className="hover:text-sky-500"><a href="#">305-240-6589</a></li>
                <li className="hover:text-sky-500"><a href="#">info@company.com</a></li>
            </ul>
        </div>
        <div className=" p-2 flex flex-col justify-between">
            <div className="border border-black rounded-3xl w-24 flex justify-center ">
                English 
                <span> <i className="bi bi-chevron-down"></i></span>
            </div>
            <div className="w-64">
                <p>copyright@ 2048 Topic Listing Center .All rights reserved </p>
            </div>
            <div>
                Design : <span className="text-sky-500">TemplateMo</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
