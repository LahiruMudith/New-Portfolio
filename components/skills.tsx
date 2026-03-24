"use client"

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const skillCategories = [
  {
    title: "Languages",
    direction: "left",
    skills: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", url: "https://www.java.com/en/" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", url: "https://www.python.org/" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    direction: "right",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev/" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org/en" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", url: "https://expressjs.com/" },
      { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", url: "https://spring.io/" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com/" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", url: "https://getbootstrap.com/" },
    ]
  },
  {
    title: "Databases & Tools",
    direction: "left",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://www.mysql.com/" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg", url: "https://www.mongodb.com/" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com/" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", url: "https://www.postman.com/" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com/" },
    ]
  },
  {
    title: "IDEs & Design",
    direction: "right",
    skills: [
      { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg", url: "https://www.jetbrains.com/idea/" },
      { name: "PyCharm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg", url: "https://www.jetbrains.com/pycharm/" },
      { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg", url: "https://developer.android.com/studio" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", url: "https://www.figma.com/" },
      { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg", url: "https://en.wikipedia.org/wiki/Adobe_Photoshop" },
      { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg", url: "https://www.canva.com/" },
    ]
  }
];

export function Skills() {
    const { ref, isVisible } = useScrollAnimation(0.2)

    return (
        <section id="skills" ref={ref} className="py-24 bg-background overflow-hidden relative">
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
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                        Skills & Technologies
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A showcase of the programming languages, frameworks, and tools I use to build modern, scalable, and beautiful applications.
                    </p>
                </div>

                <div className="flex flex-col gap-10 max-w-[100vw]">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className={`marquee-container relative flex flex-col gap-4 transition-all duration-1000 delay-[200ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
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
                        </div>
                    ))}
                </div>
            </div>

            {/* Background glowing orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />
        </section>
    )
}
