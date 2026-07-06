const cvData = {
  profile: {
    name: "Zhanerke Myrzabekova",
    title: "Computer Science Student",
    description: "Welcome to my personal CV portfolio.",
    role: "React Developer",
  },

  about:
    "I am a Computer Science student interested in software engineering, machine learning, and building clean user-friendly web applications.",

  education: [
    {
      date: "2023 - 2027",
      title: "Nazarbayev University",
      text: "Bachelor of Computer Science. Coursework includes software engineering, algorithms, operating systems, computer networking, and machine learning.",
    },
    {
      date: "2025 - Present",
      title: "Research Assistant",
      text: "Working on machine learning models and data analysis for academic research projects.",
    },
  ],

  experience: [
    {
      date: "2025 - Present",
      info: {
        company: "INMET Research Project",
        job: "Research Assistant",
        description:
          "Worked with machine learning models including Random Forest, XGBoost, CatBoost, SVR, and neural networks for academic research.",
      },
    },
    {
      date: "2025",
      info: {
        company: "Human Robotics and Innovation Laboratory",
        job: "Full-Stack Developer",
        description:
          "Designed and tested backend API functionality in Django REST Framework and worked on frontend using React",
      },
    },
    {
      date: "2025",
      info: {
        company: "Kcell JSC",
        job: "SAP ERP Intern",
        description:
          "Gained practical experience with enterprise systems, business processes, and technical documentation.",
      },
    },
    {
      date: "2023 - 2025",
      info: {
        company: "ACM-Women NU",
        job: "Vice-Chair",
        description:
          "Supported community initiatives, events, and projects aimed at encouraging women in technology.",
      },
    },
  ],

  skills: [
    { name: "HTML", range: 100 },
    { name: "CSS", range: 75 },
    { name: "JavaScript", range: 65 },
    { name: "React", range: 60 },
    { name: "Python", range: 50 },
  ],

  contacts: {
    email: "zhanerke.myrzabekova@nu.edu.kz",
    phone: "+77073891367",
    location: "Astana, Kazakhstan",
    linkedin: "https://www.linkedin.com/in/zhanerkemy/",
    github: "https://github.com/zhanerkemy",
  },

  feedback: [
    {
      feedback:
        "Zhanerke is responsible, curious, and able to quickly understand complex technical tasks.",
      reporter: {
        photoUrl: "https://i.pravatar.cc/100?img=12",
        name: "Project Teammate",
        citeUrl: "https://example.com",
      },
    },
    {
      feedback:
        "She combines analytical thinking with creativity and strong communication skills.",
      reporter: {
        photoUrl: "https://i.pravatar.cc/100?img=32",
        name: "Academic Advisor",
        citeUrl: "https://example.com",
      },
    },
  ],
};

export default cvData;