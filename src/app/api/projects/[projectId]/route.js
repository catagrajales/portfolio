import { projects } from "../projects";
import { NextResponse } from'next/server';

export async function GET(request, { params }) {
  try {
    const { projectId } = params;

    const project = projects.find((project) => project.id === parseInt(projectId));

    if(!project) {
      return NextResponse.json(
        { success: false, message: 'Project not found' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, data: project },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 400 }
    );
  }
}