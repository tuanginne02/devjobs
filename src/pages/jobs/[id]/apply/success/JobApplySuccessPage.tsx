import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CheckCircle, ArrowRight, Star } from "lucide-react"

export default function ApplicationSuccessPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-12 flex-1 flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl">Application Submitted!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              Your application has been successfully submitted. The employer will review your application and contact
              you if they're interested.
            </p>

            <div className="bg-primary/5 rounded-lg p-4 mt-6">
              <h3 className="font-medium mb-2">What's Next?</h3>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span>The employer will review your application</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span>You'll receive an email notification if your application is accepted or rejected</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span>You can track the status of your application in the "Applied Jobs" section</span>
                </li>
              </ul>
            </div>

            <div className="border-t pt-4 mt-4">
              <p className="text-sm text-gray-600 mb-2">Would you like to rate this company?</p>
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button key={rating} className="text-gray-300 hover:text-yellow-400">
                    <Star className="h-6 w-6" />
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Link to={`/jobs/${params.id}`} className="w-full">
              <Button variant="outline" className="w-full">
                View Job Details
              </Button>
            </Link>
            <Link to="/jobs/applied" className="w-full">
              <Button className="w-full">View Applied Jobs</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <Footer />
    </main>
  )
}

