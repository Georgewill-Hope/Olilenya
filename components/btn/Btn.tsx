import React from "react";
import Link from "next/link";

interface Props {
  classes: string;
  text: string;
  Href: string;
}

const Btn: React.FC<Props> = ({ classes, text, Href }) => {
  return (
    <Link href={Href} target="_blank" rel="noopener noreferrer">
      <button
        className={`outline-none border-black duration-700 px-5 py-3 rounded-md ${classes} bg-sky-700 text-white hover:bg-white hover:text-black py-[7px] border border-sky-700`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Btn;
