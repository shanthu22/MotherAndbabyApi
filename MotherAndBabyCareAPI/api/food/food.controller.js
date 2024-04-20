import {
  serviceGetFood,
  serviceGetFoodById,
  serviceAddFood,
  serviceUpdateFood,
  serviceDeleteFood,
} from "./food.service.js";
/**
 * Retrieves all food items.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */

export const controllerGetFood = (req, res) => {
  serviceGetFood((error, results) => {
    if (error) {
      res.status(500).json({ message: "Error in controller" });
    } else {
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
      res.status(500).json({ message: "Error in controller" });
    } else {
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
  const { name, description, price, quantity, expDate, photoUrl } = req.body;
  const data = { name, description, price, quantity, expDate, photoUrl };

  serviceAddFood(data, (error, results) => {
    if (error) {
      res.status(500).json({ message: "Error in controller" });
    } else {
      res.status(200).json(results);
    }
  });
};

/**
 * Updates a food item.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const controllerUpdateFood = (req, res) => {
  const { id, name, description, price, quantity, expDate, photoUrl } =
    req.body;
  const data = { id, name, description, price, quantity, expDate, photoUrl };
  data.id = req.params.id;

  serviceUpdateFood(data, (error, results) => {
    if (error) {
      res.status(500).json({ message: "Error in controller" });
    }
    res.status(200).json({ message: "Food updated successfully" });
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
      res.status(500).json({ message: "Error in controller" });
    } else {
      res.status(200).json({ message: "Food updated successfully" });
    }
  });
};
