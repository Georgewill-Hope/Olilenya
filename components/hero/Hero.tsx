import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";

const Hero = () => {
  return (
    <section className="w-full  mx-auto lg:px-10">
      <div
        className="h-screen flex flex-col lg:flex-row justify-center lg:justify-center items-center gap-5 lg:gap-10 pt-16  w-full max-w-6xl mx-auto"
        id="home"
      >
        <div className="relative w-72 h-72 lg:w-[450px] lg:h-[450px] rounded-full border">
          <Image
            src="/images/georgewill.jpg"
            alt="Georgewill hope"
            fill
            placeholder="blur"
            blurDataURL="/images/georgewill.jpg"
            priority
            className="object-cover object-top rounded-full border-black border-2 shadow-md shadow-gray-600"
          />
        </div>
        <div className="text-center text-black text-">
          <p className="">Hello i am</p>
          <h1 className="font-bold text-2xl md:text-3xl mb-2">
            Georgewill <span className="text-sky-600">Hope</span>
          </h1>
          <h2 className="font-semibold">Full Stack Developer</h2>
          <div className="flex gap-5 items-center justify-center mt-3">
            <button className="font-semibold border-2 border-black bg-sky-600 rounded-md px-4 py-2 hover:bg-black hover:text-white duration-700">
              Download CV
            </button>
            <Link href="#contact">
              <button className="font-semibold border-2 border-black rounded-md px-4 py-2 bg-black text-white hover:bg-transparent hover:text-black  duration-700">
                Hire Me!
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-3 mt-3">
            <Link
              href="https://www.facebook.com/hope.georgewill.7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdFacebook
                size={35}
                className="hover:text-gray-600 cursor-pointer duration-500 text-sky-600"
              />
            </Link>
            <Link
              href="https://github.com/Georgewill-Hope/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub
                size={35}
                className="hover:text-gray-600 cursor-pointer duration-500"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hope-georgewill-3096b2289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_meduim=andriod_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImLinkedin
                size={30}
                className="hover:text-gray-600 cursor-pointer duration-500 text-sky-600"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
