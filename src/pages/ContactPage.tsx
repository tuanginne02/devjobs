"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Header from "../components/header"
import Footer from "../components/footer"
import { Mail, Phone, MapPin, Send, MessageSquare, Building, User } from "lucide-react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Your message has been sent. We'll get back to you soon!")
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    }, 1500)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions or feedback? We're here to help. Reach out to our team and we'll get back to you as soon as
            possible.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="pl-10"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="pl-10"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  className="flex min-h-[150px] w-full rounded-md border border-Input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Location</h2>
            <p className="text-gray-600 mb-8">Visit our office in the heart of Ho Chi Minh City's tech district.</p>

            <div className="rounded-lg overflow-hidden h-[400px] bg-gray-200 mb-8">
              {/* This would be a map in a real application */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <MapPin className="h-12 w-12 text-gray-400" />
                <span className="ml-2 text-gray-600">Map would be displayed here</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">123 Tech Street, District 1, Ho Chi Minh City, Vietnam</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday to Friday: 9am - 6pm
                    <br />
                    Saturday: 9am - 12pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">+84 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">contact@devjob.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-16" />

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Find quick answers to common questions about our platform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div>
              <h3 className="text-lg font-semibold mb-2">How do I create an account?</h3>
              <p className="text-gray-600">
                You can create an account by clicking on the "Register" Button in the top right corner of the page and
                following the instructions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">How do I post a job?</h3>
              <p className="text-gray-600">
                To post a job, you need to have an HR account. If you're an HR representative, you can post jobs from
                your dashboard after logging in.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">What is DevJob Pro?</h3>
              <p className="text-gray-600">
                DevJob Pro is our premium subscription that gives you access to exclusive features like personalized job
                alerts, priority application status, and more.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">How can I become an HR on the platform?</h3>
              <p className="text-gray-600">
                To become an HR on the platform, you need to contact our admin team with your company details. The admin
                will verify your information and update your role.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

