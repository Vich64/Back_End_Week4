import {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
  getAllJournalists,
  getJournalistById,
  createJournalist,
  updateJournalist,
  deleteJournalist,
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../models/data.js";


export function listArticles(req, res) {
  res.json(getAllArticles());
}



export function getArticle(req, res) {
  const id = parseInt(req.params.id);
  const article = getArticleById(id);
  if (!article) return res.status(404).json({ error: "Article not found" });
  res.json(article);
}


export function addArticle(req, res) {
  const { title, content, journalistId, categoryId } = req.body;
  if (!title || !content || !journalistId || !categoryId) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const newArticle = createArticle({
    title,
    content,
    journalistId,
    categoryId,
  });
  res.status(201).json(newArticle);
}

export function editArticle(req, res) {
  const id = parseInt(req.params.id);
  const updated = updateArticle(id, req.body);
  if (!updated) return res.status(404).json({ error: "Article not found" });
  res.json(updated);
}

export function removeArticle(req, res) {
  const id = parseInt(req.params.id);
  const deleted = deleteArticle(id);
  if (!deleted) return res.status(404).json({ error: "Article not found" });
  res.status(204).send();
}

export function listJournalists(req, res) {
  res.json(getAllJournalists());
}

export function getJournalist(req, res) {
  const id = parseInt(req.params.id);
  const journalist = getJournalistById(id);
  if (!journalist)
    return res.status(404).json({ error: "Journalist not found" });
  res.json(journalist);
}

export function addJournalist(req, res) {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }
  const newJournalist = createJournalist({ name, email });
  res.status(201).json(newJournalist);
}

export function editJournalist(req, res) {
  const id = parseInt(req.params.id);
  const updated = updateJournalist(id, req.body);
  if (!updated) return res.status(404).json({ error: "Journalist not found" });
  res.json(updated);
}

export function removeJournalist(req, res) {
  const id = parseInt(req.params.id);
  const deleted = deleteJournalist(id);
  if (!deleted) return res.status(404).json({ error: "Journalist not found" });
  res.status(204).send();
}

export function listCategories(req, res) {
  res.json(getAllCategories());
}

export function getCategory(req, res) {
  const id = parseInt(req.params.id);
  const category = getCategoryById(id);
  if (!category) return res.status(404).json({ error: "Category not found" });
  res.json(category);
}

export function addCategory(req, res) {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  const newCategory = createCategory({ name });
  res.status(201).json(newCategory);
}

export function editCategory(req, res) {
  const id = parseInt(req.params.id);
  const updated = updateCategory(id, req.body);
  if (!updated) return res.status(404).json({ error: "Category not found" });
  res.json(updated);
}

export function removeCategory(req, res) {
  const id = parseInt(req.params.id);
  const deleted = deleteCategory(id);
  if (!deleted) return res.status(404).json({ error: "Category not found" });
  res.status(204).send();
}

export function getArticlesByCategory(req, res) {
  const categoryId = parseInt(req.params.categoryId);
  const articles = getAllArticles().filter((a) => a.categoryId === categoryId);
  res.json(articles);
}

export function getArticlesByJournalist(req, res) {
  const journalistId = parseInt(req.params.journalistId);
  const articles = getAllArticles().filter(
    (a) => a.journalistId === journalistId
  );
  res.json(articles);
}