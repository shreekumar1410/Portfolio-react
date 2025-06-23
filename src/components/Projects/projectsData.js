import Smart from "../../assets/images/smart.avif";
import ODIR from "../../assets/images/ODIR.avif";
import Animal from "../../assets/images/ANIMAL.jpeg";

const projectsData = [
  {
    id: 1,
    title: "IOT BASED SMART IRRIGATION WITH WEED DETECTION USING ML",
    description: "This project automates soil and crop management using sensors and AI. It analyzes soil moisture levels and controls irrigation automatically. With the YOLOv8 algorithm, it detects unwanted plants in the field through image recognition. The system also provides real-time weather updates to help farmers make better decisions for healthy crop growth.",
    img: Smart,
    link: "#",
    github: "https://github.com/shreekumar1410/smart__irrigation",
    tags: ["HTML/CSS", "JavaScript", "Flask", "Machine Learning"],
    category: "IoT,web-development" // Add this field
  },

  {
    id: 2,
    title: "ODIR: SEEING THE BIG PICTURE FOR EYE HEALTH",
    description: "This project uses AI and deep learning to analyze eye images and automatically detect diseases like diabetic retinopathy, glaucoma, cataracts, and more. It helps in early diagnosis and supports doctors in making faster, more accurate treatment decisions—improving patient care and reducing workload in eye healthcare.",
    img: ODIR,
    link: "#",
    github: "https://github.com/shreekumar1410/PBL-NT-GP-8511-1683280726",
    tags: ["HTML/CSS", "JavaScript", "Flask", "Deep Learning"],
    category: "AI/ML,web-development" // Add this field
  },

  {
    id: 3,
    title: "ANIMAL SPECIES DETECTION",
    description: "This project uses computer vision and deep learning techniques to identify animal species from images. By training a model on labeled animal images, it can accurately predict the species in new, unseen photos. Techniques like data augmentation and transfer learning are used to improve accuracy. This can help in wildlife monitoring, pest detection, and conservation efforts.",
    img: Animal,
    link: "#",
    github: "https://github.com/shreekumar1410/animal_prediction",
    tags: ["HTML/CSS", "JavaScript", "Django", "Deep Learning"],
    category: "AI/ML,web-development" // Add this field
  },
    // Other projects...
];

export default projectsData;