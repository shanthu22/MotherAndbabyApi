import {
  serviceGetToys,
  serviceGetToysById,
  serviceAddToys,
  serviceUpdateToys,
  serviceDeleteToys,
} from "./toys.service.js";

export const controllerGetToys = (req, res) => {
  serviceGetToys((error, results) => {
    if (error) {
      res.status(500).json({ message: "Error in controller" });
    } else {
      res.status(200).json(results);
    }
  });
};

export const controllerGetToysById = (req, res) => {
  const id = req.params.id;
  serviceGetToysById(id, (error, results) => {
    if (error) {
      res.status(500).json({ message: "Error in controller" });
    } else {
      res.status(200).json(results);
    }
  });
};

export const controllerAddToys = (req, res) => {
  const { name, description, price, quantity, imagePath } = req.body;
  const data = { name, description, price, quantity, imagePath };
  serviceAddToys(data, (error, results) => {
    if (error) {
      res.status(500).json({ message: "Error in controller" });
    } else {
      res.status(200).json({ message: "Toys added successfully" });
    }
  });
};

export const controllerUpdateToys = (req, res) => {
  const { id, name, description, price, quantity, expDate, imagePath } =
    req.body;
  const data = { id, name, description, price, quantity, expDate, imagePath };
  data.id = req.params.id;

  serviceUpdateToys(data, (error, results) => {
    if (error) {
      res.status(500).json({ message: "Error in controller" });
    } else {
      res.status(200).json({ message: "Toys updated successfully" });
    }
  });
};

export const controllerDeleteToys = (req, res) => {
  const id = req.params.id;
  serviceDeleteToys(id, (error, results) => {
    if (error) {
      res.status(500).jsom({ message: "Error in controller" });
    } else {
      res.status(200).json({ message: "Toys Deleted successfully" });
    }
  });
};
