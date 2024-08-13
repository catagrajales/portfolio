import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export const References = () => {
	return (
		<section className="mt-12">
			<h2 className="text-2xl font-bold mb-4">References</h2>
			<Carousel className="w-full">
				<CarouselContent>
					<CarouselItem>
						<div className="grid grid-cols-2 gap-4">
							<Card>
								<CardContent>
									<div className="flex items-center mb-4">
										<Avatar>
											<AvatarImage src="/placeholder-user.jpg" />
											<AvatarFallback>JD</AvatarFallback>
										</Avatar>
										<div className="ml-4">
											<h3 className="text-lg font-bold">John Doe</h3>
											<p className="text-[#333333]">CEO, Acme Inc.</p>
										</div>
									</div>
									<p className="text-[#333333]">
										"Sofía es una desarrolladora excepcional. Su trabajo es\n siempre de alta calidad y entrega los
										proyectos a tiempo.\n Recomiendo encarecidamente sus servicios."
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent>
									<div className="flex items-center mb-4">
										<Avatar>
											<AvatarImage src="/placeholder-user.jpg" />
											<AvatarFallback>JL</AvatarFallback>
										</Avatar>
										<div className="ml-4">
											<h3 className="text-lg font-bold">Jane Lowe</h3>
											<p className="text-[#333333]">Gerente de Proyecto, Mega Corp.</p>
										</div>
									</div>
									<p className="text-[#333333]">
										"Trabajar con Sofía ha sido una experiencia increíble. Su\n conocimiento técnico y su capacidad
										para resolver problemas\n han sido fundamentales para el éxito de nuestros proyectos."
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