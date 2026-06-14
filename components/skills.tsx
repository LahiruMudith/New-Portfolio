"use client"

import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section"
import { skillCategories } from "@/data/portfolio"

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-background overflow-hidden relative">
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes marquee-left {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                @keyframes marquee-right {
                    from { transform: translateX(-50%); }
                    to { transform: translateX(0); }
                }
                .animate-marquee-left {
                    animation: marquee-left 30s linear infinite;
                }
                .animate-marquee-right {
                    animation: marquee-right 30s linear infinite;
                }
                .marquee-container:hover .animate-marquee-left,
                .marquee-container:hover .animate-marquee-right {
                    animation-play-state: paused;
                }
            `}} />
            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection delay={0} direction="up" className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                        Skills & Technologies
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A showcase of the programming languages, frameworks, and tools I use to build modern, scalable, and beautiful applications.
                    </p>
                </AnimatedSection>

                <div className="flex flex-col gap-10 max-w-[100vw]">
                    {skillCategories.map((category, idx) => (
                        <AnimatedSection key={idx} delay={0.2 + (idx * 0.15)} direction="up" className="marquee-container relative flex flex-col gap-4">
                            <div className="pl-4 md:pl-12 flex items-center gap-3">
                                <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold tracking-wide shadow-[0_0_15px_rgba(var(--primary),0.1)]">
                                    {category.title}
                                </span>
                            </div>
                            
                            {/* Overflow hidden wrapper for the marquee */}
                            <div className="flex overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-2">
                                <div className={`flex w-max gap-6 px-3 ${category.direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}>
                                    {/* Copy the array multiple times for seamless infinite scrolling */}
                                    {[...category.skills, ...category.skills, ...category.skills, ...category.skills, ...category.skills].map((skill, index) => (
                                        <a
                                            key={`${idx}-${index}`}
                                            href={skill.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex flex-col items-center justify-center gap-4 min-w-[150px] h-[150px] p-5 rounded-2xl bg-card border border-border/50 backdrop-blur-md hover:border-primary/50 hover:bg-muted/50 shadow-sm hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300"
                                        >
                                            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-background/50 group-hover:scale-110 group-hover:bg-background transition-all duration-500 ease-out shadow-inner">
                                                <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="w-10 h-10 object-contain drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300" />
                                            </div>
                                            <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                                {skill.name}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>

            {/* Background glowing orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />
        </section>
    )
}
