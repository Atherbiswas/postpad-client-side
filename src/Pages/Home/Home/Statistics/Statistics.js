import React from "react";

const Statistics = () => {
  return (
    <div className="lg:mt-24 mt-5">
      <div className="stats stats-vertical lg:stats-horizontal container mx-auto  bg-emerald-50">
        <div className="stat text-center lg:mx-5">
          <div className="stat-title text-2xl">Post Created</div>
          <div className="stat-value text-secondary text-4xl">15K+</div>
        </div>

        <div className="stat text-center">
          <div className="stat-title text-2xl">Member Online Right Now</div>
          <div className="stat-value text-secondary text-4xl">2.5k+</div>
        </div>

        <div className="stat text-center">
          <div className="stat-title text-2xl">New post In Every Week</div>
          <div className="stat-value text-secondary text-4xl">1.5k+</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
