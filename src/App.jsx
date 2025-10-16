import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Phrases from './pages/Phrases';
import Authors from './pages/Authors';
import Categories from './pages/Categories';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phrases" element={<Phrases />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

