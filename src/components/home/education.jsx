import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { AwardIcon } from "@/components/ui/icons"

export const Education = () => {
	return (
		<section className="mt-12">
			<h2 className="text-2xl font-bold mb-4">Certificates & Education</h2>
			<Carousel className="w-full">
				<CarouselContent>
					<CarouselItem>
						<div className="grid grid-cols-2 gap-4">
							<Card>
								<CardContent>
									<div className="flex items-center mb-4">
										<AwardIcon className="w-8 h-8 text-[#008F8C]" />
										<div className="ml-4">
											<h3 className="text-lg font-bold">Certificado en Desarrollo Web</h3>
											<p className="text-[#333333]">Udemy, 2020</p>
										</div>
									</div>
									<p className="text-[#333333]">
										Certificado en desarrollo web full-stack, incluyendo tecnologías como HTML, CSS, JavaScript,
										React, Node.js y más.
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent>
									<div className="flex items-center mb-4">
										<AwardIcon className="w-8 h-8 text-[#008F8C]" />
										<div className="ml-4">
											<h3 className="text-lg font-bold">Licenciatura en Ingeniería Informática</h3>
											<p className="text-[#333333]">Universidad Tecnológica, 2018</p>
										</div>
									</div>
									<p className="text-[#333333]">
										Licenciatura en Ingeniería Informática con especialización en Desarrollo de Software.
									</p>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	)
}