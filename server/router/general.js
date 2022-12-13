import { getDashboardStats} from "../controller/general/getDashboardStats.js";
import { getUser} from "../controller/general/getUser.js";
import express from "express";

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);

export default router;
