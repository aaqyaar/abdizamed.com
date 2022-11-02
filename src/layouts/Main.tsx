import React, { Fragment } from "react";
import type { SkillsType } from "types/skills.types";
import type { Projects as ProjectsType } from "types/projects.types";
import { Skills, Hero, Projects, Services, Contact } from "views";

type Props = {
  projects: ProjectsType;
  skills: SkillsType;
};

export default function Main({ projects, skills }: Props) {
  return (
    <Fragment>
      <Hero />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Services />
      <Contact />
    </Fragment>
  );
}
