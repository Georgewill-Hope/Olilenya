import React from "react";
import Front from "../front/Front";
import Back from "../back/Back";

const Experience = () => {
  return (
    <section
      className="lg:h-screen flex flex-col justify-center items-center gap-10 mx-2 lg:mx-0 mb-10 lg:mb-0"
      id="experience"
    >
      <h2 className="font-bold text-xl lg:text-2xl  letter">
        Exp<span className="text-sky-700">erie</span>nce
      </h2>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10 w-full">
        <Front />
        <Back />
      </div>
    </section>
  );
};

export default Experience;
