"use client"

import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronDown, Briefcase, Building, FileText, Star, MenuIcon, Shield, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTheme } from "@/components/theme-provider"
import { Moon, Sun } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import Logo from "@/assets/logo.png"
import LogoDark from "@/assets/logoDark.png"


const Header = () => {
  const [jobId, setJobId] = useState<number | null>(null);
  const [userRole, setUserRole] = useState("USER") // Can be USER, HR, PRO, ADMIN
  const { user, isAuthenticated, logout, hasPermission } = useAuth()
  const location = useLocation();
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const storedJobId = localStorage.getItem("selectedJobId");
    setJobId(Number(storedJobId));
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  const getInitials = () => {
    if (!user) return "U"
    return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`
  }

  return (
    <header className="bg-white shadow-sm dark:bg-gray-900">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          {theme === "dark" ? (
            <Link to="/" className="h-20 w-36">
              <img src={LogoDark} alt="DevJob Logo" className="h-full w-full" />
            </Link>
          ) : (
            <Link to="/" className="h-20 w-36"> <img src={Logo} alt="DevJob Logo" className="h-full w-full" /></Link>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 gap-6">
            {/* Companies  */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={isActive("/companies") ? "text-primary" : ""}  >
                  <Building className="mr-2 h-4 w-4" />
                  Companies
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>

                <DropdownMenuItem>
                  <Link
                    to="/companies"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Browse Companies
                  </Link>
                </DropdownMenuItem>
                {isAuthenticated && hasPermission("manageCompany") && (
                  <DropdownMenuItem>
                    <Link to="/companies/manage" className="w-full">
                      Manage Company
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem>
                  <Link
                    to="/companies/top"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Top Companies
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {isAuthenticated && !hasPermission("accessProFeatures") && (
              <Link to="/pro">
                <Button variant="outline" className="gap-2">
                  <Star className="h-4 w-4" />
                  Go Pro
                </Button>
              </Link>
            )}
            {/* Job  */}
            <div className="relative group">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={isActive("/jobs") ? "text-primary" : ""}
                  // onClick={() => setIsJobOpen(!isJobOpen)}
                  >
                    <Briefcase className="mr-2 h-4 w-4" />
                    Jobs
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link
                      to="/jobs"
                      className="w-full"
                    >
                      Browse Jobs
                    </Link>
                  </DropdownMenuItem>
                  {isAuthenticated && hasPermission("applyToJobs") && (
                    <DropdownMenuItem>
                      <Link to={`/jobs/${jobId}/apply`} className="w-full">
                        Applied Jobs
                      </Link>
                    </DropdownMenuItem>
                  )}
                  {isAuthenticated && hasPermission("saveJobs") && (
                    <DropdownMenuItem>
                      <Link to={`/jobs/${jobId}/apply/success`} className="w-full">
                        Saved Jobs
                      </Link>
                    </DropdownMenuItem>
                  )}
                  {isAuthenticated && hasPermission("postJobs") && (
                    <DropdownMenuItem>
                      <Link to="/jobs/post" className="w-full">
                        Post a Job
                      </Link>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>

          {/* Auth Buttons or User Menu  */}
          <div className="flex items-center gap-2">
            {/* {isLoggedIn ? ( */}
            {isAuthenticated ? (
              //  Profile 
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar>
                      <AvatarImage
                        src={user?.profileImage || "/placeholder.svg?height=40&width=40"}
                        alt={user?.firstName || "User"}
                      />
                      <AvatarFallback>{getInitials()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    {user?.firstName} {user?.lastName}
                    <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      {user?.role === "ADMIN" && <Shield className="h-3 w-3" />}
                      {user?.role === "HR" && <Building className="h-3 w-3" />}
                      {user?.role === "PRO" && <Star className="h-3 w-3" />}
                      {user?.role}
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {hasPermission("accessDashboard") && (
                    <DropdownMenuItem>
                      <Link to="/dashboard" className="w-full">
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem>
                    <Link to="/profile" className="w-full">
                      My Profile
                    </Link>
                  </DropdownMenuItem>
                  {hasPermission("saveJobs") && (
                    <DropdownMenuItem>
                      <Link to="/jobs/saved" className="w-full">
                        Saved Jobs
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => logout()}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  to="/login"
                >
                  <Button variant="ghost"> Sign In</Button>
                </Link>
                <Link to="/register">
                  <Button>Register</Button>
                </Link>
              </div>
            )}
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            {/* Mobile menu button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <MenuIcon className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>DevJob</SheetTitle>
                  <SheetDescription>Find your dream developer job</SheetDescription>
                </SheetHeader>
                {/* Companies  */}
                <DropdownMenu>
                  {/* <div className="relative group"> */}
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={isActive("/companies") ? "text-primary" : ""}  >
                      <Building className="mr-2 h-4 w-4" />
                      Companies
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  {/* {isCompanyOpen && ( */}
                  <DropdownMenuContent
                  // className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10"
                  >
                    {/* <div className="py-1"> */}
                    <DropdownMenuItem>
                      <Link
                        to="/companies"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        Search Companies
                      </Link>
                    </DropdownMenuItem>
                    {userRole === "HR" && (
                      <DropdownMenuItem>
                        <Link to="/companies/manage" className="w-full">
                          Manage Company
                        </Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem>
                      <Link
                        to="/companies/top"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        Top Companies
                      </Link>
                    </DropdownMenuItem>
                    {/* </div> */}
                  </DropdownMenuContent>
                  {/* )} */}
                  {/* </div> */}
                </DropdownMenu>
                <div className="grid gap-4 py-4">
                  {/* Resume  */}
                  {isAuthenticated && hasPermission("manageResumes") && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className={isActive("/resumes") ? "text-primary" : ""}>
                          <FileText className="mr-2 h-4 w-4" />
                          Resumes & CV
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Link to="/resumes" className="w-full">
                            My Resumes
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to="/resumes/upload" className="w-full">
                            Upload Resume
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                    // Pro
                  {isAuthenticated && !hasPermission("accessProFeatures") && (
                    <DropdownMenu >
                      <DropdownMenuTrigger>
                        {userRole !== "PRO" && (
                          <Link to="/pro">
                            <Button variant="outline" className="gap-2">
                              <Star className="h-4 w-4" />
                              Go Pro
                            </Button>
                          </Link>
                        )}
                      </DropdownMenuTrigger>
                    </DropdownMenu>
                  )}
                 // Job
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={isActive("/jobs") ? "text-primary" : ""}
                      // onClick={() => setIsJobOpen(!isJobOpen)}
                      >
                        <Briefcase className="mr-2 h-4 w-4" />
                        Jobs
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {/* {isJobOpen && ( */}
                      {/* <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10"> */}
                      {/* <div className="py-1"> */}
                      <DropdownMenuItem>
                        <Link
                          to="/jobs"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                          Browse Jobs
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          to={`/jobs/${jobId}/apply`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                          Applied Jobs
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          to={`/jobs/${jobId}/apply/success`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                          Saved Jobs
                        </Link>
                      </DropdownMenuItem>
                      {/* </div> */}
                      {/* </div> */}
                      {/* )} */}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {isAuthenticated && (
                    <Link to="/profile" className="flex items-center gap-2 py-2">
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                  )}
                  {isAuthenticated && hasPermission("accessDashboard") && (
                    <Link to="/dashboard" className="flex items-center gap-2 py-2">
                      <Shield className="h-4 w-4" />
                      Dashboard
                    </Link>
                  )}
                  {isAuthenticated && (
                    <Button variant="ghost" className="justify-start px-2" onClick={() => logout()}>
                      Logout
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header >
  )
}

export default Header
