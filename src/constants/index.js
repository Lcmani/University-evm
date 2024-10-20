import hero from "../assets/hero1.webp";



import scientes from "../assets/Scientes.webp"
import research from "../assets/Research.webp";
import secretary from "../assets/Secretary.webp";
import national from "../assets/National.webp";

import vission from "../assets/vision.png";
import mission from "../assets/Mission.png"
import portfolio3 from "../assets/portfolio3.webp";
import portfolio4 from "../assets/portfolio4.webp";
import portfolio5 from "../assets/portfolio5.webp";
import portfolio6 from "../assets/portfolio6.webp";



import user1 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";
import user4 from "../assets/user4.webp";
import user5 from "../assets/user5.webp";
import user6 from "../assets/user6.webp";

export const LINKS = [
  {
    name: "Main",
    link: "#services",
  },
  {
    name: "About",
    link: "#portfolio",
  },
  {
    name: "Research",
    link: "#about",
  },
  {
    name: "Students & Ongoing Projects",
    link: "#reviews",
  },
  {
    name: "Contact As ",
    link: "#contact",
  },
];

export const HERO_CONTENT = {
  title: "التنوع الأحيائي والحفظ البيئي",
  subtitle: "Biodiversity and environmental conservation",
  image: hero,
};

export const SERVICES_CONTENT = [
 
  {
    name: "Scientist",
    description:
      "Such as biology, chemistry, physics, and earth sciences, focusing on understanding the natural world.",
    image: scientes,
    alt: "Scientist",
  },
  {
    id: 2,
    name: "Researchers",
    description:
      "Conducting experiments and studies in fields such as biology, chemistry, physics, and medicine.",
    image: research,
    alt: "Researchers",
  },
  {
    id: 3,
    name: "Secretary",
    description:
    "A secretary is often an administrative professional who assists with organizational tasks, including managing schedules, handling correspondence, filing documents, and coordinating meetings. This role is common in offices, schools, and other organizations.",
  image: secretary,
    
  },
  {
    id: 4,
    name: "National & International Collaboration",
    description:
    "Refers to cooperative efforts between individuals, organizations, or countries to achieve shared goals, often in areas like research, policy-making, development, and more.",
  image: national,   
    alt: "National",
    
  }, 
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "Vision",
    description:
      "To be a world-class hub for interdisciplinary education and research programs in microbial pathogenesis and environmental Biotechnology to improve human health. Assisting our Research Partner  M/S TILAD in developing world-leading projects and programs that protect and enhance the environment in sustainable ways in line with the goals of Saudi Vision 2030.",
    image: vission,
    link: "#",
  },
  {
    id: 2,
    title: "Mission",
    description:
      "To promote high-impact education and innovative research in a diverse and inclusive environment by exploring fundamental questions in Microbiology and Biotechnology, and to translate discoveries into therapies against infectious diseases (Humans ,plants and Environmental diversity)  and breast cancer.",
    image: mission,  
    link: "#",
  },
 
 
  
];

export const REVIEWS = {
  text: "Hear what our clients have to say about their experiences with VastuSpaze. We take pride in our work and are committed to delivering top-notch home renovation services.",
  reviews: [
    {
      name: "Alice Johnson",
      title: "Research Article",
      review:
        "To expand interdisciplinary and multidisciplinary collaborations that are recognized internationally for their innovative impacts on microbiology and immunology; To benefit the world by disseminating impactful knowledge and translating scientific   discoveries into diagnostics, therapeutics, and vaccines against human diseases!",
      image: user1,
    },
    {
      name: "Bob Smith",
      title: "Patent",
      review:
        "To provide outstanding education in microbiology and environmental biotechnology to graduate, Post graduate, and Ph.D professional students in sciences; To train a diverse group of scientists and clinicians to solve societal challenges in microbial infection (humans, Plants and Environmental diversity) and  by using cutting-edge approaches",
      image: user2,
    },
    {
      name: "Carla Mendes",
      title: "Conferences",
      review:
        "To provide outstanding education in microbiology and environmental biotechnology to graduate, Post graduate, and Ph.D professional students in sciences; To train a diverse group of scientists and clinicians to solve societal challenges in microbial infection (humans, Plants and Environmental diversity) and  by using cutting-edge approaches",
      image: user3,
    },
    
  ],
};

export const CONTACT_INFO = {
  text: "Have questions or need more information? Get in touch with us, and we ll be happy to assist you.",
  phone: {
    label: "Phone",
    value: "(+966) 456-7890",
  },
  email: {
    label: "Email",
    value: "info@kingsaud.com",
  },
  address: {
    label: "Address",
    value: "1234 Renovation Ave, Al-Riyath 100, Riyadh City, ST 56789",
  },
};
