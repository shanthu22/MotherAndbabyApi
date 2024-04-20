import {
  controllerGetFood,
  controllerGetFoodById,
  controllerAddFood,
  controllerUpdateFood,
  controllerDeleteFood,
} from "./food.controller.js";
import express from "express";
import { verifyToken } from "../../jwtFiles/verifyToken.js";
export const routerFood = express.Router();
/*
Routes for food items.
*verifyToken is a middleware function that checks if the user is logged in.
*/
routerFood.get("/", verifyToken, controllerGetFood);
routerFood.get("/:id", verifyToken, controllerGetFoodById);
routerFood.post("/", verifyToken, controllerAddFood);
routerFood.put("/:id", verifyToken, controllerUpdateFood);
routerFood.delete("/:id", verifyToken, controllerDeleteFood);
