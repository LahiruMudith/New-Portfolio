"use client"

import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex justify-center mb-8 mt-[20%] md:mt-0">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <Image
                src="https://res.cloudinary.com/dkidles6w/image/upload/v1759929712/2025_05_23_14_40_IMG_4830-Enhanced-SR_pyi6at.jpg"
                alt="Lahiru Mudith"
                width={224}
                height={224}
                className="relative rounded-full object-cover border-4 border-primary/30 shadow-2xl shadow-primary/20"
                priority
              />
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-primary text-sm font-medium tracking-wider uppercase">Welcome</p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              I'm <span className="text-primary">Lahiru Mudith</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">Web Developer & IJSE Student</p>
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hello, I'm Lahiru Mudith. Student at IJSE. I craft tailored solutions for your unique needs. Let's
            collaborate to bring your web development vision to life!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="min-w-[160px]">
              <a href="#contact">Hire Me</a>
            </Button>
            <div className="flex items-center gap-4">
              <Button asChild variant="outline" size="icon">
                <a href="https://github.com/LahiruMudith" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="https://www.fiverr.com/s/38lzj79" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>100% Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Lifetime Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
