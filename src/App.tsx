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
            <a href="#about">
              <span className="nav-num">01</span>About
            </a>
            <a href="#experience">
              <span className="nav-num">02</span>Experience
            </a>
            <a href="#recommendations">
              <span className="nav-num">03</span>Recommendations
            </a>
            <a href="#skills">
              <span className="nav-num">04</span>Skills
            </a>
            <a href="#contact">
              <span className="nav-num">05</span>Contact
            </a>
          </nav>
          <div className="theme-toggle">
            <button
              type="button"
              className={
                theme === 'dark' ? 'theme-toggle-btn active' : 'theme-toggle-btn'
              }
              aria-pressed={theme === 'dark'}
              onClick={() => setTheme('dark')}
            >
              ☾ Dark
            </button>
            <button
              type="button"
              className={
                theme === 'light' ? 'theme-toggle-btn active' : 'theme-toggle-btn'
              }
              aria-pressed={theme === 'light'}
              onClick={() => setTheme('light')}
            >
              ☀ Light
            </button>
          </div>
          <a className="nav-cta" href="#contact">
            Let's talk!
          </a>
        </div>
      </header>
      <main className="app">
        <section className="hero" id="about">
          <div className="section-inner">
          <div className="hero-grid">
            <div className="hero-text">
              <p className="label"><span className="label-num">01</span> — ABOUT</p>
              <p className="hero-statement">
                Building software with{' '}
                <span className="heading-accent">curiosity.</span>
              </p>
              <h1>Nikola Radic</h1>
              <p className="role">Software Developer</p>
              <p className="intro">
               Hello! 👋 I'm a curious and driven software developer with a background in .NET and hands-on experience working with DevOps, software development, and production-critical systems. I enjoy understanding how things work, solving problems, and learning new technologies along the way.

My journey has taken me from software development studies to working in real development environments at Hogia and Volvo Cars. I've worked with technologies such as C#, .NET, Java, Spring Boot, TypeScript, Angular, React, Azure DevOps, OpenShift, SQL, and Git — while gaining experience with everything from development and troubleshooting to deployments, CI/CD, and production support.

I'm a team player who values collaboration, structure, and clear communication. I enjoy working alongside people with different skills and perspectives, and I believe the best solutions often come from learning from each other and working toward the same goal.

I'm naturally curious and I like a challenge. Whether it's understanding an unfamiliar system, tracking down a problem, or picking up a new technology, I enjoy the process of learning and improving. I try to stay calm, organized, and positive even when things get complicated.

Outside of the technical side, I bring a lot of energy and commitment to what I do — while still believing that being humble, approachable, and easy to work with matters just as much.

I'm always interested in new opportunities, interesting problems, and teams where I can continue learning and contribute. Let's connect! 🚀
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
              <p className="hero-status">
                <span className="status-dot" aria-hidden="true"></span>
                Open to work
              </p>
            </div>
          </div>
          </div>
        </section>
        <section className="section" id="experience">
          <div className="section-inner">
          <p className="label"><span className="label-num">02</span> — EXPERIENCE</p>
          <h2 className="section-heading">
            Experience + <span className="heading-accent">Education</span>
          </h2>
          <div className="timeline">
            <div className="entry timeline-item">
              <h3 className="entry-role">DevOps / Software Development</h3>
              <p className="entry-meta">
                <span className="entry-org">Volvo Cars</span>
                <span className="entry-when"> · 2025</span>
              </p>
              <p className="entry-desc">
                I worked in a DevOps team supporting production-critical
                systems and global manufacturing flows. My work included
                troubleshooting, deployments, CI/CD, incident handling and
                software development together with the team.
              </p>
              <ul className="entry-tech">
                <li className="tech-tag">Java</li>
                <li className="tech-tag">Spring Boot</li>
                <li className="tech-tag">Angular</li>
                <li className="tech-tag">TypeScript</li>
                <li className="tech-tag">Azure DevOps</li>
                <li className="tech-tag">OpenShift</li>
                <li className="tech-tag">SQL</li>
                <li className="tech-tag">Git</li>
              </ul>
            </div>
            <div className="entry timeline-item">
              <h3 className="entry-role">Software Developer Intern</h3>
              <p className="entry-meta">
                <span className="entry-org">Hogia Business Products</span>
                <span className="entry-when">
                  {' '}
                  · Nov 2023 – May 2024 · Stenungsund, Sweden
                </span>
              </p>
              <p className="entry-desc">
                Worked in the development team for ApproveIt and
                OpenBusiness, contributing to digital invoice flows and
                approval processes. Delivered UI and feature improvements
                using TypeScript, Aurelia, React and C#, working with Git
                and Azure DevOps in an agile environment.
              </p>
              <ul className="entry-tech">
                <li className="tech-tag">TypeScript</li>
                <li className="tech-tag">Aurelia</li>
                <li className="tech-tag">React</li>
                <li className="tech-tag">C#</li>
                <li className="tech-tag">Git</li>
                <li className="tech-tag">Azure DevOps</li>
              </ul>
            </div>
          </div>
          <div className="education">
            <h4 className="subheading">Education</h4>
            <div className="entry">
              <h3 className="entry-role">.NET Web Developer</h3>
              <p className="entry-meta">
                <span className="entry-org">EC Utbildning</span>
                <span className="entry-when">
                  {' '}
                  · Aug 2022 – May 2024 · Gothenburg, Sweden
                </span>
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
          <p className="label"><span className="label-num">03</span> — RECOMMENDATIONS</p>
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
          <p className="label"><span className="label-num">04</span> — SKILLS</p>
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
          <div className="skills-traits">
            <p className="label">HOW I SHOW UP</p>
            <ul className="skills-tags">
              <li className="trait-tag">Calm</li>
              <li className="trait-tag">Curious</li>
              <li className="trait-tag">Organized</li>
              <li className="trait-tag">Team player</li>
              <li className="trait-tag">Driven</li>
            </ul>
          </div>
          </div>
        </section>
        <section className="section contact-section" id="contact">
          <div className="section-inner">
          <p className="label"><span className="label-num">05</span> — CONTACT</p>
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
          <div className="resume-block">
            <p className="label">RESUME</p>
            <p className="resume-intro">
              My CV is available in English and Swedish.
            </p>
            <div className="resume-options">
              <a
                className="resume-option"
                href="/resume_en.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="resume-option-main">
                  <span className="resume-lang">EN</span>
                  <span className="resume-name">English</span>
                </span>
                <span className="resume-arrow">↓</span>
              </a>
              <a
                className="resume-option"
                href="/resume_sv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="resume-option-main">
                  <span className="resume-lang">SV</span>
                  <span className="resume-name">Svenska</span>
                </span>
                <span className="resume-arrow">↓</span>
              </a>
            </div>
          </div>
          </div>
        </section>
      </main>
      <div className="back-to-top-wrap">
        <a className="hero-link back-to-top" href="#about">
          Back to top ↑
        </a>
      </div>
      <footer className="site-footer">
        <div className="section-inner footer-grid">
          <div className="footer-info">
            <p className="footer-name">Nikola Radic</p>
            <p className="footer-meta">Software Developer</p>
            <p className="footer-meta">Gothenburg, Sweden</p>
          </div>
          <div className="footer-links">
            <a
              className="hero-link"
              href="https://www.linkedin.com/in/nikoradic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="footer-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn →
            </a>
            <a
              className="hero-link"
              href="https://github.com/nikoradic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="footer-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.334-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.48 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub →
            </a>
            <a className="hero-link" href="mailto:nikolaradic94@hotmail.com">
              <svg
                className="footer-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              Email →
            </a>
          </div>
          <div className="footer-status">
            <p className="footer-name">Status</p>
            <p className="footer-status-line">
              <span className="status-dot" aria-hidden="true"></span>
              Open to work
            </p>
            <p className="footer-meta">Open to opportunities</p>
          </div>
        </div>
        <div className="section-inner">
          <p className="footer-copyright">© 2026 Nikola Radic</p>
        </div>
      </footer>
    </div>
  )
}

export default App
