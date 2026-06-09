import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Mock API - Contact Inquiry Received:", data);
    
    return NextResponse.json({
      success: true,
      message: "Strategic inquiry received successfully (Mock API).",
      timestamp: new Date().toISOString(),
      receivedData: data
    });
  } catch (error) {
    console.error("Mock API - Contact Inquiry Error:", error);
    return NextResponse.json({
      success: false,
      message: "Invalid contact inquiry payload."
    }, { status: 400 });
  }
}
