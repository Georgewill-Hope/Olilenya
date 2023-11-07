import React from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { BsArrowUpCircle } from "react-icons/bs";

interface props {
  title: string;
  content: string;
}

const Card: React.FC<props> = ({ title, content}) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 font-semibold">
        <HiBadgeCheck size={25} className="text-sky-600" />
        <h4 className="lg:text-lg">{title}</h4>
      </div>
      <p className="ms-8">{content}</p>
    </div>
  );
};

export default Card;
