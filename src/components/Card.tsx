import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  other?: any;
};

export default function Card({ children, className, ...other }: Props) {
  return (
    <div
      className={`${className} my-2 mx-2 rounded-md   px-4 
        py-4
        shadow-lg 
      shadow-gray-900`}
    >
      {children}
    </div>
  );
}
