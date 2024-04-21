import {
  controllerGetToys,
  controllerGetToysById,
  controllerAddToys,
  controllerUpdateToys,
  controllerDeleteToys,
} from "./toys.controller.js";
import express from "express";
import { verifyToken } from "../../jwtFiles/verifyToken.js";
export const routerToys = express.Router();

routerToys.get("/", verifyToken, controllerGetToys);
routerToys.get("/:id", verifyToken, controllerGetToysById);
routerToys.post("/", verifyToken, controllerAddToys);
routerToys.put("/:id", verifyToken, controllerUpdateToys);
routerToys.delete("/:id", verifyToken, controllerDeleteToys);
