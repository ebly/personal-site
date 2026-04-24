"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Server } from "lucide-react";

const skills = [
  {
    icon: Globe,
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express", "Python", "PostgreSQL"],
  },
  {
    icon: Database,
    title: "Database",
    items: ["MongoDB", "PostgreSQL", "Redis", "Prisma"],
  },
  {
    icon: Code,
    title: "Tools",
    items: ["Git", "Docker", "AWS", "Vercel"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Turning Ideas Into Digital Reality
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m a full-stack developer with 5+ years of experience building web applications.
            I love creating elegant solutions to complex problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-xl bg-muted flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-muted-foreground mb-4">
              I&apos;m a passionate developer based in San Francisco, specializing in building
              exceptional digital experiences. With a strong foundation in both frontend and
              backend technologies, I create full-stack applications that are not only functional
              but also beautiful.
            </p>
            <p className="text-muted-foreground mb-6">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge through technical blog posts.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">GitHub Contributions</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <skill.icon className="w-10 h-10 text-primary mb-4" />
              <h4 className="text-lg font-semibold mb-3">{skill.title}</h4>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
