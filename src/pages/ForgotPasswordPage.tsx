"use client"

import type React from "react"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Headers from "@/components/header"
import { Briefcase, Mail, ArrowLeft } from "lucide-react"
import Footer from "@/components/footer"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [step, setStep] = useState<"email" | "verification" | "reset">("email")
  const [verificationCode, setVerificationCode] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const router = useNavigate()

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call to send verification code
    setTimeout(() => {
      setIsSubmitting(false)
      setStep("verification")
    }, 1500)
  }

  const handleVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call to verify code
    setTimeout(() => {
      setIsSubmitting(false)
      setStep("reset")
    }, 1500)
  }

  const handleResetSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match")
      return
    }

    setIsSubmitting(true)

    // Simulate API call to reset password
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Password has been reset successfully")
      router("/login")
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Headers />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <Link to="/" className="flex items-center justify-center gap-2 mb-6">
              <Briefcase className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">DevJob</span>
            </Link>
            <CardTitle className="text-2xl">Reset Your Password</CardTitle>
            <CardDescription>
              {step === "email" && "Enter your email to receive a verification code"}
              {step === "verification" && "Enter the verification code sent to your email"}
              {step === "reset" && "Create a new password for your account"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === "email" && (
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
  
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Verification Code"}
                </Button>
              </form>
            )}
  
            {step === "verification" && (
              <form onSubmit={handleVerificationSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="verification-code">Verification Code</Label>
                  <Input
                    id="verification-code"
                    type="text"
                    placeholder="Enter 6-digit code"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    required
                  />
                  <p className="text-sm text-gray-600">A verification code has been sent to {email}</p>
                </div>
  
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Verifying..." : "Verify Code"}
                </Button>
              </form>
            )}
  
            {step === "reset" && (
              <form onSubmit={handleResetSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input
                    id="new-password"
                    type="password"
                    placeholder="••••••••"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
  
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
  
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Resetting..." : "Reset Password"}
                </Button>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            {step !== "email" && (
              <Button
                // variant="ghost"
                onClick={() => setStep(step === "verification" ? "email" : "verification")}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to {step === "verification" ? "Email" : "Verification"}
              </Button>
            )}
            {step === "email" && (
              <Link to="/login" className="text-sm text-primary hover:underline">
                Back to Login
              </Link>
            )}
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  )
}

