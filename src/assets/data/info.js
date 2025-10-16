const cvData = {
    personalInfo: {
      name: "Stefano Zuffi",
      birthDate: "06/06/2000",
      email: "stefano.zuffi06@outlook.com",
      phone: "+39 347 399 6906",
      location: {
        current: "Amsterdam, Netherlands",
        secondary: "Milan, Italy"
      },
      github: "github.com/stefanozuffi",
      linkedIn: "",
      portfolio: ""
    },
  
    profile: {
      extended: "Graduate in Mathematical Logic and Philosophy, currently transitioning into web development. My academic background in formal reasoning and abstract problem-solving translates naturally into coding—I approach technical challenges both systematically and creatively. Through intensive bootcamp training and hands-on projects, I'm building a solid foundation in full-stack development. I'm seeking junior developer positions where I can contribute fresh perspectives, learn actively, and grow alongside experienced teams.",
      compact: "Philosophy & Logic graduate transitioning to web development. Strong analytical background, intensive bootcamp training, hands-on projects. Seeking junior developer positions to learn and grow."
    },
  
    skills: {
      webDevelopment: {
        frontend: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Vite"],
        backend: ["Node.js", "Express"],
        learning: ["SQL", "PHP", "Laravel"]
      },
      dataAnalysis: {
        languages: ["Python"],
        libraries: ["Pandas", "NumPy", "Matplotlib"],
        tools: ["Excel (Advanced)", "Power Query", "SQL (basic)"]
      },
      other: ["C++ (basics)", "LaTeX", "Git", "GitHub"]
    },
  
    softSkills: [
      "Analytical Thinking",
      "Creative Problem Solving",
      "Logical Reasoning",
      "Adaptability & Flexibility",
      "Interpersonal Skills"
    ],
  
    languages: [
      {
        language: "Italian",
        level: "Native"
      },
      {
        language: "English",
        level: "Fluent"
      }
    ],
  
    education: [
      {
        id: 1,
        degree: "Full-Stack Web Development Bootcamp",
        institution: "Boolean",
        location: "Online",
        period: "Apr – Nov 2025",
        hours: "700+",
        description: "Intensive training program covering full-stack web development",
        details: [
          "Frontend: HTML5, CSS3, JavaScript (ES6+), React, Bootstrap, Vite",
          "Backend: Node.js, Express",
          "Currently learning: SQL databases, PHP, Laravel",
          "Focus: responsive design, modern web applications, REST APIs"
        ],
        show: true
      },
      {
        id: 2,
        degree: "MSc in Logic & Mathematics",
        institution: "Universiteit van Amsterdam",
        location: "Netherlands",
        period: "Sept 2022 – Apr 2025",
        description: "Focus on Pure Mathematics and Philosophy of Mathematics",
        details: [],
        show: true
      },
      {
        id: 3,
        degree: "BA in Philosophy",
        institution: "Catholic University of the Sacred Heart",
        location: "Italy",
        period: "Sept 2019 – Sept 2022",
        description: "Focus on Philosophy of Science, AI, Logic",
        details: [],
        show: true
      },
      {
        id: 4,
        degree: "Scientific High School Diploma",
        institution: "Liceo Donatelli-Pascal",
        location: "Milan",
        period: "2019",
        description: "",
        details: [],
        show: false
      }
    ],
  
    projects: [
      {
        id: 1,
        name: "Sudoku Game App",
        year: "2025",
        technologies: ["React", "Vite", "Bootstrap", "JavaScript"],
        description: "Interactive web application with 6 playable puzzles across three difficulty levels",
        features: [
          "Game logic validation",
          "Error checking system",
          "User-friendly interface",
          "Puzzle selection with difficulty levels",
          "State management with React hooks"
        ],
        github: "https://github.com/stefanozuffi/react-sudoku",
        demo: "",
        image: "",
        show: true
      },
      {
        id: 2,
        name: "Tic-Tac-Toe Game",
        year: "2025",
        technologies: ["React", "JavaScript", "CSS"],
        description: "Classic game implementation with React",
        features: [
          "Clean UI and responsive design",
          "Game state management",
          "Win detection algorithm"
        ],
        github: "https://github.com/stefanozuffi/[tictactoe-repo]",
        demo: "",
        image: "",
        show: true
      },
      {
        id: 3,
        name: "Actors & Actresses Gallery",
        year: "2025",
        technologies: ["React", "Axios", "Bootstrap", "CSS"],
        description: "Web application displaying curated lists of renowned actors and actresses",
        features: [
          "API integration with Axios",
          "Responsive card layout",
          "Custom accordion component",
          "Biography display",
          "Filmography section",
          "Custom styling with gradients"
        ],
        github: "https://github.com/stefanozuffi/[actors-repo]",
        demo: "",
        image: "",
        show: true
      }
    ],
  
    experience: [
      {
        id: 1,
        title: "Data Analysis Intern",
        company: "Nibe s.r.l.",
        location: "Milan, Italy",
        period: "May – Sept 2025",
        type: "Internship",
        description: "Data analysis and visualization from SQL database",
        responsibilities: [
          "Analyzed and visualized data from ARCA's SQL database",
          "Built automated reports using Excel, Power Query, and Python scripts",
          "Created custom Excel functions via Python integration",
          "Improved data processing workflow efficiency"
        ],
        technologies: ["Excel", "Power Query", "Python", "SQL"],
        show: true
      }
    ],
  
    academicActivities: [
      {
        id: 1,
        title: "Group Research Project (Topology)",
        institution: "UvA",
        period: "2023",
        description: "Applied topological tools to study concept representation (based on P. Gärdenfors 2000)",
        show: false
      },
      {
        id: 2,
        title: "Speaker – Neuchâtel Undergraduate Philosophy Conference",
        institution: "Neuchâtel University",
        period: "Oct 2021",
        description: "Talk: Presentism vs STR - Investigation into the philosophical consequences of the Special Theory of Relativity",
        show: false
      },
      {
        id: 3,
        title: "Logic Tutor",
        institution: "Catholic University, Milan",
        period: "Oct – Dec 2021",
        description: "Tutored students in propositional and first-order logic",
        show: false
      }
    ],
  
    settings: {
      theme: "light",
      showPhoto: false,
      showAcademicActivities: false,
      compactMode: false,
      accentColor: "#2980b9"
    }
  }
  
export default cvData