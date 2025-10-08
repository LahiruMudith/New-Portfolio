"use client"

export function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      url: "https://www.java.com/en/",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      url: "https://react.dev/",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      url: "https://nodejs.org/en",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      url: "https://www.mysql.com/",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      url: "https://git-scm.com/",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      url: "https://tailwindcss.com/",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      url: "https://getbootstrap.com/",
    },
    {
      name: "Canva",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
      url: "https://www.canva.com/",
    },
    {
      name: "IntelliJ IDEA",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
      url: "https://www.jetbrains.com/idea/",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      url: "https://code.visualstudio.com/",
    },
  ]

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {skills.map((skill, index) => (
              <a
                key={index}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300">
                  <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="w-12 h-12" />
                </div>
                <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
