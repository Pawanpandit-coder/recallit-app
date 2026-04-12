import express from "express";
import {
  addRecall,
  getAllRecall,
  getSearchResult,
} from "../controllers/recallController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/search", protect, getSearchResult);
router.get("/", protect, getAllRecall);
router.post("/", protect, addRecall);

export default router;
