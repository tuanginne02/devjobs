import { Link } from "react-router-dom"
// import { Button } from "@/components/ui/button"
import { Search, MapPin, Briefcase } from "lucide-react"

const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-blue-700 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Find Your Dream Developer Job</h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Thousands of jobs for developers, designers, and tech professionals
          </p>

          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Location"
                  className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <Link
                to="/jobs"
                className="bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md flex items-center justify-center"
              >
                <Search className="h-5 w-5 mr-2" />
                Search Jobs
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <div className="bg-blue-100/20 p-2 rounded-full">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold text-white">10,000+</div>
                <div className="text-blue-100">Jobs Available</div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-blue-100/20 p-2 rounded-full">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold text-white">500+</div>
                <div className="text-blue-100">Companies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
