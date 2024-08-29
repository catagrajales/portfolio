import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getProjects } from "@/services/projects"

export default async function Project({params}) {
  const project = await getProjects(params.projectId)

  return (
    (<div
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {project && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="grid grid-cols-1 gap-4">
              <Carousel className="rounded-lg overflow-hidden">
                <CarouselContent>
                  {project.images && project.images.length ? project.images.map((image, key) => (
                    <CarouselItem key={key}>
                      <img
                        src={image}
                        width={800}
                        height={500}
                        alt="Project Image"
                        className="w-full h-auto object-cover"
                        style={{ aspectRatio: "800/500", objectFit: "cover" }} />
                    </CarouselItem>
                  )) : null}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="link" className="justify-start">
                    <MaximizeIcon className="w-5 h-5 mr-2" />
                    View full gallery
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl px-16 py-6">
                  <Carousel className="rounded-lg overflow-visible" autoplay={false}>
                    <CarouselContent>
                      {project.images && project.images.length ? project.images.map((image, key) => (
                        <CarouselItem key={key}>
                          <img
                            src={image}
                            width={1200}
                            height={800}
                            alt="Project Image"
                            className="w-full h-auto object-cover rounded-lg my-4"
                            style={{ aspectRatio: "1200/800", objectFit: "cover" }} />
                        </CarouselItem>
                      )) : null}
                    </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                </DialogContent>
              </Dialog>
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{project.name}</h1>
                <p className="text-muted-foreground mt-2">
                  {project.description}
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Technologies Used</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.languages && project.languages.length ? project.languages.map((language, key) => (
                    <Badge key={key} variant="outline">{language}</Badge>
                  )) : null}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Company</h2>
                <p className="mt-2">{project.company} - {project.year}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">How I Contributed to the Project</h2>
                <p className="mt-2">{project.participation}</p>
              </div>
              {project.link && (<div>
                <h2 className="text-xl font-semibold">Live Website</h2>
                <a href={project.link} target="_blank" className="inline-flex items-center gap-2 mt-2">
                  <LinkIcon className="w-5 h-5" />
                  <span>{project.link}</span>
                </a>
              </div>)}
            </div>
          </div>
        )}
    </div>)
  );
}

function LinkIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>)
  );
}


function MaximizeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>)
  );
}
