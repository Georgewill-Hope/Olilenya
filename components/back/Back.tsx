import React from "react";
import { Card } from "..";

const Back = () => {
  return (
    <div className="w-full text-sm pt-8 pb-14 lg:pt-10 rounded-lg md:w-[50%] lg:w-full mx-auto h-[450px] lg:h-[550px] bg-sky-800/40">
      <h3 className="text-center font-semibold mb-5 lg:text-xl">
        <span className="text-sky-700">Back-End</span> Development
      </h3>
      <div className="flex justify-center gap-10 lg:gap-28 w-full">
        <div className="flex flex-col gap-3 lg:gap-5">
          <Card title="Mongo DB" content="Experinced" />
          <Card title="Next js" content="Intermediate" />
        </div>
        <div className="flex flex-col gap-3 lg:gap-5">
          <Card title="Node js" content="Intermediate" />
          <Card title="Sanity" content="Experinced" />
        </div>
      </div>
    </div>
  );
};

export default Back;
