"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Briefcase } from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function About() {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education")
  const { ref, isVisible } = useScrollAnimation(0.1)

  const educationData = [
    {
      institution: "Sri Sumangala College",
      logo: "https://res.cloudinary.com/dkidles6w/image/upload/v1760334328/sri-sumangala-college_ngofw4.png",
      description:
        "This is the school I went to from Grade 1 to Grade 11. My favourite subject in school was IT. I sat for my Ordinary Level exam in this school during the academic year of 2022/2023.",
    },
    {
      institution: "IJSE",
      logo: "https://www.ijse.lk/images/logos/ijse.png",
      description:
        "I am currently studying computer science at this institution. I finished the 1st semester with grateful marks.",
    },
    {
      institution: "ACPT",
      logo: "https://res.cloudinary.com/dkidles6w/image/upload/v1760334489/321101988_622362146315346_3812943533011512853_n_db1qa6.jpg",
      description:
        "I studied at ACPT. I finished APJD (Advanced Professional Java Developer) and APWD (Advanced Professional Web Developer).",
    },
  ]

  return (
    <section id="about" ref={ref} className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg">My educational journey and professional experience</p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-16">
            <Button
              variant={activeTab === "education" ? "default" : "outline"}
              onClick={() => setActiveTab("education")}
              className="rounded-full px-8"
            >
              <GraduationCap className="mr-2 h-4 w-4" />
              Education
            </Button>
            <Button
              variant={activeTab === "experience" ? "default" : "outline"}
              onClick={() => setActiveTab("experience")}
              className="rounded-full px-8"
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Experience
            </Button>
          </div>

          {/* Timeline Section */}
          {activeTab === "education" ? (
            <div className="relative space-y-12">
              {/* Vertical Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block -translate-x-1/2" />

              {educationData.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center justify-center gap-8 transition-all duration-700 delay-[${index * 150}ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Right/Left empty space for balancing */}
                  <div className="hidden md:block flex-1" />

                  {/* Circular Icon/Logo Wrapper */}
                  <div className="relative z-10 flex-shrink-0 w-24 h-24 rounded-full border-4 border-background bg-card shadow-md flex items-center justify-center overflow-hidden p-4 md:mx-8">
                    <img
                      src={item.logo || "/placeholder.svg"}
                      alt={item.institution}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Text Content */}
                  <div className={`flex-1 flex flex-col items-center text-center ${index % 2 === 0 ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{item.institution}</h3>
                    <p className="text-muted-foreground leading-relaxed md:max-w-md">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={`flex items-center justify-center min-h-[300px] transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <Card className="p-12 text-center bg-card border-dashed">
                <Briefcase className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                <h3 className="text-xl font-medium text-foreground mb-1">No Work Experience</h3>
                <p className="text-muted-foreground">Currently focused on my studies and personal projects.</p>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}