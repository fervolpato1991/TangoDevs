import ProjectCard from '../ProjectCard';
import { projects } from '../../Extra/index.js';

const Projects = () => {
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
          <ProjectCard key={project.id} projectData={project} />
        ))}
      </div>

      <div className="technologies">
        <h3>Tecnologías Utilizadas</h3>
        <div className="tech-cards">
          <div className="tech-card">
            <i className="fab fa-react"></i> {/* Icono de React */}
            <p>
              React es una biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables.
            </p>
          </div>
          <div className="tech-card">
            <i className="fab fa-node-js"></i> {/* Icono de Node.js */}
            <p>
              Node.js es un entorno de ejecución de JavaScript en el lado del servidor que permite construir aplicaciones escalables.
            </p>
          </div>
          <div className="tech-card">
            <i className="fab fa-node-js"></i> {/* Icono de Express.js */}
            <p>
              Express.js es un marco de aplicación web de Node.js para crear aplicaciones web y APIs de forma sencilla.
            </p>
          </div>
          <div className="tech-card">
            <i className="fab fa-sass"></i> {/* Icono de Sass */}
            <p>
              Sass es un preprocesador de CSS que facilita el trabajo con estilos más complejos y reutilizables.
            </p>
          </div>
          {/* Agrega aquí los demás íconos de tecnologías que desees utilizar */}
        </div>
      </div>
    </div>
  );
};

export default Projects;