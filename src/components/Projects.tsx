"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GitHubIcon } from "@/components/icons";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    image: "🛒",
    tags: ["Next.js", "Stripe", "PostgreSQL", "TailwindCSS"],
    github: "#",
    live: "#",
    stars: 128,
  },
  {
    title: "AI Chat Application",
    description: "An intelligent chatbot application powered by LLMs with context awareness and multi-language support.",
    image: "🤖",
    tags: ["React", "OpenAI API", "Node.js", "WebSocket"],
    github: "#",
    live: "#",
    stars: 256,
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, team features, and analytics dashboard.",
    image: "📋",
    tags: ["Next.js", "Prisma", "MongoDB", "Framer Motion"],
    github: "#",
    live: "#",
    stars: 89,
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather application with location-based forecasts, interactive maps, and severe weather alerts.",
    image: "🌤️",
    tags: ["React", "Weather API", "Chart.js", "PWA"],
    github: "#",
    live: "#",
    stars: 67,
  },
  {
    title: "Social Media Analytics",
    description: "A comprehensive analytics platform for tracking social media metrics, engagement, and growth trends.",
    image: "📊",
    tags: ["Vue.js", "D3.js", "Python", "Redis"],
    github: "#",
    live: "#",
    stars: 145,
  },
  {
    title: "Fitness Tracker",
    description: "A mobile-first fitness tracking application with workout plans, progress tracking, and social features.",
    image: "💪",
    tags: ["React Native", "Firebase", "GraphQL", "TypeScript"],
    github: "#",
    live: "#",
    stars: 92,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building great software.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group rounded-xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Project image placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <span className="text-6xl">{project.image}</span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4" />
                    {project.stars}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
