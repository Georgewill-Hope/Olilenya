import React from "react";
import Card from "../card/Card2";

const Projects = () => {
  return (
    <section
      className="lg:h-screen flex flex-col justify-center items-center gap-10"
      id="projects"
    >
      <h2 className="font-bold text-xl lg:text-2xl  letter">
        My <span className="text-sky-700">Proj</span>ects
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-5">
        <Card
          img="/images/constructa.jpg"
          type="Constructa"
          live={false}
          demo="https://constructa-georgewill-hope.vercel.app/"
          view="https://github.com/Georgewill-Hope/constructa.git"
        />
        <Card
          img="/images/hbcw.jpg"
          type="Holiness Bible Church World-wide"
          live={true}
          demo="https://www.hbcww.org"
          view="https://hbcww-georgewill-hope.vercel.app/"
        />
        <Card img="" type="Coming Soon!" live={false} demo="" view="" />
      </div>
    </section>
  );
};

export default Projects;
