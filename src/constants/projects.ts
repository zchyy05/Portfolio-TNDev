import { images } from "./images";

export const projects = [
  {
    id: 1,
    title: "Mountain View College - Voting System",
    description:
      "A full-stack online voting system built for Mountain View College using React, Node.js, and PostgreSQL. Students can vote based on their department and also participate in global elections (President, VP). Admins can create elections, add positions, candidates, and partylists, and display live public vote counts.",
    image: images.project1,
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    liveUrl: null,
    githubUrl: "https://github.com/zchyy05/MVC-VOTING-SYSTEM.git",
    isPrivate: true,
  },
  {
    id: 2,
    title: "Valencia City Water District - Queueing System",
    description:
      "A fully dynamic queueing system developed for Valencia City Water District. It allows real-time queue management across various services, with an admin panel to manage teller windows, service categories, and customer flow efficiently.",
    image: images.project2,
    technologies: ["React.js", "Node.js", "PostgreSQL", "WebSockets"],
    liveUrl: null,
    githubUrl: "https://github.com/zchyy05/VCWD-QUEUEING-SYSTEM.git",
    isPrivate: true,
  },
  {
    id: 3,
    title: "Fibeco - Queueing System",
    description:
      "A simplified queueing system built for Fibeco to manage customer flow efficiently. It allows basic queue number generation and service handling, with admin functionality to manage teller windows and monitor service queues in real time.",
    image: images.project3,
    technologies: ["React", "Node", "PostgreSQL", "Socket.io"],
    liveUrl: null,
    githubUrl: null,
    isPrivate: true,
  },
  {
    id: 4,
    title:
      "Traffic Enforcement and Monitoring System for Sayre Highway in Valencia City with Real-Time Speed Detection",
    description:
      "A capstone project proposes an Intelligent Traffic Violations Enforcement and Monitoring System for Sayre Highway in Valencia City, Bukidnon. Using IoT devices, cameras, and AI, the system detects vehicle speed in real time through two monitoring stations. It uses license plate recognition to calculate speed based on time and distance, automatically alerts traffic enforcers via a mobile app, and stores violation data centrally. Designed to reduce manual enforcement and improve accuracy, the system aims to enhance road safety and strengthen local traffic law enforcement.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/YCrrcHnwx2E",
    technologies: [
      "React.js",
      "React Native (Expo)",
      "Python",
      "PostgreSQL",
      "Node.js",
      "YOLOv10",
    ],
    liveUrl: null,
    githubUrl: null,
    isPrivate: true,
  },
  {
    id: 5,
    title: "Pawxel – Virtual Pet Game (Android)",
    description:
      "A mobile game developed in Android Studio using Java and XML, where users care for a virtual pet. Players can feed, bathe, and play with their pet through interactive animations. Clicking the bone triggers a side-scrolling runner mini-game (like the Chrome dinosaur game), while the chicken activates a food-catching challenge. Designed to boost engagement with simple controls and charming pixel art.",
    image: images.project4,
    videoUrl: null,
    technologies: ["Java", "XML", "Android Studio", "Room Database"],
    liveUrl: null,
    githubUrl: "https://github.com/zchyy05/PawXel.git",
    isPrivate: false,
  },
];
