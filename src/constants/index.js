import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  git,
  docker,
  meta,
  hcl,
  threejs,
  python,
  django,
  risc,
  android,
  aws,
  cuda,
  cpp,
  firebase,
  shifttracker,
  raytracer,
  social_dist,
  raj,
  sara,
  gary
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
    title: "Android/iOS Developer",
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
    name: "C++",
    icon: cpp,
  },
  {
    name: "Cuda",
    icon: cuda,
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
    name: "Django",
    icon: django,
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
    name: "Firebase",
    icon: firebase,
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
      "Working in the Silicon Validation Team helping develop Meta's next-generation ML training ASICs and chips.",
      "Developing brand new CI/CD pipelines to automate testing processes.",
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
    image: raj,
    linkedin: "https://www.linkedin.com/in/rajkumaremail/",
  },
  {
    testimonial:
      "Worked under Sara to develop FW Package CI/CD pipelines from the ground up.",
    name: "Sara Sepasian",
    designation: "Software Engineer",
    company: "Meta",
    image: sara,
    linkedin: "https://www.linkedin.com/in/ssepasian/",
  },
  {
    testimonial:
      "Worked alongside Gary and the team to automate Silcon Validation tests and develop the Randomization Framework.",
    name: "Gary Oikawa",
    designation: "Senior Manager Software Development",
    company: "AMD",
    image: gary,
    linkedin: "https://www.linkedin.com/in/garyoikawa/",
  },
];

const projects = [
  {
    name: "ShiftTracker",
    description:
      "Developed LS ShiftTracker, a React Native app for iOS and Android, deployed on App Store and Play Store, with features like geo-fencing, live location tracking, cloud image storage, and employee/admin views, etc, enhancing logistics operations for LS Carriers. Integrated Firebase for backend functionality, providing real-time updates, secure data storage, and streamlined reporting for hundreds of users. Achieved significant improvements in company efficiency by automating shift tracking, fuel consumption logging, and time management for drivers and admins.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "blue-text-gradient",
      },
      {
        name: "ios",
        color: "pink-text-gradient",
      },
    ],
    image: shifttracker,
    source_code_link: "https://github.com/Roopdilawar/ShiftTracker",
    app_store_link: "https://apps.apple.com/ca/app/ls-shifttracker/id6636515709",
  },
  {
    name: "RayTracerCUDA",
    description:
      "CUDA-Accelerated Ray Tracing Engine: Spearheaded the development of a high-performance, GPU-optimized ray tracing engine using NVIDIA CUDA, achieving massive 300x speedup over conventional CPU-based implementations. Leveraged parallel processing and advanced memory management to handle complex rendering tasks, integrating bilateral denoising algorithms and anti-aliasing for high-resolution, photorealistic outputs. Engineered a scalable architecture for real-time image rendering with multi-threading, optimized kernel launches, and GPU compute capability utilization.",
    tags: [
      {
        name: "cuda",
        color: "blue-text-gradient",
      },
      {
        name: "c++",
        color: "green-text-gradient",
      },
      {
        name: "nsight-systems",
        color: "pink-text-gradient",
      },
      {
        name: "cmake",
        color: "blue-text-gradient",
      }
    ],
    image: raytracer,
    source_code_link: "https://github.com/Roopdilawar/RayTracerCUDA",
  },
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
    webpage_link: "https://social-distribution-95d43f28bb8f.herokuapp.com/signin",
  },
];

export { services, technologies, experiences, testimonials, projects };
