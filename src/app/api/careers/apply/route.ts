import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const portfolio = formData.get("portfolio") as string;
    const cover = formData.get("cover") as string;
    const resume = formData.get("resume") as File | null;
    
    console.log("Mock API - Job Application Received:", {
      name,
      email,
      portfolio,
      cover,
      resumeName: resume ? resume.name : "None",
      resumeSize: resume ? resume.size : 0
    });
    
    return NextResponse.json({
      success: true,
      message: "Application submitted successfully (Mock API).",
      timestamp: new Date().toISOString(),
      data: {
        name,
        email,
        portfolio,
        cover,
        resumeName: resume ? resume.name : "None"
      }
    });
  } catch (error) {
    console.error("Mock API - Job Application Error:", error);
    return NextResponse.json({
      success: false,
      message: "Error processing job application form data."
    }, { status: 400 });
  }
}
