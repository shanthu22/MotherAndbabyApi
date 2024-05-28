import { VerifyToken } from "../../middleware/VerifyToken.js";
import {
  controllerGetFood,
  controllerGetFoodById,
  controllerAddFood,
  controllerUpdateFood,
  controllerDeleteFood,
} from "./food.controller.js";
import express from "express";
//import { verifyToken } from "../../jwtFiles/verifyToken.js";
// import { verifyToken } from "../../Authorization/authorization.js";

export const routerFood = express.Router();
/*
Routes for food items.
*verifyToken is a middleware function that checks if the user is logged in.
*/
routerFood.get("/", VerifyToken, controllerGetFood);
routerFood.get("/:id", VerifyToken, controllerGetFoodById);
routerFood.post("/", VerifyToken, controllerAddFood);
routerFood.put("/:id", VerifyToken, controllerUpdateFood);
routerFood.delete("/:id", VerifyToken, controllerDeleteFood);
