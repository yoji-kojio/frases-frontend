import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

function Layout({ children }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-brand">
            💬 Frases Inspiradoras
          </Link>
          <ul className="nav-menu">
            <li>
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
              >
                Início
              </Link>
            </li>
            <li>
              <Link 
                to="/phrases" 
                className={`nav-link ${isActive('/phrases') ? 'active' : ''}`}
              >
                Frases
              </Link>
            </li>
            <li>
              <Link 
                to="/authors" 
                className={`nav-link ${isActive('/authors') ? 'active' : ''}`}
              >
                Autores
              </Link>
            </li>
            <li>
              <Link 
                to="/categories" 
                className={`nav-link ${isActive('/categories') ? 'active' : ''}`}
              >
                Categorias
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>© 2025 Frases Inspiradoras - Desenvolvido com ❤️ para a Flois estudar</p>
      </footer>
    </div>
  );
}

export default Layout;

