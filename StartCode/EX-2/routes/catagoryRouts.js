import express from "express";
import {
  listCategories,
  getCategory,
  addCategory,
  editCategory,
  removeCategory,
  getArticlesByCategory,
} from "../controllers/workerController.js";

const router = express.Router();

router.get("/", listCategories);
router.get("/:id", getCategory);
router.post("/", addCategory);
router.put("/:id", editCategory);
router.delete("/:id", removeCategory);
router.get("/:categoryId/articles", getArticlesByCategory);

export default router;