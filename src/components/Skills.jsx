import { useEffect, useRef, useState } from 'react'

const skillCategories = [
  {
    title: 'Programming & Development',
    icon: '💻',
    skills: [
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 80 },
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 82 },
      { name: 'C / C++', level: 75 },
      { name: 'DSA', level: 78 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: '🤖',
    skills: [
      { name: 'Artificial Intelligence', level: 85 },
      { name: 'Machine Learning', level: 80 },
      { name: 'Generative AI', level: 88 },
      { name: 'LLMs & RAG', level: 85 },
      { name: 'Agentic AI', level: 82 },
      { name: 'AI Applications', level: 90 },
    ],
  },
  {
    title: 'Cybersecurity',
    icon: '🔒',
    skills: [
      { name: 'Cybersecurity Fundamentals', level: 75 },
      { name: 'Ethical Hacking', level: 68 },
      { name: 'Kali Linux', level: 70 },
      { name: 'Security Concepts', level: 72 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Computer Vision', level: 78 },
      { name: 'Hand/Face Tracking', level: 75 },
      { name: 'Web APIs', level: 82 },
      { name: 'Modern AI Tools', level: 85 },
    ],
  },
]

function SkillBar({ name, level, delay }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{
            width: isVisible ? `${level}%` : '0%',
            transitionDelay: `${delay}s`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2 className="section-title">
          <span className="title-accent">03.</span> Skills
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category, i) => (
            <div key={i} className="skill-category" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="category-skills">
                {category.skills.map((skill, j) => (
                  <SkillBar
                    key={j}
                    name={skill.name}
                    level={skill.level}
                    delay={j * 0.1 + i * 0.3}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
