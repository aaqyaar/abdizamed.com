import React from "react";

type Props = {};

export default function Scrollbar({}: Props) {
  return (
    <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full h-32 overflow-y-scroll  scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-slate-900">
      <div className="h-64 bg-gray-400">
        {Array.from({ length: 100 }, (_, i) => (
          <div key={i} className="h-4 bg-gray-200" />
        ))}
      </div>
    </div>
  );
}
