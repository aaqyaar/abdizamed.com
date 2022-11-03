import { CircleGrid } from "react-awesome-shapes";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import useMediaQuery from "hooks/useMediaQuery";
import type { SkillsType, Skills } from "types/skills.types";

type Props = {
  skills: SkillsType;
};

const variants: Variants = {
  onscreen: {
    y: 50,
    scale: 1,
    // rotateY: 10,
    rotateX: -10,
    transition: {
      type: "spring",
      bounce: 0.7,
      duration: 2,
    },
  },
};

export default function Skills({ skills }: Props) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <motion.div
      initial="hidden"
      whileInView="onscreen"
      className="mt-28 max-w-full animate-pulse md:mt-48"
      viewport={{ amount: 0.8 }}
    >
      <section id="skills">
        <motion.div variants={variants}>
          <div
            id="content"
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
        </motion.div>
      </section>
    </motion.div>
  );
}
