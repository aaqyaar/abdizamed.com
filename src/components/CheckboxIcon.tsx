import React from "react";

type Props = {
  className: string;
};

export default function CheckboxIcon({ className }: Props) {
  return (
    <div
      className={` max-w-6 flex h-6 max-h-6 w-6 items-center justify-center rounded-full bg-gray-200 px-1 py-1 ${className}`}
    >
      <svg
        width={14}
        height={14}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
