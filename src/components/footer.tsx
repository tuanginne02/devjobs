import { Link } from "react-router-dom"
import { Briefcase, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Briefcase className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">DevJob</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Find your dream developer job or the perfect candidate for your company.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-gray-500 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link to="/companies" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Companies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* For Candidates */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Candidates</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resumes" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Manage Resumes
                </Link>
              </li>
              <li>
                <Link to="/jobs/applied" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Applied Jobs
                </Link>
              </li>
              <li>
                <Link to="/jobs/saved" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Saved Jobs
                </Link>
              </li>
              <li>
                <Link to="/pro" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Go Pro
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400">123 Tech Street, Digital City, Vietnam</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">+84 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">contact@devjob.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-6 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} DevJob. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
