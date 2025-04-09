"use client"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, ChevronUp, ChevronDown, SlidersHorizontal } from "lucide-react"

const JobSearch = () => {
  const [showFilters, setShowFilters] = useState(false)
  const [jobTitle, setJobTitle] = useState("")
  const [location, setLocation] = useState("")
  const router = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (jobTitle) params.append("title", jobTitle)
    if (location) params.append("location", location)

    router(`/jobs?${params.toString()}`)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 -mt-10 relative z-10">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Job title or keyword"
            className="pl-10"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Location"
            className="pl-10"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <Button type="submit" className="md:w-auto w-full">
          Search Jobs
        </Button>
      </form>

      <div className="mt-4 flex items-center">
        <Button
          type="button"
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
          {showFilters ? <ChevronUp className="h-4 w-4 ml-2" /> : <ChevronDown className="h-4 w-4 ml-2" />}
        </Button>
      </div>

      {showFilters && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Experience Level</label>
            {/* <SelectContent> */}
              <select>
                <option value="">Any Experience</option>
                <option value="entry">Entry Level</option>
                <option value="mid">Mid Level</option>
                <option value="senior">Senior Level</option>
              </select>
            {/* </SelectContent> */}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Job Type</label>
            <select className="w-full rounded-md border border-gray-300 dark:border-gray-600 py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
              <option value="">Any Type</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
              <option value="freelance">Freelance</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Salary Range</label>
            <select className="w-full rounded-md border border-gray-300 dark:border-gray-600 py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
              <option value="">Any Salary</option>
              <option value="0-50000">$0 - $50,000</option>
              <option value="50000-100000">$50,000 - $100,000</option>
              <option value="100000-150000">$100,000 - $150,000</option>
              <option value="150000+">$150,000+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Sort By</label>
            <select className="w-full rounded-md border border-gray-300 dark:border-gray-600 py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
              <option value="relevance">Relevance</option>
              <option value="date-desc">Newest</option>
              <option value="date-asc">Oldest</option>
              <option value="salary-desc">Highest Salary</option>
              <option value="salary-asc">Lowest Salary</option>
            </select>
          </div>
          <div className="mt-4 flex justify-end">
            <Button
              type="button"
              variant="outline"
              // onClick={() => {
              //   setRatingFilters([])
              //   setSizeFilters([])
              // }}
              className="mr-2"
            >
              Reset Filters
            </Button>
            <Button type="submit">Apply Filters</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default JobSearch
