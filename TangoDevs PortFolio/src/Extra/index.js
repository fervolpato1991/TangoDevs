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
      profileImage: 'ruta/de/la/foto-de-nahuel.jpg',
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