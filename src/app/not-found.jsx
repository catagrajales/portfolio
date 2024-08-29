"use client";

import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NotFoundPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="w-full py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                404 - Page Not Found
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Oops! The page you're looking for doesn't exist or has been moved.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <div className="flex justify-center">
                <Image
                  src="/page-not-found.webp?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Not found illustration"
                  className="rounded-lg"
                />
              </div>
              <div className="flex justify-center">
                <Button asChild>
                  <Link href="/">
                    <Search className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}