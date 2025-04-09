"use client"

import type React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import Header from "../../components/header"
import Footer from "../../components/footer"
import {
  Bookmark,
  BookmarkCheck,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  Search,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

// Mock data for jobs
const mockJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    companyLogo: "/placeholder.svg?height=50&width=50",
    location: "Ho Chi Minh City",
    type: "Full-time",
    salary: "$2000 - $3500",
    postedAt: "2 days ago",
    experience: "3-5 years",
    level: "Senior",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataSoft",
    companyLogo: "/placeholder.svg?height=50&width=50",
    location: "Hanoi",
    type: "Full-time",
    salary: "$1800 - $2800",
    postedAt: "1 week ago",
    experience: "2-4 years",
    level: "Mid-level",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "CreativeMinds",
    companyLogo: "/placeholder.svg?height=50&width=50",
    location: "Da Nang",
    type: "Part-time",
    salary: "$1500 - $2200",
    postedAt: "3 days ago",
    experience: "1-3 years",
    level: "Junior",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudTech",
    companyLogo: "/placeholder.svg?height=50&width=50",
    location: "Ho Chi Minh City",
    type: "Full-time",
    salary: "$2200 - $3800",
    postedAt: "Just now",
    experience: "3-6 years",
    level: "Senior",
  },
  {
    id: 5,
    title: "Mobile Developer",
    company: "AppWorks",
    companyLogo: "/placeholder.svg?height=50&width=50",
    location: "Hanoi",
    type: "Full-time",
    salary: "$1700 - $2500",
    postedAt: "5 days ago",
    experience: "2-4 years",
    level: "Mid-level",
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "AnalyticsPro",
    companyLogo: "/placeholder.svg?height=50&width=50",
    location: "Ho Chi Minh City",
    type: "Full-time",
    salary: "$2500 - $4000",
    postedAt: "1 day ago",
    experience: "4-7 years",
    level: "Senior",
  },
  {
    id: 7,
    title: "QA Engineer",
    company: "TestPro",
    companyLogo: "/placeholder.svg?height=50&width=50",
    location: "Da Nang",
    type: "Full-time",
    salary: "$1600 - $2300",
    postedAt: "4 days ago",
    experience: "2-4 years",
    level: "Mid-level",
  },
  {
    id: 8,
    title: "Frontend Developer Intern",
    company: "WebStudio",
    companyLogo: "/placeholder.svg?height=50&width=50",
    location: "Ho Chi Minh City",
    type: "Internship",
    salary: "$500 - $800",
    postedAt: "2 days ago",
    experience: "0-1 years",
    level: "Intern",
  },
]

export default function JobsPage() {
  const [savedJobs, setSavedJobs] = useState<number[]>([])
  const [searchTitle, setSearchTitle] = useState("")
  const [searchLocation, setSearchLocation] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [experienceFilters, setExperienceFilters] = useState<string[]>([])
  const [levelFilters, setLevelFilters] = useState<string[]>([])
  const [typeFilters, setTypeFilters] = useState<string[]>([])
  const [salaryRange, setSalaryRange] = useState([500, 4000])

  const toggleSaveJob = (jobId: number) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter((id) => id !== jobId))
    } else {
      setSavedJobs([...savedJobs, jobId])
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would trigger a search with the filters
    console.log("Searching with:", {
      searchTitle,
      searchLocation,
      experienceFilters,
      levelFilters,
      typeFilters,
      salaryRange,
    })
  }

  const toggleExperienceFilter = (value: string) => {
    if (experienceFilters.includes(value)) {
      setExperienceFilters(experienceFilters.filter((filter) => filter !== value))
    } else {
      setExperienceFilters([...experienceFilters, value])
    }
  }

  const toggleLevelFilter = (value: string) => {
    if (levelFilters.includes(value)) {
      setLevelFilters(levelFilters.filter((filter) => filter !== value))
    } else {
      setLevelFilters([...levelFilters, value])
    }
  }

  const toggleTypeFilter = (value: string) => {
    if (typeFilters.includes(value)) {
      setTypeFilters(typeFilters.filter((filter) => filter !== value))
    } else {
      setTypeFilters([...typeFilters, value])
    }
  }

  // Filter jobs based on search and filters
  const filteredJobs = mockJobs.filter((job) => {
    // Search by title and location
    const matchesTitle = job.title.toLowerCase().includes(searchTitle.toLowerCase())
    const matchesLocation = job.location.toLowerCase().includes(searchLocation.toLowerCase())

    // Filter by experience
    const matchesExperience =
      experienceFilters.length === 0 ||
      experienceFilters.some((filter) => {
        if (filter === "0-1") return job.experience.includes("0-1")
        if (filter === "1-3") return job.experience.includes("1-3")
        if (filter === "3-5") return job.experience.includes("3-5")
        if (filter === "5+") return Number.parseInt(job.experience.split("-")[1]) > 5
        return false
      })

    // Filter by level
    const matchesLevel = levelFilters.length === 0 || levelFilters.includes(job.level)

    // Filter by job type
    const matchesType = typeFilters.length === 0 || typeFilters.includes(job.type)

    // Filter by salary range
    const jobMinSalary = Number.parseInt(job.salary.split("$")[1].split(" - ")[0])
    const jobMaxSalary = Number.parseInt(job.salary.split("- $")[1])
    const matchesSalary = jobMinSalary <= salaryRange[1] && jobMaxSalary >= salaryRange[0]

    return matchesTitle && matchesLocation && matchesExperience && matchesLevel && matchesType && matchesSalary
  })

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Find Your Dream Job</h1>

          <form onSubmit={handleSearch} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Job title or keyword"
                  className="pl-10"
                  value={searchTitle}
                  onChange={(e) => setSearchTitle(e.target.value)}
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Location"
                  className="pl-10"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
              </div>
              <Button type="submit" className="md:w-auto w-full">
                Search Jobs
              </Button>
              <Button
                type="button"
                // variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:w-auto w-full"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
                {showFilters ? <ChevronUp className="h-4 w-4 ml-2" /> : <ChevronDown className="h-4 w-4 ml-2" />}
              </Button>
            </div>

            {showFilters && (
              <div className="mt-4 pt-4 border-t">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {/* Experience Filter */}
                  <div>
                    <Label className="font-medium mb-3">Experience</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="exp-0-1"
                          checked={experienceFilters.includes("0-1")}
                          onCheckedChange={() => toggleExperienceFilter("0-1")}
                        />
                        <Label htmlFor="exp-0-1">0-1 years</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="exp-1-3"
                          checked={experienceFilters.includes("1-3")}
                          onCheckedChange={() => toggleExperienceFilter("1-3")}
                        />
                        <Label htmlFor="exp-1-3">1-3 years</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="exp-3-5"
                          checked={experienceFilters.includes("3-5")}
                          onCheckedChange={() => toggleExperienceFilter("3-5")}
                        />
                        <Label htmlFor="exp-3-5">3-5 years</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          
                          id="exp-5+"
                          checked={experienceFilters.includes("5+")}
                          onCheckedChange={() => toggleExperienceFilter("5+")}
                        />
                        <Label htmlFor="exp-5+">5+ years</Label>
                      </div>
                    </div>
                  </div>

                  {/* Level Filter */}
                  <div>
                    <h3 className="font-medium mb-3">Level</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          
                          id="level-intern"
                          checked={levelFilters.includes("Intern")}
                          onCheckedChange={() => toggleLevelFilter("Intern")}
                        />
                        <Label htmlFor="level-intern">Intern</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          
                          id="level-junior"
                          checked={levelFilters.includes("Junior")}
                          onCheckedChange={() => toggleLevelFilter("Junior")}
                        />
                        <Label htmlFor="level-junior">Junior</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          
                          id="level-mid"
                          checked={levelFilters.includes("Mid-level")}
                          onCheckedChange={() => toggleLevelFilter("Mid-level")}
                        />
                        <Label htmlFor="level-mid">Mid-level</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          
                          id="level-senior"
                          checked={levelFilters.includes("Senior")}
                          onCheckedChange={() => toggleLevelFilter("Senior")}
                        />
                        <Label htmlFor="level-senior">Senior</Label>
                      </div>
                    </div>
                  </div>

                  {/* Job Type Filter */}
                  <div>
                    <h3 className="font-medium mb-3">Job Type</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          
                          id="type-full"
                          checked={typeFilters.includes("Full-time")}
                          onCheckedChange={() => toggleTypeFilter("Full-time")}
                        />
                        <Label htmlFor="type-full">Full-time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          
                          id="type-part"
                          checked={typeFilters.includes("Part-time")}
                          onCheckedChange={() => toggleTypeFilter("Part-time")}
                        />
                        <Label htmlFor="type-part">Part-time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          
                          id="type-contract"
                          checked={typeFilters.includes("Contract")}
                          onCheckedChange={() => toggleTypeFilter("Contract")}
                        />
                        <Label htmlFor="type-contract">Contract</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          
                          id="type-internship"
                          checked={typeFilters.includes("Internship")}
                          onCheckedChange={() => toggleTypeFilter("Internship")}
                        />
                        <Label htmlFor="type-internship">Internship</Label>
                      </div>
                    </div>
                  </div>

                  {/* Salary Range Filter */}
                  <div>
                    <h3 className="font-medium mb-3">Salary Range</h3>
                    <div className="space-y-6">
                      <Slider
                        defaultValue={[500, 4000]}
                        min={500}
                        max={4000}
                        step={100}
                        value={salaryRange}
                        onValueChange={(value) => setSalaryRange(value)}
                      />
                      <div className="flex justify-between">
                        <span>${salaryRange[0]}</span>
                        <span>${salaryRange[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setExperienceFilters([])
                      setLevelFilters([])
                      setTypeFilters([])
                      setSalaryRange([500, 4000])
                    }}
                    className="mr-2"
                  >
                    Reset Filters
                  </Button>
                  <Button type="submit">Apply Filters</Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">{filteredJobs.length} Jobs Found</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="text-sm border rounded-md px-2 py-1">
              <option value="relevance">Relevance</option>
              <option value="date">Date</option>
              <option value="salary-high">Salary (High to Low)</option>
              <option value="salary-low">Salary (Low to High)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="job-card overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img
                        src={job.companyLogo || "/placeholder.svg"}
                        alt={job.company}
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg line-clamp-1">{job.title}</h3>
                      <Link
                        to={`/companies/${job.company.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-gray-600 hover:text-primary text-sm"
                      >
                        {job.company}
                      </Link>
                    </div>
                  </div>
                  <Button
                    onClick={() => toggleSaveJob(job.id)}
                    aria-Label={savedJobs.includes(job.id) ? "Unsave job" : "Save job"}
                  >
                    {savedJobs.includes(job.id) ? (
                      <BookmarkCheck className="h-5 w-5" />
                    ) : (
                      <Bookmark className="h-5 w-5" />
                    )}
                  </Button>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Briefcase className="h-4 w-4" />
                    <span className="text-sm">{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <DollarSign className="h-4 w-4" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{job.postedAt}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <Badge variant="outline" className="mr-2">
                    {job.type}
                  </Badge>
                  <Badge variant="outline">{job.level}</Badge>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 dark:bg-gray-800 p-4 flex justify-between">
                <Link to={`/jobs/${job.id}`}>
                  <Button variant="outline">View Details</Button>
                </Link>
                <Link to={`/jobs/${job.id}/apply`}>
                  <Button>Apply Now</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No jobs found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search filters</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTitle("")
                setSearchLocation("")
                setExperienceFilters([])
                setLevelFilters([])
                setTypeFilters([])
                setSalaryRange([500, 4000])
              }}
            >
              Reset All Filters
            </Button>
          </div>
        )}

        {filteredJobs.length > 0 && (
          <div className="mt-8 flex justify-center">
            <div className="flex gap-2">
              <Button variant="outline" size="icon" disabled>
                &lt;
              </Button>
              <Button variant="outline" size="icon" className="bg-primary text-white">
                1
              </Button>
              <Button variant="outline" size="icon">
                2
              </Button>
              <Button variant="outline" size="icon">
                3
              </Button>
              <Button variant="outline" size="icon">
                &gt;
              </Button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}

