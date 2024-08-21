import { references } from "./references";
import { NextResponse } from'next/server';

export async function GET() {
  try {
    return NextResponse.json(
      { success: true, data: references },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 400 }
    );
  }
}