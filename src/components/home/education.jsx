import { getCertificates } from "@/services/certificates"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { AwardIcon } from "@/components/ui/icons"

export const Education = async () => {
	const certificatesChunks = await getCertificates()

	return (
		<section className="mt-12">
			<h2 className="text-2xl font-bold mb-4">Certificates & Education</h2>
			<Carousel className="w-full">
				<CarouselContent>
					{certificatesChunks && certificatesChunks.length ? certificatesChunks.map((chunk, key) => (
						<CarouselItem key={key}>
							<div className="grid grid-cols-2 gap-4">
								{ chunk && chunk.length ? chunk.map((certificate) => (
									<Card key={certificate.id}>
										<CardContent>
											<div className="flex items-center mb-4">
												<AwardIcon className="w-8 h-8 text-[#008F8C]" />
												<div className="ml-4">
													<h3 className="text-lg font-bold line-clamp-1" title={certificate.title}>{certificate.title}</h3>
													<p className="text-[#333333]">{certificate.organization}, {certificate.formatted_date}</p>
												</div>
											</div>
											<p className="text-[#333333] line-clamp-3" title={certificate.description}>
												{certificate.description}
											</p>
										</CardContent>
									</Card>
								)) : null }
							</div>
						</CarouselItem>
					)) : null}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	)
}