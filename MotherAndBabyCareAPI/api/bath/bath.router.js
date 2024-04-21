import {
  controllerGetBath,
  controllerGetBathById,
  controllerAddBath,
  controllerUpdateBath,
  controllerDeleteBath,
} from "./bath.controller.js";

import express from "express";
import { verifyToken } from "../../jwtFiles/verifyToken.js";
export const routerBath = express.Router();

routerBath.get("/", verifyToken, controllerGetBath);
routerBath.get("/:id", verifyToken, controllerGetBathById);
routerBath.post("/", verifyToken, controllerAddBath);
routerBath.put("/:id", verifyToken, controllerUpdateBath);
routerBath.delete("/:id", verifyToken, controllerDeleteBath);
