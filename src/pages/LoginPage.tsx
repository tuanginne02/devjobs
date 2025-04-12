"use client"

import type React from "react"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff, Mail, Lock, AlertCircle, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import Header from "../components/header"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/components/ui/use-toast"
import { useTheme } from "@/components/theme-provider"
import Logo from "@/assets/logo.png"
import LogoDark from "@/assets/logoDark.png"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [showLockedAccountDialog, setShowLockedAccountDialog] = useState(false)
  const [lockedUserId, setLockedUserId] = useState<string | null>(null)
  // const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = useNavigate()
  const { login } = useAuth()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await login(email, password)

      if (!result.success) {
        // Check if account is locked
        if (result.user && result.user.isLocked) {
          setLockedUserId(result.user.id)
          setShowLockedAccountDialog(true)
          return
        }

        // Show error message
        toast({
          title: "Login failed",
          description: result.message || "Invalid email or password",
          variant: "destructive",
        })
        return
      }

      // Redirect to home page on successful login
      window.location.href = "/"
      // router.push("/")
    } catch (error) {
      console.error("Login error:", error)
      toast({
        title: "Login failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setError("")
  //   setIsLoading(true)

  //   // Tìm người dùng trong danh sách
  //   const user = Users.find(
  //     (user) => user.username === username && user.password === password
  //   )

  //   if (user?.status === "blocked") {
  //     setShowLockedAccountDialog(true)
  //     setIsLoading(false)
  //     return
  //   }

  //   if (user) {
  //     localStorage.setItem("isLoggedIn", "true")
  //     await new Promise((resolve) => setTimeout(resolve, 1000))
  //     window.location.href = "/"
  //   } else {
  //     setIsLoading(false)
  //     alert("Tên đăng nhập hoặc mật khẩu không đúng!")
  //   }
  // }

  const handleRestoreAccount = async () => {
    if (!lockedUserId) return

    setIsLoading(true)
    try {
      // Call API to unlock account
      const result = await fetch(`/api/accounts/${lockedUserId}/unlock`, {
        method: "POST",
      }).then((res) => res.json())

      if (result.success) {
        toast({
          title: "Account restored",
          description: "Your account has been successfully restored. You can now log in.",
        })
        setShowLockedAccountDialog(false)
        // Redirect to login page
        window.location.href = "/login"
        // router.push("/login")
      } else {
        toast({
          title: "Failed to restore account",
          description: "An error occurred while trying to restore your account. Please contact support.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error restoring account:", error)
      toast({
        title: "Failed to restore account",
        description: "An error occurred while trying to restore your account. Please contact support.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // const handleRestoreAccount = () => {
  //   console.log("Restoring account")
  //   setShowLockedAccountDialog(false)
  //   router("/") // Hoặc navigate("/") nếu bạn đang dùng useNavigate từ react-router-dom
  // }


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <div className="text-center">
            <Link to="/" className="flex items-center justify-center gap-2 mb-6">
              {theme === "dark" ? (
                <Link to="/" className="h-20 w-36">
                  <img src={LogoDark} alt="DevJob Logo" className="h-full w-full" />
                </Link>
              ) : (
                <Link to="/" className="h-20 w-36"> <img src={Logo} alt="DevJob Logo" className="h-full w-full" /></Link>
              )}
            </Link>
            <h2 className="text-3xl font-extrabold">Sign in to your account</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Or{" "}
              <Link to="/register" className="text-primary hover:underline">
                create a new account
              </Link>
            </p>
          </div>

          {/* {error && (
            <div className="bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 p-3 rounded-md flex items-start">
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )} */}

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="relative">
                <Label htmlFor="usename-address" className="sr-only">
                  usename address
                </Label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="usename-address"
                  name="usename"
                  type="text"
                  autoComplete="usename"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-gray-700 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="usename address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative">
                <Label htmlFor="password" className="sr-only">
                  Password
                </Label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-gray-700 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember-me"
                  name="remember-me"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <Label htmlFor="remember-me" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Remember me
                </Label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-primary hover:text-primary/80">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-70"
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </div>
            <Separator className="my-4">
              <span className="px-2 text-gray-500 text-sm">OR CONTINUE WITH</span>
            </Separator>
            <Button variant="outline" className="w-full" type="button">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Sign in with Google
            </Button>
          </form>
        </div>

        <AlertDialog open={showLockedAccountDialog} onOpenChange={setShowLockedAccountDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Tài khoản bị khóa</AlertDialogTitle>
              <AlertDialogDescription>Tài khoản của bạn đã bị Khóa. Khôi phục ngay</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Hủy bỏ</AlertDialogCancel>
              {/* <AlertDialogAction onClick={handleRestoreAccount}>Xác nhận</AlertDialogAction> */}
              <AlertDialogAction onClick={handleRestoreAccount} disabled={isLoading}>
                {isLoading ? "Đang xử lý..." : "Xác nhận"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </main >
    </div >
  )
}

export default LoginPage
