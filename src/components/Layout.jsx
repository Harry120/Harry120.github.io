import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

function Layout({ children }) {
  const location = useLocation()

  return (
    <div className="layout">
      <header className="header">
        <nav className="nav container">
          <Link to="/" className="nav-logo">
            Harry Partridge
          </Link>
          <div className="nav-links">
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/writing"
              className={`nav-link ${location.pathname.startsWith('/writing') ? 'active' : ''}`}
            >
              Writing
            </Link>
          </div>
        </nav>
      </header>

      <main className="main">
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <p className="text-muted text-small">
            © {new Date().getFullYear()} Harry Partridge
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
