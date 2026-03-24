"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { projectFilterCategories, projectsData } from "@/data/portfolio"

export function Projects() {
    const [activeCategory, setActiveCategory] = useState("All")

    const filteredProjects = projectsData.filter(project => 
        activeCategory === "All" || project.category === activeCategory
    )

    return (
        <section id="projects" className="py-24 bg-background relative overflow-hidden">
            {/* Background glowing orbs */}
            <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-40 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                <AnimatedSection delay={0} direction="up" className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A curated collection of my recent work, showcasing my problem-solving skills and technical expertise across various domains.
                    </p>
                </AnimatedSection>

                {/* Category Filter Tabs */}
                <AnimatedSection delay={0.2} direction="up" className="flex flex-wrap items-center justify-center gap-3 mb-12">
                    {projectFilterCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                activeCategory === category 
                                ? "bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] shadow-primary/30" 
                                : "bg-primary/5 text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                    </AnimatedSection>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 grid-flow-row-dense">
                    {filteredProjects.map((project, index) => {
                        // Project 0 and 3 are large bento featured cards
                        const isFeatured = index === 0 || index === 3;
                        
                        return (
                            <AnimatedSection delay={0.3 + (index * 0.1)} direction="up" key={`${project.title}-${activeCategory}`} className={isFeatured ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-1"}>
                            <Card
                                className={`group relative overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500 flex flex-col justify-between h-full`}
                            >
                                {/* Background Project Number Watermark */}
                                <div className="absolute -bottom-6 -right-4 text-[120px] font-black text-muted/10 z-0 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110">
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                <div className="flex flex-col h-full z-10">
                                    {/* Image Section */}
                                    <div className={`relative overflow-hidden ${isFeatured ? "h-64 sm:h-80" : "h-52 sm:h-60"}`}>
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
                                        <img
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        />
                                        
                                        {/* Tech Pill (floating on image) */}
                                        <div className="absolute top-4 right-4 z-20">
                                            <span className="inline-block px-3 py-1.5 rounded-full bg-primary/20 backdrop-blur-md text-primary border border-primary/30 text-xs font-semibold tracking-wide shadow-lg">
                                                {project.tech}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Content Section */}
                                    <div className="p-6 flex flex-col flex-grow justify-between gap-6">
                                        <div className="space-y-3">
                                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                                <Badge variant="secondary" className="bg-primary/10 text-primary border-none hover:bg-primary/20">
                                                    {project.category}
                                                </Badge>
                                            </div>
                                            <h3 className={`font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-400 transition-all duration-300 ${isFeatured ? "text-2xl sm:text-3xl" : "text-xl"}`}>
                                                {project.title}
                                            </h3>
                                            <p className={`text-muted-foreground leading-relaxed ${isFeatured ? "text-base sm:text-lg" : "text-sm line-clamp-3"}`}>
                                                {project.description}
                                            </p>
                                        </div>
                                        
                                        {/* Action Buttons */}
                                        <div className="pt-2 flex flex-wrap gap-3">
                                            <Button asChild variant="outline" className="group/btn relative overflow-hidden border-primary/20 hover:border-primary/50 bg-transparent hover:bg-primary/10 transition-all duration-300">
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                                    <GithubIcon className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                                                    <span className="font-semibold">View Source</span>
                                                    <ExternalLink className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                                                </a>
                                            </Button>

                                            {project.liveUrl && (
                                                <Button asChild className="group/live relative overflow-hidden shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300">
                                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                                        <Globe className="w-4 h-4 transition-transform group-hover/live:spin-slow" />
                                                        <span className="font-semibold">View Site</span>
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            </AnimatedSection>
                        )
                    })}
                </div>
                
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-muted-foreground">
                        <p>No projects found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    )
}