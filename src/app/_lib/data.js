import { FaLinkedin, FaGithub } from "react-icons/fa";

import { BsTwitterX, BsMedium } from "react-icons/bs";
import boilerplate from '../images/boilerplate.png'
import cafecodebrew from '../images/cafecodebrew.png'
import parksnrec from '../images/parknrec.png'
import pokedex from '../images/pokedex.png'
import scrapplr from '../images/scrapplr.png'
import snake from '../images/snake.png'
import stardew from '../images/stardewvalley.png'
import starhopper from "../images/starhopper.png";

export const socials = [
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

export const experiences = [
  {
    date: "Mar 2022 - Jun 2023",
    title: "Full Stack Engineer",
    employer: "Bounty",
    link: "https://www.bounty.co/",
    description:
      "As a full stack engineer and first engineering hire at Bounty, I developed the first iterations of multiple platform projects, utilizing a comprehensive tech stack that includes TypeScript, ApolloGQL, React, and Next within a large monorepo. I played a key role in enhancing our in-house UI library by creating reusable components tailored for both mobile and web interfaces. Additionally, I designed and built internal tools for the Operations and Customer Support teams, streamlining their workflows and improving customer response times. ",
    technologies: [
      "Typescript",
      "React",
      "Next",
      "Apollo GraphQL",
      "Node",
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
      "In my role as a Psychometrician, I managed the daily analysis and review of 2-3 comprehensive patient tests, collaborating closely with clinical staff and patients to generate 4-5 detailed reports each week. I also supervised a team of assistant psychometricians and interns, scheduling meetings and setting both weekly and monthly goals to streamline our operations.  ",
  },
  {
    date: "Jan 2018 - Jan 2019",
    title: "Research Assistant",
    employer: "NYU College of Dentistry",
    link: "https://dental.nyu.edu/",
    description:
      "As a Research Assistant at NYU College of Dentistry's COBRA Lab, I honed my technical skills by conducting 3D printing, microCT imaging, and nano-indentation, while also preparing polished specimen samples. My commitment to advancing research was demonstrated through monthly presentations using quantitative analysis and creative visuals. ",
  },
];

export const projects = [
  {
    name: "Scrapplr - A virtual photo book",
    imgUrl: scrapplr,
    description:
      "A progressive web application to document your trip on the go. Include photos, text, and Google panoramic views. Track your trip with Google Map and share your photos with your friends and family.",
    link: "",
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
    link: "",
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
  {
    name: "PERN Boilerplate",
    imgUrl: boilerplate,
    description:
      "A simple PERN boilerplate. Can use to jumpstart a fullstack project using Postgres, Express.js, React.js and Node.js. A fun project to learn the basics of building a project from scratch.",
    link: "",
    technologies: ["Javascript", "React", "Express", "PostgreSQL", "Node"],
  },
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

export const funStuff = [
  {
    name: "Stardew Valley Profile",
    imgUrl: stardew,
    description: "Built a Stardew Valley Profile for my character. ",
    link: "",
    technologies: ["Javascript", "React", "Next", "CSS", "Chakra UI"],
  },
  {
    name: "Snake Game",
    imgUrl: snake,
    description:
      "A snake game inspired by the iconic the Nokia snake game. Built using vanilla Javascript, HTML, and CSS. Inspired by this simple tutorial.",
    link: "",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Pokedex",
    imgUrl: pokedex,
    description:
      "Small React project created during an interview process to browse and search Pokémon via the Poke API.",
    link: "",
    technologies: ["Javascript", "HTML", "CSS", "React"],
  },
  {
    name: "Parks and Recreation Gif Generator",
    imgUrl: parksnrec,
    description:
      "A tribute to my love for Parks and Recreation, a character Gif generator. Choose between Leslie, Ron, Anne and other main characters and generate a funny gif from the show.",
    link: "",
    technologies: ["Javascript", "React", "Giphy API", "Material UI"],
  },
];
