"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  BarChart,
  Users,
  Briefcase,
  Building,
  FileText,
  Tag,
  Mail,
  MoreVertical,
  Plus,
  Trash2,
  Edit,
  Search,
  RefreshCw,
} from "lucide-react"

// Mock data for users
const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "USER", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "HR", status: "Active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "PRO", status: "Active" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "USER", status: "Locked" },
  { id: 5, name: "Charlie Davis", email: "charlie@example.com", role: "ADMIN", status: "Active" },
]

// Mock data for companies
const mockCompanies = [
  { id: 1, name: "TechCorp", location: "Ho Chi Minh City", employees: "500-1000", status: "Active" },
  { id: 2, name: "DataSoft", location: "Hanoi", employees: "200-500", status: "Active" },
  { id: 3, name: "CreativeMinds", location: "Da Nang", employees: "50-200", status: "Deleted" },
  { id: 4, name: "CloudTech", location: "Ho Chi Minh City", employees: "100-300", status: "Active" },
  { id: 5, name: "AppWorks", location: "Hanoi", employees: "50-100", status: "Active" },
]

// Mock data for jobs
const mockJobs = [
  { id: 1, title: "Senior Frontend Developer", company: "TechCorp", location: "Ho Chi Minh City", status: "Active" },
  { id: 2, title: "Backend Engineer", company: "DataSoft", location: "Hanoi", status: "Active" },
  { id: 3, title: "UI/UX Designer", company: "CreativeMinds", location: "Da Nang", status: "Deleted" },
  { id: 4, title: "DevOps Engineer", company: "CloudTech", location: "Ho Chi Minh City", status: "Active" },
  { id: 5, title: "Mobile Developer", company: "AppWorks", location: "Hanoi", status: "Active" },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("users")
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [showAddDialog, setShowAddDialog] = useState(false)

  const handleSelectItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id))
    } else {
      setSelectedItems([...selectedItems, id])
    }
  }

  const handleSelectAll = (items: any[]) => {
    if (selectedItems.length === items.length) {
      setSelectedItems([])
    } else {
      setSelectedItems(items.map((item) => item.id))
    }
  }

  const handleDeleteSelected = () => {
    alert(`Deleting items with IDs: ${selectedItems.join(", ")}`)
    setSelectedItems([])
  }

  const handleRestoreItem = (id: number) => {
    alert(`Restoring item with ID: ${id}`)
  }

  const renderEntityForm = () => {
    switch (activeTab) {
      case "users":
        return (
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <select
                id="role"
                className="flex h-10 w-full rounded-md border border-Input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="USER">User</option>
                <option value="HR">HR</option>
                <option value="PRO">Pro</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
          </div>
        )
      case "companies":
        return (
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" placeholder="TechCorp" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="Ho Chi Minh City" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="employees">Number of Employees</Label>
              <select
                id="employees"
                className="flex h-10 w-full rounded-md border border-Input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="1-50">1-50</option>
                <option value="50-100">50-100</option>
                <option value="100-300">100-300</option>
                <option value="300-500">300-500</option>
                <option value="500-1000">500-1000</option>
                <option value="1000+">1000+</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                placeholder="Company description"
                className="flex min-h-[80px] w-full rounded-md border border-Input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
        )
      case "jobs":
        return (
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="job-title">Job Title</Label>
              <Input id="job-title" placeholder="Senior Frontend Developer" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <select
                id="company"
                className="flex h-10 w-full rounded-md border border-Input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="1">TechCorp</option>
                <option value="2">DataSoft</option>
                <option value="4">CloudTech</option>
                <option value="5">AppWorks</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="job-location">Location</Label>
              <Input id="job-location" placeholder="Ho Chi Minh City" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="job-type">Job Type</Label>
              <select
                id="job-type"
                className="flex h-10 w-full rounded-md border border-Input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="freelance">Freelance</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="salary-range">Salary Range</Label>
              <Input id="salary-range" placeholder="$1500 - $3000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="job-description">Description</Label>
              <textarea
                id="job-description"
                placeholder="Job description"
                className="flex min-h-[80px] w-full rounded-md border border-Input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">567</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Job Applications</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,789</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Monthly Statistics</CardTitle>
          <p>Number of users, jobs, and applications per month</p>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
            <BarChart className="h-16 w-16 text-muted" />
            <span className="ml-2 text-muted">Chart visualization would go here</span>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="users" onClick={() => setActiveTab("users")}>
              <Users className="h-4 w-4 mr-2" />
              Users
            </TabsTrigger>
            <TabsTrigger value="companies" onClick={() => setActiveTab("companies")}>
              <Building className="h-4 w-4 mr-2" />
              Companies
            </TabsTrigger>
            <TabsTrigger value="jobs" onClick={() => setActiveTab("jobs")}>
              <Briefcase className="h-4 w-4 mr-2" />
              Jobs
            </TabsTrigger>
            <TabsTrigger value="skills" onClick={() => setActiveTab("skills")}>
              <Tag className="h-4 w-4 mr-2" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="resumes" onClick={() => setActiveTab("resumes")}>
              <FileText className="h-4 w-4 mr-2" />
              Resumes
            </TabsTrigger>
            <TabsTrigger value="subscribers" onClick={() => setActiveTab("subscribers")}>
              <Mail className="h-4 w-4 mr-2" />
              Subscribers
            </TabsTrigger>
          </TabsList>

          <div className="flex gap-2">
            <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add New
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    Add New {activeTab.slice(0, -1).charAt(0).toUpperCase() + activeTab.slice(0, -1).slice(1)}
                  </DialogTitle>
                  <DialogDescription>Fill in the details to create a new {activeTab.slice(0, -1)}.</DialogDescription>
                </DialogHeader>
                {renderEntityForm()}
                <DialogFooter>
                  <Button variant="outline" onClick={() => setShowAddDialog(false)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      alert(`Creating new ${activeTab.slice(0, -1)}`)
                      setShowAddDialog(false)
                    }}
                  >
                    Create
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {selectedItems.length > 0 && (
              <Button variant="destructive" onClick={handleDeleteSelected}>
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Selected
              </Button>
            )}
          </div>
        </div>

        <div className="mb-4 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder={`Search ${activeTab}...`}
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <TabsContent value="users" className="mt-0">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox
                        checked={selectedItems.length === mockUsers.length}
                        onCheckedChange={() => handleSelectAll(mockUsers)}
                      />
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <Checkbox

                          checked={selectedItems.includes(user.id)}
                          onCheckedChange={() => handleSelectItem(user.id)}
                        />
                      </TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }`}
                        >
                          {user.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                            {user.status === "Locked" && (
                              <DropdownMenuItem onClick={() => handleRestoreItem(user.id)}>
                                <RefreshCw className="h-4 w-4 mr-2" />
                                Restore
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="companies" className="mt-0">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox
                        checked={selectedItems.length === mockCompanies.length}
                        onCheckedChange={() => handleSelectAll(mockCompanies)}
                      />
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Employees</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <div>
                  {mockCompanies.map((company) => (
                    <TableRow key={company.id}>
                      <TableCell>
                        <Checkbox

                          checked={selectedItems.includes(company.id)}
                          onCheckedChange={() => handleSelectItem(company.id)}
                        />
                      </TableCell>
                      <TableCell>{company.name}</TableCell>
                      <TableCell>{company.location}</TableCell>
                      <TableCell>{company.employees}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${company.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }`}
                        >
                          {company.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                            {company.status === "Deleted" && (
                              <DropdownMenuItem onClick={() => handleRestoreItem(company.id)}>
                                <RefreshCw className="h-4 w-4 mr-2" />
                                Restore
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </div>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="jobs" className="mt-0">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox
                        checked={selectedItems.length === mockJobs.length}
                        onCheckedChange={() => handleSelectAll(mockJobs)}
                      />
                    </TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockJobs.map((job) => (
                    <TableRow key={job.id}>
                      <TableCell>
                        <Checkbox

                          checked={selectedItems.includes(job.id)}
                          onCheckedChange={() => handleSelectItem(job.id)}
                        />
                      </TableCell>
                      <TableCell>{job.title}</TableCell>
                      <TableCell>{job.company}</TableCell>S
                      <TableCell>{job.location}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${job.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }`}
                        >
                          {job.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                            {job.status === "Deleted" && (
                              <DropdownMenuItem onClick={() => handleRestoreItem(job.id)}>
                                <RefreshCw className="h-4 w-4 mr-2" />
                                Restore
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="mt-0">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-12">
                <Tag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Skills Management</h3>
                <p className="text-muted-foreground mb-4">Manage skills for job listings and candidate profiles</p>
                <Button onClick={() => setShowAddDialog(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Skill
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resumes" className="mt-0">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-12">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Resume Management</h3>
                <p className="text-muted-foreground mb-4">View and manage candidate resumes</p>
                <Button>
                  <Search className="h-4 w-4 mr-2" />
                  Browse Resumes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subscribers" className="mt-0">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-12">
                <Mail className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Subscriber Management</h3>
                <p className="text-muted-foreground mb-4">Manage newsletter subscribers and email campaigns</p>
                <Button>
                  <Search className="h-4 w-4 mr-2" />
                  View Subscribers
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

