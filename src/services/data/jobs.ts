export interface Job {
    id: string
    title: string
    companyId: string
    location: string
    type: "Full-time" | "Part-time" | "Contract" | "Freelance" | "Internship"
    category: string
    description: string
    requirements: string[]
    responsibilities: string[]
    salaryRange: string
    experienceLevel: "Entry" | "Mid" | "Senior" | "Lead"
    skills: string[]
    benefits: string[]
    status: "Active" | "Deleted" | "Filled" | "Draft"
    featured: boolean
    applicationDeadline: Date
    postedDate: Date
    updatedDate: Date
  }
  
  // Mock job data
  export const jobs: Job[] = [
    {
      id: "job_1",
      title: "Senior Frontend Developer",
      companyId: "comp_1", // TechCorp
      location: "Ho Chi Minh City",
      type: "Full-time",
      category: "Development",
      description:
        "We are looking for a Senior Frontend Developer to join our team and help build innovative web applications. The ideal candidate has strong experience with modern JavaScript frameworks, particularly React, and a passion for creating responsive, user-friendly interfaces.",
      requirements: [
        "5+ years of experience in frontend development",
        "Strong proficiency in JavaScript, HTML, and CSS",
        "Experience with React and its ecosystem",
        "Knowledge of responsive design and cross-browser compatibility",
        "Understanding of RESTful APIs and asynchronous request handling",
        "Familiarity with version control systems, preferably Git",
        "Bachelor's degree in Computer Science or related field (or equivalent experience)",
      ],
      responsibilities: [
        "Develop new user-facing features using React.js",
        "Build reusable components and libraries for future use",
        "Translate designs and wireframes into high-quality code",
        "Optimize components for maximum performance across devices and browsers",
        "Collaborate with backend developers and designers",
        "Participate in code reviews and mentor junior developers",
      ],
      salaryRange: "$3000 - $4500",
      experienceLevel: "Senior",
      skills: ["React", "JavaScript", "HTML", "CSS", "Redux", "TypeScript", "Responsive Design"],
      benefits: [
        "Competitive salary and bonuses",
        "Health insurance",
        "Flexible working hours",
        "Professional development opportunities",
        "Modern office environment",
      ],
      status: "Active",
      featured: true,
      applicationDeadline: new Date("2023-12-31"),
      postedDate: new Date("2023-06-01"),
      updatedDate: new Date("2023-06-01"),
    },
    {
      id: "job_2",
      title: "Backend Engineer",
      companyId: "comp_2", // DataSoft
      location: "Hanoi",
      type: "Full-time",
      category: "Development",
      description:
        "DataSoft is seeking a Backend Engineer to design and implement server-side applications. You will work on data processing systems, APIs, and database integrations to support our data analytics platform.",
      requirements: [
        "3+ years of experience in backend development",
        "Proficiency in Node.js, Python, or Java",
        "Experience with database design and ORM technologies",
        "Knowledge of API design and development",
        "Understanding of cloud services (AWS, Azure, or GCP)",
        "Familiarity with containerization and orchestration tools",
        "Bachelor's degree in Computer Science or related field",
      ],
      responsibilities: [
        "Design and implement scalable backend services",
        "Develop and maintain APIs for frontend and third-party integrations",
        "Optimize database queries and data processing workflows",
        "Implement security and data protection measures",
        "Collaborate with data scientists and frontend developers",
        "Participate in the full software development lifecycle",
      ],
      salaryRange: "$2800 - $4000",
      experienceLevel: "Mid",
      skills: ["Node.js", "Python", "SQL", "NoSQL", "RESTful APIs", "AWS", "Docker"],
      benefits: [
        "Competitive compensation package",
        "Health benefits",
        "Flexible work arrangements",
        "Professional development budget",
        "Team building activities",
      ],
      status: "Active",
      featured: true,
      applicationDeadline: new Date("2023-12-15"),
      postedDate: new Date("2023-06-15"),
      updatedDate: new Date("2023-06-15"),
    },
    {
      id: "job_3",
      title: "UI/UX Designer",
      companyId: "comp_3", // CreativeMinds
      location: "Da Nang",
      type: "Full-time",
      category: "Design",
      description:
        "CreativeMinds is looking for a talented UI/UX Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI/UX skills, and be able to translate high-level requirements into interaction flows and artifacts.",
      requirements: [
        "3+ years of experience in UI/UX design",
        "Proficiency in design tools such as Figma, Sketch, or Adobe XD",
        "Strong portfolio demonstrating UI/UX projects",
        "Understanding of user-centered design principles",
        "Knowledge of web and mobile design patterns",
        "Ability to work with cross-functional teams",
        "Bachelor's degree in Design, HCI, or related field",
      ],
      responsibilities: [
        "Create user flows, wireframes, prototypes, and high-fidelity mockups",
        "Conduct user research and usability testing",
        "Collaborate with developers to implement designs",
        "Establish design guidelines and standards",
        "Create and maintain design systems",
        "Stay updated with the latest UI/UX trends and technologies",
      ],
      salaryRange: "$2500 - $3500",
      experienceLevel: "Mid",
      skills: ["UI Design", "UX Design", "Figma", "Sketch", "User Research", "Prototyping", "Design Systems"],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Flexible work schedule",
        "Creative workspace",
        "Professional development opportunities",
      ],
      status: "Deleted",
      featured: false,
      applicationDeadline: new Date("2023-11-30"),
      postedDate: new Date("2023-05-15"),
      updatedDate: new Date("2023-05-15"),
    },
    {
      id: "job_4",
      title: "DevOps Engineer",
      companyId: "comp_4", // CloudTech
      location: "Ho Chi Minh City",
      type: "Full-time",
      category: "Operations",
      description:
        "CloudTech is seeking a DevOps Engineer to help us build and maintain our cloud infrastructure. You will be responsible for implementing CI/CD pipelines, managing cloud resources, and ensuring the reliability and security of our systems.",
      requirements: [
        "3+ years of experience in DevOps or SRE roles",
        "Strong knowledge of cloud platforms (AWS, Azure, or GCP)",
        "Experience with containerization and orchestration (Docker, Kubernetes)",
        "Proficiency in infrastructure as code (Terraform, CloudFormation)",
        "Understanding of CI/CD principles and tools",
        "Knowledge of monitoring and logging systems",
        "Bachelor's degree in Computer Science or related field",
      ],
      responsibilities: [
        "Design and implement cloud infrastructure using IaC",
        "Set up and maintain CI/CD pipelines",
        "Monitor system performance and troubleshoot issues",
        "Implement security best practices and compliance measures",
        "Optimize cloud resource usage and costs",
        "Collaborate with development teams to improve deployment processes",
        "Document infrastructure and operational procedures",
      ],
      salaryRange: "$3000 - $4200",
      experienceLevel: "Mid",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Linux", "Monitoring"],
      benefits: [
        "Competitive salary and performance bonuses",
        "Comprehensive health coverage",
        "Flexible working arrangements",
        "Professional certification support",
        "Regular team building activities",
      ],
      status: "Active",
      featured: true,
      applicationDeadline: new Date("2023-12-20"),
      postedDate: new Date("2023-07-01"),
      updatedDate: new Date("2023-07-01"),
    },
    {
      id: "job_5",
      title: "Mobile Developer",
      companyId: "comp_5", // AppWorks
      location: "Hanoi",
      type: "Full-time",
      category: "Development",
      description:
        "AppWorks is looking for a Mobile Developer to build and maintain high-quality mobile applications for iOS and Android platforms. The ideal candidate should have experience with React Native or Flutter and a passion for creating smooth, user-friendly mobile experiences.",
      requirements: [
        "2+ years of experience in mobile app development",
        "Proficiency in React Native or Flutter",
        "Experience with native app development (iOS/Swift or Android/Kotlin) is a plus",
        "Understanding of RESTful APIs and mobile app architecture",
        "Knowledge of state management and performance optimization",
        "Familiarity with version control systems",
        "Bachelor's degree in Computer Science or related field",
      ],
      responsibilities: [
        "Develop cross-platform mobile applications using React Native or Flutter",
        "Collaborate with designers to implement user interfaces",
        "Integrate with backend services and APIs",
        "Optimize applications for performance and user experience",
        "Troubleshoot and fix bugs and performance bottlenecks",
        "Stay updated with the latest mobile development trends and best practices",
      ],
      salaryRange: "$2500 - $3800",
      experienceLevel: "Mid",
      skills: ["React Native", "Flutter", "JavaScript", "TypeScript", "Mobile UI/UX", "REST APIs", "State Management"],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Flexible working hours",
        "Remote work options",
        "Professional development budget",
      ],
      status: "Active",
      featured: false,
      applicationDeadline: new Date("2023-12-10"),
      postedDate: new Date("2023-07-15"),
      updatedDate: new Date("2023-07-15"),
    },
  ]
  
  // Get job by ID
  export const getJobById = (id: string): Job | undefined => {
    return jobs.find((job) => job.id === id)
  }
  
  // Get jobs by company ID
  export const getJobsByCompanyId = (companyId: string): Job[] => {
    return jobs.filter((job) => job.companyId === companyId && job.status === "Active")
  }
  
  // Get active jobs
  export const getActiveJobs = (): Job[] => {
    return jobs.filter((job) => job.status === "Active")
  }
  
  // Get featured jobs
  export const getFeaturedJobs = (): Job[] => {
    return jobs.filter((job) => job.featured && job.status === "Active")
  }
  