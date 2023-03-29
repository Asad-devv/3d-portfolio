import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    sneakinn,
    donut,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    fiverr,
    upwork,
    gennovative,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI/UX DESIGNER",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Fiverr",
      icon: fiverr,
      iconBg: "#f0f8ff",
      date: "March 2022 - Sep 2022",
      points: [
        "Specialized in building stunning, responsive React JS websites with Tailwind CSS and Material UI.","Offered a range of services, including dynamic web app development, third-party API integration, and more.","Consistently delivered high-quality work that met clients' vision, and received positive feedback from clients in various industries."
      ],
    },
    {
      title: "React Js Developer",
      company_name: "Upwork",
      icon: upwork,
      iconBg: "#f0f8ff",
      date: "Sep 2022 - Feb 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer / Co-Founder",
      company_name: "Gennovative Solutions",
      icon: gennovative,
      iconBg: "#171810",
      date: "Feb 2023 - Present",
      points: [
        "Co-founded [company name] and currently serve as a front-end developer, developing responsive web applications that meet clients' needs.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Ensure high-quality code through rigorous testing and code review processes, and improve development practices and processes.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Sneakinn",
      description:
        "E-commerce platform that allows users to search, explore, and get different types of sneakers all around the world, It also has cart and a blog page.",
      tags: [
        {
          name: "StockX API",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: sneakinn,
      source_code_link: "https://github.com/",
    },
    {
      name: "Travel Guider App",
      description:
        "Web application that fetches the user's location and displays different hotels,restaurent .it allows users to search for hotels or restaurants according to their choice.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "GoogleMaps API",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Donut Website",
      description:
        "A Simple Web application that ",
      tags: [
        {
          name: "ThreeJS",
          color: "blue-text-gradient",
        },
        {
          name: "3d",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: donut,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };