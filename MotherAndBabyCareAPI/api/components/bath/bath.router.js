import {
  controllerGetBath,
  controllerGetBathById,
  controllerAddBath,
  controllerUpdateBath,
  controllerDeleteBath,
} from "./bath.controller.js";

import express from "express";

import { VerifyToken } from "../../middleware/VerifyToken.js";
export const routerBath = express.Router();

routerBath.get("/", VerifyToken, controllerGetBath);
routerBath.get("/:id", VerifyToken, controllerGetBathById);
routerBath.post("/", VerifyToken, controllerAddBath);
routerBath.put("/:id", VerifyToken, controllerUpdateBath);
routerBath.delete("/:id", VerifyToken, controllerDeleteBath);
