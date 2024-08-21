import { certificates } from "./certificates";
import { NextResponse } from'next/server';

export async function GET() {
  try {
    const transformedData = certificates.map((certificate) => {
      return {
        ...certificate,
        formatted_date: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short' }).format(new Date(certificate.date))
    }});
    return NextResponse.json(
      { success: true, data: transformedData },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 400 }
    );
  }
}