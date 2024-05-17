import express from "express";
import { GenerateToken } from "./jwtFiles/generateToken.js";
import { routerFood } from "./api/food/food.router.js";
import { routerCloth } from "./api/cloth/cloth.router.js";
import { routerBath } from "./api/bath/bath.router.js";
import { routerToys } from "./api/toys/toys.router.js";
import authorization from "./Authorization/authorization.js";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import logger from "./logger.js";
logger.info("Hello, world!");

dotenv.config();

const app = express();
const port = 3001;
app.use(express.json());
// Define allowed origins

// [
//   "http://localhost:3002",
//   "https://motherandbabycare.lk",
// ];
const allowedOrigins = process.env.Allowed_hosts.split(",");
app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the origin is in the allowed origins list or if it is undefined (no origin)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
// Handle preflight requests
app.options("*", cors());
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Mother and Baby API " });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Protected route with error handling
app.post("/login/", GenerateToken);
app.post("/login/user", authorization);

app.use("/food", routerFood);
app.use("/cloth", routerCloth);
app.use("/bath", routerBath);
app.use("/toys", routerToys);
