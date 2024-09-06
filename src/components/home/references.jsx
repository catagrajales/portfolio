import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { getReferences } from "@/services/references"

export const References = async () => {
	const referencesChunks = await getReferences()

	return (
		<section className="mt-12">
			<h2 className="text-2xl font-bold mb-4">References</h2>
			<Carousel className="w-full">
				<CarouselContent>
					{
						referencesChunks && referencesChunks.length ? referencesChunks.map((chunk, key) => (
							<CarouselItem key={key}>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									{chunk && chunk.length ? chunk.map((reference, key) => (
										<Card key={key}>
											<CardContent>
												<div className="flex items-center mb-4">
													<Avatar>
														<AvatarImage src="/placeholder-user.png" />
														<AvatarFallback>{reference.name}</AvatarFallback>
													</Avatar>
													<div className="ml-4">
														<h3 className="text-lg font-bold">{reference.name}</h3>
														<p className="text-[#333333]">{reference.position}, {reference.company}</p>
													</div>
												</div>
												<p className="text-[#333333] line-clamp-3" title={reference.description}>
													{reference.description}
												</p>
											</CardContent>
										</Card>
									)) : null}
								</div>
							</CarouselItem>
						))
					: null
					}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>

			<p className="text-sm text-gray-500 mt-4">*References taken from LinkedIn</p>
		</section>
	)
}