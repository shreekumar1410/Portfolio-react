import Smart from "../../assets/images/smart.avif";
import ODIR from "../../assets/images/ODIR.avif";
import Animal from "../../assets/images/ANIMAL.jpeg";

const projectsData = [
  {
    id: 1,
    title: "IOT BASED SMART IRRIGATION WITH WEED DETECTION USING ML",
    description: "Redesign ITIC's company profile to effectively showcase its services in the environmental, healthcare, and warehousing sectors, ensuring comprehensive representation for diverse target audiences.",
    img: Smart,
    link: "#",
    github: "https://github.com/shreekumar1410/smart__irrigation",
    tags: ["HTML/CSS", "JavaScript", "Flask", "Machine Learning"],
    category: "IoT,web-development" // Add this field
  },

  {
    id: 2,
    title: "ODIR: SEEING THE BIG PICTURE FOR EYE HEALTH",
    description: "Redesign Al Khudair International's company profile to effectively showcase its expertise in residential, commercial, and industrial projects.",
    img: ODIR,
    link: "#",
    github: "https://github.com/shreekumar1410/PBL-NT-GP-8511-1683280726",
    tags: ["HTML/CSS", "JavaScript", "Flask", "Deep Learning"],
    category: "AI/ML,web-development" // Add this field
  },

  {
    id: 3,
    title: "ANIMAL SPECIES DETECTION",
    description: "Design branding for Leia Activewear, targeting women with a mission to empower them through high-quality activewear.",
    img: Animal,
    link: "#",
    github: "https://github.com/shreekumar1410/animal_prediction",
    tags: ["HTML/CSS", "JavaScript", "Django", "Deep Learning"],
    category: "AI/ML,web-development" // Add this field
  },
    // Other projects...
];

export default projectsData;