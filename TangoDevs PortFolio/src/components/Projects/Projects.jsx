import ProjectCard from '../ProjectCard/ProjectCard';
import projectsData from '../ProjectData/ProjectData';

const Projects = () => {
  if (!projectsData || projectsData.length === 0) {
    return <div>No hay proyectos para mostrar.</div>;
  }

  return (
    <div className="project-grid">
      {projectsData.map((project) => (
        <ProjectCard key={project.id} projectData={project} />
      ))}
    </div>
  );
};

export default Projects;
