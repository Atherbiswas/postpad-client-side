import React from "react";

const Statistics = () => {
  return (
    <div className="lg:mt-24 mt-5">
      <div className="stats stats-vertical lg:stats-horizontal container mx-auto  bg-emerald-50">
        <div className="stat text-center">
          <div className="stat-title">Post Created daily</div>
          <div className="stat-value text-secondary">1K+</div>
        </div>

        <div className="stat text-center">
          <div className="stat-title">Member Online Right Now</div>
          <div className="stat-value text-secondary">2.5k+</div>
        </div>

        <div className="stat text-center">
          <div className="stat-title">New post In Every Week</div>
          <div className="stat-value text-secondary">1.5k+</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
