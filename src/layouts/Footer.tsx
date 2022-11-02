import React from "react";
import { FaSlackHash } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-800 py-6 text-gray-200 "
      id="footer"
    >
      <FaSlackHash className="mb-4 h-20 w-20" />
      <h1 className="mb-1 font-poppins text-lg font-semibold tracking-wider md:text-2xl">
        Copyright &copy; {new Date().getFullYear()} All rights reserved
      </h1>
    </div>
  );
}
