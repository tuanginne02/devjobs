// Create a types file to avoid circular dependencies
import type { User } from "@/services/data/users"
import type { Company } from "@/services/data/companies"
import type { Job } from "@/services/data/jobs"

export type { User, Company, Job }
