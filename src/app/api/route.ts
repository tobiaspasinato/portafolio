import { NextResponse } from 'next/server'

export async function GET() {
    return NextResponse.json({ message: 'papafrita' }, { status: 200 })
}

// Suppress unused vars warning for future request parameter
export const dynamic = 'force-dynamic'