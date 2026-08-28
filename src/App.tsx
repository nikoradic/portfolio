import './App.css'

function App() {
  return (
    <>
      <header className="nav">
        <span className="nav-name">Nikola Radic</span>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main className="app">
        <section className="hero" id="about">
          <p className="label">01 — ABOUT</p>
          <h1>Nikola Radic</h1>
          <p className="role">Software Developer</p>
          <p className="intro">
            I'm a software developer with a background in .NET and hands-on
            experience working with DevOps and production systems. I enjoy
            solving problems, learning new technologies, and building software
            that makes a real difference.
          </p>
        </section>
        <section className="section" id="experience">
          <p className="label">02 — EXPERIENCE</p>
          <div className="entry">
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
          <div className="entry">
            <h3 className="entry-role">Software Developer Intern</h3>
            <p className="entry-meta">
              Hogia Business Products · Nov 2023 – May 2024 · Stenungsund,
              Sweden
            </p>
            <p className="entry-desc">
              Worked in the development team for ApproveIt and OpenBusiness,
              contributing to digital invoice flows and approval processes.
              Delivered UI and feature improvements using TypeScript,
              Aurelia, React and C#, working with Git and Azure DevOps in an
              agile environment.
            </p>
            <p className="entry-tech">
              TypeScript, Aurelia, React, C#, Git, Azure DevOps
            </p>
          </div>
          <h4 className="subheading">Education</h4>
          <div className="entry">
            <h3 className="entry-role">.NET Web Developer</h3>
            <p className="entry-meta">
              EC Utbildning · Aug 2022 – May 2024 · Gothenburg, Sweden
            </p>
            <p className="entry-desc">
              Studied software and web development with a focus on C# and
              .NET.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
