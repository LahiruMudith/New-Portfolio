"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ChevronUp, ChevronDown } from "lucide-react"
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"

export function Projects() {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.2)

    const [showAll, setShowAll] = useState(false)

    const projects = [
        {
            title: "Election Management System",
            description:
                "A comprehensive platform for modern election administration. This system facilitates secure voter registration, candidate profiling, precise results tabulation, and robust audit trails. It provides real-time progress updates, enables multi-factor authentication for administrators, and visualizes historical voting patterns. Voter data privacy is a central tenet.",
            tech: "React, Spring Boot, MySQL, Cloudinary, JWT, Tailwind CSS",
            github: "https://github.com/YourUsername/election-management-system.git",
            image: "/election-management-ui.png",
        },
        {
            title: "MERN Stack E-Commerce Site",
            description:
                "A specialized e-commerce platform for premium sewing machines and expert repair services. The system features secure user authentication via JWT tokens and implements Role-Based Access Control (RBAC) to distinguish between customer shopping experiences and administrative inventory management. It includes a responsive product catalog, a 'Pro Series' showcase, and an integrated showroom booking system.",
            tech: "React, Node.js, MongoDB, Express, JWT, Tailwind CSS, PayHere, SendMail, Cloudinary",
            github: "https://github.com/LahiruMudith/mack-trading-fn.git",
            live: "https://your-demo-link.com",
            image: "/mack-trading-ui.png",
        },
        {
            title: "Python Group Word",
            description:
                "A collaborative text editing application for teams. This web-based solution supports real-time concurrent editing, version history, inline commenting, and robust user role permissions. It features integrated Python-based text analysis tools for grammar, sentiment, and keyword extraction. Secure document storage is provided.",
            tech: "Python, Pandas, NumPy, Matplotlib",
            github: "https://github.com/YourUsername/python-group-word.git",
            image: "/python-project.png",
        },
        {
            title: "Gravity Flip Game",
            description:
                "A fast-paced puzzle platformer game. The core mechanic revolves around the player's ability to invert gravity at will to navigate complex, vertical, and horizontal obstacle-laden levels. Features include intuitive controls, procedural level generation for infinite replayability, online leaderboards, and multiple game modes. It challenges player spatial reasoning.",
            tech: "React Native, Expo, Firebase, Cloudinary",
            github: "https://github.com/YourUsername/gravity-flip.git",
            image: "/gravity-flip-game.png",
        },
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

    const visibleProjects = showAll ? projects : projects.slice(0, 4)

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Each card follows the other
            },
        },
    }

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    }

    return (
        <section id="projects" className="py-12 sm:py-20 bg-muted/30 overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header Animation */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }} // once: false makes it repeat
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground">Hand-crafted solutions and experiments</p>
                </motion.div>

                {/* The Showering Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }} // Trigger whenever section is visible
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {visibleProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout // Smoothly moves existing cards when list expands
                                variants={cardVariants}
                                // These handle the "Show All" click animations
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, scale: 0.9 }}
                            >
                                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full flex flex-col border-none bg-background/50 backdrop-blur-sm">
                                    <div className="relative h-52 overflow-hidden">
                                        <img
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow space-y-4">
                                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground line-clamp-3">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.split(', ').map((t) => (
                                                <Badge key={t} variant="secondary" className="bg-primary/10 text-primary border-none text-[10px]">
                                                    {t}
                                                </Badge>
                                            ))}
                                        </div>
                                        <div className="pt-4 mt-auto">
                                            <Button asChild variant="outline" size="sm" className="rounded-full gap-2 group-hover:bg-primary group-hover:text-white transition-all">
                                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                    <Github className="h-4 w-4" /> Source Code
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Interaction Button */}
                <motion.div
                    layout
                    className="mt-16 flex justify-center"
                >
                    <Button
                        onClick={() => setShowAll(!showAll)}
                        variant="ghost"
                        className="group relative flex items-center justify-center gap-2 text-lg font-medium hover:bg-transparent"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            {showAll ? "View Less" : "Explore All"}
                            {showAll ? <ChevronUp className="h-5 w-5 animate-bounce" /> : <ChevronDown className="h-5 w-5 animate-bounce" />}
                        </span>
                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}