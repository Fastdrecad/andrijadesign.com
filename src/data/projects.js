import {
  andrijaDesignVideo,
  andrijaImage,
  goddessWithinImage,
  goddessWithinVideo,
  itBridgeImage,
  melodyMingleVideo,
  newHorizonsImage,
  newHorizonsVideo
} from "../assets/";

export const projects = [
  {
    year: 2024,
    featured: true,
    id: 6,
    url: "https://itbridge-services.com",
    youtubeUrl: "https://itbridge-services.com",
    gitHubUrl: "https://github.com/Fastdrecad/it-bridge",
    title: "IT Bridge Services",
    video: "",
    image: itBridgeImage,
    desc: "Designed and developed for IT Bridge Services, this website aims to enhance user engagement, increase sales, and provide superior customer support. Key features include Calendly integration for easy appointment scheduling, an embedded Google Map for location services, a contact form for customer inquiries, and setup of professional email hosting. The site was built using Next.js and Tailwind CSS, and designed in Figma. Additionally, I managed the full deployment cycle, including hosting on a VPS and configuring Nginx, ensuring robust performance and security.",
    "tech": [
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
      "GoogleMaps API",
      "MailerLite API",
      "Calendly API"
    ]
  },
  {
    year: 2024,
    featured: false,
    id: 5,
    url: "https://fastdrecad.github.io/stopwatch-app/",
    youtubeUrl: "https://fastdrecad.github.io/stopwatch-app/",
    gitHubUrl: "https://github.com/Fastdrecad/stopwatch-app",
    title: "Stopwatch",
    video: "",
    image: "",
    desc: "React-based app designed to showcase streamlined UI design and development. Users can set a target duration and control the stopwatch with start, pause, and reset buttons. Developed using React, TypeScript, and SCSS, the project emphasizes a clean and intuitive interface, focusing on efficient code and user-friendly interactions without extra UI libraries.",
    tech: ["Figma", "React", "JavaScript", "Sass", "TypeScript"]
  },

  {
    year: 2024,
    featured: true,
    id: 4,
    url: "https://melody-mingle.vercel.app/",
    youtubeUrl: "https://melody-mingle.vercel.app/",
    gitHubUrl: "https://github.com/Fastdrecad/melody-mingle",
    title: "Melody Mingle",
    image: "",
    video: melodyMingleVideo,
    desc: `A dynamic music streaming app developed in TypeScript and built with Next.js, featuring Stripe integration for payment processing. It utilizes Supabase for backend services and is styled with Tailwind CSS to ensure a modern and responsive user interface.`,
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
      "Zustand"
    ]
  },
  {
    year: 2023,
    featured: true,
    id: 3,
    url: "https://www.goddess-within.andrijadesign.com",
    youtubeUrl: "https://youtu.be/3Rk5Nq-Uc2k",
    gitHubUrl: "https://github.com/Fastdrecad/goddess-within-app",
    title: "Goddess Within",
    image: goddessWithinImage,
    video: goddessWithinVideo,
    desc: `"Goddess Within" is designed for modern shoppers, featuring a dynamic Restful API for seamless product, order, and user management. Built with React and Redux Toolkit, it ensures smooth user experience and efficient state management. Engineered reusable components and clean Sass design, with PayPal integration and rigorous testing, it's the ultimate solution for eCommerce.`,
    tech: [
      "Node.js",
      "MongoDB",
      "Express",
      "RESTful API",
      "React",
      "Redux Toolkit",
      "Sass",
      "PayPal",
      "VPS",
      "Nginx",
      "Docker"
    ]
  },
  {
    year: 2023,
    id: 2,
    featured: true,
    url: "https://new-horizons.andrijadesign.com",
    youtubeUrl: "https://youtu.be/Iovri7uF-Cg",
    gitHubUrl: "https://github.com/Fastdrecad/new-horizon-estate",
    title: "New Horizons",
    video: newHorizonsVideo,
    image: newHorizonsImage,
    desc: "A Real Estate App that manages listings using the MERN stack (MongoDB, Express.js, React, Node.js), enhanced with JWT, Firebase, and Google OAuth for secure user access. It also uses Redux Toolkit for efficient state management, improving user experience with features like image uploads and property management.",
    tech: [
      "Node.js",
      "MongoDB",
      "Express",
      "React",
      "Firebase",
      "Sass",
      "RESTful API",
      "VPS",
      "Nginx",
      "Docker"
    ]
  },
  {
    year: 2022,
    featured: true,
    id: 1,
    url: "https://portfolio.andrijadesign.com/",
    youtubeUrl: "https://portfolio.andrijadesign.com/",
    gitHubUrl: "https://github.com/Fastdrecad/andrija-designs",
    title: "Personal Website",
    video: andrijaDesignVideo,
    image: andrijaImage,
    desc: "Welcome to my personal website where I showcase my work as a furniture design engineer and 3D artist. This project, built with React and powered by Vite, offers an immersive experience for visitors to explore my diverse range of projects.",
    tech: [
      "React",
      "JavaScript",
      "Redux Toolkit",
      "Sass",
      "Framer Motion",
      "TypeScript",
      "VPS",
      "Nginx",
      "Docker"
    ]
  }
];
