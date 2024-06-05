import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiApollographql } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { BsTwitterX, BsMedium } from "react-icons/bs";

export const technologies = [
  {
    name: "Javascript",
    icon: IoLogoJavascript,
    fill: "#f7df1e",
    bg: "black",
  },
  {
    name: "Typescript",
    icon: BiLogoTypescript,
    fill: "#007acc",
  },
  {
    name: "HTML",
    icon: FaHtml5,
    fill: "#e34c26",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    fill: "#264de4",
  },
  {
    name: "React",
    icon: FaReact,
    fill: "#61DBFB",
    bg: null,
  },
  {
    name: "Next.js",
    icon: TbBrandNextjs,
  },
  {
    name: "Node.js",
    icon: IoLogoNodejs,
    fill: "#3c873a",
  },

  {
    name: "Express.js",
    icon: SiExpress,
  },
  {
    name: "Apollo GraphQL",
    icon: SiApollographql,
  },
];

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
    url: "https://www.linkedin.com/in/deepprajapati/",
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
    link: "google.com",
    description:
      "As a full stack engineer and first engineering hire at Bounty, I developed the first iterations of multiple platform projects, utilizing a comprehensive tech stack that includes TypeScript, ApolloGQL, React, and Next.js within a large monorepo. I played a key role in enhancing our in-house UI library by creating reusable components tailored for both mobile and web interfaces. Additionally, I designed and built internal tools for the Operations and Customer Support teams, streamlining their workflows and improving customer response times. My work also included developing a customizable storefront builder for the Bounty marketplace, empowering over 20 brands to effectively display products and user-generated content. ",
  },
  {
    date: "Feb 2019 - Jan 2021",
    title: "Psychometrician",
    employer: "Comprehensive Consultations Psychological Services",
    link: "google.com",
    description:
      "In my role as a Psychometrician, I managed the daily analysis and review of 2-3 comprehensive patient tests, collaborating closely with clinical staff and patients to generate 4-5 detailed reports each week. I also supervised a team of assistant psychometricians and interns, scheduling meetings and setting both weekly and monthly goals to streamline our operations.  ",
  },
  {
    date: "Jan 2018 - Jan 2019",
    title: "Research Assistant",
    employer: "NYU College of Dentistry",
    link: "google.com",
    description:
      "As a Research Assistant at NYU College of Dentistry's COBRA Lab, I honed my technical skills by conducting 3D printing, microCT imaging, and nano-indentation, while also preparing polished specimen samples. My commitment to advancing research was demonstrated through monthly presentations using quantitative analysis and creative visuals. ",
  },
];
