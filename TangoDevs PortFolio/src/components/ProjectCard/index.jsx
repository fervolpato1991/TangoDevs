import './index.scss';
import PropTypes from 'prop-types';


const ProjectCard = ({ projectData, language }) => {
   return (
    

      <div className="card-container">
  <div className="card">

  <div className="front-content">
  <img src={projectData.image} alt={projectData.title}  className="project-image"/>
    <p>{projectData.title}</p>
  </div>
  <div className="content">
    <p className="heading">{language === 'en' ? projectData.descriptionEN : projectData.descriptionES }</p>
        <a href={projectData.link} target="_blank" rel="noopener noreferrer" className="project-links">
          Ver proyecto
        </a>
  </div>
</div>
</div>


  );
};

// ProjectCard.propTypes = {
//     projectData: PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       image: PropTypes.string.isRequired,
//       link: PropTypes.string.isRequired,
//     }).isRequired,
//   };

export default ProjectCard;