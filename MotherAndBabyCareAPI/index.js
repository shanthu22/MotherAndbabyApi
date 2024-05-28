import express from "express";
import { GenerateToken } from "./jwtFiles/generateToken.js";
// import { routerFood } from "./api/food/food.router.js";
import { routerFood } from "./api/components/food/food.router.js";
import { routerCloth } from "./api/components/cloth/cloth.router.js";
import { routerBath } from "./api/components/bath/bath.router.js";
import { routerToys } from "./api/components/toys/toys.router.js";
import { routerSuperAdmin } from "./api/components/superAdmin/superAdmin.router.js";
import { Authorization } from "./api/middleware/Auth.js";
import { VerifyToken } from "./api/middleware/VerifyToken.js";
import { ClearLogs } from "./api/middleware/ClearLogs.js";
import CheckRole from "./api/middleware/CheckRole.js";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import logger from "./logger.js";

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
app.post("/login/", Authorization);
app.post("/login/user", Authorization);

//SuperAdmin route
//app.delete("/deleteLogs", VerifyToken, CheckRole("superadmin"), ClearLogs);
app.get("/sqlDump", VerifyToken, (req, res) => {}); //TODO: Implement

//CRUD operations routes
app.use("/food", routerFood);
app.use("/cloth", routerCloth); //TODO: Implement
app.use("/bath", routerBath); //TODO: Implement
app.use("/toys", routerToys); //TODO: Implement

//Superadmin routes
app.use("/superadmin", routerSuperAdmin); //TODO: Implement


// ...
function hehe() {
  //'Empty block statement' code smell
  try{
  }
  catch(e){
  }
  return (
  // ...
  )
  }