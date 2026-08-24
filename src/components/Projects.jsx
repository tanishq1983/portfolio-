import { useState } from 'react'

const projects = [
  {
    title: 'Mentometa',
    description: 'AI-powered mental wellness assistant built around a locally created LLM and RAG architecture, designed to provide intelligent conversational interactions for mental health support.',
    tags: ['LLMs', 'RAG', 'AI', 'Conversational Systems'],
    color: '#7c3aed',
    link: '#',
  },
  {
    title: 'Enfonium',
    description: 'AI mood-based music application that connects user mood with music discovery and interaction. An AI-powered music experience for personalized listening.',
    tags: ['AI', 'Music', 'Personalization', 'Web Development'],
    color: '#06b6d4',
    link: '#',
  },
  {
    title: 'BHoss / Bizora',
    description: 'AI-powered startup validation platform that analyzes startup ideas and helps founders understand their business potential — generating business profiles, market analysis, competitor insights, MVP roadmaps, and cost estimates.',
    tags: ['AI Agents', 'Generative AI', 'Startup Analysis', 'Full-Stack'],
    color: '#f43f5e',
    link: '#',
  },
  {
    title: 'Interactive CV Projects',
    description: 'Creative camera-based applications involving hand tracking, gesture recognition, face detection, and interactive media — exploring how computer vision can create fun and unconventional web experiences.',
    tags: ['Computer Vision', 'Hand Tracking', 'Face Detection', 'Web APIs'],
    color: '#10b981',
    link: '#',
  },
]

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ '--accent': project.color, animationDelay: `${index * 0.1}s` }}
    >
      <div className="project-number">
        {String(index + 1).padStart(2, '0')}
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>
      <a href={project.link} className="project-link">
        View Project →
      </a>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">
          <span className="title-accent">02.</span> Projects
        </h2>
        <p className="section-subtitle">
          A selection of projects I've built — from AI-powered platforms to creative tech experiments.
        </p>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
