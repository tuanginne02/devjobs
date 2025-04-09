import type { User } from "../data/users"
import { rolePermissions } from "./roles"

// Check if a user has a specific permission
export const hasPermission = (user: User, permission: keyof typeof rolePermissions.USER): boolean => {
  if (!user) {
    return false
  }

  return rolePermissions[user.role][permission]
}

// Check if a user can manage a specific company
export const canManageCompany = (user: User, companyId: string): boolean => {
  if (!user) {
    return false
  }

  // Admins can manage any company
  if (user.role === "ADMIN") {
    return true
  }

  // HR users can only manage their assigned company
  if (user.role === "HR" && user.companyId === companyId) {
    return true
  }

  return false
}

// Check if a user can manage a specific job
export const canManageJob = (user: User, jobCompanyId: string): boolean => {
  if (!user) {
    return false
  }

  // Admins can manage any job
  if (user.role === "ADMIN") {
    return true
  }

  // HR users can only manage jobs from their assigned company
  if (user.role === "HR" && user.companyId === jobCompanyId) {
    return true
  }

  return false
}

// Check if a user can view applications
export const canViewApplications = (user: User, jobCompanyId: string): boolean => {
  return canManageJob(user, jobCompanyId)
}
