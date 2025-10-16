import { useState, useEffect } from 'react';
import { getAllCategories, getAllPhrases } from '../services/api';
import Card from '../components/Card';
import Loading from '../components/Loading';
import './Categories.css';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [phrases, setPhrases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    setLoading(true);
    try {
      const [categoriesData, phrasesData] = await Promise.all([
        getAllCategories(),
        getAllPhrases({ include: 'full' }),
      ]);
      setCategories(categoriesData);
      setPhrases(phrasesData);
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPhrasesCount = (categoryId) => {
    return phrases.filter((p) => p.category_id === categoryId).length;
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory?.id === category.id ? null : category);
  };

  const getCategoryPhrases = (categoryId) => {
    return phrases.filter((p) => p.category_id === categoryId);
  };

  const getCategoryIcon = (categoryName) => {
    const icons = {
      'Sabedoria': '🦉',
      'Amor': '❤️',
      'Amizade': '🤝',
      'Coragem': '💪',
      'Aprendizado': '📚',
      'Motivação': '🚀',
      'Felicidade': '😊',
      'Sucesso': '🏆',
      'Vida': '🌱',
      'Inspiração': '✨',
    };
    return icons[categoryName] || '💭';
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="categories-container">
      <h1 className="page-title">🏷️ Categorias</h1>
      <p className="page-subtitle">
        Explore frases organizadas por temas
      </p>

      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id}>
            <Card
              className={`category-card ${
                selectedCategory?.id === category.id ? 'selected' : ''
              }`}
            >
              <div 
                className="category-card-content"
                onClick={() => handleCategoryClick(category)}
              >
                <div className="category-icon">
                  {getCategoryIcon(category.name)}
                </div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-phrases-count">
                  {getPhrasesCount(category.id)}{' '}
                  {getPhrasesCount(category.id) === 1 ? 'frase' : 'frases'}
                </p>
                <button 
                  className="btn-view"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCategoryClick(category);
                  }}
                >
                  {selectedCategory?.id === category.id
                    ? 'Ocultar frases'
                    : 'Ver frases'}
                </button>
              </div>
            </Card>

            {selectedCategory?.id === category.id && (
              <div className="category-phrases">
                <h4>Frases sobre {category.name}:</h4>
                <div className="phrases-list">
                  {getCategoryPhrases(category.id).map((phrase) => (
                    <Card key={phrase.id} className="phrase-item">
                      <p className="phrase-item-text">"{phrase.text}"</p>
                      <p className="phrase-item-author">
                        — {phrase.author?.name || 'Desconhecido'}
                      </p>
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

export default Categories;

