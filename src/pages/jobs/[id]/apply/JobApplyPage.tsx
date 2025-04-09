"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "../../../../components/header"
import Footer from "../../../../components/footer"
import { Upload, Briefcase, MapPin, DollarSign, Clock } from "lucide-react"

// Mock job data
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
    description:
      "We are looking for a Senior Frontend Developer to join our team. The ideal candidate will have experience with React, Next.js, and TypeScript.",
    requirements: [
      "3-5 years of experience in frontend development",
      "Strong knowledge of React and Next.js",
      "Experience with TypeScript",
      "Familiarity with modern frontend tools and practices",
      "Good understanding of responsive design",
      "Excellent problem-solving skills",
    ],
  },
]


// Mock resume data
const mockResumes = [
  {
    id: 1,
    title: "Software Developer Resume",
    updatedAt: "2023-10-20",
  },
  {
    id: 2,
    title: "Frontend Specialist CV",
    updatedAt: "2023-11-10",
  },
  {
    id: 3,
    title: "Full Stack Developer Resume",
    updatedAt: "2023-09-22",
  },
]

export default function JobApplyPage({ params }: { params: { id: string } }) {
  const [selectedResume, setSelectedResume] = useState<string>("")
  const [coverLetter, setCoverLetter] = useState<string>("")
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const router = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedResume) {
      alert("Please select a resume")
      return
    }

    if (!agreeTerms) {
      alert("Please agree to the terms and conditions")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Applying for job with:", { jobId: params.id, selectedResume, coverLetter })
      setIsSubmitting(false)
      router(`/jobs/${params.id}/apply/success`)
    }, 1500)
  }
  useEffect(() => {
    localStorage.setItem("selectedJobId", params.id);
  }, [params.id]);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-6">Apply for Job</h1>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Job Details</CardTitle>
                <CardDescription>Review the job details before applying</CardDescription>
              </CardHeader>

              {mockJobs.map((item) => (
                <CardContent>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img
                        src={item.companyLogo || "/placeholder.svg"}
                        alt={item.company}
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">{item.title}</h2>
                      <Link
                        to={`/companies/${item.company.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-primary hover:underline"
                      >
                        {item.company}
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Briefcase className="h-4 w-4" />
                      <span>{item.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign className="h-4 w-4" />
                      <span>{item.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>Posted {item.postedAt}</span>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Job Description</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Requirements</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {item.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              ))}

            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Application Form</CardTitle>
                <CardDescription>Fill out the form to apply for this position</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="resume">Select Resume</Label>
                    <Select value={selectedResume} onValueChange={setSelectedResume}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a resume" />
                      </SelectTrigger>
                      <SelectContent>
                        {mockResumes.map((resume) => (
                          <SelectItem key={resume.id} value={resume.id.toString()}>
                            {resume.title} (Updated: {resume.updatedAt})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="flex justify-between items-center mt-2">
                      <Link to="/resumes" className="text-sm text-primary hover:underline">
                        Manage Resumes
                      </Link>
                      <Link to="/resumes/upload" className="text-sm text-primary hover:underline flex items-center">
                        <Upload className="h-3 w-3 mr-1" />
                        Upload New Resume
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cover-letter">Cover Letter (Optional)</Label>
                    <textarea
                      id="cover-letter"
                      className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Write a cover letter to introduce yourself and explain why you're a good fit for this position..."
                      value={coverLetter}
                      onChange={(e) => setCoverLetter(e.target.value)}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      
                      id="terms"
                      checked={agreeTerms}
                      onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                    />
                    <Label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the{" "}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="md:w-1/3">
            <Card>
              <CardHeader>
                <CardTitle>Application Tips</CardTitle>
                <CardDescription>Improve your chances of getting hired</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-medium mb-1">Tailor Your Resume</h3>
                  <p className="text-sm text-gray-600">
                    Customize your resume to highlight skills and experiences relevant to this position.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-medium mb-1">Write a Compelling Cover Letter</h3>
                  <p className="text-sm text-gray-600">
                    Explain why you're interested in this role and how your skills match the requirements.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-medium mb-1">Research the Company</h3>
                  <p className="text-sm text-gray-600">
                    Show your interest by mentioning specific projects or values of the company.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-medium mb-1">Follow Up</h3>
                  <p className="text-sm text-gray-600">
                    If you don't hear back within a week, consider sending a polite follow-up email.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link to="/resources/application-guide">
                  <Button variant="outline">View Full Application Guide</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

