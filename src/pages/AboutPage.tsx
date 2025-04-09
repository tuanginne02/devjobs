import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Header from "../components/header"
import Footer from "../components/footer"
import { Mail, Phone, MapPin, Users, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-primary">DevJob</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                DevJob is Vietnam's leading platform connecting talented developers with top tech companies. Our mission
                is to help developers find their dream jobs and companies find the perfect talent.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/jobs">
                  <Button >Browse Jobs</Button>
                </Link>
                <Link to="/contact">
                  <Button  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="/placeholder.svg?height=400&width=500" alt="About DevJob" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're on a mission to transform the tech recruitment landscape in Vietnam by creating a transparent,
            efficient, and user-friendly platform that benefits both job seekers and employers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To connect talented developers with opportunities that match their skills, values, and career
                aspirations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-600">
                Transparency, integrity, innovation, and a commitment to creating value for our community.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Community</h3>
              <p className="text-gray-600">
                A thriving ecosystem of developers, tech companies, and industry partners working together.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2">
            <img src="/placeholder.svg?height=400&width=500" alt="Our Story" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              DevJob was founded in 2020 by a team of tech professionals who experienced firsthand the challenges of the
              recruitment process in Vietnam's growing tech industry.
            </p>
            <p className="text-gray-600 mb-4">
              We noticed a gap between talented developers looking for meaningful work and companies struggling to find
              the right talent. This inspired us to create a platform specifically designed for the tech community.
            </p>
            <p className="text-gray-600">
              Since then, we've grown to become Vietnam's leading tech job platform, connecting thousands of developers
              with hundreds of companies across the country.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We're proud of the positive impact we've made on Vietnam's tech ecosystem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-gray-600">Developers Placed</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-600">Partner Companies</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
              <p className="text-gray-600">Jobs Posted</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        <Separator className="my-16" />

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Have questions or feedback? We'd love to hear from you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">For general inquiries and support</p>
                <a href="mailto:contact@devjob.com" className="text-primary hover:underline">
                  contact@devjob.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Monday to Friday, 9am to 6pm</p>
                <a href="tel:+84123456789" className="text-primary hover:underline">
                  +84 123 456 789
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">Our office in Ho Chi Minh City</p>
                <address className="not-italic text-primary">
                  123 Tech Street, District 1<br />
                  Ho Chi Minh City, Vietnam
                </address>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

