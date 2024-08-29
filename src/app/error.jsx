"use client";

import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ErrorPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Oops! Something went wrong
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We apologize for the inconvenience. Our team has been notified and is working on fixing the issue.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <div className="flex justify-center">
                <Image
                  src="/page-not-found.webp?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Error illustration"
                  className="rounded-lg"
                />
              </div>
              <div className="flex justify-center">
                <Button asChild>
                  <Link href="/">
                    <AlertCircle className="mr-2 h-4 w-4" />
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