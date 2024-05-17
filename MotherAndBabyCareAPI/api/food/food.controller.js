import {
  serviceGetFood,
  serviceGetFoodById,
  serviceAddFood,
  serviceUpdateFood,
  serviceDeleteFood,
} from "./food.service.js";
import logger from "../../logger.js";
/**
 * Retrieves all food items.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */

export const controllerGetFood = (req, res) => {
  serviceGetFood((error, results) => {
    if (error) {
      logger.error(" Food controller--ERROR");
      res.status(500).json({ message: "Error in controller" });
    } else {
      logger.info("Food controller-- retrieved successfully");
      res.status(200).json(results);
    }
  });
};

/**
 * Retrieves a specific food item by its ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const controllerGetFoodById = (req, res) => {
  const id = req.params.id;

  serviceGetFoodById(id, (error, results) => {
    if (error) {
      logger.error(" Food controller--ERROR");
      res.status(500).json({ message: "Error in controller" });
    } else {
      logger.info("Food controller-- retrieved successfully");
      res.status(200).json(results);
    }
  });
};

/**
 * Adds a new food item.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const controllerAddFood = (req, res) => {
  const { name, description, price, quantity, expDate, imagePath } = req.body;
  const data = { name, description, price, quantity, expDate, imagePath };

  serviceAddFood(data, (error, results) => {
    if (error) {
      logger.error(" Food controller--ERROR");
      res.status(500).json({ message: "Error in controller" });
    } else {
      logger.info("Food controller-- retrieved successfully");
      res.status(200).json({ message: "Food added successfully" });
    }
  });
};

/**
 * Updates a food item.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const controllerUpdateFood = (req, res) => {
  const { id, name, description, price, quantity, expDate, imagePath } =
    req.body;
  const data = { id, name, description, price, quantity, expDate, imagePath };
  data.id = req.params.id;

  serviceUpdateFood(data, (error, results) => {
    if (error) {
      logger.error(" Food controller--ERROR");
      res.status(500).json({ message: "Error in controller" });
    }
    logger.info("Food controller-- retrieved successfully");
    res.status(200).json({ message: "Food Updated successfully", data: data });
  });
};

/**
 * Deletes a food item.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const controllerDeleteFood = (req, res) => {
  const id = req.params.id;
  serviceDeleteFood(id, (error, results) => {
    if (error) {
      logger.error(" Food controller--ERROR");
      res.status(500).json({ message: "Error in controller" });
    } else {
      logger.info("Food controller-- retrieved successfully");
      res.status(200).json({ message: "Food Deleted successfully" });
    }
  });
};
