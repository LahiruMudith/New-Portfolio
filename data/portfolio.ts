import { Phone, MapPin, Mail } from "lucide-react";
import { GithubIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/icons";

// --- ABOUT SECTION DATA ---
export const educationData = [
  {
    institution: "Sri Sumangala College",
    logo: "https://res.cloudinary.com/dkidles6w/image/upload/v1760334328/sri-sumangala-college_ngofw4.png",
    description:
      "I attended Sri Sumangala College from Grade 1 through Grade 11, where I developed a strong foundation in academics. My particular interest in Information Technology during my school years shaped my passion for the field. I successfully sat for my General Certificate of Education (Ordinary Level) examination at this institution during the academic year 2022/2023.",
  },
  {
    institution: "IJSE",
    logo: "https://www.ijse.lk/images/logos/ijse.png",
    description:
      "I am currently pursuing a HND in Computer Science at IJSE – Institute of Software Engineering. Having successfully completed my third semester with distinction, I maintain a cumulative GPA of 3.77, reflecting my consistent academic performance and dedication to the field.",
  },
  {
    institution: "ACPT",
    logo: "https://res.cloudinary.com/dkidles6w/image/upload/v1760334489/321101988_622362146315346_3812943533011512853_n_db1qa6.jpg",
    description:
      "I pursued professional development at ACPT, where I successfully completed two advanced programmes — the Advanced Professional Java Developer (APJD) and the Advanced Professional Web Developer (APWD) — strengthening my technical expertise in both Java development and modern web technologies.",
  },
];

// --- EXTRA-CURRICULAR & CERTIFICATES DATA ---
export const extraCurricularData = [
  {
    role: "Member",
    organization: "Coding Society",
    date: "2023 - Present",
    description: "Actively participated in hackathons, competitive programming challenges, and peer mentoring sessions to help juniors grasp core programming concepts.",
  },
  {
    role: "Volunteer",
    organization: "IT Outreach Program",
    date: "2022 - 2023",
    description: "Volunteered to teach basic computer literacy and programming fundamentals to underprivileged children in the local community.",
  },
];

export const certificatesData = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Dec 2024",
    url: "https://aws.amazon.com/certification/", 
  },
  {
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    date: "Oct 2023",
    url: "https://www.freecodecamp.org/", 
  },
];

// --- SKILLS SECTION DATA ---
export const skillCategories = [
  {
    title: "Languages",
    direction: "left" as const,
    skills: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", url: "https://www.java.com/en/" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", url: "https://www.python.org/" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    direction: "right" as const,
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev/" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org/en" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", url: "https://expressjs.com/" },
      { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", url: "https://spring.io/" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com/" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", url: "https://getbootstrap.com/" },
    ]
  },
  {
    title: "Databases & Tools",
    direction: "left" as const,
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://www.mysql.com/" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg", url: "https://www.mongodb.com/" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com/" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", url: "https://www.postman.com/" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com/" },
    ]
  },
  {
    title: "IDEs & Design",
    direction: "right" as const,
    skills: [
      { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg", url: "https://www.jetbrains.com/idea/" },
      { name: "PyCharm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg", url: "https://www.jetbrains.com/pycharm/" },
      { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg", url: "https://developer.android.com/studio" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", url: "https://www.figma.com/" },
      { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg", url: "https://en.wikipedia.org/wiki/Adobe_Photoshop" },
      { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg", url: "https://www.canva.com/" },
    ]
  }
];

// --- PROJECTS SECTION DATA ---
export const projectFilterCategories = ["All", "Web", "Mobile", "Data Analysis"];

export const projectsData = [
  {
    title: "Fitness Center Management System",
    description:
      "This system can manage members, schedules, diet plans, and employees. It can mark member fees, send email confirmations, and view payment, schedule, and diet plan reports. Member phone numbers and email addresses are validated.",
    tech: "JavaFX",
    category: "Mobile",
    github: "https://github.com/LahiruMudith/1st-sem-final-project.git",
    image: "/fitness-app-interface.png",
    liveUrl: undefined
  },
  {
    title: "Therapy Center Management System",
    description:
      "This system can manage members, schedules, diet plans, and employees. It can mark member fees, send email confirmations, and view payment, schedule, and diet plan reports.",
    tech: "JavaFX",
    category: "Mobile",
    github: "https://github.com/LahiruMudith/mind-balance-center.git",
    image: "/serene-therapy-center.png",
    liveUrl: undefined
  },
  {
    title: "Maths Class Fee Mark Application",
    description:
      "This application can manage students, mark fees and work, and copy messages to the clipboard indicating whether a student's homework is done or not. A simple application created using JavaFX.",
    tech: "JavaFX",
    category: "Mobile",
    github: "https://github.com/LahiruMudith/MathsClassFeesMarkApp.git",
    image: "/education-app-interface.png",
    liveUrl: undefined
  },
  {
    title: "Vehicle Rental System",
    description:
      "This application allows you to manage customers and vehicles, handle vehicle rentals, and close rental transactions.",
    tech: "JavaFX",
    category: "Mobile",
    github: "https://github.com/LahiruMudith/apjd-final-project.git",
    image: "/car-rental-agency.png",
    liveUrl: undefined
  },
  {
    title: "Sri Lanka NIC Validation System",
    description:
      "Sri Lankan NIC validator with support for old NIC formats, showing the person's birthday and gender.",
    tech: "React + Vite",
    category: "Web",
    github: "https://github.com/LahiruMudith/apwd-nic-project.git",
    image: "/validation-form.jpg",
    liveUrl: "https://example.com/nic-validator" // Replace with actual live URL
  },
  {
    title: "Library Management System",
    description: "With this application, you can easily manage books, students, and book transactions.",
    tech: "JavaFX",
    category: "Mobile",
    github: "https://github.com/LahiruMudith/apjd-library-project.git",
    image: "/library-system.jpg",
    liveUrl: undefined
  },
  {
    title: "Commercial Bank Website Clone",
    description:
      "Created a clone of Sri Lanka Commercial Bank website using HTML, CSS, and JavaScript with Bootstrap framework.",
    tech: "Bootstrap",
    category: "Web",
    github: "https://github.com/LahiruMudith/new-apwd-secound-project.git",
    image: "/bank-website.jpg",
    liveUrl: "https://example.com/commercial-bank-clone" // Replace with actual live URL
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "This game is a simple tic-tac-toe game that can be played by two players: one human player and one computer player.",
    tech: "Java",
    category: "Data Analysis",
    github: "https://github.com/LahiruMudith/Tic-Tac-Toe.git",
    image: "/tic-tac-toe.jpg",
    liveUrl: undefined
  },
];

// --- CONTACT SECTION DATA ---
export const contactInfo = [
  {
    icon: Phone,
    label: "076 129 8256",
    href: "tel:+94761298256",
  },
  {
    icon: MapPin,
    label: "Moronthuduwa, Sri Lanka",
    href: "https://maps.app.goo.gl/AJB9jjKbvKn6xQPq8",
  },
  {
    icon: Mail,
    label: "lahimudith@gmail.com",
    href: "mailto:lahimudith@gmail.com",
  },
];

export const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/LahiruMudith", label: "GitHub" },
  { icon: FacebookIcon, href: "https://www.facebook.com/share/1DKxM5JE3y/?mibextid=wwXIfr", label: "Facebook" },
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/lahiru_mudith_madushan?igsh=a2k3cGUyem9jaWg5&utm_source=qr",
    label: "Instagram",
  },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/lahiru-mudith-1226b7298/", label: "LinkedIn" },
];
