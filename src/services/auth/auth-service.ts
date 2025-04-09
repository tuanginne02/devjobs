import { type User, getUserByEmail, users } from "../data/users"

interface LoginResult {
  success: boolean
  user?: User
  message?: string
}

interface RegisterResult {
  success: boolean
  user?: User
  message?: string
}

// Mock login function
export const login = (email: string, password: string): LoginResult => {
  const user = getUserByEmail(email)

  if (!user) {
    return { success: false, message: "Invalid email or password" }
  }

  if (user.password !== password) {
    return { success: false, message: "Invalid email or password" }
  }

  if (user.isLocked) {
    return { success: false, message: "Account is locked", user }
  }

  // In a real app, we would:
  // 1. Update the last login time
  // 2. Generate a JWT token
  // 3. Set up session data

  return { success: true, user }
}

// Mock register function
export const register = (userData: {
  email: string
  password: string
  firstName: string
  lastName: string
}): RegisterResult => {
  // Check if email already exists
  const existingUser = getUserByEmail(userData.email)

  if (existingUser) {
    return { success: false, message: "Email already in use" }
  }

  // In a real app, we would:
  // 1. Validate the input data
  // 2. Hash the password
  // 3. Store the user in the database

  // Create a new user (mock implementation)
  const newUser: User = {
    id: `usr_${users.length + 1}`,
    email: userData.email,
    password: userData.password, // In a real app, this would be hashed
    firstName: userData.firstName,
    lastName: userData.lastName,
    role: "USER", // Default role for new users
    isLocked: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  // In a real app, we would add the user to the database
  // For this mock, we'll just pretend it was successful

  return { success: true, user: newUser }
}

// Mock function to unlock a user account
export const unlockAccount = (userId: string): boolean => {
  const user = users.find((u) => u.id === userId)

  if (!user) {
    return false
  }

  if (!user.isLocked) {
    return true // Already unlocked
  }

  // In a real app, we would update the user in the database
  // For this mock, we'll just pretend it was successful

  return true
}
