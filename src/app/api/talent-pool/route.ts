import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Mock API - Talent Pool Subscription Received:", data);
    
    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to the Talent Pool (Mock API).",
      timestamp: new Date().toISOString(),
      email: data.email
    });
  } catch (error) {
    console.error("Mock API - Talent Pool Error:", error);
    return NextResponse.json({
      success: false,
      message: "Invalid subscription payload."
    }, { status: 400 });
  }
}
