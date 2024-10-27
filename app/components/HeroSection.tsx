import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() { 
  return (
    <section className="bg-gradient-to-b from-primary to-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
              Welcome to Our <span className="text-secondary">Amazing</span> Platform
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground lg:mx-0">
              Discover the power of our innovative solutions. Streamline your workflow and boost productivity with our cutting-edge tools.
            </p>
            <div className="flex justify-center gap-4 lg:justify-start">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center rounded-md bg-secondary px-5 py-3 text-base font-medium text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                Get Started
              </Link>
              <Link
                href="/learn-more"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary-foreground px-5 py-3 text-base font-medium text-primary transition-colors hover:bg-primary-foreground/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Hero image"
              width={600}
              height={600}
              className="w-full rounded-lg object-cover shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}