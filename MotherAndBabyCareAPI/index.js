import express from "express";

import { routerFood } from "./api/food/food.router.js";
const app = express();
const port = 3009;

app.use(express.json());
app.use("/food", routerFood);
app.use("/clothing", routerFood);
app.use("/toys", routerFood);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the API " });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
