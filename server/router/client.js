import { getTransactions } from "../controller/client/getTransactions.js";
import { getCustomers } from "../controller/client/getCustomers.js";
import { getGeography } from "../controller/client/getGeography.js";
import { getProducts } from "../controller/client/getProducts.js";
import express from "express";

const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);

export default router;