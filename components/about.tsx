"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Briefcase } from "lucide-react"
import { useState } from "react"

export function About() {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education")

  const educationData = [
    {
      institution: "Sri Sumangala College",
      logo: "/traditional-schoolhouse.png",
      description:
        "This is the school I went to from Grade 1 to Grade 11. My favourite subject in school was IT. I sat for my Ordinary Level exam in this school during the academic year of 2022/2023.",
    },
    {
      institution: "IJSE",
      logo: "/ijse.jpg",
      description:
        "I am currently studying computer science at this institution. I finished the 1st semester with grateful marks.",
    },
    {
      institution: "ACPT",
      logo: "/acpt.jpg",
      description:
        "I studied at ACPT. I finished APJD (Advanced Professional Java Developer) and APWD (Advanced Professional Web Developer).",
    },
  ]

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My educational journey and professional experience
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant={activeTab === "education" ? "default" : "outline"}
              onClick={() => setActiveTab("education")}
              className="min-w-[140px]"
            >
              <GraduationCap className="mr-2 h-4 w-4" />
              Education
            </Button>
            <Button
              variant={activeTab === "experience" ? "default" : "outline"}
              onClick={() => setActiveTab("experience")}
              className="min-w-[140px]"
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Experience
            </Button>
          </div>

          {activeTab === "education" ? (
            <div className="grid md:grid-cols-3 gap-6">
              {educationData.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-card">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-32 h-32 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                      <img
                        src={item.logo || "/placeholder.svg"}
                        alt={item.institution}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{item.institution}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-[400px]">
              <Card className="p-12 text-center bg-card">
                <Briefcase className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">No Work Experience</h3>
                <p className="text-muted-foreground">Currently focused on education and building projects</p>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
