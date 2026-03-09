import { Router } from "express";

import { getAllNews } from "../controllers/newsController.js";

const router = Router();

router.route("/").get(getAllNews);

export default router;