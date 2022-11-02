import Image from "next/image";
import React from "react";

type Props = {
  img: any;
};

export default function Images({ img }: Props) {
  return (
    <section className="flex w-full justify-center">
      <Image
        src={img}
        className="h-72 w-80 rounded"
        style={{
          width: "70rem",
          height: "40rem",
        }}
        alt="img"
        width={320}
        height={288}
      />
    </section>
  );
}
