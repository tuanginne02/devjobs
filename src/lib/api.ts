import {
    login as serverLogin,
    register as serverRegister,
    unlockAccount as serverUnlockAccount,
    getUserById,
    getCompanyById,
    getActiveCompanies,
    getJobById,
    getJobsByCompanyId,
    getActiveJobs,
    getFeaturedJobs,
    hasPermission,
    canManageCompany,
    canManageJob,
} from "@/services/index"

// Update to use the types from api-types.ts
import type { User } from "./api-types"

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Simulate localStorage for persisting auth state
const AUTH_TOKEN_KEY = "devjob_auth_token"
const USER_ID_KEY = "devjob_user_id"

// Auth API
export const api = {
    // Auth methods
    auth: {
        async login(email: string, password: string) {
            // Simulate network delay
            await delay(800)

            const result = serverLogin(email, password)

            if (result.success && result.user) {
                // Store auth data in localStorage
                localStorage.setItem(AUTH_TOKEN_KEY, `fake-token-${result.user.id}`)
                localStorage.setItem(USER_ID_KEY, result.user.id)
            }

            return result
        },

        async register(userData: { email: string; password: string; firstName: string; lastName: string }) {
            // Simulate network delay
            await delay(1000)

            const result = serverRegister(userData)

            if (result.success && result.user) {
                // Store auth data in localStorage
                localStorage.setItem(AUTH_TOKEN_KEY, `fake-token-${result.user.id}`)
                localStorage.setItem(USER_ID_KEY, result.user.id)
            }

            return result
        },

        async logout() {
            // Simulate network delay
            await delay(300)

            // Clear auth data from localStorage
            localStorage.removeItem(AUTH_TOKEN_KEY)
            localStorage.removeItem(USER_ID_KEY)

            return { success: true }
        },

        async getCurrentUser(): Promise<User | null> {
            // Simulate network delay
            await delay(300)

            const userId = localStorage.getItem(USER_ID_KEY)
            if (!userId) return null

            const user = getUserById(userId)
            return user || null
        },

        async unlockAccount(userId: string) {
            // Simulate network delay
            await delay(800)

            const success = serverUnlockAccount(userId)
            return { success }
        },

        isAuthenticated(): boolean {
            return !!localStorage.getItem(AUTH_TOKEN_KEY)
        },

        hasPermission(user: User | null, permission: string): boolean {
            if (!user) return false
            return hasPermission(user, permission as any)
        },

        canManageCompany(user: User | null, companyId: string): boolean {
            if (!user) return false
            return canManageCompany(user, companyId)
        },

        canManageJob(user: User | null, jobCompanyId: string): boolean {
            if (!user) return false
            return canManageJob(user, jobCompanyId)
        },
    },

    // Jobs API
    jobs: {
        async getAll() {
            await delay(500)
            return getActiveJobs()
        },

        async getFeatured() {
            await delay(300)
            return getFeaturedJobs()
        },

        async getById(id: string) {
            await delay(300)
            return getJobById(id)
        },

        async getByCompany(companyId: string) {
            await delay(400)
            return getJobsByCompanyId(companyId)
        },

        async search(params: {
            title?: string
            location?: string
            type?: string[]
            experience?: string[]
            level?: string[]
            salaryRange?: [number, number]
        }) {
            await delay(600)

            let jobs = getActiveJobs()

            // Filter by title
            if (params.title) {
                const titleLower = params.title.toLowerCase()
                jobs = jobs.filter(
                    (job) => job.title.toLowerCase().includes(titleLower) || job.description.toLowerCase().includes(titleLower),
                )
            }

            // Filter by location
            if (params.location) {
                const locationLower = params.location.toLowerCase()
                jobs = jobs.filter((job) => job.location.toLowerCase().includes(locationLower))
            }

            // Filter by job type
            if (params.type && params.type.length > 0) {
                jobs = jobs.filter((job) => params.type!.includes(job.type))
            }

            // Filter by experience level
            if (params.level && params.level.length > 0) {
                jobs = jobs.filter((job) => params.level!.includes(job.experienceLevel))
            }

            // Filter by salary range
            if (params.salaryRange) {
                const [min, max] = params.salaryRange
                jobs = jobs.filter((job) => {
                    // Extract min and max salary from range string like "$2000 - $3500"
                    const salaryMatch = job.salaryRange.match(/\$(\d+)\s*-\s*\$(\d+)/)
                    if (salaryMatch) {
                        const jobMin = Number.parseInt(salaryMatch[1])
                        const jobMax = Number.parseInt(salaryMatch[2])
                        return jobMax >= min && jobMin <= max
                    }
                    return true
                })
            }

            return jobs
        },

        async apply(jobId: string, data: { resumeId: string; coverLetter?: string }) {
            await delay(1000)
            // In a real app, this would submit the application to the server
            return { success: true, applicationId: `app_${Date.now()}` }
        },
    },

    // Companies API
    companies: {
        async getAll() {
            await delay(500)
            return getActiveCompanies()
        },

        async getById(id: string) {
            await delay(300)
            return getCompanyById(id)
        },

        async search(params: { name?: string; location?: string }) {
            await delay(600)

            let companies = getActiveCompanies()

            // Filter by name
            if (params.name) {
                const nameLower = params.name.toLowerCase()
                companies = companies.filter(
                    (company) =>
                        company.name.toLowerCase().includes(nameLower) || company.description.toLowerCase().includes(nameLower),
                )
            }

            // Filter by location
            if (params.location) {
                const locationLower = params.location.toLowerCase()
                companies = companies.filter((company) => company.location.toLowerCase().includes(locationLower))
            }

            return companies
        },
    },
}
