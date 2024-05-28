import {
  controllerGetCloth,
  controllerGetClothById,
  controllerAddCloth,
  controllerUpdateCloth,
  controllerDeleteCloth,
} from "./cloth.controller.js";
import express from "express";

import { VerifyToken } from "../../middleware/VerifyToken.js";
export const routerCloth = express.Router();

routerCloth.get("/", VerifyToken, controllerGetCloth);
routerCloth.get("/:id", VerifyToken, controllerGetClothById);
routerCloth.post("/", VerifyToken, controllerAddCloth);
routerCloth.put("/:id", VerifyToken, controllerUpdateCloth);
routerCloth.delete("/:id", VerifyToken, controllerDeleteCloth);
