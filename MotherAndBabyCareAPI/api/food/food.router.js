import {
  controllerGetFood,
  controllerGetFoodById,
  controllerAddFood,
  controllerUpdateFood,
  controllerDeleteFood,
} from "./food.controller.js";
import express from "express";

export const routerFood = express.Router();

routerFood.get("/", controllerGetFood);
routerFood.get("/:id", controllerGetFoodById);
routerFood.post("/", controllerAddFood);
routerFood.put("/:id", controllerUpdateFood);
routerFood.delete("/:id", controllerDeleteFood);
