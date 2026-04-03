"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Skills() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", url: "https://www.java.com/en/" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://www.typescriptlang.org/" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", url: "https://www.python.org/" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev/" },
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", url: "https://spring.io/" },
        { name: "Spring Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", url: "https://spring.io/projects/spring-cloud" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", url: "https://expressjs.com/" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org/en" },
        { name: "JavaFX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", url: "https://openjfx.io/" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com/" },
        { name: "NativeWind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", url: "https://www.nativewind.dev/" },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", url: "https://pandas.pydata.org/" },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", url: "https://numpy.org/" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", url: "https://getbootstrap.com/" },
      ],
    },
    {
      title: "Frontend & Mobile",
      skills: [
        { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://reactnative.dev/" },
        { name: "Expo", icon: "https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg", url: "https://expo.dev/" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://www.mysql.com/" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg", url: "https://www.mongodb.com/" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", url: "https://firebase.google.com/" },
      ],
    },
    {
      title: "Backend | Tools & IDES",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com/" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", url: "https://www.docker.com/" },
        { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", url: "https://kubernetes.io/" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", url: "https://www.postman.com/" },
        { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", url: "https://vercel.com/" },
        { name: "Railway", icon: "https://cdn.simpleicons.org/railway", url: "https://railway.app/" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com/" },
        { name: "IntelliJ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg", url: "https://www.jetbrains.com/idea/" },
        { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg", url: "https://developer.android.com/studio" },
        { name: "Cursor", icon: "https://cdn.simpleicons.org/cursor", url: "https://cursor.com/" },
        { name: "Antigravity", icon: "https://cdn.simpleicons.org/googlegemini", url: "https://deepmind.google/" },
        { name: "FileZilla", icon: "https://cdn.simpleicons.org/filezilla/bf0000", url: "https://filezilla-project.org/" },
        { name: "Termius", icon: "https://cdn.simpleicons.org/termius", url: "https://termius.com/" },
        { name: "PuTTY", icon: "https://api.iconify.design/devicon:putty.svg", url: "https://www.putty.org/" },
      ],
    },
    {
      title: "Cloud",
      skills: [
        { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", url: "https://azure.microsoft.com/" },
        { name: "DigitalOcean", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg", url: "https://www.digitalocean.com/" },
        { name: "Cloudinary", icon: "https://cdn.simpleicons.org/cloudinary", url: "https://cloudinary.com/" },
      ],
    },
    {
      title: "Design & Editing",
      skills: [
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", url: "https://www.figma.com/" },
        { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg", url: "https://adobe.com/photoshop" },
        { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg", url: "https://www.canva.com/" },
        { name: "CapCut", icon: "https://api.iconify.design/hugeicons/capcut.svg", url: "https://www.capcut.com/" },
      ],
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="space-y-16">
            {skillCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${catIndex * 150}ms` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-8 border-l-4 border-primary pl-4">
                  {category.title}
                </h3>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                  {category.skills.map((skill, index) => (
                    <a
                      key={index}
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-3 transition-transform duration-300"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl bg-muted/50 group-hover:bg-muted group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-md">
                        <img
                          src={skill.icon || "/placeholder.svg"}
                          alt={skill.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      <span className="text-[10px] sm:text-xs text-center font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}