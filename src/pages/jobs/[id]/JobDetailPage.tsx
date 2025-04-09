"use client"
import { useState, useEffect } from "react"
import { Calendar } from "@/components/ui/calendar"

import { Link, useNavigate, useParams } from "react-router-dom"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useAuth } from "@/contexts/auth-context"
import { api } from "@/lib/api"
import type { Job } from "@/lib/api-types"
import {
    MapPin,
    Briefcase,
    Clock,
    DollarSign,
    Building,
    CheckCircle2,
    Bookmark,
    BookmarkCheck,
    Share2,
    Flag,
} from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

export default function JobDetailPage() {
    const params = useParams()
    const jobId = params.id as string
    const router = useNavigate()
    const { isAuthenticated } = useAuth()

    const [job, setJob] = useState<Job | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isSaved, setIsSaved] = useState(false)

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const jobData = await api.jobs.getById(jobId)
                setJob(jobData)
            } catch (error) {
                console.error("Error fetching job:", error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchJob()
    }, [jobId])

    const toggleSaveJob = () => {
        setIsSaved(!isSaved)
    }

    // If user is not authenticated, show login message
    if (!isAuthenticated) {
        return (
            <main className="min-h-screen flex flex-col">
                <Header />
                <div className="container mx-auto px-4 py-12 flex-grow">
                    <div className="text-center py-12">
                        <h1 className="text-2xl font-bold mb-4">Đăng nhập để xem chi tiết</h1>
                        <p className="mb-6">Vui lòng đăng nhập để xem thông tin chi tiết về công việc này.</p>
                        <Button onClick={() => router("/login")}>Đăng nhập ngay</Button>
                    </div>
                </div>
                <Footer />
            </main>
        )
    }

    // If job not found, show error message
    if (!isLoading && !job) {
        return (
            <main className="min-h-screen flex flex-col">
                <Header />
                <div className="container mx-auto px-4 py-12 flex-grow">
                    <div className="text-center py-12">
                        <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
                        <p className="mb-6">The job you are looking for does not exist or has been removed.</p>
                        <Link to="/jobs">
                            <Button>Back to Jobs</Button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </main>
        )
    }

    if (isLoading) {
        return (
            <main className="min-h-screen flex flex-col">
                <Header />
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-2/3">
                            <Skeleton className="h-12 w-3/4 mb-4" />
                            <div className="flex gap-4 mb-6">
                                <Skeleton className="h-10 w-10 rounded-md" />
                                <Skeleton className="h-6 w-40" />
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <Skeleton className="h-6 w-full" />
                                <Skeleton className="h-6 w-full" />
                                <Skeleton className="h-6 w-full" />
                                <Skeleton className="h-6 w-full" />
                            </div>
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-3/4 mb-6" />

                            <Skeleton className="h-8 w-40 mb-4" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-full mb-6" />
                        </div>
                        <div className="md:w-1/3">
                            <Skeleton className="h-64 w-full rounded-lg mb-6" />
                            <Skeleton className="h-40 w-full rounded-lg" />
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        )
    }

    // Format date to readable format
    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    // Get company name from companyId
    const companyName = job?.companyId.replace("comp_", "") || ""

    return (
        <main className="min-h-screen flex flex-col">
            <Header />

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                        <h1 className="text-3xl font-bold mb-4">{job?.title}</h1>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-12 w-12 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                                <img
                                    src={`/placeholder.svg?height=50&width=50&text=${companyName.charAt(0)}`}
                                    alt={companyName}
                                    className="h-10 w-10 object-contain"
                                />
                            </div>
                            <Link to={`/companies/${job?.companyId}`} className="text-lg font-medium text-primary hover:underline">
                                {companyName}
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center gap-2 text-gray-600">
                                <MapPin className="h-5 w-5 text-gray-500" />
                                <span>{job?.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <Briefcase className="h-5 w-5 text-gray-500" />
                                <span>{job?.type}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <DollarSign className="h-5 w-5 text-gray-500" />
                                <span>{job?.salaryRange}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <Clock className="h-5 w-5 text-gray-500" />
                                <span>Posted on {formatDate(job?.postedDate || new Date())}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                            <Badge variant="outline" className="text-primary border-primary/30">
                                {job?.experienceLevel} Level
                            </Badge>
                            {job?.skills.slice(0, 5).map((skill, index) => (
                                <Badge key={index} variant="secondary">
                                    {skill}
                                </Badge>
                            ))}
                            {job?.skills.length > 5 && <Badge variant="secondary">+{job?.skills.length - 5} more</Badge>}
                        </div>

                        <Separator className="my-6" />

                        <div className="space-y-6">
                            <div>
                                <h2 className="text-xl font-semibold mb-3">Job Description</h2>
                                <p className="text-gray-700 whitespace-pre-line">{job?.description}</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3">Requirements</h2>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    {job?.requirements.map((req, index) => (
                                        <li key={index}>{req}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3">Responsibilities</h2>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    {job?.responsibilities.map((resp, index) => (
                                        <li key={index}>{resp}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3">Benefits</h2>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {job?.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <Separator className="my-6" />

                        <div className="flex flex-wrap gap-4">
                            <Link to={`/jobs/${job?.id}/apply`}>
                                <Button size="lg">Apply Now</Button>
                            </Link>
                            <Button variant="outline" size="lg" onClick={toggleSaveJob}>
                                {isSaved ? (
                                    <>
                                        <BookmarkCheck className="h-5 w-5 mr-2" />
                                        Saved
                                    </>
                                ) : (
                                    <>
                                        <Bookmark className="h-5 w-5 mr-2" />
                                        Save Job
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>

                    <div className="md:w-1/3">
                        <Card className="mb-6">
                            <CardContent className="p-6">
                                <h2 className="text-lg font-semibold mb-4">Job Overview</h2>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Application Deadline</p>
                                            <p className="text-gray-600">{formatDate(job?.applicationDeadline || new Date())}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Briefcase className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Job Type</p>
                                            <p className="text-gray-600">{job?.type}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Building className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Company</p>
                                            <Link to={`/companies/${job?.companyId}`} className="text-primary hover:underline">
                                                {companyName}
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Location</p>
                                            <p className="text-gray-600">{job?.location}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <DollarSign className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Salary Range</p>
                                            <p className="text-gray-600">{job?.salaryRange}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="bg-gray-50 dark:bg-gray-800 p-4">
                                <div className="w-full flex justify-between">
                                    <Button variant="ghost" size="sm" className="text-gray-500">
                                        <Share2 className="h-4 w-4 mr-2" />
                                        Share
                                    </Button>
                                    <Button variant="ghost" size="sm" className="text-gray-500">
                                        <Flag className="h-4 w-4 mr-2" />
                                        Report
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <h2 className="text-lg font-semibold mb-4">Similar Jobs</h2>
                                <p className="text-gray-600 text-sm mb-4">Here are some similar jobs that might interest you</p>

                                <div className="space-y-4">
                                    {[1, 2, 3].map((i) => (
                                        <Link to={`/jobs/job_${i}`} key={i} className="block">
                                            <div className="border rounded-lg p-3 hover:bg-gray-50 transition-colors">
                                                <h3 className="font-medium mb-1">
                                                    {i === 1 ? "Frontend Developer" : i === 2 ? "UI/UX Designer" : "Full Stack Developer"}
                                                </h3>
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Building className="h-3 w-3" />
                                                    <span>{i === 1 ? "WebStudio" : i === 2 ? "CreativeMinds" : "TechInnovate"}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                                                    <MapPin className="h-3 w-3" />
                                                    <span>{i === 1 ? "Da Nang" : i === 2 ? "Ho Chi Minh City" : "Hanoi"}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
