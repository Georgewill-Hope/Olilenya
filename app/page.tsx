import React from "react";
import { About, Experience, Hero, Projects, Contact } from "@/components";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}
