import {
  serviceGetFood,
  serviceGetFoodById,
  serviceAddFood,
  serviceUpdateFood,
  serviceDeleteFood,
} from "./food.service.js";

//This is the controllerGetFood function that will be called when the routeFood:GET is called.
export const controllerGetFood = (req, res) => {
  console.log("controllerGetFood+++++++++++++++");
  serviceGetFood((error, results) => {
    if (error) {
      //console.error("Error:", err);
      res.status(500).json({ message: "Error in controller" });
    } else {
      console.log(results);
      res.status(200).json(results);
    }
  });
};

export const controllerGetFoodById = (req, res) => {
  const id = req.params.id;
  console.log("Id++++++++++++" + id);
  serviceGetFoodById(id, (error, results) => {
    if (error) {
      res.status(500).json({ message: "Error in controller" });
    } else {
      res.status(200).json(results);
    }
  });
};

//controllerGetFood();
export const controllerAddFood = (req, res) => {
  const { name, description, price, quantity, expDate, photoUrl } = req.body;
  const data = { name, description, price, quantity, expDate, photoUrl };
  // console.log("controllerAddFood+++++++++++++++" + name);
  serviceAddFood(data, (error, results) => {
    if (error) {
      res.status(500).json({ message: "Error in controller" });
    } else {
      res.status(200).json(results);
    }
  });
};

export const controllerUpdateFood = (req, res) => {
  const { id, name, description, price, quantity, expDate, photoUrl } =
    req.body;

  const data = { id, name, description, price, quantity, expDate, photoUrl };
  data.id = req.params.id;
  serviceUpdateFood(data, (error, results) => {
    if (error) {
      res.status(500).json({ message: "Error in controller" });
    } else {
      res.status(200).json(results);
    }
  });
};

export const controllerDeleteFood = (req, res) => {
  const id = req.params.id;
  serviceDeleteFood(id, (error, results) => {
    if (error) { 
      res.status(500).json({ message: "Error in controller" });
    } else {
      res.status(200).json(results);
    }
  });
};
