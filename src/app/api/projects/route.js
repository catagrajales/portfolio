import { projects } from "./projects";
import { NextResponse } from'next/server';

export async function GET(req) {
  try {
    const projectsData = projects.map((project) => {
      return {
        id: project.id,
        name: project.name,
        year: project.year,
        company: project.company,
        languages: project.languages,
        short_description: project.short_description,
        image: project.images[0]
      };
    });
    return NextResponse.json(
      { success: true, data: projectsData },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 400 }
    );
  }
}