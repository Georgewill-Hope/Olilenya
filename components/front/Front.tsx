import React from "react";
import { Card } from "..";

const Front = () => {
  return (
    <div className="w-full text-sm pt-8 pb-14 lg:pt-10 bg-sky-800/40 rounded-lg md:w-[50%] lg:w-full mx-auto h-[450px] lg:h-[550px]">
      <h3 className="text-center font-semibold mb-5 lg:text-xl">
        <span className="text-sky-700">Front-End</span> Development
      </h3>
      <div className="flex justify-center gap-10 lg:gap-28 w-full">
        <div className="flex flex-col gap-3 lg:gap-5">
          <Card title="HTML" content="Experinced" />
          <Card title="JavaScript" content="Intermediate" />
          <Card title="Tailwind" content="Experinced" />
          <Card title="TypeScript" content="Intermediate" />
          <Card title="Git" content="Experinced" />
          <Card title="Material UI" content="Experinced" />
        </div>
        <div className="flex flex-col gap-3 lg:gap-5">
          <Card title="CSS" content="Experinced" />
          <Card title="Sass" content="Experinced" />
          <Card title="React" content="Experinced" />
          <Card title="Figma" content="Intermediate" />
          <Card title="Git-Hub" content="Intermediate" />
          <Card title="Bootstrap" content="Experinced" />
        </div>
      </div>
    </div>
  );
};

export default Front;
