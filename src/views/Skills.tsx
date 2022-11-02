import React, { useEffect, useRef } from "react";
import { CircleGrid } from "react-awesome-shapes";
import Image from "next/image";
import useMediaQuery from "hooks/useMediaQuery";
import type { SkillsType, Skills } from "types/skills.types";

type Props = {
  skills: SkillsType;
};

export default function Skills({ skills }: Props) {
  const ref = useRef<object | null | any>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeIn");
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
  }, []);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <section id="Skills" className="mt-28 max-w-full md:mt-48">
      <div ref={ref}>
        <div
          id="Skills"
          className="mb-16 flex items-center justify-center font-poppins"
        >
          <h1 className=" inline-block rounded border-b-4 border-gray-700 text-4xl font-bold tracking-wider text-gray-700">
            Skills
          </h1>
        </div>
        <div>
          {!isMobile || !isTablet ? (
            <CircleGrid color="#374151" size="175px" zIndex={2} />
          ) : null}
        </div>
        <div className="mx-8 flex items-center justify-center">
          <div className="grid grid-cols-8 gap-4">
            {skills.map((skill: Skills, i: number) => (
              <Image
                key={skill.id || i}
                src={skill.icon}
                width={100}
                height={100}
                alt={skill.title}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <CircleGrid
            position="relative"
            color="#374151"
            size="175px"
            zIndex={2}
          />
        </div>
      </div>
    </section>
  );
}
