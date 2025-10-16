import { useState, useEffect } from 'react';
import { getAllPhrases, getAllAuthors, getAllCategories } from '../services/api';
import Card from '../components/Card';
import Loading from '../components/Loading';
import './Phrases.css';

function Phrases() {
  const [phrases, setPhrases] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [phrasesData, authorsData, categoriesData] = await Promise.all([
        getAllPhrases({ include: 'full' }),
        getAllAuthors(),
        getAllCategories(),
      ]);
      setPhrases(phrasesData);
      setAuthors(authorsData);
      setCategories(categoriesData);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = async () => {
    setLoading(true);
    try {
      const params = { include: 'full' };
      if (selectedAuthor) params.author_id = selectedAuthor;
      if (selectedCategory) params.category_id = selectedCategory;
      
      const data = await getAllPhrases(params);
      setPhrases(data);
    } catch (error) {
      console.error('Erro ao filtrar:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClearFilters = async () => {
    setSelectedAuthor('');
    setSelectedCategory('');
    setLoading(true);
    try {
      const data = await getAllPhrases({ include: 'full' });
      setPhrases(data);
    } catch (error) {
      console.error('Erro ao limpar filtros:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading && phrases.length === 0) {
    return <Loading />;
  }

  return (
    <div className="phrases-container">
      <h1 className="page-title">📝 Todas as Frases</h1>

      <Card className="filters-card">
        <h3>Filtros</h3>
        <div className="filters-grid">
          <div className="filter-group">
            <label htmlFor="author-filter">Autor:</label>
            <select
              id="author-filter"
              value={selectedAuthor}
              onChange={(e) => setSelectedAuthor(e.target.value)}
              className="filter-select"
            >
              <option value="">Todos os autores</option>
              {authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="category-filter">Categoria:</label>
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              <option value="">Todas as categorias</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="filters-actions">
          <button onClick={handleFilter} className="btn btn-primary">
            Filtrar
          </button>
          <button onClick={handleClearFilters} className="btn btn-secondary">
            Limpar Filtros
          </button>
        </div>
      </Card>

      {loading ? (
        <Loading />
      ) : (
        <>
          <p className="results-count">
            {phrases.length} {phrases.length === 1 ? 'frase encontrada' : 'frases encontradas'}
          </p>

          <div className="phrases-grid">
            {phrases.map((phrase) => (
              <Card key={phrase.id} className="phrase-card">
                <blockquote className="phrase-text">
                  "{phrase.text}"
                </blockquote>
                <div className="phrase-info">
                  <p className="phrase-author-name">
                    — {phrase.author?.name || 'Desconhecido'}
                  </p>
                  {phrase.category && (
                    <span className="phrase-tag">{phrase.category.name}</span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Phrases;

