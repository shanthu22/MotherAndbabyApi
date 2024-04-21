// import {
//   serviceGetCloth,
//   serviceGetClothById,
//   serviceAddCloth,
//   serviceUpdateCloth,
//   serviceDeleteCloth,
// } from "./cloth.service.js";
import {
  serviceGetBath,
  serviceAddBath,
  serviceUpdateBath,
  serviceGetBathById,
  serviceDeleteBath,
} from "./bath.service.js";
export const controllerGetBath = (req, res) => {
  serviceGetBath((error, results) => {
    if (error) {
      res.status(500).json({ message: "Error in controller" });
    } else {
      res.status(200).json(results);
    }
  });
};

export const controllerGetBathById = (req, res) => {
  const id = req.params.id;
  serviceGetBathById(id, (error, results) => {
    if (error) {
      res.status(500).json({ message: "Error in controller" });
    } else {
      res.status(200).json(results);
    }
  });
};

export const controllerAddBath = (req, res) => {
  const { name, description, price, quantity, expDate, photoUrl } = req.body;
  const data = { name, description, price, quantity, expDate, photoUrl };
  serviceAddBath(data, (error, results) => {
    if (error) {
      res.status(500).json({ message: "Error in controller" });
    } else {
      res.status(200).json({ message: "Bath added successfully" });
    }
  });
};

export const controllerUpdateBath = (req, res) => {
  const { id, name, description, price, quantity, expDate, photoUrl } =
    req.body;
  const data = { id, name, description, price, quantity, expDate, photoUrl };
  data.id = req.params.id;

  serviceUpdateBath(data, (error, results) => {
    if (error) {
      res.status(500).json({ message: "Error in controller" });
    } else {
      res.status(200).json({ message: "Bath updated successfully" });
    }
  });
};

export const controllerDeleteBath = (req, res) => {
  const id = req.params.id;
  serviceDeleteBath(id, (error, results) => {
    if (error) {
      res.status(500).jsom({ message: "Error in controller" });
    } else {
      res.status(200).json({ message: "Bath Deleted successfully" });
    }
  });
};
