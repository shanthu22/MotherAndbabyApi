import {
  serviceGetCloth,
  serviceGetClothById,
  serviceAddCloth,
  serviceUpdateCloth,
  serviceDeleteCloth,
} from "./cloth.service.js";

export const controllerGetCloth = (req, res) => {
  serviceGetCloth((error, results) => {
    if (error) {
      res.status(500).json({ message: "Error in controller" });
    } else {
      res.status(200).json(results);
    }
  });
};

export const controllerGetClothById = (req, res) => {
  const id = req.params.id;
  serviceGetClothById(id, (error, results) => {
    if (error) {
      res.status(500).json({ message: "Error in controller" });
    } else {
      res.status(200).json(results);
    }
  });
};

export const controllerAddCloth = (req, res) => {
  const { name, description, price, quantity, expDate, photoUrl } = req.body;
  const data = { name, description, price, quantity, expDate, photoUrl };
  serviceAddCloth(data, (error, results) => {
    if (error) {
      res.status(500).json({ message: "Error in controller" });
    } else {
      res.status(200).json({ message: "Cloth added successfully" });
    }
  });
};

export const controllerUpdateCloth = (req, res) => {
  const { id, name, description, price, quantity, expDate, photoUrl } =
    req.body;
  const data = { id, name, description, price, quantity, expDate, photoUrl };
  data.id = req.params.id;

  serviceUpdateCloth(data, (error, results) => {
    if (error) {
      res.status(500).json({ message: "Error in controller" });
    } else {
      res.status(200).json({ message: "Cloth updated successfully" });
    }
  });
};

export const controllerDeleteCloth = (req, res) => {
  const id = req.params.id;
  serviceDeleteCloth(id, (error, results) => {
    if (error) {
      res.status(500).jsom({ message: "Error in controller" });
    } else {
      res.status(200).json({ message: "Cloth Deleted successfully" });
    }
  });
};
