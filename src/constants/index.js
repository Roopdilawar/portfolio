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
  aws,
  qr_game,
  risc_typing,
  social_dist,
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
    date: "May 2024 - Present",
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
      "Worked under Raj to implement the Silicon Test Coverage and Randomization frameworks.",
    name: "Rajkumar Manicka",
    designation: "Service Delivery Manager",
    company: "HCL@Meta",
    image: "https://media.licdn.com/dms/image/D5603AQEnq96OtAR2BQ/profile-displayphoto-shrink_400_400/0/1666668047628?e=1721260800&v=beta&t=OcW_osGY0q7JZZKud8Dghga2SrHH2jDSJDUgZGHd5xU",
    linkedin: "https://www.linkedin.com/in/rajkumaremail/",
  },
  {
    testimonial:
      "Worked under Sara to develop FW Package CI/CD pipelines from the ground up.",
    name: "Sara Sepasian",
    designation: "Software Engineer",
    company: "Meta",
    image: "https://media.licdn.com/dms/image/C5603AQFtlatxJV1log/profile-displayphoto-shrink_400_400/0/1554933203242?e=1721260800&v=beta&t=zvVTz6pQ1fn3KGo62QfW5zNSky4NskeHUQ4UMRnNgIA",
    linkedin: "https://www.linkedin.com/in/ssepasian/",
  },
  {
    testimonial:
      "Worked alongside Gary and the team to automate Silcon Validation tests and develop the Randomization Framework.",
    name: "Gary Oikawa",
    designation: "Senior Manager Software Development",
    company: "AMD",
    image: "https://media.licdn.com/dms/image/D5603AQENPmJYRXANpw/profile-displayphoto-shrink_400_400/0/1714362970466?e=1721260800&v=beta&t=KQV-JslznFcIUmeO21qwe4NJs8nDpot7zscaAxffwhs",
    linkedin: "https://www.linkedin.com/in/garyoikawa/",
  },
];

const projects = [
  {
    name: "Social Distribution",
    description:
      "Spearheaded the development of a cutting-edge decentralized social media platform, utilizing React, Django, Heroku, and PostgreSQL. The project enabled seamless interconnectivity across diverse nodes, fostering a decentralized communication network. A REST API-compliant system was implemented to ensure robust interoperability, allowing users to engage and interact in a secure and decentralized environment. This initiative not only enhanced user privacy and data security but also promoted a more democratic and resilient social media ecosystem.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: social_dist,
    source_code_link: "https://github.com/uofa-cmput404/w24-project-webwizards.git",
  },
  {
    name: "QR Code Game",
    description:
      "Designed and developed an innovative QR code scanning game for Android, inspired by Pokémon Go. This app integrated geolocation, cloud photo storage, and a global leaderboard to enhance user engagement and competition. Leveraging Android Studio and Java for the development, and Firebase for backend services and cloud storage, the game offered a dynamic and interactive experience. The project showcased expertise in mobile app development and effective use of various software development tools and technologies, resulting in a unique and engaging user experience.",
    tags: [
      {
        name: "android_studio",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: qr_game,
    source_code_link: "https://github.com/CMPUT301W22T32/LoveForJava",
  },
  {
    name: "Typing Game in Assembly",
    description:
      "Developed an interactive typing game in Assembly using RISC-V architecture, featuring score tracking, timer, and clock functionalities. The game dynamically assessed typing skills by calculating scores based on typing speed and error frequency, providing precise and real-time performance feedback. This project highlighted proficiency in low-level programming and demonstrated the ability to create engaging and educational applications using RISC-V assembly language.",
    tags: [
      {
        name: "risc-v",
        color: "blue-text-gradient",
      },
      {
        name: "rars",
        color: "green-text-gradient",
      }
    ],
    image: risc_typing,
    source_code_link: "https://github.com/cmput229-fa21/lab_typinggame-Roopdilawar/tree/main",
  },
];

export { services, technologies, experiences, testimonials, projects };
