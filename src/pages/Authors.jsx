import { useState, useEffect } from 'react';
import { getAllAuthors, getAllPhrases } from '../services/api';
import Card from '../components/Card';
import Loading from '../components/Loading';
import './Authors.css';

function Authors() {
  const [authors, setAuthors] = useState([]);
  const [phrases, setPhrases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  useEffect(() => {
    loadAuthors();
  }, []);

  const loadAuthors = async () => {
    setLoading(true);
    try {
      const [authorsData, phrasesData] = await Promise.all([
        getAllAuthors(),
        getAllPhrases(),
      ]);
      setAuthors(authorsData);
      setPhrases(phrasesData);
    } catch (error) {
      console.error('Erro ao carregar autores:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPhrasesCount = (authorId) => {
    return phrases.filter((p) => p.author_id === authorId).length;
  };

  const handleAuthorClick = (author) => {
    setSelectedAuthor(selectedAuthor?.id === author.id ? null : author);
  };

  const getAuthorPhrases = (authorId) => {
    return phrases.filter((p) => p.author_id === authorId);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="authors-container">
      <h1 className="page-title">👤 Autores</h1>
      <p className="page-subtitle">
        Conheça os grandes pensadores e suas contribuições
      </p>

      <div className="authors-grid">
        {authors.map((author) => (
          <div key={author.id}>
            <Card
              className={`author-card ${
                selectedAuthor?.id === author.id ? 'selected' : ''
              }`}
            >
              <div 
                className="author-card-content"
                onClick={() => handleAuthorClick(author)}
              >
                <div className="author-avatar">
                  {author.name.charAt(0).toUpperCase()}
                </div>
                <h3 className="author-name">{author.name}</h3>
                <p className="author-phrases-count">
                  {getPhrasesCount(author.id)}{' '}
                  {getPhrasesCount(author.id) === 1 ? 'frase' : 'frases'}
                </p>
                <button 
                  className="btn-view"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAuthorClick(author);
                  }}
                >
                  {selectedAuthor?.id === author.id
                    ? 'Ocultar frases'
                    : 'Ver frases'}
                </button>
              </div>
            </Card>

            {selectedAuthor?.id === author.id && (
              <div className="author-phrases">
                <h4>Frases de {author.name}:</h4>
                <div className="phrases-list">
                  {getAuthorPhrases(author.id).map((phrase) => (
                    <Card key={phrase.id} className="phrase-item">
                      <p className="phrase-item-text">"{phrase.text}"</p>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Authors;

