import { Link } from "react-router-dom"
import { MapPin, Clock, DollarSign, Bookmark, BookmarkCheck, Briefcase } from "lucide-react"
import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { api } from "@/lib/api"
import type { Job } from "@/services"
import { Skeleton } from "@/components/ui/skeleton"


const FeaturedJobs = () => {
  const [savedJobs, setSavedJobs] = useState<string[]>([])
  const [jobs, setJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const featuredJobs = await api.jobs.getFeatured()
        setJobs(featuredJobs)
      } catch (error) {
        console.error("Error fetching featured jobs:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchJobs()
  }, [])

  const toggleSaveJob = (jobId: string) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter((id) => id !== jobId))
    } else {
      setSavedJobs([...savedJobs, jobId])
    }
  }
  // Format date to "X days ago" format
  const formatDate = (date: Date) => {
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - new Date(date).getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) {
      return "Today"
    } else if (diffDays === 1) {
      return "Yesterday"
    } else if (diffDays < 7) {
      return `${diffDays} days ago`
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7)
      return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`
    } else {
      const months = Math.floor(diffDays / 30)
      return `${months} ${months === 1 ? "month" : "months"} ago`
    }
  }
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-12 w-12 rounded-md" />
                  <div>
                    <Skeleton className="h-5 w-40 mb-2" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
                <Skeleton className="h-6 w-6 rounded-full" />
              </div>
              <div className="mt-4 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
              <div className="mt-4">
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 dark:bg-gray-800 p-4 flex justify-between">
              <Skeleton className="h-10 w-28" />
              <Skeleton className="h-10 w-28" />
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => {
        // Get company from job.companyId
        const company = { name: job.companyId.replace("comp_", "") }
        return (
          <Card key={job.id} className="job-card overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img
                      src={`/placeholder.svg?height=50&width=50&text=${company.name.charAt(0)}`}
                      alt={company.name}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg line-clamp-1">{job.title}</h3>
                    <Link to={`/companies/${company.companyId}-${company.name.toLowerCase().replace(/\s+/g, "-")}`} className="text-gray-600 hover:text-primary text-sm">
                      {company.name}
                    </Link>
                  </div>
                </div>
                <button
                  onClick={() => toggleSaveJob(job.id)}
                  className="text-gray-400 hover:text-primary"
                  aria-label={savedJobs.includes(job.id) ? "Unsave job" : "Save job"}
                >
                  {savedJobs.includes(job.id) ? (
                    <BookmarkCheck className="h-5 w-5 text-primary" />
                  ) : (
                    <Bookmark className="h-5 w-5" />
                  )}
                </button>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Briefcase className="h-4 w-4" />
                  <span className="text-sm">{job.experienceLevel} Level</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-sm">{job.salaryRange}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{formatDate(job.postedDate)}</span>
                </div>
              </div>

              <div className="mt-4">
                <Badge variant="outline" className="mr-2">
                  {job.type}
                </Badge>
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
         
        )

      })}
    </div >
  )
}

export default FeaturedJobs
