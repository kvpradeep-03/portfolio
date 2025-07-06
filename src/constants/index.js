import eatoImg from '../assets/projects/eato.png';
import pixvaltImg from '../assets/projects/pixvalt.png';
import movieshubImg from '../assets/projects/movieshub.png';
import fusioncartImg from '../assets/projects/fusioncart.png';
import usermanagementapiImg from '../assets/projects/usermanagementapi.png';


export const HERO_CONTENT = `I architect scalable backends and engineer responsive frontends, optimizing every layer of the stack.`;

export const ABOUT_TEXT = `I'm a full-stack web developer with experience in both front-end and back-end technologies. Right now, I’m focused on building modern, responsive web apps and learning how tech can be used to solve everyday problems. I enjoy working on personal projects, experimenting with new tools, and constantly improving my skills. Lately, I've also been diving into cybersecurity and thinking about how to build not just functional websites, but secure and scalable platforms. Whether it’s creating a social app like “Instagram” or brainstorming ideas for a SaaS product, I love bringing ideas to life through code.`;


export const PROJECTS = [
  {
    title: "Eato",
    image: eatoImg,
    type: 'frontend',
    git: "https://github.com/kvpradeep-03/Eato",
    live: "https://eatoapp.netlify.app/",
    description:
      "Eato is a front-end food delivery app with category browsing, sorting, top picks, cart, and a smooth checkout experience.",
    technologies: ["HTML", "CSS", "React", "Material UI"],
  },
  {
    title: "PixValt",
    image: pixvaltImg,
    type: 'frontend',
    git: "https://github.com/kvpradeep-03/PixValt",
    live: "https://pixvaltapp.netlify.app/",
    description:
      "Pixvalt is a front-end social media app with a simple and modern UI. It features a clean layout that mimics the core design of popular social platforms.",
    technologies: ["HTML", "CSS", "React", "Material UI"],
  },
  {
    title: "MoviesHub",
    image: movieshubImg,
    type: 'frontend',
    git: "https://github.com/kvpradeep-03/MoviesHub",
    live: "https://appmovieshub.netlify.app/",
    description:
      "Movieshub is a movie listing web app that fetches real-time data using the TMDB API.\nNOTE: `Use Chrome For better compatability`",
    technologies: ["HTML", "CSS", "React", "Material UI", "OpenTDB API"],
  },
  {
    title: "FusionCart",
    image: fusioncartImg,
    type: 'frontend',
    git: "https://github.com/kvpradeep-03/E-COMMERCE-webpage",
    live: "https://fusioncart.netlify.app/",
    description:
      "FusionCart is a front-end e-commerce web app featuring product listings, cart functionality with browser local storage, and a smooth checkout flow",
    technologies: ["HTML", "CSS","Bootstrap", "Javascript"],
  },
  {
    title: "User-Management Api",
    image: usermanagementapiImg,
    type: 'api',
    git: "https://github.com/kvpradeep-03/user-management-API",
    live: "https://github.com/kvpradeep-03/user-management-API/wiki/user%E2%80%90management-API-Docs",
    description:
      "FusionCart is a front-end e-commerce web app featuring product listings, cart functionality with browser local storage, and a smooth checkout flow",
    technologies: ["Php", "Postman", " RESTful API"],
  },
];

export const CONTACT = {
  Location: "Chennai, Tamil Nadu, India",
  phoneNo: "+91 6383464530",
  email: "kvpradeep60@gmail.com",
};

