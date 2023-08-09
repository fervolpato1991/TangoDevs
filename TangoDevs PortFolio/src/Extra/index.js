const aboutEs = [
  { maintext:'Somos un grupo de desarrolladores que amamos los desafios y juntos somos mejores.' }, 
  { subtext:'Nuestro equipo se encuentra formado por:'
}]
const aboutEn = [
  { maintext: 'We are a team of developers who thrive on challenges and collaboration.' },{ subtext : 'This is out team:' } ]
 const teamMembers = [
    {
      id: 1,
      name: 'Fernando',
      specialization: 'Front-End',
      profileImage: 'https://avatars.githubusercontent.com/u/118305965?s=400&u=485f73d77d9b7dd3f3ec80f66f9e263448034945&v=4',
      descriptionEn : "Hi! I'm a front-end developer",
      descriptionEs : "Soy desarrollador full stack actualmente mas orientado al frontend, con background en abogacia, poseo conocimientos en tecnologia PERN, y en librerias como tailwind, me considero una persona que seria y analitica, con  aspiraciones a trabajar en grupos desarrollen proyectos tales como paginas web y en un futuro creación de videojuegos o ciberseguridad."
    },
    {
      id: 2,
      name: 'Gisella',
      specialization: 'Game Designer, Creative Developer',
      profileImage: 'https://avatars.githubusercontent.com/u/124207301?v=4',
      descriptionEn : "Hi! Im a creative fullstack developer and game designer",
      descriptionEs : "Hola! Soy una desarrolladora fullstack creativa y diseñadora de videojuegos"
    },
    {
      id: 3,
      name: 'Nahuel',
      specialization: 'Full-Stack',
      profileImage: 'https://avatars.githubusercontent.com/u/125685144?v=4',
      descriptionEs : 'Tengo habilidades técnicas sólidas y pasión por la implementación de nuevas ideas.Logrando que todos los proyectos en los que he participado destaquen por una funcionalidad e interfaz limpia, pero por sobre todo la calidad humana que brindamos a los usuarios y al equipo de trabajo.',
      descriptionEn : 'I have solid technical skills and passion for the implementation of new ideas. I can make all projects stand out for their functionality and interface cleanliness, but above all the human quality that we provide to the users and the team.'
        },
    {
      id: 4,
      name: 'Rodrigo',
      specialization: 'Full-Stack',
      profileImage: 'https://avatars.githubusercontent.com/u/124008724?v=4',
      descriptionEs : 'Hola! Me considero un comodin, puedo trabajar tanto en front-end como en back-end. ',
      descriptionEn : 'Hi! I consider myself a comodine, I can work both in front-end and back-end.'
    },
    {
      id: 5,
      name: 'Santiago',
      specialization: 'Full-Stack',
      profileImage: 'https://scontent.fmdq6-1.fna.fbcdn.net/v/t39.30808-6/262592212_4627071680705321_418512524188058664_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEK44Pc6TfSVdUnowzxMOzyg1_nTFJZaVeDX-dMUllpV1FOgzV2LlAZS__gco1ifT8FrlpecrE74-1H7BHIss7V&_nc_ohc=OnkfXzzO84MAX_LsBjf&_nc_ht=scontent.fmdq6-1.fna&oh=00_AfCMm0RMqH6-z76oTe-G4o1N10X51VK9tpJQQaGjpWWlLw&oe=64D8EB68',
      descriptionEs : 'Heyyo MFs ',
      descriptionEn : 'Too vieja.'
    },
  ];

const projects = [
    {
        id: 1,
        title: 'LobbyLair',
        description: 'Red social para gamers donde los jugadores pueden encontrarse en tiempo real, socializar y unirse a otras partidas.',
        image: 'https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/Logo.webp?alt=media&token=ea0389a0-f0d5-4d8b-a9b4-c11af490c453',
        link: 'https://lobbylair-gkallisti.vercel.app/',
      },
      {
        id: 2,
        title: 'Proyecto 2',
        description: 'Descripción del proyecto 2',
        image: 'ruta/de/la/imagen2.jpg',
        link: 'https://enlace-al-proyecto-2.com',
      },
      {
        id: 3,
        title: 'Proyecto 3',
        description: 'Descripción del proyecto 3',
        image: 'ruta/de/la/imagen3.jpg',
        link: 'https://enlace-al-proyecto-3.com',
      }
]

export  {
  aboutEn,
  aboutEs,
  teamMembers,
  projects
  } 