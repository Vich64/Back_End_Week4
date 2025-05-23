// data.js

const journalists = [
    { id: 1, name: "Alice Johnson", email: "alice.johnson@newsco.com" },
    { id: 2, name: "Bob Martinez", email: "bob.martinez@newsco.com" },
    { id: 3, name: "Clara Lee", email: "clara.lee@newsco.com" }
];

const categories = [
    { id: 1, name: "Politics" },
    { id: 2, name: "Technology" },
    { id: 3, name: "Sports" }
];

const articles = [
    {
        id: 1,
        title: "Election Results 2025",
        content: "The final results of the 2025 elections are out...",
        journalistId: 1,
        categoryId: 1
    },
    {
        id: 2,
        title: "New Smartphone Breakthrough",
        content: "A revolutionary phone with foldable glass has been released...",
        journalistId: 2,
        categoryId: 2
    },
    {
        id: 3,
        title: "Champions League Highlights",
        content: "Here's what you missed in last night's Champions League game...",
        journalistId: 3,
        categoryId: 3
    },
    {
        id: 4,
        title: "Tech Giants Face Congress",
        content: "Major tech CEOs testify on regulation and privacy...",
        journalistId: 1,
        categoryId: 2
    },
    {
        id: 5,
        title: "Olympics 2028: Cities Shortlisted",
        content: "These are the cities that made the final cut...",
        journalistId: 3,
        categoryId: 3
    }
];

export function getAllArticles() {
  return articles;
}

export function getArticleById(id) {
  return articles.find((a) => a.id === id);
}

export function createArticle(data) {
  const newArticle = {
    id: articles.length ? articles[articles.length - 1].id + 1 : 1,
    ...data,
  };
  articles.push(newArticle);
  return newArticle;
}

export function updateArticle(id, data) {
  const article = articles.find((a) => a.id === id);
  if (!article) return null;
  Object.assign(article, data);
  return article;
}

export function deleteArticle(id) {
  const idx = articles.findIndex((a) => a.id === id);
  if (idx === -1) return false;
  articles.splice(idx, 1);
  return true;
}

// --- CRUD for Journalists ---
export function getAllJournalists() {
  return journalists;
}

export function getJournalistById(id) {
  return journalists.find((j) => j.id === id);
}

export function createJournalist(data) {
  const newJournalist = {
    id: journalists.length ? journalists[journalists.length - 1].id + 1 : 1,
    ...data,
  };
  journalists.push(newJournalist);
  return newJournalist;
}

export function updateJournalist(id, data) {
  const journalist = journalists.find((j) => j.id === id);
  if (!journalist) return null;
  Object.assign(journalist, data);
  return journalist;
}

export function deleteJournalist(id) {
  const idx = journalists.findIndex((j) => j.id === id);
  if (idx === -1) return false;
  journalists.splice(idx, 1);
  return true;
}

// --- CRUD for Categories ---
export function getAllCategories() {
  return categories;
}

export function getCategoryById(id) {
  return categories.find((c) => c.id === id);
}

export function createCategory(data) {
  const newCategory = {
    id: categories.length ? categories[categories.length - 1].id + 1 : 1,
    ...data,
  };
  categories.push(newCategory);
  return newCategory;
}

export function updateCategory(id, data) {
  const category = categories.find((c) => c.id === id);
  if (!category) return null;
  Object.assign(category, data);
  return category;
}

export function deleteCategory(id) {
  const idx = categories.findIndex((c) => c.id === id);
  if (idx === -1) return false;
  categories.splice(idx, 1);
  return true;
}
