"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Lock,
  Upload,
  Plus,
  Trash2,
  Edit,
} from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal-info")
  const [showPasswordDialog, setShowPasswordDialog] = useState(false)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // Mock user data
  const userData = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+84 123 456 789",
    location: "Ho Chi Minh City, Vietnam",
    birthDate: "1990-01-15",
    bio: "Experienced software developer with a passion for creating innovative solutions. Specialized in frontend development with React and Next.js.",
    skills: ["JavaScript", "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
    education: [
      {
        id: 1,
        degree: "Bachelor of Computer Science",
        institution: "Vietnam National University",
        year: "2010 - 2014",
      },
      {
        id: 2,
        degree: "Master of Information Technology",
        institution: "Ho Chi Minh City University of Technology",
        year: "2015 - 2017",
      },
    ],
    experience: [
      {
        id: 1,
        position: "Senior Frontend Developer",
        company: "TechCorp",
        duration: "2019 - Present",
        description: "Leading the frontend development team, implementing new features, and optimizing performance.",
      },
      {
        id: 2,
        position: "Frontend Developer",
        company: "WebStudio",
        duration: "2017 - 2019",
        description: "Developed responsive web applications using React and collaborated with the design team.",
      },
      {
        id: 3,
        position: "Junior Web Developer",
        company: "DigitalSolutions",
        duration: "2014 - 2017",
        description: "Built and maintained client websites, implemented responsive designs, and fixed bugs.",
      },
    ],
  }

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault()

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match")
      return
    }

    // Simulate password change
    console.log("Changing password:", { currentPassword, newPassword })
    setShowPasswordDialog(false)
    alert("Password changed successfully")
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">{userData.firstName} {userData.lastName}</h2>
                  <p className="text-gray-600 mt-1">Senior Frontend Developer</p>

                  <div className="mt-4 w-full">
                    <Button className="w-full">
                      <Upload className="h-4 w-4 mr-2" />
                      Change Photo
                    </Button>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-500" />
                    <span className="text-sm">{userData.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-500" />
                    <span className="text-sm">{userData.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <span className="text-sm">{userData.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <span className="text-sm">{userData.birthDate}</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <h3 className="font-medium">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {userData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:w-2/3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="personal-info">
                  <User className="h-4 w-4 mr-2" />
                  Personal Info
                </TabsTrigger>
                <TabsTrigger value="experience">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Experience
                </TabsTrigger>
                <TabsTrigger value="education">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Education
                </TabsTrigger>
                <TabsTrigger value="security">
                  <Lock className="h-4 w-4 mr-2" />
                  Security
                </TabsTrigger>
              </TabsList>

              <TabsContent value="personal-info">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Update your personal information and contact details
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" defaultValue={userData.firstName} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" defaultValue={userData.lastName} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue={userData.email} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue={userData.phone} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" defaultValue={userData.location} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="birth-date">Birth Date</Label>
                      <Input id="birth-date" type="date" defaultValue={userData.birthDate} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <textarea
                        id="bio"
                        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        defaultValue={userData.bio}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Skills</Label>
                      <div className="flex flex-wrap gap-2">
                        {userData.skills.map((skill, index) => (
                          <div
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs flex items-center"
                          >
                            {skill}
                            <Button className="ml-2">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                        <button className="px-3 py-1 border border-dashed border-gray-300 rounded-full text-xs flex items-center text-gray-500 hover:text-gray-700">
                          <Plus className="h-3 w-3 mr-1" />
                          Add Skill
                        </button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="experience">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Work Experience</CardTitle>
                        <CardDescription>
                          Add your work experience to showcase your skills
                        </CardDescription>
                      </div>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Experience
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {userData.experience.map((exp) => (
                        <div key={exp.id} className="border rounded-lg p-4 relative">
                          <div className="absolute top-4 right-4 flex gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <h3 className="font-semibold text-lg">{exp.position}</h3>
                          <div className="flex items-center gap-2 mt-1 text-gray-600">
                            <Briefcase className="h-4 w-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <p className="mt-3 text-gray-700">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Education</CardTitle>
                        <CardDescription>
                          Add your educational background
                        </CardDescription>
                      </div>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Education
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {userData.education.map((edu) => (
                        <div key={edu.id} className="border rounded-lg p-4 relative">
                          <div className="absolute top-4 right-4 flex gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <h3 className="font-semibold text-lg">{edu.degree}</h3>
                          <div className="flex items-center gap-2 mt-1 text-gray-600">
                            <GraduationCap className="h-4 w-4" />
                            <span>{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.year}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>
                      Manage your account security and password
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">Password</h3>
                          <p className="text-sm text-gray-600">Change your account password</p>
                        </div>
                        <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
                          <DialogTrigger asChild>
                            <Button>Change Password</Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Change Password</DialogTitle>
                              <DialogDescription>
                                Enter your current password and a new password to update your account security.
                              </DialogDescription>
                            </DialogHeader>
                            <form onSubmit={handlePasswordChange} className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="current-password">Current Password</Label>
                                <Input
                                  id="current-password"
                                  type="password"
                                  value={currentPassword}
                                  onChange={(e) => setCurrentPassword(e.target.value)}
                                  required
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="new-password">New Password</Label>
                                <Input
                                  id="new-password"
                                  type="password"
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
                                  value={confirmPassword}
                                  onChange={(e) => setConfirmPassword(e.target.value)}
                                  required
                                />
                              </div>
                              <DialogFooter>
                                <Button type="button" variant="outline" onClick={() => setShowPasswordDialog(false)}>
                                  Cancel
                                </Button>
                                <Button type="submit">Update Password</Button>
                              </DialogFooter>
                            </form>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">Account Status</h3>
                          <p className="text-sm text-gray-600">Temporarily lock your account</p>
                        </div>
                        <Button variant="outline">Lock Account</Button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-red-600">Danger Zone</h3>
                          <p className="text-sm text-gray-600">Permanently delete your account</p>
                        </div>
                        <Button variant="destructive">Delete Account</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
