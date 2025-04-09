import { NextResponse } from "next/server"
import { unlockAccount } from "@/services/auth/auth-service"

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const userId = params.id
    const success = unlockAccount(userId)

    if (!success) {
      return NextResponse.json({ success: false, message: "Failed to unlock account" }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error unlocking account:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
