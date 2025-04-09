"use client"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Star } from "lucide-react"
import { api } from "@/lib/api"
// Update to use the types from api-types.ts
import type { Company } from "@/lib/api-types"
import { Skeleton } from "@/components/ui/skeleton"

export default function TopCompanies() {
  const [companies, setCompanies] = useState<Company[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const activeCompanies = await api.companies.getAll()
        // Sort by employee count (descending) and take top 6
        const sortedCompanies = activeCompanies
          .sort((a, b) => {
            const aCount = Number.parseInt(a.employeeCount.split("-")[1] || a.employeeCount.split("-")[0])
            const bCount = Number.parseInt(b.employeeCount.split("-")[1] || b.employeeCount.split("-")[0])
            return bCount - aCount
          })
          .slice(0, 6)

        setCompanies(sortedCompanies)
      } catch (error) {
        console.error("Error fetching companies:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCompanies()
  }, [])

  // Generate a random rating between 4.0 and 5.0
  const generateRating = (companyId: string) => {
    // Use the company ID to generate a consistent rating
    const hash = companyId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return (4 + (hash % 10) / 10).toFixed(1)
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center mb-4">
                <Skeleton className="h-20 w-20 rounded-full mb-3" />
                <Skeleton className="h-6 w-40 mb-2" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
              <div className="mt-4 text-center">
                <Skeleton className="h-4 w-32 mx-auto mb-3" />
                <Skeleton className="h-10 w-full" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {companies.map((company) => {
        const rating = Number.parseFloat(generateRating(company.id))
        // Calculate open positions (random number between 1 and 20)
        const openPositions = Math.floor(Math.random() * 20) + 1

        return (
          <Card key={company.id} className="company-card overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="h-20 w-20 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-3">
                  <img
                    src={company.logo || `/placeholder.svg?height=80&width=80&text=${company.name.charAt(0)}`}
                    alt={company.name}
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg">{company.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm ml-1">{rating}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600 justify-center">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{company.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 justify-center">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">{company.employeeCount} employees</span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">{openPositions} open positions</p>
                <Link to={`/companies/${company.id}`} className="block mt-3">
                  <Button variant="outline" className="w-full">
                    View Company
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
