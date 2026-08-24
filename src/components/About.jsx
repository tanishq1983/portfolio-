import { useEffect, useRef, useState } from 'react'

function AnimatedCounter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, target, duration])

  return <span ref={ref}>{count}+</span>
}

const stats = [
  { value: 4, label: 'Projects Built' },
  { value: 3, label: 'Hackathons' },
  { value: 10, label: 'Technologies' },
  { value: 1, label: 'Internship' },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2 className="section-title">
          <span className="title-accent">01.</span> About Me
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a 2nd-year <span className="highlight">B.Tech CSE (Cybersecurity)</span> student at
              <span className="highlight"> Dayanand Sagar University, Bangalore</span>, passionate about building
              AI-powered products, intelligent web applications, and creative technology solutions.
            </p>
            <p>
              My interests sit at the intersection of <span className="highlight">Artificial Intelligence</span>,
              <span className="highlight"> Full-Stack Development</span>, and <span className="highlight">Cybersecurity</span>.
              I enjoy exploring LLMs, Generative AI, Agentic AI, and modern web technologies.
            </p>
            <p>
              I'm particularly interested in taking an idea from <span className="highlight">concept → prototype → working product</span>.
              I don't just want to learn technology — <span className="highlight">I want to build with it.</span>
            </p>

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-icon">🎓</span>
                <div>
                  <strong>Education</strong>
                  <p>B.Tech CSE (Cybersecurity) — DSU, Bangalore</p>
                  <p>Diploma in CS — Pimpri Chinchwad Polytechnic</p>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">💼</span>
                <div>
                  <strong>Experience</strong>
                  <p>Software/Technology Intern — Infotech Company, Pune</p>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🏆</span>
                <div>
                  <strong>Hackathons</strong>
                  <p>Active participant — AI apps, startup ideas, creative tech</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-stats">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="stat-value">
                  <AnimatedCounter target={stat.value} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
