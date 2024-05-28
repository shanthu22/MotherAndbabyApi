import {
  controllerGetToys,
  controllerGetToysById,
  controllerAddToys,
  controllerUpdateToys,
  controllerDeleteToys,
} from "./toys.controller.js";
import express from "express";
import { VerifyToken } from "../../middleware/VerifyToken.js";
export const routerToys = express.Router();

routerToys.get("/", VerifyToken, controllerGetToys);
routerToys.get("/:id", VerifyToken, controllerGetToysById);
routerToys.post("/", VerifyToken, controllerAddToys);
routerToys.put("/:id", VerifyToken, controllerUpdateToys);
routerToys.delete("/:id", VerifyToken, controllerDeleteToys);
