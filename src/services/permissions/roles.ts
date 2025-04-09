import type { UserRole } from "@/services/data/users"

// Define permissions for each role
export interface RolePermissions {
    viewJobs: boolean
    applyToJobs: boolean
    saveJobs: boolean
    manageResumes: boolean
    viewCompanies: boolean
    manageCompany: boolean
    postJobs: boolean
    viewApplications: boolean
    manageUsers: boolean
    manageAllCompanies: boolean
    manageAllJobs: boolean
    accessDashboard: boolean
    accessProFeatures: boolean
}

// Define permissions for each role
export const rolePermissions: Record<UserRole, RolePermissions> = {
    USER: {
        viewJobs: true,
        applyToJobs: true,
        saveJobs: true,
        manageResumes: true,
        viewCompanies: true,
        manageCompany: false,
        postJobs: false,
        viewApplications: false,
        manageUsers: false,
        manageAllCompanies: false,
        manageAllJobs: false,
        accessDashboard: false,
        accessProFeatures: false,
    },
    HR: {
        viewJobs: true,
        applyToJobs: false, // HR users don't apply to jobs
        saveJobs: true,
        manageResumes: false, // HR users don't have personal resumes
        viewCompanies: true,
        manageCompany: true, // Can manage their own company
        postJobs: true, // Can post jobs for their company
        viewApplications: true, // Can view applications to their company's jobs
        manageUsers: false,
        manageAllCompanies: false,
        manageAllJobs: false,
        accessDashboard: true, // Limited dashboard access
        accessProFeatures: false,
    },
    PRO: {
        viewJobs: true,
        applyToJobs: true,
        saveJobs: true,
        manageResumes: true,
        viewCompanies: true,
        manageCompany: false,
        postJobs: false,
        viewApplications: false,
        manageUsers: false,
        manageAllCompanies: false,
        manageAllJobs: false,
        accessDashboard: false,
        accessProFeatures: true, // Access to premium features
    },
    ADMIN: {
        viewJobs: true,
        applyToJobs: true,
        saveJobs: true,
        manageResumes: true,
        viewCompanies: true,
        manageCompany: true,
        postJobs: true,
        viewApplications: true,
        manageUsers: true, // Can manage all users
        manageAllCompanies: true, // Can manage all companies
        manageAllJobs: true, // Can manage all jobs
        accessDashboard: true, // Full dashboard access
        accessProFeatures: true,
    },
}
