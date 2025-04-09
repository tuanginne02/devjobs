import { Link } from "react-router-dom"
import { Button } from "./ui/button"

export default function HeroBanner1() {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Dream <span className="text-primary">Developer Job</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
            Connect with top tech companies and find the perfect role for your skills and career goals.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/jobs">
              <Button size="lg">Browse Jobs</Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" size="lg">
                Post Your Resume
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/placeholder.svg?height=400&width=500"
            alt="Job Search"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}
