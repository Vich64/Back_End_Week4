import express from "express";
import {
  listArticles,
  getArticle,
  addArticle,
  editArticle,
  removeArticle
} from "../controllers/workerController.js";

const router = express.Router();

router.get("/", listArticles);
router.get("/:id", getArticle);
router.post("/", addArticle);
router.put("/:id", editArticle);
router.delete("/:id", removeArticle);

export default router;