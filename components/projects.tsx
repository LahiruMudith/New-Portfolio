"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Projects() {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.2)

    const projects = [
        {
            title: "Fitness Center Management System",
            description:
                "This system can manage members, schedules, diet plans, and employees. It can mark member fees, send email confirmations, and view payment, schedule, and diet plan reports. Member phone numbers and email addresses are validated.",
            tech: "JavaFX",
            github: "https://github.com/LahiruMudith/1st-sem-final-project.git",
            image: "/fitness-app-interface.png",
        },
        {
            title: "Therapy Center Management System",
            description:
                "This system can manage members, schedules, diet plans, and employees. It can mark member fees, send email confirmations, and view payment, schedule, and diet plan reports.",
            tech: "JavaFX",
            github: "https://github.com/LahiruMudith/mind-balance-center.git",
            image: "/serene-therapy-center.png",
        },
        {
            title: "Maths Class Fee Mark Application",
            description:
                "This application can manage students, mark fees and work, and copy messages to the clipboard indicating whether a student's homework is done or not. A simple application created using JavaFX.",
            tech: "JavaFX",
            github: "https://github.com/LahiruMudith/MathsClassFeesMarkApp.git",
            image: "/education-app-interface.png",
        },
        {
            title: "Vehicle Rental System",
            description:
                "This application allows you to manage customers and vehicles, handle vehicle rentals, and close rental transactions.",
            tech: "JavaFX",
            github: "https://github.com/LahiruMudith/apjd-final-project.git",
            image: "/car-rental-agency.png",
        },
        {
            title: "Sri Lanka NIC Validation System",
            description:
                "Sri Lankan NIC validator with support for old NIC formats, showing the person's birthday and gender.",
            tech: "React + Vite",
            github: "https://github.com/LahiruMudith/apwd-nic-project.git",
            image: "/validation-form.jpg",
        },
        {
            title: "Library Management System",
            description: "With this application, you can easily manage books, students, and book transactions.",
            tech: "JavaFX",
            github: "https://github.com/LahiruMudith/apjd-library-project.git",
            image: "/library-system.jpg",
        },
        {
            title: "Commercial Bank Website Clone",
            description:
                "Created a clone of Sri Lanka Commercial Bank website using HTML, CSS, and JavaScript with Bootstrap framework.",
            tech: "Bootstrap",
            github: "https://github.com/LahiruMudith/new-apwd-secound-project.git",
            image: "/bank-website.jpg",
        },
        {
            title: "Tic Tac Toe Game",
            description:
                "This game is a simple tic-tac-toe game that can be played by two players: one human player and one computer player.",
            tech: "Java",
            github: "https://github.com/LahiruMudith/Tic-Tac-Toe.git",
            image: "/tic-tac-toe.jpg",
        },
    ]


    return (
        <section id="projects" ref={ref} className="py-8 sm:py-16 bg-muted/30">
            <div className="container mx-auto px-2 max-w-xs sm:max-w-2xl md:max-w-6xl">
                <div>
                    <div
                        className={`text-center mb-6 sm:mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
                        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">Featured Projects</h2>
                        <p className="text-xs sm:text-base text-muted-foreground max-w-xs sm:max-w-2xl mx-auto">
                            A collection of projects I've built to solve real-world problems
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                className={`overflow-hidden group hover:shadow-xl transition-all duration-700 ${
                                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                                style={{ transitionDelay: `${200 + index * 100}ms` }}
                            >
                                <div className="relative h-32 sm:h-48 bg-muted overflow-hidden">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                                </div>
                                <div className="p-3 sm:p-6 space-y-2 sm:space-y-4">
                                    <div className="space-y-1 sm:space-y-2">
                                        <div className="flex items-start justify-between gap-2 sm:gap-4">
                                            <h3 className="text-base sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <Badge variant="secondary" className="text-[10px] sm:text-xs">{project.tech}</Badge>
                                        </div>
                                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>
                                    </div>
                                    <div className="flex items-center gap-1 sm:gap-2">
                                        <Button asChild variant="outline" size="sm" className="text-[10px] sm:text-xs px-2 sm:px-4 py-1 sm:py-2">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="mr-1 sm:mr-2 h-3 sm:h-4 w-3 sm:w-4" />
                                                View Code
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}