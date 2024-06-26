import React from "react";
import Image from "next/image";

import {FaUniversity} from "react-icons/fa"
import { RiAwardFill } from "react-icons/ri";

const About = () => {
  return (
    <section className="px-2 md:px-5 lg:px-0">
      <div
        className="lg:h-screen mb-10 lg:mb-0 flex flex-col items-center justify-center gap-10  w-full max-w-6xl mx-auto"
        id="about"
      >
        <div className="text-center">
          <h2 className="font-semibold">Get To Know More</h2>
          <h3 className="font-extrabold text-2xl letter">
            Abo<span className="text-sky-700">ut</span>{" "}
            <span className="text-sky-700">Me</span>
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-8">
          <div className="relative w-full md:w-80 h-80  lg:w-full lg:h-80 rounded-2xl border-2 border-black">
            <Image
              src="/images/georgewill.jpg"
              alt="Georgewill hope"
              fill
              placeholder="blur"
              blurDataURL="/images/georgewill.jpg"
              priority
              className="object-cover object-top rounded-2xl"
            />
          </div>

          <div>
            <div className="flex flex-col justify-center items-center lg:justify-start md:flex-row gap-10 lg:gap-5 text-center mb-4">
              <div className=" py-5 w-full flex flex-col items-center justify-center bg-gradient-to-r from-sky-700 to-transparent rounded">
                <RiAwardFill size={30} className="mb-3" />
                <h4 className="font-semibold text-sky-800 [text-shadow:_0px_0px_1px_rgb(_0_0_0.38)]">
                  Experience
                </h4>
                <p className="text-gray-800 font-semibold">4+ years</p>
                <p className="text-gray-800 font-semibold">Full Stack Developer</p>
              </div>
              <div className="py-5 w-full rounded flex flex-col items-center justify-center bg-gradient-to-l from-sky-700 to-transparent ">
                <FaUniversity size={30} className="mb-3" />
                <h4 className="font-semibold text-sky-800 [text-shadow:_0px_0px_1px_rgb(_0_0_0.38)]">
                  Education
                </h4>
                <p className="text-gray-800 font-semibold">B.Sc. Bachelors Degree</p>
                <p className="text-gray-800 font-semibold">
                  H.P.D Higher Professional Diploma
                </p>
              </div>
            </div>
            <div className="text-justify font-normal">
              <p>
                Experienced Full-Stack Web Developer proficient in HTML, CSS,
                and JavaScript, with expertise in React and TypeScript for
                dynamic front-end development. Skilled in Sass for efficient
                styling and Node.js for server-side scripting, with MongoDB for
                robust database management. Passionate about crafting seamless
                user experiences and building scalable, responsive web
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
