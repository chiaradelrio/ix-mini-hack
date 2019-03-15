import { Badge } from "../atoms";
import { ProjectCard } from "../molecules";

const Projects = () => (
  <div>
    <h1>Projects page</h1>
    <ProjectCard />
    <Badge number={5} />
  </div>
);

export default Projects;
