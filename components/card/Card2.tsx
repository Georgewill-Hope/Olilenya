import Image from "next/image";
import React from "react";
import Btn from "../btn/Btn";

interface props {
  type: string;
  demo: string;
  view: string;
  img: string;
}

const Card = ({ type,demo, view, img}: props) => {
  return (
    <div className="relative w-[280px] h-[400px] shadow-md rounded-md">
      <Image
        src={img}
        alt="Georgewill hope"
        fill
        placeholder="blur"
        blurDataURL="/images/georgewill.jpg"
        priority
        className="rounded-md object-cover object-center"
      />
      <div className=" w-full h-full flex flex-col justify-between items-center px-2 py-5 absolute">
        <h2 className="font-semibold">{type}</h2>
        <div className="flex justify-between w-full">
          <Btn
            classes=""
            text="Demo"
            Href={demo}
          />
          <Btn
            classes=""
            text="View Code"
            Href={view}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
