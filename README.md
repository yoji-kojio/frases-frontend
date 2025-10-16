# 💬 Frases Inspiradoras - Frontend

Aplicação frontend moderna desenvolvida em React para visualizar e explorar frases inspiradoras, autores e categorias. Consome a API REST do backend `frases-backend`.

## ✨ Funcionalidades

- 🎲 **Frase do Dia**: Página inicial com uma frase aleatória e inspiradora
- 📝 **Listagem de Frases**: Navegue por todas as frases disponíveis
- 🔍 **Filtros Avançados**: Filtre frases por autor ou categoria
- 👤 **Autores**: Explore todos os autores e suas frases
- 🏷️ **Categorias**: Navegue por frases organizadas por temas
- 📱 **Design Responsivo**: Interface adaptável para desktop e mobile
- 🎨 **UI Moderna**: Design clean com gradientes e animações suaves

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **React Router DOM** - Navegação entre páginas
- **Vite** - Build tool moderna e rápida
- **CSS3** - Estilização com gradientes e animações
- **Fetch API** - Comunicação com o backend

## 📦 Instalação

### Pré-requisitos

- Node.js 16+ instalado
- Backend `frases-backend` rodando na porta 3001

### Passos

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# A aplicação estará disponível em http://localhost:3000
```

### Comandos Disponíveis

```bash
# Desenvolvimento (com hot reload)
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 🌐 Estrutura do Projeto

```
frases-frontend/
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Layout.jsx     # Layout principal com navegação
│   │   ├── Card.jsx       # Componente de card
│   │   └── Loading.jsx    # Indicador de carregamento
│   ├── pages/             # Páginas da aplicação
│   │   ├── Home.jsx       # Página inicial (Frase do dia)
│   │   ├── Phrases.jsx    # Listagem de frases
│   │   ├── Authors.jsx    # Página de autores
│   │   └── Categories.jsx # Página de categorias
│   ├── services/          # Serviços de API
│   │   └── api.js         # Funções para comunicação com backend
│   ├── App.jsx            # Componente principal
│   ├── main.jsx          # Ponto de entrada
│   └── index.css         # Estilos globais
├── index.html            # HTML base
├── vite.config.js        # Configuração do Vite
└── package.json          # Dependências e scripts
```

## 📱 Páginas

### 🏠 Início (`/`)
- Exibe uma frase aleatória do dia
- Botão para gerar nova frase
- Cards informativos sobre o projeto
- Design destacado com gradientes

### 📝 Frases (`/phrases`)
- Lista todas as frases cadastradas
- Filtros por autor e categoria
- Cada card mostra a frase, autor e categoria
- Grid responsivo

### 👤 Autores (`/authors`)
- Grid com todos os autores
- Avatar colorido com inicial do nome
- Contador de frases por autor
- Clique para expandir e ver todas as frases do autor

### 🏷️ Categorias (`/categories`)
- Cards coloridos para cada categoria
- Ícones personalizados por tema
- Contador de frases por categoria
- Clique para expandir e ver frases da categoria

## 🎨 Design

A aplicação utiliza um design moderno com:

- **Paleta de cores**: Gradientes roxos e azuis (#667eea, #764ba2)
- **Tipografia**: Sistema de fontes nativas para melhor performance
- **Cards**: Design elevado com sombras suaves
- **Animações**: Transições suaves e hover effects
- **Responsividade**: Grid adaptável para diferentes tamanhos de tela

## 🔌 API

A aplicação consome a API REST em `http://localhost:3001/api`.

### Endpoints utilizados:

```javascript
// Frases
GET /api/phrases              // Lista todas as frases
GET /api/phrases/random       // Frase aleatória
GET /api/phrases/:id          // Frase específica
GET /api/phrases?author_id=1  // Filtrar por autor
GET /api/phrases?category_id=2 // Filtrar por categoria

// Autores
GET /api/authors              // Lista todos os autores
GET /api/authors/:id          // Autor específico

// Categorias
GET /api/categories           // Lista todas as categorias
GET /api/categories/:id       // Categoria específica
```

## ⚙️ Configuração

### Alterar URL da API

Se o backend estiver rodando em outra porta/host, edite o arquivo `src/services/api.js`:

```javascript
const API_URL = 'http://localhost:3001/api'; // Altere aqui
```

### Alterar Porta do Frontend

Edite o arquivo `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Altere aqui
  }
})
```

## 🐛 Solução de Problemas

### Erro ao carregar dados

**Problema**: Mensagem de erro ao buscar frases/autores/categorias

**Solução**:
1. Verifique se o backend está rodando em `http://localhost:3001`
2. Teste a API diretamente: `curl http://localhost:3001/api/phrases`
3. Verifique o console do navegador para mais detalhes

### CORS Error

**Problema**: Erro de CORS ao fazer requisições

**Solução**:
- O backend já está configurado com CORS habilitado
- Se persistir, verifique se o backend tem o pacote `cors` instalado e configurado

### Build Error

**Problema**: Erro ao fazer build para produção

**Solução**:
```bash
# Limpe o cache e reinstale dependências
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📸 Screenshots

### Página Inicial
- Frase do dia em destaque
- Botão para nova frase aleatória
- Cards informativos

### Página de Frases
- Grid de frases com filtros
- Informações de autor e categoria
- Design clean e legível

### Páginas de Autores e Categorias
- Cards interativos
- Expansão para ver frases relacionadas
- Navegação intuitiva

## 🤝 Integração com Backend

Certifique-se de que o backend está rodando antes de iniciar o frontend:

```bash
# Terminal 1 - Backend
cd frases-backend
npm install
npm start
# Backend rodando em http://localhost:3001

# Terminal 2 - Frontend
cd frases-frontend
npm install
npm run dev
# Frontend rodando em http://localhost:3000
```

## 🚀 Deploy

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

## 📄 Licença

MIT

## 👨‍💻 Desenvolvimento

Desenvolvido com ❤️ usando React e Vite.

---

**Dica**: Para melhor experiência, mantenha o backend sempre rodando enquanto usa o frontend!

