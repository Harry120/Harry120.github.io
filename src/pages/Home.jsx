import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home fade-in">
      {/* Hero Section */}
      <section className="hero container">
        <h1>Hello, I'm Harry</h1>
        <p className="hero-intro">
          I work on AI model training at{' '}
          <a href="https://baseten.co" target="_blank" rel="noopener noreferrer">
            Baseten
          </a>
          , an inference infrastructure company. Outside of work, I'm drawn to the kinds of
          questions that don't have easy answers—in history, physics, economics, philosophy,
          and literature.
        </p>
        <p className="hero-intro">
          This is a small corner of the internet where I share thoughts and writing.
        </p>
      </section>

      {/* About Section */}
      <section className="section container">
        <h2>About</h2>
        <div className="about-content">
          <p>
            I'm interested in how things work—whether that's training neural networks,
            understanding historical causation, or tracing the logic of an economic argument.
            I find that ideas from different fields often illuminate each other in unexpected ways.
          </p>
          <p>
            At Baseten, I focus on the infrastructure and systems that enable AI model training
            at scale. Before that, I studied and worked on problems at the intersection of
            technology and understanding.
          </p>
          <p>
            When I'm not working, you'll find me reading—often several books at once, typically
            spanning a few centuries and disciplines. I believe in the value of going deep
            on topics that matter, and in the slow accumulation of understanding over time.
          </p>
        </div>
      </section>

      {/* Currently Section */}
      <section className="section container">
        <h2>Currently</h2>
        <div className="currently-content">
          <div className="currently-item">
            <h3>Reading</h3>
            <p>
              <em>The Master and Margarita</em> by Mikhail Bulgakov
            </p>
          </div>
          <div className="currently-item">
            <h3>Thinking about</h3>
            <p>
              The geometry of loss landscapes in neural network training,
              and why some ideas from 19th century thermodynamics keep showing up.
            </p>
          </div>
          <div className="currently-item">
            <h3>Learning</h3>
            <p>
              More measure theory than I probably need, but it's beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Writing Preview */}
      <section className="section container">
        <div className="section-header">
          <h2>Writing</h2>
          <Link to="/writing" className="see-all">
            See all →
          </Link>
        </div>
        <p className="text-muted">
          Essays and notes on AI, science, history, and ideas that don't fit neatly into categories.
        </p>
      </section>

      {/* Connect Section */}
      <section className="section container">
        <h2>Connect</h2>
        <div className="connect-links">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-link"
          >
            Twitter
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-link"
          >
            LinkedIn
          </a>
          <a href="mailto:hello@example.com" className="connect-link">
            Email
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
