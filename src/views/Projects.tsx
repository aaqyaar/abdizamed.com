import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Card from "components/Card";
import CheckboxIcon from "components/CheckboxIcon";
import type {
  Projects as ProjectsType,
  Project as ProjectType,
  features as FeaturesType,
  Techs,
} from "types/projects.types";
import Image from "next/image";

type Props = {
  projects: ProjectsType;
};

export default function Projects({ projects }: Props) {
  //
  return (
    <section id="MyWork" className="mt-16 max-w-full bg-gray-800 pb-16">
      <div
        id="content"
        className="mb-16 flex flex-col items-center justify-center pt-16"
      >
        <h1 className="mb-4 inline rounded border-b-4  border-gray-700 font-montserrat text-3xl font-semibold tracking-widest  text-gray-100 lg:text-4xl">
          My Recent Projects
        </h1>
        <p className=" text-center font-poppins text-sm tracking-wider text-gray-100 md:w-1/2 md:text-xl">
          I’ve had the pleasure of working with multiple companies, designing
          and implementing both frontend and backend.
        </p>
      </div>
      <div>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 gap-4 lg:mx-96">
              {projects.map((project: ProjectType, i: number) => (
                <Card
                  className="flex flex-col gap-4 px-14 font-poppins"
                  key={i || project.id}
                >
                  <span className="text-center text-xl text-white">
                    {project.name}
                  </span>
                  <span className="text-md text-gray-100">
                    {project.description}
                  </span>
                  <hr />
                  {project.features.map((feature: FeaturesType, i: number) => (
                    <div className="flex gap-4" key={feature.id || i}>
                      <CheckboxIcon className="mt-2" />
                      <span className="text-md text-gray-100">
                        {feature.name}
                        {feature.features && (
                          <ul className="ml-4 list-disc">
                            {feature.features.map(
                              (subFeature: FeaturesType, i: number) => (
                                <li
                                  className="text-md text-gray-100"
                                  key={i || subFeature.id}
                                >
                                  {subFeature.name}
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </span>
                    </div>
                  ))}
                  <hr />
                  <div className="flex flex-col gap-4">
                    <span className="text-md text-gray-100">
                      Technologies used:
                    </span>
                    <div className="flex flex-wrap gap-4">
                      {project.techs.map((tech: Techs, i: number) => (
                        <span className="text-md text-gray-100" key={tech || i}>
                          <Image
                            src={tech}
                            width={30}
                            height={30}
                            alt="Technologies"
                          />
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
