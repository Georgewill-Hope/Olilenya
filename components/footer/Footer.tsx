import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="px-5 pt-5 lg:px-0 text-center my-5 lg:my-0">
      <div className="h-[9vh] w-full max-w-6xl mx-auto flex justify-center items-center border-t-4 border-sky-700">
        <p className="text-sm">
          Copyright 2023{" "}
          <Link href="#Home">
            <span className="font-semibold">GEORGEWILL HOPE</span>
          </Link>{" "}
          All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
