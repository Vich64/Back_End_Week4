import express from "express";
import {
  listJournalists,
  getJournalist,
  addJournalist,
  editJournalist,
  removeJournalist,
  getArticlesByJournalist,
} from "../controllers/workerController.js";

const router = express.Router();

router.get("/", listJournalists);
router.get("/:id", getJournalist);
router.post("/", addJournalist);
router.put("/:id", editJournalist);
router.delete("/:id", removeJournalist);

router.get("/:journalistId/articles", getArticlesByJournalist);

export default router;