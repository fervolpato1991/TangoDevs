import  { faFigma,
faReact,
faGit,
faMongodb,
faNodejs,
faTailwind,
css,
html,
threejs,
javascript

} from "../assets/images/index.js";


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
      descriptionEn : "I am a full stack developer currently more oriented to the frontend, with a background in law, I have knowledge in PERN technology, and in libraries such as tailwind, I consider myself a serious and analytical person, with aspirations to work in groups to develop projects such as web pages and in a future creation of videogames or cybersecurity.  ",
      descriptionEs : "Soy desarrollador full stack actualmente mas orientado al frontend, con background en abogacia, poseo conocimientos en tecnologia PERN, y en librerias como tailwind, me considero una persona que seria y analitica, con  aspiraciones a trabajar en grupos desarrollen proyectos tales como paginas web y en un futuro creación de videojuegos o ciberseguridad."
      github: 'https://github.com/fervolpato1991',
      linkedin: 'https://www.linkedin.com/in/fernando-volpato-5bb718217/',

    },
    {
      id: 2,
      name: 'Gisella',
      specialization: 'Game Designer, Creative Developer',
      profileImage: 'https://avatars.githubusercontent.com/u/124207301?v=4',

      descriptionEn : "Hello! I'm a creative fullstack developer and game designer, I specialize in thinking outside the box, making cat memes and developing and programming everything that has to do with creative design",
      descriptionEs : "Hola! Soy una desarrolladora fullstack creativa y diseñadora de videojuegos, me especializo en pensar fuera de cajas, hacer memes y desarrollar y programar todo lo que tenga que ver con diseño creativo."
    github: 'https://github.com/GKallisti',
      linkedin: 'https://www.linkedin.com/in/gisella-gkallisti/',

    },
    {
      id: 3,
      name: 'Nahuel',
      specialization: 'Full-Stack',
      profileImage: 'https://avatars.githubusercontent.com/u/125685144?v=4',
      descriptionEs : 'Tengo habilidades técnicas sólidas y pasión por la implementación de nuevas ideas.Logrando que todos los proyectos en los que he participado destaquen por una funcionalidad e interfaz limpia, pero por sobre todo la calidad humana que brindamos a los usuarios y al equipo de trabajo.',
      descriptionEn : 'I have solid technical skills and passion for the implementation of new ideas. I can make all projects stand out for their functionality and interface cleanliness, but above all the human quality that we provide to the users and the team.',
      github: 'https://github.com/MNahuelRotela',
      linkedin: 'https://www.linkedin.com/in/nahuelrotela/',
        },
    {
      id: 4,
      name: 'Rodrigo',
      specialization: 'Full-Stack',
      profileImage: 'https://avatars.githubusercontent.com/u/124008724?v=4',
      descriptionEs : 'Hola! Me considero un comodin, puedo trabajar tanto en front-end como en back-end. ',
      descriptionEn : 'Hi! I consider myself a comodine, I can work both in front-end and back-end.',
      github: 'https://github.com/REVelazquez',
      linkedin: 'https://www.linkedin.com/in/rodrigo-velazquez-9bb156267/',
    },
    {
      id: 5,
      name: 'Santiago',
      specialization: 'Full-Stack',
      profileImage: 'https://firebasestorage.googleapis.com/v0/b/stuff-5f064.appspot.com/o/262592212_4627071680705321_418512524188058664_n.jpg?alt=media&token=c44868d5-9393-4b10-9dea-4f27a20df9d5',
      descriptionEs : 'Heyyo MFs ',
      descriptionEn : 'Too vieja.',
      github: 'https://github.com/Santjagor',
      linkedin: 'https://www.linkedin.com/in/sms57/',
    },
  ];

const projects = [
    {
        id: 1,
        title: 'LobbyLair',
        descriptionES: 'Red social para gamers donde los jugadores pueden encontrarse en tiempo real, socializar y unirse a otras partidas.',
        descriptionEN: 'Social network for gamers where players can find each other in real time, socialize and join other games.',
        image: 'https://firebasestorage.googleapis.com/v0/b/stuff-5f064.appspot.com/o/lobbylair.png?alt=media&token=ffd4ad61-49c9-4544-bf8c-2b42da620430',
        link: 'https://lobbylair-gkallisti.vercel.app/',
      },
      {
        id: 2,
        title: 'The Bunker Sala',
        descriptionEN: 'This page was made for a rehearsal room. The objective is, that through it users can receive information on the latest band dates, review the list of equipment that the room has, log in and register shifts, etc.',
        descriptionES: 'Esta pagina fue hecha para una sala de ensayo. El objetivo es que a traves de ella los usuarios puedan recibir información sobre las fechas de las bandas, revisar la lista de equipos que tiene la sala, iniciar sesion y registrar turnos, etc.',
        image: 'https://firebasestorage.googleapis.com/v0/b/stuff-5f064.appspot.com/o/thebunker.jpg?alt=media&token=e94a6e25-ebf6-493a-89c1-461a41edd73d',
        link: 'https://enlace-al-proyecto-2.com',
      },
      {
        id: 3,
        title: 'Inmobiliaria Pepito',
        descriptionES: 'Este proyecto fue encargado por una inmobiliaria que necesitaba modernizar sus servicios, asi que nos pidieron que hicieramos una plataforma con una ux ui limpia y amigable.',
        descriptionEN: 'This project was made for a real estate company that needed to modernize their services, so we made a platform with a clean and friendly ux ui.',
        image: 'https://firebasestorage.googleapis.com/v0/b/stuff-5f064.appspot.com/o/inmobiliaria.jpeg?alt=media&token=43cd5f9c-5f26-4495-baa3-1cbbd748f106',
        link: 'https://enlace-al-proyecto-3.com',
      },
      
      {
        id: 4,
        title: 'Rastafi',
        descriptioEN: 'This landing page was made for a client who demanded a modern, minimalist and fast page to present his services.',
        descriptionES: ' Esta pagina de inicio fue hecha para un cliente que exige una pagina moderna, minimalista y rapida para presentar sus servicios.',
        image: 'https://firebasestorage.googleapis.com/v0/b/stuff-5f064.appspot.com/o/rastafi.png?alt=media&token=f3723ac0-33e2-4075-96e4-ae00f64796a9',
        link: 'https://enlace-al-proyecto-2.com',
      },
      {
        id: 43,
        title: 'Inmobiliaria Pepito',
        descriptionES: 'Este proyecto fue encargado por una inmobiliaria que necesitaba modernizar sus servicios, asi que nos pidieron que hicieramos una plataforma con una ux ui limpia y amigable.',
        descriptionEN: 'This project was made for a real estate company that needed to modernize their services, so we made a platform with a clean and friendly ux ui.',
        image: 'https://firebasestorage.googleapis.com/v0/b/stuff-5f064.appspot.com/o/inmobiliaria.jpeg?alt=media&token=43cd5f9c-5f26-4495-baa3-1cbbd748f106',
        link: 'https://enlace-al-proyecto-3.com',
      },,
      {
        id: 34,
        title: 'Inmobiliaria Pepito',
        descriptionES: 'Este proyecto fue encargado por una inmobiliaria que necesitaba modernizar sus servicios, asi que nos pidieron que hicieramos una plataforma con una ux ui limpia y amigable.',
        descriptionEN: 'This project was made for a real estate company that needed to modernize their services, so we made a platform with a clean and friendly ux ui.',
        image: 'https://firebasestorage.googleapis.com/v0/b/stuff-5f064.appspot.com/o/inmobiliaria.jpeg?alt=media&token=43cd5f9c-5f26-4495-baa3-1cbbd748f106',
        link: 'https://enlace-al-proyecto-3.com',
      },
      {
        id: 33,
        title: 'Inmobiliaria Pepito',
        descriptionES: 'Este proyecto fue encargado por una inmobiliaria que necesitaba modernizar sus servicios, asi que nos pidieron que hicieramos una plataforma con una ux ui limpia y amigable.',
        descriptionEN: 'This project was made for a real estate company that needed to modernize their services, so we made a platform with a clean and friendly ux ui.',
        image: 'https://firebasestorage.googleapis.com/v0/b/stuff-5f064.appspot.com/o/inmobiliaria.jpeg?alt=media&token=43cd5f9c-5f26-4495-baa3-1cbbd748f106',
        link: 'https://enlace-al-proyecto-3.com',
      },     {
        id: 6,
        title: 'Inmobiliaria Pepito',
        descriptionES: 'Este proyecto fue encargado por una inmobiliaria que necesitaba modernizar sus servicios, asi que nos pidieron que hicieramos una plataforma con una ux ui limpia y amigable.',
        descriptionEN: 'This project was made for a real estate company that needed to modernize their services, so we made a platform with a clean and friendly ux ui.',
        image: 'https://firebasestorage.googleapis.com/v0/b/stuff-5f064.appspot.com/o/inmobiliaria.jpeg?alt=media&token=43cd5f9c-5f26-4495-baa3-1cbbd748f106',
        link: 'https://enlace-al-proyecto-3.com',
      },     {
        id: 8,
        title: 'Inmobiliaria Pepito',
        descriptionES: 'Este proyecto fue encargado por una inmobiliaria que necesitaba modernizar sus servicios, asi que nos pidieron que hicieramos una plataforma con una ux ui limpia y amigable.',
        descriptionEN: 'This project was made for a real estate company that needed to modernize their services, so we made a platform with a clean and friendly ux ui.',
        image: 'https://firebasestorage.googleapis.com/v0/b/stuff-5f064.appspot.com/o/inmobiliaria.jpeg?alt=media&token=43cd5f9c-5f26-4495-baa3-1cbbd748f106',
        link: 'https://enlace-al-proyecto-3.com',
      },
]


const tools = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: faReact,
  },
  {
    name: "Tailwind CSS",
    icon: faTailwind,
  },
  {
    name: "Node JS",
    icon: faNodejs,
  },
  {
    name: "MongoDB",
    icon: faMongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: faGit,
  },
  {
    name: "figma",
    icon: faFigma,
  },


];

export  {
  aboutEn,
  aboutEs,
  teamMembers,
  projects,
  tools
  } 