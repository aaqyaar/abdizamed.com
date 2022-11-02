import { Meta } from "components";
import { ToastContainer } from "react-toastify";
import { Navbar, Footer, Main } from "layouts";
import projects from "data/projects.json";
import { skills } from "data/skills";
import type { SkillsType } from "types/skills.types";
import type { Projects } from "types/projects.types";

type Props = {
  projects: Projects;
  skills: SkillsType;
};

export default function Home({ projects, skills }: Props) {
  return (
    <div>
      <Meta title="Abdi Zamed | Personal Web." image="/abdizamed.svg" />
      <Navbar />
      <Main projects={projects} skills={skills} />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export async function getStaticProps() {
  const res = await projects;
  const skillsRes = await skills;

  return {
    props: {
      projects: res,
      skills: skillsRes,
    },
  };
}
