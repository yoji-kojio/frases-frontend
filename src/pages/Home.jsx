import { useState, useEffect } from 'react';
import { getRandomPhrase } from '../services/api';
import Card from '../components/Card';
import Loading from '../components/Loading';
import './Home.css';

function Home() {
  const [phrase, setPhrase] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadRandomPhrase = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getRandomPhrase();
      setPhrase(data);
    } catch (err) {
      setError('Erro ao carregar frase. Verifique se o backend está rodando.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRandomPhrase();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button onClick={loadRandomPhrase} className="btn btn-primary">
          Tentar Novamente
        </button>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">✨ Frase do Dia ✨</h1>
        <p className="hero-subtitle">Inspire-se com sabedoria de grandes pensadores</p>
      </div>

      {phrase && (
        <Card className="phrase-card-large">
          <blockquote className="phrase-quote">
            "{phrase.text}"
          </blockquote>
          <div className="phrase-meta">
            <p className="phrase-author">— {phrase.author?.name || 'Desconhecido'}</p>
            {phrase.category && (
              <span className="phrase-category">{phrase.category.name}</span>
            )}
          </div>
        </Card>
      )}

      <button onClick={loadRandomPhrase} className="btn btn-primary btn-large">
        🔄 Nova Frase
      </button>

      <div className="home-info">
        <div className="info-card">
          <div className="info-icon">📝</div>
          <h3>Frases Inspiradoras</h3>
          <p>Dezenas de citações de pensadores renomados</p>
        </div>
        <div className="info-card">
          <div className="info-icon">👤</div>
          <h3>Grandes Autores</h3>
          <p>Sabedoria de Einstein, Gandhi, Shakespeare e mais</p>
        </div>
        <div className="info-card">
          <div className="info-icon">🏷️</div>
          <h3>Diversas Categorias</h3>
          <p>Amor, Sabedoria, Coragem, Motivação e muito mais</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

