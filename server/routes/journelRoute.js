import { Router } from "express";
import {
  getRecentJournel,
  addJournel,
  getSearchResult,
} from "../controllers/journelController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = Router();

router.get("/search", protect, getSearchResult);
router.get("/", protect, getRecentJournel);
router.post("/", protect, addJournel);

export default router;
