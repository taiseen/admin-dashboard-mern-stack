import { getUserPerformance } from "../controller/management/getUserPerformance.js";
import { getAdmins } from "../controller/management/getAdmins.js";
import express from "express";

const router = express.Router();

router.get("/admins", getAdmins);
router.get("/performance/:id", getUserPerformance);

export default router;
