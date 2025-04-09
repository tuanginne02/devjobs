"use client"

import type React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { MapPin, Users, Star, Search, SlidersHorizontal, ChevronDown, ChevronUp, Building } from "lucide-react"

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
  },
]

export default function CompaniesPage() {
  const [searchName, setSearchName] = useState("")
  const [searchLocation, setSearchLocation] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [ratingFilters, setRatingFilters] = useState<string[]>([])
  const [sizeFilters, setSizeFilters] = useState<string[]>([])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would trigger a search with the filters
    console.log("Searching with:", { searchName, searchLocation, ratingFilters, sizeFilters })
  }

  const toggleRatingFilter = (value: string) => {
    if (ratingFilters.includes(value)) {
      setRatingFilters(ratingFilters.filter((filter) => filter !== value))
    } else {
      setRatingFilters([...ratingFilters, value])
    }
  }

  const toggleSizeFilter = (value: string) => {
    if (sizeFilters.includes(value)) {
      setSizeFilters(sizeFilters.filter((filter) => filter !== value))
    } else {
      setSizeFilters([...sizeFilters, value])
    }
  }

  // Filter companies based on search and filters
  const filteredCompanies = mockCompanies.filter((company) => {
    // Search by name and location
    const matchesName = company.name.toLowerCase().includes(searchName.toLowerCase())
    const matchesLocation = company.location.toLowerCase().includes(searchLocation.toLowerCase())

    // Filter by rating
    const matchesRating =
      ratingFilters.length === 0 ||
      ratingFilters.some((filter) => {
        if (filter === "4.5+") return company.rating >= 4.5
        if (filter === "4+") return company.rating >= 4.0
        if (filter === "3.5+") return company.rating >= 3.5
        if (filter === "3+") return company.rating >= 3.0
        return false
      })

    // Filter by company size
    const matchesSize =
      sizeFilters.length === 0 ||
      sizeFilters.some((filter) => {
        if (filter === "small")
          return (
            company.employees.startsWith("1-") ||
            company.employees.startsWith("20-") ||
            company.employees.startsWith("50-")
          )
        if (filter === "medium") return company.employees.startsWith("100-") || company.employees.startsWith("200-")
        if (filter === "large")
          return (
            company.employees.startsWith("300-") ||
            company.employees.startsWith("500-") ||
            company.employees.startsWith("1000")
          )
        return false
      })

    return matchesName && matchesLocation && matchesRating && matchesSize
  })

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Find Top Companies</h1>
          <form onSubmit={handleSearch} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1 items-center relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Company name"
                  className="pl-10"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
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
                Search Companies
              </Button>
              <Button
                type="button"
                // 
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Rating Filter */}
                  <div>
                    <h3 className="font-medium mb-3">Rating</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox

                          id="rating-4.5"
                          checked={ratingFilters.includes("4.5+")}
                          onCheckedChange={() => toggleRatingFilter("4.5+")}
                        />
                        <Label htmlFor="rating-4.5" className="flex items-center">
                          4.5+ <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 ml-1" />
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox

                          id="rating-4"
                          checked={ratingFilters.includes("4+")}
                          onCheckedChange={() => toggleRatingFilter("4+")}
                        />
                        <Label htmlFor="rating-4" className="flex items-center">
                          4.0+ <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 ml-1" />
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox

                          id="rating-3.5"
                          checked={ratingFilters.includes("3.5+")}
                          onCheckedChange={() => toggleRatingFilter("3.5+")}
                        />
                        <Label htmlFor="rating-3.5" className="flex items-center">
                          3.5+ <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 ml-1" />
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox

                          id="rating-3"
                          checked={ratingFilters.includes("3+")}
                          onCheckedChange={() => toggleRatingFilter("3+")}
                        />
                        <Label htmlFor="rating-3" className="flex items-center">
                          3.0+ <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 ml-1" />
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Company Size Filter */}
                  <div>
                    <h3 className="font-medium mb-3">Company Size</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox

                          id="size-small"
                          checked={sizeFilters.includes("small")}
                          onCheckedChange={() => toggleSizeFilter("small")}
                        />
                        <Label htmlFor="size-small">Small (1-100 employees)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox

                          id="size-medium"
                          checked={sizeFilters.includes("medium")}
                          onCheckedChange={() => toggleSizeFilter("medium")}
                        />
                        <Label htmlFor="size-medium">Medium (100-300 employees)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox

                          id="size-large"
                          checked={sizeFilters.includes("large")}
                          onCheckedChange={() => toggleSizeFilter("large")}
                        />
                        <Label htmlFor="size-large">Large (300+ employees)</Label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <Button
                    type="button"
                    // 
                    onClick={() => {
                      setRatingFilters([])
                      setSizeFilters([])
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
          <h2 className="text-xl font-semibold">{filteredCompanies.length} Companies Found</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="text-sm border rounded-md px-2 py-1">
              <option value="relevance">Relevance</option>
              <option value="rating-high">Rating (High to Low)</option>
              <option value="jobs">Open Positions</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <Card key={company.id} className="company-card overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="h-20 w-20 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-3">
                    <img
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{company.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(company.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="text-sm ml-1">{company.rating}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 text-center mb-4 line-clamp-2">{company.description}</p>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600 justify-center">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{company.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 justify-center">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{company.employees} employees</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 justify-center">
                    <Building className="h-4 w-4" />
                    <span className="text-sm">{company.openPositions} open positions</span>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <Link to={`/companies/${company.id}`} className="block">
                    <Button className="w-full">
                      View Company
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No companies found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search filters</p>
            <Button

              onClick={() => {
                setSearchName("")
                setSearchLocation("")
                setRatingFilters([])
                setSizeFilters([])
              }}
            >
              Reset All Filters
            </Button>
          </div>
        )}

        {filteredCompanies.length > 0 && (
          <div className="mt-8 flex justify-center">
            <div className="flex gap-2">
              <Button variant="outline" size="icon" disabled>
                &lt;
              </Button>
              <Button variant="outline" size="icon" className="bg-primary text-white">
                1
              </Button>
              <Button variant="outline" size="icon" >
                2
              </Button>
              <Button variant="outline" size="icon" >
                3
              </Button>
              <Button variant="outline" size="icon" >
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

