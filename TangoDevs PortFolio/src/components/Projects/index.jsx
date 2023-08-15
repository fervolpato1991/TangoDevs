import ProjectCard from '../ProjectCard';
import { projects } from '../../Extra/index.js';
import Tech from '../Techs/Tech';

const Projects = (language) => {

  if (!projects || projects.length === 0) {
    return <div>No hay proyectos para mostrar.</div>;
  }

  return (
    <div className='project-container'>
      <div className='intro'>
        <h3>Conoce nuestros proyectos:</h3>
        <p>
          En esta sección encontrarás algunos de los proyectos
          en los que hemos estado trabajando:
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} projectData={project} language={language} />
        ))}
      </div>

      <div className="technologies">
        <h3>Pequeño playground de herramientas que sabemos usar</h3>
        <Tech />
      </div>
    </div>
  );
};

export default Projects;