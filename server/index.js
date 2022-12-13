import welcomeMessage from "./controller/welcomeMessage.js"
import managementRoutes from "./router/management.js";
import generalRoutes from "./router/general.js";
import mongoDB from "./connections/mongoDB.js";
import clientRoutes from "./router/client.js";
import salesRoutes from "./router/sales.js";
import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

// ! manual data imports for testing purposes...
// import AffiliateStat from "./model/AffiliateStat.js";
// import ProductStat from "./model/ProductStat.js";
// import Transaction from "./model/Transaction.js";
// import OverallStat from "./model/OverallStat.js";
// import Product from "./model/Product.js";
// import User from "./model/User.js";

// import affiliateStat from "./data/statAffiliate.js";
// import overallStat from "./data/statOverall.js";
// import productStat from "./data/statProduct.js";
// import transaction from "./data/transaction.js";
// import product from "./data/product.js";
// import users from "./data/users.js";


// * Server Configuration

dotenv.config();
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// * file can accessible... inside public folder...
app.use(express.static('public'));



// * 🤗🤗🤗 Root Welcome Message... 
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
app.get('/', welcomeMessage);



// * 🔀🔀🔀 Routes
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);



// * 📝📝📝 DB Connection... 
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log('Server Start on port :', PORT, '🟩');
  mongoDB();

  // ! ADD DATA ONLY ONE TIME | if not then its generate ERROR
  // ! #######################################################
  // User.insertMany(users);
  // Product.insertMany(product);
  // OverallStat.insertMany(overallStat);
  // ProductStat.insertMany(productStat);
  // Transaction.insertMany(transaction);
  // AffiliateStat.insertMany(affiliateStat);
  // ! #######################################################
  // ! #######################################################
});