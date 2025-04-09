"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { FileText, Calendar, MoreVertical, Download, Edit, Trash2, Eye, Plus, Upload } from "lucide-react"


// Mock data for resumes
const mockResumes = [
  {
    id: 1,
    title: "Software Developer Resume",
    createdAt: "2023-05-15",
    updatedAt: "2023-10-20",
    applications: 12,
    fileName: "john_doe_developer_resume.pdf",
  },
  {
    id: 2,
    title: "Frontend Specialist CV",
    createdAt: "2023-08-03",
    updatedAt: "2023-11-10",
    applications: 8,
    fileName: "john_doe_frontend_cv.pdf",
  },
  {
    id: 3,
    title: "Full Stack Developer Resume",
    createdAt: "2023-09-22",
    updatedAt: "2023-09-22",
    applications: 5,
    fileName: "john_doe_fullstack_resume.pdf",
  },
]

export default function ResumesPage() {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [resumeToDelete, setResumeToDelete] = useState<number | null>(null)

  const handleDeleteClick = (resumeId: number) => {
    setResumeToDelete(resumeId)
    setShowDeleteDialog(true)
  }

  const handleDeleteConfirm = () => {
    // In a real app, this would delete the resume
    console.log("Deleting resume with ID:", resumeToDelete)
    setShowDeleteDialog(false)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">My Resumes</h1>
          <Link to="/resumes/upload">
            <Button>
              <Upload className="h-4 w-4 mr-2" />
              Upload Resume
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockResumes.map((resume) => (
            <Card key={resume.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{resume.title}</h3>
                      <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <Calendar className="h-3 w-3" />
                        <span>Updated {resume.updatedAt}</span>
                      </div>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDeleteClick(resume.id)} className="text-red-600">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">{resume.applications}</span> job applications
                  </p>
                  <p className="text-sm text-gray-600 mt-1">File: {resume.fileName}</p>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 dark:bg-gray-800 p-4 flex justify-between">
                <Button>
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                <Button>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </CardFooter>
            </Card>
          ))}

          <Card className="border-dashed">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full min-h-[250px]">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Plus className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Create New Resume</h3>
              <p className="text-sm text-gray-600 text-center mb-4">Create a new resume to apply for jobs</p>
              <Link to="/resumes/create">
                <Button>Create Resume</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Resume</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this resume? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDeleteConfirm}>
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Footer />
    </main>
  )
}

