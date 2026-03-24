"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap, Award, Users, ExternalLink, Calendar } from "lucide-react"
import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { educationData, extraCurricularData, certificatesData } from "@/data/portfolio"

export function About() {
  const [activeTab, setActiveTab] = useState<"education" | "extracurricular" | "certificates">("education")

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <AnimatedSection delay={0} direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My educational journey, beyond-classroom activities, and professional certifications.
          </p>
        </AnimatedSection>

        {/* Custom Pill Tabs */}
        <AnimatedSection delay={0.2} direction="up" className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === "education" 
                  ? "bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] shadow-primary/30" 
                  : "bg-primary/5 text-muted-foreground hover:bg-primary/10 hover:text-foreground border border-border/50"
              }`}
          >
            <GraduationCap className="h-4 w-4" />
            Education
          </button>
          <button
              onClick={() => setActiveTab("extracurricular")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === "extracurricular" 
                  ? "bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] shadow-primary/30" 
                  : "bg-primary/5 text-muted-foreground hover:bg-primary/10 hover:text-foreground border border-border/50"
              }`}
          >
            <Users className="h-4 w-4" />
            Extra-Curricular
          </button>
          <button
              onClick={() => setActiveTab("certificates")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === "certificates" 
                  ? "bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] shadow-primary/30" 
                  : "bg-primary/5 text-muted-foreground hover:bg-primary/10 hover:text-foreground border border-border/50"
              }`}
          >
            <Award className="h-4 w-4" />
            Certificates
          </button>
        </AnimatedSection>

        {/* TAB CONTENTS */}
        <div className="min-h-[400px]">
          {/* EDUCATION */}
          {activeTab === "education" && (
            <div className="grid md:grid-cols-3 gap-6">
              {educationData.map((item, index) => (
                <AnimatedSection delay={0.3 + (index * 0.1)} direction="up" key={index} className="h-full">
                  <Card className="group relative overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500 h-full p-8 flex flex-col items-center text-center gap-6">
                    <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-4 flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-inner">
                      <img
                        src={item.logo || "/placeholder.svg"}
                        alt={item.institution}
                        className="w-full h-full object-contain drop-shadow-md"
                      />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-400 transition-all duration-300">
                        {item.institution}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* EXTRA-CURRICULAR */}
          {activeTab === "extracurricular" && (
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {extraCurricularData.map((item, index) => (
                <AnimatedSection delay={0.3 + (index * 0.1)} direction="up" key={index} className="h-full">
                  <Card className="group relative overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500 h-full p-6 lg:p-8 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                        <Users className="h-5 w-5" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-primary/5 text-muted-foreground border border-border/50">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-400 transition-all duration-300">
                        {item.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-primary/80 mb-4">{item.organization}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                      {item.description}
                    </p>
                  </Card>
                </AnimatedSection>
              ))}
              
              {extraCurricularData.length === 0 && (
                <div className="col-span-2 text-center py-20 text-muted-foreground">
                    <p>No extra-curricular activities added yet.</p>
                </div>
              )}
            </div>
          )}

          {/* CERTIFICATES */}
          {activeTab === "certificates" && (
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {certificatesData.map((item, index) => (
                <AnimatedSection delay={0.3 + (index * 0.1)} direction="up" key={index} className="h-full">
                  <Card className="group relative overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500 h-full flex flex-col sm:flex-row items-center sm:items-stretch gap-0">
                    {/* Badge/Icon Section */}
                    <div className="w-full sm:w-1/3 bg-muted/30 p-6 flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-border/50 group-hover:bg-primary/5 transition-colors duration-500">
                        <Award className="w-12 h-12 text-primary/50 mb-3 group-hover:text-primary group-hover:scale-110 transition-all duration-500 drop-shadow-lg" />
                        <span className="text-xs font-bold text-muted-foreground bg-background px-3 py-1 rounded-full shadow-sm">{item.date}</span>
                    </div>
                    {/* Details Section */}
                    <div className="p-6 sm:w-2/3 flex flex-col justify-center flex-grow text-center sm:text-left space-y-3">
                        <div>
                            <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-400 transition-all duration-300 mb-1">
                                {item.title}
                            </h3>
                            <p className="text-sm font-medium text-primary/80">{item.issuer}</p>
                        </div>
                        {item.url && (
                          <div className="pt-2">
                             <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors">
                                View Credential <ExternalLink className="w-3 h-3" />
                             </a>
                          </div>
                        )}
                    </div>
                  </Card>
                </AnimatedSection>
              ))}

              {certificatesData.length === 0 && (
                <div className="col-span-2 text-center py-20 text-muted-foreground">
                    <p>No certificates added yet.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
