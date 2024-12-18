export const metadata = {
  title: 'Phicycle - Small Tools, Infinite Possibilities',
  description: 'A single tool can change the way we build, think, and create. At Phicycle, we craft simple, focused products that amplify potential and celebrate the elegance of small solutions.',
  openGraph: {
    title: 'Phicycle - Small Tools, Infinite Possibilities',
    description: 'A single tool can change the way we build, think, and create. At Phicycle, we craft simple, focused products that amplify potential and celebrate the elegance of small solutions.',
    url: 'https://phicycle.com',
    siteName: 'Phicycle',
    images: [
      {
        url: 'https://res.cloudinary.com/diroilukd/image/upload/v1734484039/27de07bd-c9bc-4902-acb2-3e2f385e4a67.png',
        width: 1200,
        height: 630,
        alt: 'Phicycle - Small Tools, Infinite Possibilities'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phicycle - Small Tools, Infinite Possibilities',
    description: 'A single tool can change the way we build, think, and create. At Phicycle, we craft simple, focused products that amplify potential and celebrate the elegance of small solutions.',
    images: ['https://res.cloudinary.com/diroilukd/image/upload/v1734484039/27de07bd-c9bc-4902-acb2-3e2f385e4a67.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  }
}

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionSeparator } from "@/components/ui/section-separator"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:py-20">
        {/* Hero Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
              Small Tools,
              <br />
              Infinite Possibilities
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
              A single tool can change the way we build, think, and create. At Phicycle, we craft simple,
              focused products that amplify potential and celebrate the elegance of small solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                variant="default"
                className="bg-gradient-to-r from-zinc-800 to-zinc-900 hover:from-zinc-900 hover:to-zinc-800 border-none shadow-lg"
                id="explore-tools-button"
              >
                <Link href="#product-section">
                  Explore Our Tools
                </Link>
              </Button>
            </div>
          </div>

          {/* Decorative element remains the same */}
          <div className="flex-1 relative w-full lg:w-auto scale-80 lg:scale-100">
            <div className="floating relative w-full aspect-square">
              <div className="relative z-10 geometric-box">
                <div className="geometric-circle flex items-center justify-center">
                  <Image 
                    src="/logo.svg"
                    alt="Phicircle Logo"
                    width={180} 
                    height={180}
                    className="opacity-30 floating"
                    style={{
                      animationDuration: '10s',
                      filter: 'blur(0.5px)'
                    }}
                  />
                </div>
                <div className="geometric-shape"></div>
                <div className="geometric-shape" style={{
                  animationDelay: '-7.5s',
                  opacity: 0.7,
                  scale: '0.9'
                }}></div>
                <div className="geometric-shape" style={{
                  animationDelay: '-15s',
                  opacity: 0.4,
                  scale: '0.8'
                }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Add separator after hero */}
        <SectionSeparator />

        {/* Philosophy Section */}
        <div className="relative overflow-hidden">
          <div className="relative z-10 py-12 sm:py-24">
            {/* Section Title */}
            <div className="text-center space-y-6 mb-12 sm:mb-24">
              <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                The Power of the Small
              </h2>
              <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
                Big ideas often begin as tiny sparks. Small tools, crafted with intention,
                can transform the way we think and create.
              </p>
            </div>

            {/* Main Philosophy Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-8">
              {/* Philosophy Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 sm:mb-24">
                <div className="group relative space-y-6 p-6 sm:p-8 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800/50 overflow-hidden">
                  {/* Animated geometric background */}
                  <div className="absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-40">
                    <div className="thought-geometry">
                      {/* Floating dots */}
                      {[...Array(16)].map((_, i) => (
                        <div
                          key={i}
                          className="thought-dot"
                          style={{
                            left: `${30 + Math.random() * 40}%`,
                            top: `${30 + Math.random() * 40}%`,
                            animationDelay: `${-i * 0.5}s`,
                            opacity: 0.1 + Math.random() * 0.2
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="card-icon simplicity-icon">
                      <div className="card-icon-ring"></div>
                      <div className="card-icon-shape"></div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Intentional Simplicity</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      At Phicycle, we embrace the philosophy that less is not just more—it's meaningful.
                      Every tool we create is designed with purpose, serving as a companion for developers.
                    </p>
                  </div>
                </div>

                <div className="group relative space-y-6 p-6 sm:p-8 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800/50 overflow-hidden">
                  {/* Animated geometric background */}
                  <div className="absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-40">
                    <div className="thought-geometry">
                      {/* Floating dots */}
                      {[...Array(16)].map((_, i) => (
                        <div
                          key={i}
                          className="thought-dot"
                          style={{
                            left: `${30 + Math.random() * 40}%`,
                            top: `${30 + Math.random() * 40}%`,
                            animationDelay: `${-i * 0.5}s`,
                            opacity: 0.1 + Math.random() * 0.2
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="card-icon impact-icon">
                      <div className="card-icon-ring"></div>
                      <div className="card-icon-shape"></div>
                      <div className="card-icon-ring" style={{
                        animationDuration: '15s',
                        inset: '15%',
                        opacity: 0.15
                      }}></div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Profound Impact</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      Small tools, crafted with care, have the power to transform workflows,
                      inspire creativity, and unlock new ways of thinking.
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Beliefs */}
              <div className="space-y-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-center text-white/90">Our Core Beliefs</h3>

                <Accordion type="multiple" className="space-y-4">
                  <AccordionItem value="item-1" className="border-zinc-800/50 bg-zinc-900/30 rounded-xl px-2">
                    <AccordionTrigger className="text-lg font-medium hover:text-white text-left py-6 [&[data-state=open]>div]:text-white">
                      <div className="flex items-center gap-4">
                        <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
                        A good tool doesn't just solve problems—it opens doors.
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-400 leading-relaxed px-6 pb-8">
                      When crafted with intention, even the smallest tool can unlock new possibilities,
                      inspiring developers to think differently and build better.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border-zinc-800/50 bg-zinc-900/30 rounded-xl px-2">
                    <AccordionTrigger className="text-lg font-medium hover:text-white text-left py-6 [&[data-state=open]>div]:text-white">
                      <div className="flex items-center gap-4">
                        <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
                        Small innovations ripple outwards.
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-400 leading-relaxed px-6 pb-8">
                      Every meaningful change starts small. We believe in the compound effect of
                      thoughtful innovations that grow naturally into larger impacts.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border-zinc-800/50 bg-zinc-900/30 rounded-xl px-2">
                    <AccordionTrigger className="text-lg font-medium hover:text-white text-left py-6 [&[data-state=open]>div]:text-white">
                      <div className="flex items-center gap-4">
                        <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
                        The best tools empower, not overwhelm.
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-400 leading-relaxed px-6 pb-8">
                      Simplicity is not about reduction—it's about clarity. We craft tools that
                      feel natural in your workflow, enhancing your capabilities without adding complexity.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Featured Quote */}
              <div className="relative mt-12 sm:mt-24">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-800/50"></div>
                </div>

                <blockquote className="relative mt-6 sm:mt-12">
                  <div className="absolute -left-4 -top-4 text-4xl text-zinc-800">"</div>
                  <div className="absolute -right-4 -bottom-4 text-4xl text-zinc-800">"</div>
                  <p className="text-2xl sm:text-3xl text-center leading-relaxed font-medium bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80 px-6 sm:px-12">
                    Phicycle exists to explore this philosophy, one small idea at a time.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Add separator after philosophy */}
        <SectionSeparator />

        {/* Products Section */}
        <div className="relative overflow-hidden py-12 sm:py-24" id="product-section">
          <div className="relative z-10">
            <div className="text-center space-y-6 mb-12 sm:mb-24">
              <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Our Tools. Your Canvas.
              </h2>
              <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
                Each tool is crafted with precision, designed to solve real problems with elegance.
              </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-8">
              <div className="space-y-12 sm:space-y-16">
                {/* Pictify */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 items-center p-6 sm:p-8">
                    {/* Icon/Visual Section */}
                    <div className="md:col-span-1 flex justify-center">
                      <div className="product-icon pictify-icon w-24 h-24 relative">
                        <div className="absolute inset-0 border border-zinc-800 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                        <div className="absolute inset-0 border border-zinc-800 rounded-2xl transform -rotate-3 transition-transform group-hover:-rotate-6"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                            <Image 
                              src="/window.svg"
                              alt="Pictify Icon"
                              width={24}
                              height={24}
                              className="opacity-70"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-3 text-left space-y-4">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">Pictify</h3>
                      <p className="text-zinc-400 leading-relaxed">
                        A powerful HTML to image generation API that makes capturing and transforming web content
                        into high-quality images effortless and reliable.
                      </p>
                    </div>

                    {/* CTA Section */}
                    <div className="md:col-span-1 flex justify-center md:justify-end">
                      <Link
                        href="https://pictify.io"
                        className="inline-block px-4 py-2 text-white border border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors duration-300"
                        target="_blank"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mongoscope */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 items-center p-6 sm:p-8">
                    {/* Icon/Visual Section */}
                    <div className="md:col-span-1 flex justify-center">
                      <div className="product-icon mongoscope-icon w-24 h-24 relative">
                        <div className="absolute inset-0 border border-zinc-800 rounded-full transform scale-90 transition-transform group-hover:scale-100"></div>
                        <div className="absolute inset-0 border border-zinc-800 rounded-full transform scale-100 transition-transform group-hover:scale-110"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                            <Image 
                              src="/globe.svg"
                              alt="Mongoscope Icon"
                              width={24}
                              height={24}
                              className="opacity-70"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-3 text-left space-y-4">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">Mongoscope</h3>
                      <p className="text-zinc-400 leading-relaxed">
                        An intelligent analytics layer for MongoDB that provides deep insights
                        and powerful monitoring capabilities for your database operations.
                      </p>
                    </div>

                    {/* CTA Section */}
                    <div className="md:col-span-1 flex justify-center md:justify-end">
                      <Link
                        href="https://mongoscope.phicycle.io"
                        className="inline-block px-4 py-2 text-white border border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors duration-300"
                        target="_blank"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 sm:mt-24 text-center">
                <p className="text-zinc-500 italic text-sm tracking-wide">
                  And this is just the beginning. More tools are coming, each thoughtfully designed to make an outsized impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Add separator after products */}
        <SectionSeparator />

        {/* Footer Section */}
        <div className="relative overflow-hidden py-12 sm:py-16">
          <div className="absolute inset-0 opacity-10">
            <div className="geometric-box">
              <div className="geometric-circle" style={{ opacity: 0.05 }}></div>
              <div className="geometric-shape" style={{
                animationDuration: '40s',
                opacity: 0.1,
                scale: '2'
              }}></div>
            </div>
          </div>

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 mb-2">
                  Think small. Build big.
                </h2>
                <p className="text-zinc-400">
                  Crafted by Suyash Thakur
                </p>
              </div>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto"></div>
              <p className="text-sm text-zinc-500">
                © {new Date().getFullYear()} Phicycle. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

