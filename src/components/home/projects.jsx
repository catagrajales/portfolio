import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRightIcon } from "@/components/ui/icons"
import { getProjects } from "@/services/projects"

export const Projects = async () => {

	const projectsChunks = await getProjects()

	return (
		<section className="mt-12">
			<h2 className="text-2xl font-bold mb-4">Projects</h2>
			<Carousel className="w-full max-w-5xl">
				<CarouselContent>
					{
						projectsChunks && projectsChunks.length ? projectsChunks.map((chunk, key) => (
							<CarouselItem key={key}>
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
									{chunk && chunk.length ? chunk.map((project) => (
										<Card key={project.id}>
											<CardContent>
												<img
													src={project.image}
													alt={project.name}
													className="rounded-t-lg w-full h-48 object-cover"
													width="300"
													height="200"
													style={{ aspectRatio: "300/200", objectFit: "cover" }} />
												<div className="p-4">
													<h3 className="text-xl font-bold mb-2">{project.name}</h3>
													<p className="text-[#333333]">{project.short_description}</p>
													<Link
														href={`/project/${project.id}`}
														className="inline-flex items-center mt-4 text-[#008F8C] hover:underline"
														prefetch={false}>
														Open details
														<ArrowRightIcon className="ml-1 w-4 h-4" />
													</Link>
												</div>
											</CardContent>
										</Card>
									)) : null}
								</div>
							</CarouselItem>
						)) 
					: null }
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	)
}