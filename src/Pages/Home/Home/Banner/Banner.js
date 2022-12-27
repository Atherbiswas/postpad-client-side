import React from "react";

const Banner = () => {
  return (
    <div
      className="hero bg-[url('/src/assests/banner_pic.jpg')] lg:h-96">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content">
        <div>
          <h1 className="mb-5 lg:text-7xl text-3xl font-bold">Welcome to community</h1>
          <h1 className="mb-5 lg:text-5xl text-2xl font-bold">Connect, <br /> Share &  Engage</h1>
          <button className="btn btn-active btn-secondary btn-sm">Learn More</button>
          <button className="btn btn-active btn-secondary btn-sm mx-3">See All Blog</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
