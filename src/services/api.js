const API_URL = 'http://localhost:3001/api';

// Frases
export const getAllPhrases = async (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  const url = queryString ? `${API_URL}/phrases?${queryString}` : `${API_URL}/phrases`;
  const response = await fetch(url);
  return response.json();
};

export const getPhraseById = async (id, include = false) => {
  const url = include ? `${API_URL}/phrases/${id}?include=full` : `${API_URL}/phrases/${id}`;
  const response = await fetch(url);
  return response.json();
};

export const getRandomPhrase = async (include = true) => {
  const url = include ? `${API_URL}/phrases/random?include=full` : `${API_URL}/phrases/random`;
  const response = await fetch(url);
  return response.json();
};

export const createPhrase = async (phrase) => {
  const response = await fetch(`${API_URL}/phrases`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(phrase),
  });
  return response.json();
};

export const updatePhrase = async (id, phrase) => {
  const response = await fetch(`${API_URL}/phrases/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(phrase),
  });
  return response.json();
};

export const deletePhrase = async (id) => {
  const response = await fetch(`${API_URL}/phrases/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};

// Autores
export const getAllAuthors = async () => {
  const response = await fetch(`${API_URL}/authors`);
  return response.json();
};

export const getAuthorById = async (id) => {
  const response = await fetch(`${API_URL}/authors/${id}`);
  return response.json();
};

export const createAuthor = async (author) => {
  const response = await fetch(`${API_URL}/authors`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(author),
  });
  return response.json();
};

export const updateAuthor = async (id, author) => {
  const response = await fetch(`${API_URL}/authors/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(author),
  });
  return response.json();
};

export const deleteAuthor = async (id) => {
  const response = await fetch(`${API_URL}/authors/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};

// Categorias
export const getAllCategories = async () => {
  const response = await fetch(`${API_URL}/categories`);
  return response.json();
};

export const getCategoryById = async (id) => {
  const response = await fetch(`${API_URL}/categories/${id}`);
  return response.json();
};

export const createCategory = async (category) => {
  const response = await fetch(`${API_URL}/categories`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(category),
  });
  return response.json();
};

export const updateCategory = async (id, category) => {
  const response = await fetch(`${API_URL}/categories/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(category),
  });
  return response.json();
};

export const deleteCategory = async (id) => {
  const response = await fetch(`${API_URL}/categories/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};

