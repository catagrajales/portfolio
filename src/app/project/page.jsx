/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/uSdNbvd6Z1X
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function Project() {
  return (
    (<div
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="grid grid-cols-1 gap-4">
          <Carousel className="rounded-lg overflow-hidden">
            <CarouselContent>
              <CarouselItem>
                <img
                  src="/placeholder.svg"
                  width={800}
                  height={500}
                  alt="Project Image"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "800/500", objectFit: "cover" }} />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/placeholder.svg"
                  width={800}
                  height={500}
                  alt="Project Image"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "800/500", objectFit: "cover" }} />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/placeholder.svg"
                  width={800}
                  height={500}
                  alt="Project Image"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "800/500", objectFit: "cover" }} />
              </CarouselItem>
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
            <DialogContent className="max-w-4xl">
              <div className="grid grid-cols-1 gap-4">
                <img
                  src="/placeholder.svg"
                  width={1200}
                  height={800}
                  alt="Project Image"
                  className="w-full h-auto object-cover rounded-lg"
                  style={{ aspectRatio: "1200/800", objectFit: "cover" }} />
                <img
                  src="/placeholder.svg"
                  width={1200}
                  height={800}
                  alt="Project Image"
                  className="w-full h-auto object-cover rounded-lg"
                  style={{ aspectRatio: "1200/800", objectFit: "cover" }} />
                <img
                  src="/placeholder.svg"
                  width={1200}
                  height={800}
                  alt="Project Image"
                  className="w-full h-auto object-cover rounded-lg"
                  style={{ aspectRatio: "1200/800", objectFit: "cover" }} />
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Acme Website Redesign</h1>
            <p className="text-muted-foreground mt-2">
              A complete overhaul of the Acme Inc. website, including a modern design, improved user experience, and
              integration with their e-commerce platform.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Technologies Used</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
              <Badge variant="outline">GraphQL</Badge>
              <Badge variant="outline">Prisma</Badge>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Company Involvement</h2>
            <p className="mt-2">
              Acme Inc. hired our agency to lead the entire website redesign project, from initial planning and design
              to development and deployment.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Project Scope</h2>
            <p className="mt-2">
              Our team was responsible for the complete redesign and development of the Acme Inc. website, including the
              homepage, product pages, shopping cart, and checkout process.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Live Website</h2>
            <Link href="#" className="inline-flex items-center gap-2 mt-2" prefetch={false}>
              <LinkIcon className="w-5 h-5" />
              <span>acme.com</span>
            </Link>
          </div>
        </div>
      </div>
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
