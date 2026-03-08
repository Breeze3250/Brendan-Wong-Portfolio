export const NAV_ITEMS = ["About", "Experience", "Projects", "Skills"];

export const EXPERIENCE = [
  {
    company: "Adentro",
    role: "Software Developer",
    location: "San Francisco, CA",
    period: "Jan 2026 - Apr 2026",
    bullets: [
      "Engineered full-stack features for a captive portal editor using React and a Python/Flask architecture, building complex UI components including a drag-and-drop page selector with dynamic state management.",
      "Architected secure cross-service communication by integrating Python backend routes with internal gRPC microservices, defining data contracts using Protobufs.",
      "Implemented secure OIDC authentication flows via AWS Cognito, managing encrypted HTTP-only session cookies and engineering gRPC interceptors for automated token refreshing.",
      "Engineered a dynamic hotspots management page, building React frontend interfaces and Python backend endpoints to query, retrieve, and display location data from a MongoDB database.",
    ],
  },
  {
    company: "Christie Digital Systems Innovations ULC",
    role: "Application & Embedded Software Developer (C++)",
    location: "Kitchener, ON",
    period: "Jan 2025 - Apr 2025",
    bullets: [
      "Designed and developed a projector calibration feature in C++ to optimize laser performance based on real-time hardware health.",
      "Engineered a C++ device driver from scratch for the Juno laser power meter, integrating with COM object APIs for real-time data acquisition.",
      "Led integration of the driver into existing company software, authoring encapsulated C++ controller classes and new API calls to allow the calibration algorithm to modify projector currents.",
      "Implemented a numerical algorithm using OpenCV and linear algebra to calculate optimal laser currents from power meter readings.",
      "Built the complete user interface for the calibration stage and driver controls using QML.",
    ],
  },
  {
    company: "Sinai Health System",
    role: "Frontend Engineer, Bioinformatics Data Analyst",
    location: "Toronto, ON",
    period: "May 2024 - Aug 2024",
    bullets: [
      "Engineered an automated bioinformatics pipeline using Python, C++, R, Perl, and Java to analyze genomic data and identify antibiotic resistance patterns.",
      "Developed a monthly laboratory quality dashboard with React, enabling real-time monitoring of test turnaround times and positivity rates.",
      "Authored shell scripts in Linux to automate monitoring and analysis of clonal clustering of Neisseria gonorrhoeae strains.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "NeuralScan",
    period: "July 2023",
    description:
      "A deep learning model using TensorFlow and transfer learning that analyzes MRI images to detect brain tumours with up to 99% accuracy, paired with a React web interface.",
    tech: ["Python", "TensorFlow", "React", "HTML/CSS"],
    link: "https://github.com/Breeze3250/NeuralScan",
  },
  {
    name: "DailyGlow",
    period: "December 2023",
    description:
      "A full-stack web application with login authentication delivering personal hygiene reminders. Designed in Figma, built with Django/Flask backend and deployed via Gunicorn on Render.",
    tech: ["HTML/CSS", "JavaScript", "Python", "Django", "Flask", "MongoDB", "Figma"],
    link: "https://github.com/Breeze3250/DailyGlow",
  },
];

export const SKILLS = {
  Languages: ["C++", "C", "Go", "Python", "JavaScript", "Assembly", "QML", "HTML/CSS", "Perl", "R"],
  "Frameworks & Libraries": ["React", "Django", "Flask", "TensorFlow", "OpenCV", "Bootstrap", "Jinja2"],
  "Developer Tools": ["Git", "Linux", "Bash", "MongoDB", "Bazel", "Docker", "AWS", "Gunicorn", "Render", "Figma", "LaTeX"],
};
