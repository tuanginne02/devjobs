"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Header from "../components/header"
import Footer from "../components/footer"
import { CheckCircle, Star, Mail, Building, Zap, X } from "lucide-react"

export default function ProPage() {
  const [selectedPlan, setSelectedPlan] = useState<string>("monthly")

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 px-3 py-1 text-primary border-primary/30">
            <Star className="h-3 w-3 mr-1 fill-primary" />
            Premium
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Upgrade to <span className="text-primary">DevJob Pro</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Get exclusive benefits and increase your chances of landing your dream job with DevJob Pro.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-primary/5">
              <CardContent className="p-6 text-center">
                <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Personalized Job Alerts</h3>
                <p className="text-sm text-gray-600">
                  Receive tailored job recommendations based on your skills and preferences directly to your email.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5">
              <CardContent className="p-6 text-center">
                <Building className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Top Companies Access</h3>
                <p className="text-sm text-gray-600">
                  Get insights into top-rated companies and exclusive job opportunities not available to regular users.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5">
              <CardContent className="p-6 text-center">
                <Zap className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Priority Application</h3>
                <p className="text-sm text-gray-600">
                  Your applications are highlighted to employers, increasing your chances of getting noticed.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Choose Your Plan</h2>

            <Tabs
              defaultValue="monthly"
              value={selectedPlan}
              onValueChange={setSelectedPlan}
              className="max-w-md mx-auto"
            >
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="monthly" >Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly (Save 20%)</TabsTrigger>
              </TabsList>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className={`border-2 ${selectedPlan === "monthly" ? "border-primary" : "border-transparent"}`}>
                  <CardHeader>
                    <CardTitle>Pro Monthly</CardTitle>
                    <CardDescription>Perfect for short-term job searching</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">$9.99</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Personalized job alerts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Access to top-rated companies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Priority application status</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                        <span className="text-gray-500">Resume review service</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" onClick={() => alert("Processing monthly subscription...")}>
                      Subscribe Now
                    </Button>
                  </CardFooter>
                </Card>

                <Card className={`border-2 ${selectedPlan === "yearly" ? "border-primary" : "border-transparent"}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Pro Yearly</CardTitle>
                        <CardDescription>Best value for serious job seekers</CardDescription>
                      </div>
                      <Badge className="bg-green-500">Save 20%</Badge>
                    </div>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">$95.88</span>
                      <span className="text-gray-600">/year</span>
                      <div className="text-sm text-gray-500 mt-1">$7.99/month, billed annually</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Personalized job alerts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Access to top-rated companies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Priority application status</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Resume review service</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" onClick={() => alert("Processing yearly subscription...")}>
                      Subscribe Now
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </Tabs>
          </div>

          <Separator className="my-12" />

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

            <div className="max-w-3xl mx-auto space-y-6 text-left">
              <div>
                <h3 className="text-lg font-semibold mb-2">What is DevJob Pro?</h3>
                <p className="text-gray-600">
                  DevJob Pro is a premium subscription that gives you access to exclusive features and benefits to
                  enhance your job search experience and increase your chances of finding your dream job.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Can I cancel my subscription anytime?</h3>
                <p className="text-gray-600">
                  Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to
                  Pro features until the end of your billing period.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">How do personalized job alerts work?</h3>
                <p className="text-gray-600">
                  Our system analyzes your skills, experience, and preferences to send you tailored job recommendations
                  that match your profile. You'll receive these alerts via email on a daily or weekly basis, depending
                  on your settings.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely
                  through our payment gateway.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Boost Your Career?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who have accelerated their job search with DevJob Pro.
            </p>
            <Button size="lg" onClick={() => alert("Processing subscription...")}>
              Get Started with Pro
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

