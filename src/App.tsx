import { useState } from 'react'
import './App.css'
import profilePhoto from './assets/nikola-profile.png'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <div className={theme === 'dark' ? 'app-root dark' : 'app-root'}>
      <header className="nav">
        <span className="nav-name">Nikola Radic</span>
        <div className="nav-right">
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="theme-toggle">
            <button
              type="button"
              className={
                theme === 'light' ? 'theme-toggle-btn active' : 'theme-toggle-btn'
              }
              aria-pressed={theme === 'light'}
              onClick={() => setTheme('light')}
            >
              Light
            </button>
            <button
              type="button"
              className={
                theme === 'dark' ? 'theme-toggle-btn active' : 'theme-toggle-btn'
              }
              aria-pressed={theme === 'dark'}
              onClick={() => setTheme('dark')}
            >
              Dark
            </button>
          </div>
          <a className="nav-cta" href="#contact">
            Hire me
          </a>
        </div>
      </header>
      <main className="app">
        <section className="hero" id="about">
          <div className="section-inner">
          <div className="hero-grid">
            <div className="hero-text">
              <p className="label">01 — ABOUT</p>
              <p className="hero-statement">
                Building software with{' '}
                <span className="heading-accent">curiosity.</span>
              </p>
              <h1>Nikola Radic</h1>
              <p className="role">Software Developer</p>
              <p className="intro">
                I'm a software developer with a background in .NET and
                hands-on experience working with DevOps and production
                systems. I enjoy solving problems, learning new
                technologies, and building software that makes a real
                difference.
              </p>
              <div className="hero-links">
                <a
                  className="hero-link"
                  href="https://github.com/nikoradic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>
                <a
                  className="hero-link"
                  href="https://www.linkedin.com/in/nikoradic/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn →
                </a>
                <a
                  className="hero-link"
                  href="/resume_en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV Eng →
                </a>
                   <a
                  className="hero-link"
                  href="/resume_sv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV Sve →
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-photo-wrap">
                <img
                  className="hero-photo"
                  src={profilePhoto}
                  alt="Nikola Radic"
                />
                <span className="hero-photo-label">
                  ↓ hi, nice to meet you
                </span>
              </div>
            </div>
          </div>
          </div>
        </section>
        <section className="section" id="experience">
          <div className="section-inner">
          <p className="label">02 — EXPERIENCE</p>
          <h2 className="section-heading">
            Experience + <span className="heading-accent">Education</span>
          </h2>
          <div className="timeline">
            <div className="entry timeline-item">
              <h3 className="entry-role">DevOps / Software Development</h3>
              <p className="entry-meta">Volvo Cars · 2025</p>
              <p className="entry-desc">
                I worked in a DevOps team supporting production-critical
                systems and global manufacturing flows. My work included
                troubleshooting, deployments, CI/CD, incident handling and
                software development together with the team.
              </p>
              <p className="entry-tech">
                Java, Spring Boot, Angular, TypeScript, Azure DevOps,
                OpenShift, SQL, Git
              </p>
            </div>
            <div className="entry timeline-item">
              <h3 className="entry-role">Software Developer Intern</h3>
              <p className="entry-meta">
                Hogia Business Products · Nov 2023 – May 2024 · Stenungsund,
                Sweden
              </p>
              <p className="entry-desc">
                Worked in the development team for ApproveIt and
                OpenBusiness, contributing to digital invoice flows and
                approval processes. Delivered UI and feature improvements
                using TypeScript, Aurelia, React and C#, working with Git
                and Azure DevOps in an agile environment.
              </p>
              <p className="entry-tech">
                TypeScript, Aurelia, React, C#, Git, Azure DevOps
              </p>
            </div>
          </div>
          <div className="education">
            <h4 className="subheading">Education</h4>
            <div className="entry">
              <h3 className="entry-role">.NET Web Developer</h3>
              <p className="entry-meta">
                EC Utbildning · Aug 2022 – May 2024 · Gothenburg, Sweden
              </p>
              <p className="entry-desc">
                Studied software and web development with a focus on C#
                and .NET.
              </p>
            </div>
          </div>
          </div>
        </section>
        <section className="section" id="recommendations">
          <div className="section-inner">
          <p className="label">03 — RECOMMENDATIONS</p>
          <h2 className="section-heading">
            What people <span className="heading-accent">say.</span>
          </h2>
          <div className="recommendations-items">
            <div className="recommendation-item">
              <div className="rec-logo-wrap">
                <img
                  className="rec-logo rec-logo-volvo"
                  src="/Volvo-Logo-cropped.png"
                  alt="Volvo Cars"
                />
              </div>
              <a
                className="hero-link"
                href="/Volvo_Recommendation_Letter.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Volvo Cars recommendation →
              </a>
            </div>
            <div className="recommendation-item">
              <div className="rec-logo-wrap">
                <img
                  className="rec-logo rec-logo-hogia"
                  src="/Hogia-logo.png"
                  alt="Hogia"
                />
              </div>
              <a
                className="hero-link"
                href="/Hogia_Recommendation_Letter.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hogia recommendation →
              </a>
            </div>
          </div>
          </div>
        </section>
        <section className="section" id="skills">
          <div className="section-inner">
          <p className="label">04 — SKILLS</p>
          <h2 className="section-heading">
            Tools I <span className="heading-accent">work with</span>.
          </h2>
          <div className="skills-grid">
            <div className="skills-group">
              <h4 className="subheading">Development</h4>
              <ul className="skills-tags">
                <li className="skill-tag">C# / .NET</li>
                <li className="skill-tag">Java</li>
                <li className="skill-tag">Spring Boot</li>
                <li className="skill-tag">TypeScript</li>
                <li className="skill-tag">JavaScript</li>
                <li className="skill-tag">Angular</li>
                <li className="skill-tag">React</li>
                <li className="skill-tag">Aurelia</li>
              </ul>
            </div>
            <div className="skills-group">
              <h4 className="subheading">DevOps &amp; Tools</h4>
              <ul className="skills-tags">
                <li className="skill-tag">Git</li>
                <li className="skill-tag">Azure DevOps</li>
                <li className="skill-tag">CI/CD</li>
                <li className="skill-tag">OpenShift</li>
                <li className="skill-tag">OpenVMS</li>
                <li className="skill-tag">Swagger UI</li>
              </ul>
            </div>
            <div className="skills-group">
              <h4 className="subheading">Data</h4>
              <ul className="skills-tags">
                <li className="skill-tag">SQL</li>
                <li className="skill-tag">SQL Developer</li>
                <li className="skill-tag">MS SQL</li>
              </ul>
            </div>
          </div>
          </div>
        </section>
        <section className="section contact-section" id="contact">
          <div className="section-inner">
          <p className="label">05 — CONTACT</p>
          <h2 className="section-heading">
            Let's <span className="heading-accent">connect.</span>
          </h2>
          <p className="contact-intro">
            I'm always open to new opportunities, interesting projects and
            conversations about software development.
          </p>
          <div className="contact-links">
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/nikoradic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="contact-link contact-link-primary"
              href="https://github.com/nikoradic"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a className="contact-link" href="mailto:nikolaradic94@hotmail.com">
              Email
            </a>
          </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
