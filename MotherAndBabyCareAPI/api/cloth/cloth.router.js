import {
  controllerGetCloth,
  controllerGetClothById,
  controllerAddCloth,
  controllerUpdateCloth,
  controllerDeleteCloth,
} from "./cloth.controller.js";
import express from "express";
import { verifyToken } from "../../jwtFiles/verifyToken.js";
export const routerCloth = express.Router();

routerCloth.get("/", verifyToken, controllerGetCloth);
routerCloth.get("/:id", verifyToken, controllerGetClothById);
routerCloth.post("/", verifyToken, controllerAddCloth);
routerCloth.put("/:id", verifyToken, controllerUpdateCloth);
routerCloth.delete("/:id", verifyToken, controllerDeleteCloth);
