import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRightIcon } from "@/components/ui/icons"
import { getProjects } from "@/services/projects"

export const Projects = async () => {

	const projects = await getProjects()

	return (
		<section className="mt-12">
			<h2 className="text-2xl font-bold mb-4">Projects</h2>
			<Carousel className="w-full max-w-5xl">
				<CarouselContent>
					<CarouselItem>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{projects?.map((project) => (
								<Card key={project.id}>
									<CardContent>
										<img
											src="/placeholder.svg"
											alt="Proyecto 1"
											className="rounded-t-lg w-full h-48 object-cover"
											width="300"
											height="200"
											style={{ aspectRatio: "300/200", objectFit: "cover" }} />
										<div className="p-4">
											<h3 className="text-xl font-bold mb-2">Proyecto 1</h3>
											<p className="text-[#333333]">Descripción del Proyecto 1</p>
											<Link
												href="#"
												className="inline-flex items-center mt-4 text-[#008F8C] hover:underline"
												prefetch={false}>
												Open details
												<ArrowRightIcon className="ml-1 w-4 h-4" />
											</Link>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</CarouselItem>
					{/* <CarouselItem>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							<Card>
								<CardContent>
									<img
										src="/placeholder.svg"
										alt="Proyecto 4"
										className="rounded-t-lg w-full h-48 object-cover"
										width="300"
										height="200"
										style={{ aspectRatio: "300/200", objectFit: "cover" }} />
									<div className="p-4">
										<h3 className="text-xl font-bold mb-2">Proyecto 4</h3>
										<p className="text-[#333333]">Descripción del Proyecto 4</p>
										<Link
											href="#"
											className="inline-flex items-center mt-4 text-[#008F8C] hover:underline"
											prefetch={false}>
											Open details
											<ArrowRightIcon className="ml-1 w-4 h-4" />
										</Link>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent>
									<img
										src="/placeholder.svg"
										alt="Proyecto 5"
										className="rounded-t-lg w-full h-48 object-cover"
										width="300"
										height="200"
										style={{ aspectRatio: "300/200", objectFit: "cover" }} />
									<div className="p-4">
										<h3 className="text-xl font-bold mb-2">Proyecto 5</h3>
										<p className="text-[#333333]">Descripción del Proyecto 5</p>
										<Link
											href="#"
											className="inline-flex items-center mt-4 text-[#008F8C] hover:underline"
											prefetch={false}>
											Open details
											<ArrowRightIcon className="ml-1 w-4 h-4" />
										</Link>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent>
									<img
										src="/placeholder.svg"
										alt="Proyecto 6"
										className="rounded-t-lg w-full h-48 object-cover"
										width="300"
										height="200"
										style={{ aspectRatio: "300/200", objectFit: "cover" }} />
									<div className="p-4">
										<h3 className="text-xl font-bold mb-2">Proyecto 6</h3>
										<p className="text-[#333333]">Descripción del Proyecto 6</p>
										<Link
											href="#"
											className="inline-flex items-center mt-4 text-[#008F8C] hover:underline"
											prefetch={false}>
											Open details
											<ArrowRightIcon className="ml-1 w-4 h-4" />
										</Link>
									</div>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
					<CarouselItem>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							<Card>
								<CardContent>
									<img
										src="/placeholder.svg"
										alt="Proyecto 7"
										className="rounded-t-lg w-full h-48 object-cover"
										width="300"
										height="200"
										style={{ aspectRatio: "300/200", objectFit: "cover" }} />
									<div className="p-4">
										<h3 className="text-xl font-bold mb-2">Proyecto 7</h3>
										<p className="text-[#333333]">Descripción del Proyecto 7</p>
										<Link
											href="#"
											className="inline-flex items-center mt-4 text-[#008F8C] hover:underline"
											prefetch={false}>
											Open details
											<ArrowRightIcon className="ml-1 w-4 h-4" />
										</Link>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent>
									<img
										src="/placeholder.svg"
										alt="Proyecto 8"
										className="rounded-t-lg w-full h-48 object-cover"
										width="300"
										height="200"
										style={{ aspectRatio: "300/200", objectFit: "cover" }} />
									<div className="p-4">
										<h3 className="text-xl font-bold mb-2">Proyecto 8</h3>
										<p className="text-[#333333]">Descripción del Proyecto 8</p>
										<Link
											href="#"
											className="inline-flex items-center mt-4 text-[#008F8C] hover:underline"
											prefetch={false}>
											Open details
											<ArrowRightIcon className="ml-1 w-4 h-4" />
										</Link>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent>
									<img
										src="/placeholder.svg"
										alt="Proyecto 9"
										className="rounded-t-lg w-full h-48 object-cover"
										width="300"
										height="200"
										style={{ aspectRatio: "300/200", objectFit: "cover" }} />
									<div className="p-4">
										<h3 className="text-xl font-bold mb-2">Proyecto 9</h3>
										<p className="text-[#333333]">Descripción del Proyecto 9</p>
										<Link
											href="#"
											className="inline-flex items-center mt-4 text-[#008F8C] hover:underline"
											prefetch={false}>
											Open details
											<ArrowRightIcon className="ml-1 w-4 h-4" />
										</Link>
									</div>
								</CardContent>
							</Card>
						</div>
					</CarouselItem> */}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	)
}