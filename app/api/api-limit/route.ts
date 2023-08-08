import { NextResponse } from "next/server";

import { increaseApiLimit } from "@/lib/actions/userApiLimit.action";

export async function GET(req: Request) {
  try {
    await increaseApiLimit();
    return NextResponse.json({ success: true})
  } catch (error) {
    console.log("🚀 ~ file: route.ts:9 ~ GET ~ error:", error)
    return new NextResponse('Internal error', { status: 500 })
  }
}