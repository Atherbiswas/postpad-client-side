import React from "react";
import FirstColumn from "./FirstColumn";
import SecondColumn from "./SecondColumn";

const HowItWorks = () => {
  return (
    <div className="lg:mt-24 mt-5">
        <h1 className="lg:text-5xl text-3xl font-bold text-center">How It Works</h1>
        <div className="flex flex-col-reverse lg:flex-row-reverse md:flex-row-reverse container mx-auto lg:mt-10 mt-5">
      <div className="basis-1/2 lg:mx-12 lg:mt-14">
        <SecondColumn></SecondColumn>
      </div>
      <div className="basis-1/2">
      <FirstColumn></FirstColumn>
      </div>
    </div>
    </div>
  );
};

export default HowItWorks;
