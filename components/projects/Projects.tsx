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
          demo="https://constructa.vercel.app"
          view="https://github.com/Georgewill-Hope/constructa.git"
        />
        <Card
          img=""
          type="Coming Soon!"
          demo="constructa.vercel.app"
          view="https://github.com/Georgewill-Hope/constructa.git"
        />
        <Card
          img=""
          type="Coming Soon!"
          demo="constructa.vercel.app"
          view="https://github.com/Georgewill-Hope/constructa.git"
        />
      </div>
    </section>
  );
};

export default Projects;
