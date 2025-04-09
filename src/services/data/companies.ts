import { companies } from './companies';
export interface Company {
  id: string
  companyId: string
  name: string
  logo: string
  description: string
  shortDescription: string
  location: string
  website: string
  email: string
  phone: string
  employeeCount: string
  rating: number,
  openPositions: number,
  foundedYear: number
  industry: string
  status: "Active" | "Deleted" | "Pending"
  benefits: string[]
  culture: string
  socialMedia: {
    linkedin?: string
    twitter?: string
    facebook?: string
  }
  createdAt: Date
  updatedAt: Date
}

// Mock company data
export const companies: Company[] = [
  {
    id: "comp_1",
    companyId: "compid_1",
    name: "TechCorp",
    logo: "/placeholder.svg?height=100&width=100",
    description:
      "TechCorp is a leading technology company specializing in software development, cloud solutions, and digital transformation. We help businesses leverage technology to achieve their goals and stay ahead in the digital age. Our team of experts is dedicated to delivering innovative solutions that drive growth and efficiency.",
    shortDescription: "Leading technology company specializing in software development and cloud solutions.",
    location: "Ho Chi Minh City",
    website: "https://techcorp.example.com",
    email: "info@techcorp.example.com",
    phone: "+84 28 1234 5678",
    employeeCount: "500-1000",
    rating: 4.8,
    openPositions: 12,
    foundedYear: 2010,
    industry: "Information Technology",
    status: "Active",
    benefits: [
      "Competitive salary and bonuses",
      "Health insurance for employees and dependents",
      "Flexible working hours",
      "Remote work options",
      "Professional development budget",
      "Modern office with recreational areas",
      "Team building activities",
    ],
    culture:
      "At TechCorp, we foster a culture of innovation, collaboration, and continuous learning. We believe in empowering our employees to take ownership of their work and contribute to the company's success. Our open-door policy encourages communication and feedback at all levels.",
    socialMedia: {
      linkedin: "https://linkedin.com/company/techcorp",
      twitter: "https://twitter.com/techcorp",
      facebook: "https://facebook.com/techcorp",
    },
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-01"),
  },
  {
    id: "comp_2",
    companyId: "compid_2",
    name: "DataSoft",
    logo: "/placeholder.svg?height=100&width=100",
    description:
      "DataSoft is a data analytics and business intelligence company that helps organizations make data-driven decisions. We provide end-to-end solutions from data collection and processing to visualization and insights. Our expertise spans across various industries, enabling us to deliver tailored solutions that address specific business challenges.",
    shortDescription:
      "Data analytics and business intelligence company helping organizations make data-driven decisions.",
    location: "Hanoi",
    website: "https://datasoft.example.com",
    email: "info@datasoft.example.com",
    phone: "+84 24 9876 5432",
    employeeCount: "200-500",
    rating: 4.8,
    openPositions: 12,
    foundedYear: 2015,
    industry: "Data Analytics",
    status: "Active",
    benefits: [
      "Competitive compensation package",
      "Comprehensive health benefits",
      "Retirement savings plan",
      "Paid time off and holidays",
      "Parental leave",
      "Wellness programs",
      "Education assistance",
    ],
    culture:
      "DataSoft's culture is built on curiosity, analytical thinking, and teamwork. We encourage our employees to explore new ideas, challenge assumptions, and collaborate to solve complex problems. We value diversity of thought and background, as it enriches our perspectives and solutions.",
    socialMedia: {
      linkedin: "https://linkedin.com/company/datasoft",
      twitter: "https://twitter.com/datasoft",
    },
    createdAt: new Date("2023-01-15"),
    updatedAt: new Date("2023-01-15"),
  },
  {
    id: "comp_3",
    companyId: "compid_3",
    name: "CreativeMinds",
    logo: "/placeholder.svg?height=100&width=100",
    description:
      "CreativeMinds is a digital design agency that combines creativity with technology to create memorable brand experiences. Our services include UI/UX design, branding, web and mobile app development, and digital marketing. We work with clients from startups to established enterprises, helping them connect with their audience through compelling design and functionality.",
    shortDescription:
      "Digital design agency combining creativity with technology to create memorable brand experiences.",
    location: "Da Nang",
    website: "https://creativeminds.example.com",
    email: "hello@creativeminds.example.com",
    phone: "+84 236 7890 1234",
    employeeCount: "50-200",
    rating: 4.8,
    openPositions: 12,
    foundedYear: 2018,
    industry: "Design & Creative",
    status: "Deleted",
    benefits: [
      "Competitive salary",
      "Health and dental insurance",
      "Flexible work schedule",
      "Creative workspace",
      "Professional development opportunities",
      "Team retreats",
      "Free snacks and beverages",
    ],
    culture:
      "CreativeMinds fosters a culture of creativity, experimentation, and growth. We believe in giving our team the freedom to explore new ideas and approaches, while maintaining a focus on delivering exceptional results for our clients. Our collaborative environment encourages knowledge sharing and mutual support.",
    socialMedia: {
      linkedin: "https://linkedin.com/company/creativeminds",
      twitter: "https://twitter.com/creativeminds",
      facebook: "https://facebook.com/creativeminds",
    },
    createdAt: new Date("2023-02-01"),
    updatedAt: new Date("2023-02-01"),
  },
  {
    id: "comp_4",
    companyId: "compid_4",
    name: "CloudTech",
    logo: "/placeholder.svg?height=100&width=100",
    description:
      "CloudTech specializes in cloud infrastructure, DevOps, and platform engineering. We help companies build, migrate, and optimize their applications on cloud platforms like AWS, Azure, and Google Cloud. Our team of certified engineers and architects ensures that your cloud infrastructure is secure, scalable, and cost-effective.",
    shortDescription: "Cloud infrastructure and DevOps specialists helping companies optimize their cloud presence.",
    location: "Ho Chi Minh City",
    website: "https://cloudtech.example.com",
    email: "info@cloudtech.example.com",
    phone: "+84 28 5678 1234",
    employeeCount: "100-300",
    rating: 4.8,
    openPositions: 12,
    foundedYear: 2016,
    industry: "Cloud Computing",
    status: "Active",
    benefits: [
      "Competitive salary and performance bonuses",
      "Comprehensive health coverage",
      "Flexible working arrangements",
      "Professional certification support",
      "Regular team building activities",
      "Modern office facilities",
      "Career advancement opportunities",
    ],
    culture:
      "At CloudTech, we embrace a culture of continuous improvement, technical excellence, and customer focus. We value problem-solving skills, adaptability, and a passion for learning. Our team works in an agile environment where collaboration and knowledge sharing are encouraged.",
    socialMedia: {
      linkedin: "https://linkedin.com/company/cloudtech",
      twitter: "https://twitter.com/cloudtech",
    },
    createdAt: new Date("2023-02-15"),
    updatedAt: new Date("2023-02-15"),
  },
  {
    id: "comp_5",
    companyId: "compid_5",
    name: "AppWorks",
    logo: "/placeholder.svg?height=100&width=100",
    description:
      "AppWorks is a mobile app development company that creates innovative and user-friendly applications for iOS and Android platforms. We specialize in consumer apps, enterprise solutions, and mobile games. Our development process focuses on user experience, performance, and scalability to ensure that our apps meet the highest standards of quality.",
    shortDescription: "Mobile app development company creating innovative applications for iOS and Android platforms.",
    location: "Hanoi",
    website: "https://appworks.example.com",
    email: "contact@appworks.example.com",
    phone: "+84 24 4321 8765",
    employeeCount: "50-100",
    rating: 4.8,
    openPositions: 12,
    foundedYear: 2017,
    industry: "Mobile Development",
    status: "Active",
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Flexible working hours",
      "Remote work options",
      "Professional development budget",
      "Team outings and events",
      "Modern office environment",
    ],
    culture:
      "AppWorks fosters a culture of innovation, quality, and user-centricity. We believe in creating apps that not only look good but also provide real value to users. Our team is passionate about mobile technology and stays updated with the latest trends and best practices in the industry.",
    socialMedia: {
      linkedin: "https://linkedin.com/company/appworks",
      twitter: "https://twitter.com/appworks",
      facebook: "https://facebook.com/appworks",
    },
    createdAt: new Date("2023-03-01"),
    updatedAt: new Date("2023-03-01"),
  },
]

// Get company by ID
export const getCompanyById = (id: string): Company | undefined => {
  return companies.find((company) => company.id === id)
}

// Get active companies
export const getActiveCompanies = (): Company[] => {
  return companies.filter((company) => company.status === "Active")
}
