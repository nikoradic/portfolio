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
      </main>
    </>
  )
}

export default App
