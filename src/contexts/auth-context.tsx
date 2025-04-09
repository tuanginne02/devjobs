"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { api } from "@/lib/api"
import type { User } from "@/lib/api-types"

interface AuthContextType {
    user: User | null
    isLoading: boolean
    isAuthenticated: boolean
    login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>
    register: (userData: { email: string; password: string; firstName: string; lastName: string }) => Promise<{
        success: boolean
        message?: string
    }>
    logout: () => Promise<void>
    hasPermission: (permission: string) => boolean
    canManageCompany: (companyId: string) => boolean
    canManageJob: (jobCompanyId: string) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Load user on initial mount
        const loadUser = async () => {
            try {
                const currentUser = await api.auth.getCurrentUser()
                setUser(currentUser)
            } catch (error) {
                console.error("Failed to load user:", error)
            } finally {
                setIsLoading(false)
            }
        }

        loadUser()
    }, [])

    const login = async (email: string, password: string) => {
        const result = await api.auth.login(email, password)
        if (result.success && result.user) {
            setUser(result.user)
        }
        return result
    }

    const register = async (userData: { email: string; password: string; firstName: string; lastName: string }) => {
        const result = await api.auth.register(userData)
        if (result.success && result.user) {
            setUser(result.user)
        }
        return result
    }

    const logout = async () => {
        await api.auth.logout()
        setUser(null)
    }

    const hasPermission = (permission: string) => {
        return api.auth.hasPermission(user, permission)
    }

    const canManageCompany = (companyId: string) => {
        return api.auth.canManageCompany(user, companyId)
    }

    const canManageJob = (jobCompanyId: string) => {
        return api.auth.canManageJob(user, jobCompanyId)
    }

    const value = {
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        hasPermission,
        canManageCompany,
        canManageJob,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
