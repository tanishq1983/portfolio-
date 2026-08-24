import { useEffect, useRef } from 'react'

export default function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    const letters = titleRef.current?.querySelectorAll('.letter')
    if (letters) {
      letters.forEach((letter, i) => {
        letter.style.animationDelay = `${i * 0.05}s`
      })
    }
  }, [])

  const titleText = 'Tanishq Saini'

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name" ref={titleRef}>
          {titleText.split('').map((char, i) => (
            <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <p className="hero-tagline">
          <span className="gradient-text">AI Engineer</span> · <span className="gradient-text">Full-Stack Developer</span> · <span className="gradient-text">Cybersecurity Enthusiast</span>
        </p>
        <p className="hero-subtitle">
          Building AI-powered products, intelligent web apps & creative tech solutions
        </p>
        <div className="hero-cta">
          <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View My Work
          </button>
          <button className="btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get In Touch
          </button>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll to explore</p>
        </div>
      </div>
    </section>
  )
}
