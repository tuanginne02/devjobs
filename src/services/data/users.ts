export type UserRole = "USER" | "HR" | "PRO" | "ADMIN"

export interface User {
  id: string
  email: string
  password: string // In a real app, this would be hashed
  firstName: string
  lastName: string
  role: UserRole
  isLocked: boolean
  companyId?: string // Only for HR users
  createdAt: Date
  updatedAt: Date
  lastLogin?: Date
  profileImage?: string
}

// Mock user data
export const users: User[] = [
  {
    id: "usr_1",
    email: "admin@devjob.com",
    password: "admin123",
    firstName: "Admin",
    lastName: "User",
    role: "ADMIN",
    isLocked: false,
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-01"),
    profileImage: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "usr_2",
    email: "hr@techcorp.com",
    password: "hr123",
    firstName: "Sarah",
    lastName: "Johnson",
    role: "HR",
    companyId: "comp_1", // TechCorp
    isLocked: false,
    createdAt: new Date("2023-01-15"),
    updatedAt: new Date("2023-01-15"),
    profileImage: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "usr_3",
    email: "hr@datasoft.com",
    password: "hr123",
    firstName: "Michael",
    lastName: "Chen",
    role: "HR",
    companyId: "comp_2", // DataSoft
    isLocked: false,
    createdAt: new Date("2023-02-01"),
    updatedAt: new Date("2023-02-01"),
    profileImage: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "usr_4",
    email: "john@example.com",
    password: "user123",
    firstName: "John",
    lastName: "Doe",
    role: "USER",
    isLocked: false,
    createdAt: new Date("2023-02-15"),
    updatedAt: new Date("2023-02-15"),
    profileImage: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "usr_5",
    email: "jane@example.com",
    password: "user123",
    firstName: "Jane",
    lastName: "Smith",
    role: "USER",
    isLocked: false,
    createdAt: new Date("2023-03-01"),
    updatedAt: new Date("2023-03-01"),
    profileImage: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "usr_6",
    email: "pro@example.com",
    password: "pro123",
    firstName: "Alex",
    lastName: "Taylor",
    role: "PRO",
    isLocked: false,
    createdAt: new Date("2023-03-15"),
    updatedAt: new Date("2023-03-15"),
    profileImage: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "usr_7",
    email: "locked@example.com",
    password: "locked123",
    firstName: "Locked",
    lastName: "User",
    role: "USER",
    isLocked: true,
    createdAt: new Date("2023-04-01"),
    updatedAt: new Date("2023-04-01"),
    profileImage: "/placeholder.svg?height=200&width=200",
  },
]

// Get user by email
export const getUserByEmail = (email: string): User | undefined => {
  return users.find((user) => user.email === email)
}

// Get user by ID
export const getUserById = (id: string): User | undefined => {
  return users.find((user) => user.id === id)
}
