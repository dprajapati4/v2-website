import { FaLinkedin, FaGithub } from "react-icons/fa";

import { BsTwitterX, BsMedium } from "react-icons/bs";
import boilerplate from "../../../public/assets/boilerplate.png";
import cafecodebrew from "../../../public/assets/cafecodebrew.png";
import parksnrec from "../../../public/assets//parknrec.png";
import pokedex from "../../../public/assets/pokedex.png";
import scrapplr from "../../../public/assets/scrapplr.png";
import snake from "../../../public/assets/snake.png";
import stardew from "../../../public/assets/stardewvalley.png";
import starhopper from "../../../public/assets/starhopper.png";
import skincareai from "../../../public/assets/skincare-ai.png";
import aichatbot from "../../../public/assets/ai-chatbot.png";
import ghibli from "../../../public/assets/ghibli.png";

export const SOCIALS = [
  {
    name: "Github",
    icon: FaGithub,
    url: "https://github.com/dprajapati4",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/deepprajapati/",
  },
  {
    name: "Twitter",
    icon: BsTwitterX,
    url: "https://x.com/Lil_prajapati",
  },
  {
    name: "Medium",
    icon: BsMedium,
    url: "https://medium.com/@dprajap2",
  },
  //   {
  //     name: "Email",
  //     icon: HiOutlineMail,
  //     url:'mailto:'
  //   },
];

export const EXPERIENCES = [
  {
    date: "Mar 2022 - August 2024",
    title: "Full Stack Engineer",
    employer: "Bounty",
    link: "https://www.bounty.co/",
    description:
      "Developed and maintained the initial iterations of multiple platform projects using a comprehensive tech stack, including TypeScript, ApolloGQL, React, and Next within a large monorepo. Enhanced the in-house UI library by creating reusable components for both mobile and web interfaces. Designed and built internal tools for the Operations and Customer Support teams, streamlining workflows and improving customer response times.",
    technologies: [
      "Typescript",
      "React",
      "React Native",
      "Next",
      "Apollo GraphQL",
      "Node",
      "AWS",
      "Chakra UI",
      "Tamagui",
      "AG Grid",
    ],
  },
  {
    date: "Feb 2019 - Jan 2021",
    title: "Psychometrician",
    employer: "Comprehensive Consultations Psychological Services",
    link: "https://comprehendthemind.com/",
    description:
      "Conducted daily analysis and reviews of 2-3 comprehensive patient tests, collaborating with clinical staff and patients to generate 4-5 detailed reports weekly. Managed a team of assistant psychometricians and interns, scheduling meetings and setting both weekly and monthly goals to improve operational efficiency.",
  },
  {
    date: "Jan 2018 - Jan 2019",
    title: "Research Assistant",
    employer: "NYU College of Dentistry",
    link: "https://dental.nyu.edu/",
    description:
      "Developed technical skills by performing 3D printing, microCT imaging, and nano-indentation, while preparing polished specimen samples. Presented monthly research findings through quantitative analysis and creative visualizations, demonstrating a commitment to advancing research.",
  },
];

export const PROJECTS = [
  {
    name: "Skincare Ai",
    imgUrl: skincareai,
    description:
      "Your personalized skincare assistant powered by AI. Analyze ingredients, discover new products, and build a personalized skincare routine with a clean, fast, and modern UI.",
    link: "https://skincare-ai-dp.vercel.app",
    technologies: [
      "Javascript",
      "React",
      "Next",
      "Tailwind CSS",
      "Groq Cloud’s LLM API",
    ],
  },
  {
    name: "AI Chatbot",
    imgUrl: aichatbot,
    description:
      "An AI chatbot powered by Groq's fast inference API. Built with TypeScript and Vite.",
    link: "https://github.com/dprajapati4/ai-chatbot",
    technologies: [
      "Typescript",
      "React",
      "CSS",
      "Next",
      "Groq Cloud’s LLM API",
    ],
  },
  {
    name: "Scrapplr - A virtual photo book",
    imgUrl: scrapplr,
    description:
      "A progressive web application to document your trip on the go. Include photos, text, and Google panoramic views. Track your trip with Google Map and share your photos with your friends and family.",
    link: "https://github.com/team-antheia/scrapplr",
    technologies: [
      "Javascript",
      "React",
      "Firebase",
      "Google Maps API",
      "Grommet UI",
    ],
  },
  {
    name: "Cafe Code Brew",
    imgUrl: cafecodebrew,
    description:
      "A virtual a cafe experience. Cafe Code Brew allows its users to select a cafe ambience, music, view real cafes near you and order food. Use the onsite messaging to invite your friends to join your cafe experience.",
    link: "https://github.com/dprajapati4/code_brew",
    technologies: [
      "Javascript",
      "React",
      "Node",
      "Yelp API",
      "Semantic UI",
      "CSS",
      "Twilio",
    ],
  },
  // {
  //   name: "PERN Boilerplate",
  //   imgUrl: boilerplate,
  //   description:
  //     "A simple PERN boilerplate. Can use to jumpstart a fullstack project using Postgres, Express.js, React.js and Node.js. A fun project to learn the basics of building a project from scratch.",
  //   link: "",
  //   technologies: ["Javascript", "React", "Express", "PostgreSQL", "Node"],
  // },
  {
    name: "Starhopper - A mock e-commerce website",
    imgUrl: starhopper,
    description:
      "A mock e-commerce website that sells all inclusive starship tickets to intergalatic stars. Take a trip to Orion and explore meteor debris, star hiking and space games.",
    link: "",
    technologies: [
      "Javascript",
      "React",
      "Redux",
      "Express",
      "PostgreSQL",
      "Node",
      "CSS",
    ],
  },
];

export const FUNSTUFF = [
  {
    name: "Ghibli Movies Recipe Book",
    imgUrl: ghibli,
    description:
      "A magical collection of recipes inspired by the beautiful food scenes from Studio Ghibli films. From Howl's bacon and eggs to Spirited Away's feast, bring the enchanting flavors of Studio Ghibli into your own kitchen.",
    link: "https://github.com/dprajapati4/ghibli-recipe-book",
    technologies: [
      "Javascript",
      "React",
      "Next",
      "CSS",
      "Chakra UI",
      "Studio Ghibli API",
    ],
  },
  {
    name: "Stardew Valley Profile",
    imgUrl: stardew,
    description:
      "Built a Stardew Valley Profile for my character as a Software Engineer. ",
    link: "",
    technologies: ["Javascript", "React", "Next", "CSS styled-components"],
  },
  {
    name: "Snake Game",
    imgUrl: snake,
    description:
      "A snake game inspired by the iconic the Nokia snake game. Built using vanilla Javascript, HTML, and CSS. Inspired by this simple tutorial.",
    link: "https://github.com/dprajapati4/snake-game",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Pokedex",
    imgUrl: pokedex,
    description:
      "Small React project created using the Poke API to browse and search for Pokémon.",
    link: "https://github.com/dprajapati4/pokedex",
    technologies: ["Javascript", "HTML", "CSS", "React"],
  },
  {
    name: "Parks and Recreation Gif Generator",
    imgUrl: parksnrec,
    description:
      "A tribute to my love for Parks and Recreation, a character Gif generator. Choose between Leslie, Ron, Anne and other main characters and generate a funny gif from the show.",
    link: "https://github.com/dprajapati4/parks-n-recs-gif-app",
    technologies: ["Javascript", "React", "Giphy API", "Material UI"],
  },
];

export const CORESKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "Next.js",
  "Express",
  "Git",
  "Docker",
  "REST APIs",
  "GraphQL",
];
