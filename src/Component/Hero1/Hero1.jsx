import React from "react";
import "./Hero1.css";

const Hero1 = () => {
  return (
    <section className="hero-section  flex justify-center  py-40">
      <div className="container  ">
        <div className="row flex flex-col items-center justify-center gap-y-2">
          <h1 className="text-7xl font-bold text-white text-center mb-1">Discover. Learn. Enjoy</h1>
          <h6 className="text-center text-2xl">platform for creatives around the world</h6>

          <div className="search flex justify-around border px-4 py-2 gap-x-2 bg-white w-3/6 ">
            <span className="flex justify-center items-center">
              <i class="bi bi-search"></i>
            </span>
            <input
              type="text"
              placeholder="Design ,Code ,Marketing ,Finance..."
              className="search-bar grow w-3/6 text-xl "
            />
            <div className="search-button border flex justify-center items-center bg-sky-300 text-lg text-white px-3 hover:bg-sky-700">
              Search
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
