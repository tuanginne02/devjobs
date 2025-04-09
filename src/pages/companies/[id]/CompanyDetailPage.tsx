"use client"
import { Link, useParams } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Header from "../../../components/header"
import Footer from "../../../components/footer"
import {
  MapPin,
  Users,
  Star,
  Building,
  Globe,
  Mail,
  Phone,
  Calendar,
  Briefcase,
  CheckCircle2,
  Clock,
  DollarSign,
  Heart,
  Coffee,
} from "lucide-react"

// Mock data for companies
const mockCompanies = [
  {
    id: 1,
    name: "TechCorp",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Ho Chi Minh City",
    employees: "500-1000",
    rating: 4.8,
    openPositions: 12,
    description: "Leading technology company specializing in software development and IT services.",
    fullDescription:
      "TechCorp is a leading technology company founded in 2010, specializing in software development, cloud solutions, and IT consulting services. With a team of over 500 talented professionals, we deliver innovative solutions to clients across various industries including finance, healthcare, and e-commerce. Our mission is to transform businesses through technology and help them stay ahead in the digital era.",
    website: "https://techcorp.example.com",
    email: "careers@techcorp.example.com",
    phone: "+84 28 1234 5678",
    founded: "2010",
    industry: "Information Technology",
    benefits: [
      "Competitive salary and performance bonuses",
      "Health insurance for employees and dependents",
      "Flexible working hours and remote work options",
      "Professional development budget",
      "Annual company retreats",
      "Modern office with recreational areas",
    ],
    culture:
      "At TechCorp, we foster a culture of innovation, collaboration, and continuous learning. We believe in work-life balance and creating an environment where employees can thrive both professionally and personally.",
    jobs: [
      {
        id: 101,
        title: "Senior Frontend Developer",
        type: "Full-time",
        salary: "$2,500 - $3,500/month",
        experience: "3+ years",
      },
      {
        id: 102,
        title: "DevOps Engineer",
        type: "Full-time",
        salary: "$2,800 - $3,800/month",
        experience: "4+ years",
      },
      {
        id: 103,
        title: "Product Manager",
        type: "Full-time",
        salary: "$3,000 - $4,000/month",
        experience: "5+ years",
      },
      {
        id: 104,
        title: "UX/UI Designer",
        type: "Full-time",
        salary: "$2,200 - $3,200/month",
        experience: "2+ years",
      },
    ],
  },
  {
    id: 2,
    name: "DataSoft",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Hanoi",
    employees: "200-500",
    rating: 4.6,
    openPositions: 8,
    description: "Data analytics and business intelligence solutions provider.",
    fullDescription:
      "DataSoft is a premier data analytics company that helps businesses transform their data into actionable insights. Founded in 2015, we specialize in business intelligence, data visualization, and predictive analytics solutions. Our team of data scientists and analysts work closely with clients to understand their business challenges and develop custom analytics solutions that drive growth and efficiency.",
    website: "https://datasoft.example.com",
    email: "jobs@datasoft.example.com",
    phone: "+84 24 9876 5432",
    founded: "2015",
    industry: "Data Analytics",
    benefits: [
      "Competitive compensation package",
      "Comprehensive health benefits",
      "Education assistance program",
      "Flexible work arrangements",
      "Regular team building activities",
      "Modern office with standing desks",
    ],
    culture:
      "DataSoft promotes a culture of curiosity, analytical thinking, and teamwork. We encourage our employees to experiment with new ideas and approaches, and we celebrate both successes and failures as learning opportunities.",
    jobs: [
      {
        id: 201,
        title: "Data Scientist",
        type: "Full-time",
        salary: "$2,700 - $3,700/month",
        experience: "3+ years",
      },
      {
        id: 202,
        title: "Business Intelligence Analyst",
        type: "Full-time",
        salary: "$2,300 - $3,300/month",
        experience: "2+ years",
      },
      {
        id: 203,
        title: "Machine Learning Engineer",
        type: "Full-time",
        salary: "$2,900 - $3,900/month",
        experience: "4+ years",
      },
    ],
  },
  {
    id: 3,
    name: "CreativeMinds",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Da Nang",
    employees: "50-200",
    rating: 4.5,
    openPositions: 5,
    description: "Creative agency focused on UI/UX design and digital marketing.",
    fullDescription:
      "CreativeMinds is an award-winning creative agency that combines design thinking with marketing expertise to create compelling digital experiences. Since our founding in 2018, we've helped startups and established brands alike to build their digital presence through innovative design, branding, and marketing campaigns. Our multidisciplinary team brings together designers, marketers, and strategists to deliver holistic solutions.",
    website: "https://creativeminds.example.com",
    email: "hello@creativeminds.example.com",
    phone: "+84 236 7654 3210",
    founded: "2018",
    industry: "Creative Design & Marketing",
    benefits: [
      "Competitive salary with project bonuses",
      "Health and wellness program",
      "Creative workshops and training",
      "Flexible working hours",
      "Casual dress code",
      "Fun office with inspiration spaces",
    ],
    culture:
      "CreativeMinds fosters a culture of creativity, experimentation, and open communication. We believe that the best ideas come from diverse perspectives and collaborative problem-solving. Our workplace is designed to inspire creativity and facilitate collaboration.",
    jobs: [
      {
        id: 301,
        title: "Senior UI/UX Designer",
        type: "Full-time",
        salary: "$2,200 - $3,200/month",
        experience: "3+ years",
      },
      {
        id: 302,
        title: "Digital Marketing Specialist",
        type: "Full-time",
        salary: "$1,800 - $2,800/month",
        experience: "2+ years",
      },
      {
        id: 303,
        title: "Content Strategist",
        type: "Part-time",
        salary: "$1,500 - $2,000/month",
        experience: "2+ years",
      },
    ],
  },
  {
    id: 4,
    name: "CloudTech",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Ho Chi Minh City",
    employees: "100-300",
    rating: 4.7,
    openPositions: 10,
    description: "Cloud infrastructure and DevOps solutions for enterprises.",
    fullDescription:
      "CloudTech is a leading provider of cloud infrastructure and DevOps solutions, helping businesses modernize their IT operations and migrate to the cloud. Founded in 2014, we specialize in cloud architecture, infrastructure automation, and continuous integration/continuous deployment (CI/CD) pipelines. Our team of certified cloud engineers works with clients to design, implement, and manage scalable and secure cloud environments.",
    website: "https://cloudtech.example.com",
    email: "careers@cloudtech.example.com",
    phone: "+84 28 8765 4321",
    founded: "2014",
    industry: "Cloud Computing",
    benefits: [
      "Competitive salary and performance bonuses",
      "Comprehensive health insurance",
      "Cloud certification support",
      "Flexible work arrangements",
      "Regular tech talks and knowledge sharing",
      "Modern office with gaming area",
    ],
    culture:
      "At CloudTech, we embrace a culture of continuous learning, innovation, and technical excellence. We encourage our team members to stay current with the latest cloud technologies and best practices, and we provide opportunities for professional growth and advancement.",
    jobs: [
      {
        id: 401,
        title: "Cloud Solutions Architect",
        type: "Full-time",
        salary: "$3,000 - $4,000/month",
        experience: "5+ years",
      },
      {
        id: 402,
        title: "DevOps Engineer",
        type: "Full-time",
        salary: "$2,700 - $3,700/month",
        experience: "3+ years",
      },
      {
        id: 403,
        title: "Site Reliability Engineer",
        type: "Full-time",
        salary: "$2,800 - $3,800/month",
        experience: "4+ years",
      },
      {
        id: 404,
        title: "Cloud Security Specialist",
        type: "Full-time",
        salary: "$3,200 - $4,200/month",
        experience: "4+ years",
      },
    ],
  },
  {
    id: 5,
    name: "AppWorks",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Hanoi",
    employees: "50-100",
    rating: 4.4,
    openPositions: 6,
    description: "Mobile app development company for iOS and Android platforms.",
    fullDescription:
      "AppWorks is a specialized mobile app development company creating innovative applications for iOS and Android platforms. Since our founding in 2016, we've developed over 100 mobile apps across various categories including e-commerce, health & fitness, education, and entertainment. Our team of mobile developers, designers, and QA specialists is committed to delivering high-quality, user-friendly mobile experiences.",
    website: "https://appworks.example.com",
    email: "jobs@appworks.example.com",
    phone: "+84 24 2345 6789",
    founded: "2016",
    industry: "Mobile App Development",
    benefits: [
      "Competitive salary package",
      "Health insurance coverage",
      "Professional development opportunities",
      "Flexible working hours",
      "Team outings and events",
      "Casual work environment",
    ],
    culture:
      "AppWorks promotes a culture of creativity, user-centric thinking, and technical excellence. We believe in creating mobile experiences that delight users while solving real business problems. Our team values collaboration, open communication, and continuous improvement.",
    jobs: [
      {
        id: 501,
        title: "iOS Developer",
        type: "Full-time",
        salary: "$2,200 - $3,200/month",
        experience: "2+ years",
      },
      {
        id: 502,
        title: "Android Developer",
        type: "Full-time",
        salary: "$2,200 - $3,200/month",
        experience: "2+ years",
      },
      {
        id: 503,
        title: "Mobile UI/UX Designer",
        type: "Full-time",
        salary: "$2,000 - $3,000/month",
        experience: "2+ years",
      },
      {
        id: 504,
        title: "QA Engineer (Mobile)",
        type: "Full-time",
        salary: "$1,800 - $2,800/month",
        experience: "1+ years",
      },
    ],
  },
  {
    id: 6,
    name: "AnalyticsPro",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Ho Chi Minh City",
    employees: "200-400",
    rating: 4.9,
    openPositions: 15,
    description: "Data science and machine learning solutions for businesses.",
    fullDescription:
      "AnalyticsPro is a leading data science company that helps businesses leverage advanced analytics and machine learning to gain competitive advantages. Founded in 2013 by a team of data scientists and AI researchers, we specialize in predictive analytics, natural language processing, computer vision, and recommendation systems. Our solutions have helped clients across finance, retail, healthcare, and manufacturing sectors to optimize operations, reduce costs, and increase revenue.",
    website: "https://analyticspro.example.com",
    email: "careers@analyticspro.example.com",
    phone: "+84 28 3456 7890",
    founded: "2013",
    industry: "Data Science & AI",
    benefits: [
      "Top-tier compensation package",
      "Comprehensive health and wellness benefits",
      "Continuous learning and development program",
      "Flexible work arrangements",
      "Regular hackathons and innovation days",
      "Modern office with quiet zones and collaboration spaces",
    ],
    culture:
      "AnalyticsPro fosters a culture of intellectual curiosity, innovation, and technical excellence. We encourage our team members to explore new ideas, experiment with cutting-edge technologies, and contribute to the data science community through open-source projects and research publications.",
    jobs: [
      {
        id: 601,
        title: "Senior Data Scientist",
        type: "Full-time",
        salary: "$3,500 - $4,500/month",
        experience: "5+ years",
      },
      {
        id: 602,
        title: "Machine Learning Engineer",
        type: "Full-time",
        salary: "$3,000 - $4,000/month",
        experience: "3+ years",
      },
      {
        id: 603,
        title: "Data Engineer",
        type: "Full-time",
        salary: "$2,800 - $3,800/month",
        experience: "3+ years",
      },
      {
        id: 604,
        title: "AI Research Scientist",
        type: "Full-time",
        salary: "$3,800 - $4,800/month",
        experience: "4+ years",
      },
      {
        id: 605,
        title: "Computer Vision Engineer",
        type: "Full-time",
        salary: "$3,200 - $4,200/month",
        experience: "3+ years",
      },
    ],
  },
  {
    id: 7,
    name: "WebStudio",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Da Nang",
    employees: "20-50",
    rating: 4.3,
    openPositions: 3,
    description: "Web development studio specializing in responsive websites.",
    fullDescription:
      "WebStudio is a boutique web development agency creating beautiful, responsive websites and web applications. Founded in 2019, we focus on delivering custom web solutions that combine aesthetic design with technical excellence. Our team of web developers and designers works closely with clients from concept to launch, ensuring that each project meets the highest standards of quality and performance.",
    website: "https://webstudio.example.com",
    email: "hello@webstudio.example.com",
    phone: "+84 236 8765 4321",
    founded: "2019",
    industry: "Web Development",
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Professional development budget",
      "Flexible working hours",
      "Team lunches and outings",
      "Beachside office location",
    ],
    culture:
      "WebStudio cultivates a culture of craftsmanship, attention to detail, and client satisfaction. We believe in creating web experiences that not only look great but also perform exceptionally well. Our team values collaboration, open communication, and continuous improvement.",
    jobs: [
      {
        id: 701,
        title: "Frontend Developer",
        type: "Full-time",
        salary: "$1,800 - $2,800/month",
        experience: "2+ years",
      },
      {
        id: 702,
        title: "Backend Developer",
        type: "Full-time",
        salary: "$2,000 - $3,000/month",
        experience: "2+ years",
      },
      {
        id: 703,
        title: "Web Designer",
        type: "Part-time",
        salary: "$1,500 - $2,000/month",
        experience: "1+ years",
      },
    ],
  },
  {
    id: 8,
    name: "TechInnovate",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Ho Chi Minh City",
    employees: "100-200",
    rating: 4.7,
    openPositions: 9,
    description: "Innovation lab focused on emerging technologies and R&D.",
    fullDescription:
      "TechInnovate is an innovation lab and R&D center focused on exploring and developing solutions using emerging technologies such as blockchain, IoT, AR/VR, and quantum computing. Established in 2017, we work with forward-thinking enterprises and startups to prototype, validate, and implement cutting-edge technology solutions. Our multidisciplinary team of researchers, engineers, and designers pushes the boundaries of what's possible with technology.",
    website: "https://techinnovate.example.com",
    email: "join@techinnovate.example.com",
    phone: "+84 28 5678 9012",
    founded: "2017",
    industry: "Emerging Technologies",
    benefits: [
      "Competitive compensation package",
      "Comprehensive health coverage",
      "Research and innovation budget",
      "Flexible work arrangements",
      "Regular tech talks and workshops",
      "Modern innovation lab facilities",
    ],
    culture:
      "TechInnovate fosters a culture of exploration, experimentation, and breakthrough thinking. We encourage our team members to challenge conventional wisdom, take calculated risks, and pursue ambitious ideas. Our workplace is designed to stimulate creativity and facilitate cross-disciplinary collaboration.",
    jobs: [
      {
        id: 801,
        title: "Blockchain Developer",
        type: "Full-time",
        salary: "$3,000 - $4,000/month",
        experience: "3+ years",
      },
      {
        id: 802,
        title: "IoT Engineer",
        type: "Full-time",
        salary: "$2,800 - $3,800/month",
        experience: "3+ years",
      },
      {
        id: 803,
        title: "AR/VR Developer",
        type: "Full-time",
        salary: "$2,700 - $3,700/month",
        experience: "2+ years",
      },
      {
        id: 804,
        title: "Research Scientist",
        type: "Full-time",
        salary: "$3,500 - $4,500/month",
        experience: "5+ years",
      },
    ],
  },
  {
    id: 9,
    name: "DigitalSolutions",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Hanoi",
    employees: "300-500",
    rating: 4.5,
    openPositions: 11,
    description: "End-to-end digital transformation solutions for enterprises.",
    fullDescription:
      "DigitalSolutions is a leading digital transformation consultancy helping enterprises modernize their business processes, technology infrastructure, and customer experiences. Founded in 2012, we provide end-to-end services including digital strategy, process optimization, technology implementation, and change management. Our team of consultants, architects, and developers works with clients across banking, insurance, retail, and manufacturing sectors to drive digital innovation and business growth.",
    website: "https://digitalsolutions.example.com",
    email: "careers@digitalsolutions.example.com",
    phone: "+84 24 6789 0123",
    founded: "2012",
    industry: "Digital Transformation",
    benefits: [
      "Competitive salary and performance bonuses",
      "Comprehensive health and wellness benefits",
      "Professional certification support",
      "Flexible work arrangements",
      "Global mobility opportunities",
      "Modern office with collaboration spaces",
    ],
    culture:
      "DigitalSolutions promotes a culture of client-centricity, innovation, and excellence. We believe in partnering with our clients to understand their business challenges and deliver transformative solutions that create lasting value. Our team values collaboration, continuous learning, and outcome-focused delivery.",
    jobs: [
      {
        id: 901,
        title: "Digital Transformation Consultant",
        type: "Full-time",
        salary: "$3,200 - $4,200/month",
        experience: "5+ years",
      },
      {
        id: 902,
        title: "Solution Architect",
        type: "Full-time",
        salary: "$3,500 - $4,500/month",
        experience: "6+ years",
      },
      {
        id: 903,
        title: "Business Analyst",
        type: "Full-time",
        salary: "$2,500 - $3,500/month",
        experience: "3+ years",
      },
      {
        id: 904,
        title: "Change Management Specialist",
        type: "Full-time",
        salary: "$2,800 - $3,800/month",
        experience: "4+ years",
      },
      {
        id: 905,
        title: "Enterprise Application Developer",
        type: "Full-time",
        salary: "$2,700 - $3,700/month",
        experience: "3+ years",
      },
    ],
  },
]

export default function CompanyDetailPage() {
  const { companyId, idSlug } = useParams()

  // Ưu tiên companyId nếu có, ngược lại lấy từ idSlug
  const id = companyId || idSlug?.split("-")[0]

  const company = mockCompanies.find(c => c.id === Number(id))


  // If company not found, show error message
  if (!company) {
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-12 flex-grow">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Company Not Found</h1>
            <p className="mb-6">The company you are looking for does not exist or has been removed.</p>
            <Link to="/companies">
              <Button>Back to Companies</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-primary/5 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="h-32 w-32 rounded-xl overflow-hidden bg-white flex items-center justify-center">
              <img src={company.logo || "/placeholder.svg"} alt={company.name} className="h-24 w-24 object-contain" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold">{company.name}</h1>
                <div className="flex items-center justify-center md:justify-start gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(company.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm ml-1">{company.rating}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{company.description}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
                <Badge variant="outline" className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {company.location}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {company.employees} employees
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Building className="h-3 w-3" />
                  {company.openPositions} open positions
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Founded {company.founded}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Briefcase className="h-3 w-3" />
                  {company.industry}
                </Badge>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <Link to={company.website} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    Website
                  </Button>
                </Link>
                <Link to={`mailto:${company.email}`}>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    Email
                  </Button>
                </Link>
                <Link to={`tel:${company.phone}`}>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="jobs">Open Positions ({company.jobs.length})</TabsTrigger>
            <TabsTrigger value="benefits">Benefits & Culture</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">About {company.name}</h2>
                <p className="text-gray-700 mb-6 whitespace-pre-line">{company.fullDescription}</p>

                <h3 className="text-lg font-medium mb-3">Company Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">{company.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Company Size</p>
                      <p className="text-gray-600">{company.employees} employees</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Founded</p>
                      <p className="text-gray-600">{company.founded}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Industry</p>
                      <p className="text-gray-600">{company.industry}</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-medium mb-3">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Website</p>
                      <a href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {company.website.replace("https://", "")}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href={`mailto:${company.email}`} className="text-primary hover:underline">
                        {company.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href={`tel:${company.phone}`} className="text-primary hover:underline">
                        {company.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jobs" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Open Positions at {company.name}</h2>
                <p className="text-gray-600 mb-6">
                  Explore our current job openings and find your next career opportunity with us.
                </p>

                <div className="space-y-4">
                  {company.jobs.map((job) => (
                    <div key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                        <div>
                          <h3 className="font-semibold text-lg">{job.title}</h3>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Briefcase className="h-3 w-3" />
                              {job.type}
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <DollarSign className="h-3 w-3" />
                              {job.salary}
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {job.experience}
                            </Badge>
                          </div>
                        </div>
                        <Link to={`/jobs/${job.id}/apply`}>
                          <Button>Apply Now</Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="benefits" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Benefits & Culture</h2>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Employee Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {company.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p>{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h3 className="text-lg font-medium mb-3">Company Culture</h3>
                  <div className="flex items-start gap-3 mb-4">
                    <Heart className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Our Values</p>
                      <p className="text-gray-700">{company.culture}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Coffee className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Work Environment</p>
                      <p className="text-gray-700">
                        We believe in creating a positive and supportive work environment where everyone can thrive. Our
                        office is designed to foster collaboration while also providing quiet spaces for focused work.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex justify-center">
          <Link to="/companies">
            <Button variant="outline">Back to Companies</Button>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
