import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  hcl,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  django,
  risc,
  android,
  aws
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
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Silicon Validation",
    icon: mobile,
  },
  {
    title: "Android Developer",
    icon: backend,
  },
  {
    title: "DevOps",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
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
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Android Studio",
    icon: android,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Risc-V",
    icon: risc,
  },
];

const experiences = [
  {
    title: "Full Time Contingent Worker",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Working on developing brand new CI/CD pipelines to automate testing processes.",
      "Creating a brand new web app to analyse testing progress across all our silicon chip projects",
      "Working on porting internal tools and libraries to Rust"
    ],
  },
  {
    title: "Software Engineer",
    company_name: "HCL Tech",
    icon: hcl,
    iconBg: "#E6DEDD",
    date: "May 2022 - August 2023",
    points: [
      "Working at Meta as a Contingent Worker.",
    ],
  },
  {
    title: "Intern Contingent Worker",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2022 - August 2023",
    points: [
      "Worked in Meta's Silicon Validation team, architecting CI/CD pipelines that reduced firmware release times by 3x.", 
      "Enhanced pipeline integration with web services using REST APIs, Hack functions, and internal tools like Conveyor, Sandcastle, and Chronos, boosting overall testing workflow efficiency.",
      "Revamped existing CI/CD pipelines by integrating intelligent test analysis, speeding up release approvals by automatically filtering out noncritical failures.",
      "Developed and implemented a Python-based testing framework including a Test Coverage Analysis tool and a Test Randomization framework, improving test efficiency and supporting Meta’s new Inference Accelerator with advanced analytics capabilities.",
      "Utilized data processing tools like Daiquery, Unidash, Presto, and Pandas, and advanced validation tools like Protium/Palladium ASIC emulators for rigorous silicon chip testing.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "HCL Tech",
    icon: hcl,
    iconBg: "#E6DEDD",
    date: "May 2022 - August 2023",
    points: [
      "Worked at Meta as a Contingent Worker for the full duration of my internship.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
