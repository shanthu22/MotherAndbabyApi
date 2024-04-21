import express from "express";
import { GenerateToken } from "./jwtFiles/generateToken.js";
import { routerFood } from "./api/food/food.router.js";
import { routerCloth } from "./api/cloth/cloth.router.js";
import { routerBath } from "./api/bath/bath.router.js";
import { routerToys } from "./api/toys/toys.router.js";
import jwt from "jsonwebtoken";

const app = express();
const port = 3010;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Mother and Baby API " });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post("/test", (req, res) => {
  const { username, password } = req.body;
  // Find user by username and password
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Generate JWT token
  const token = jwt.sign({ id: user.id, username: user.username }, secretKey, {
    expiresIn: "1h",
  });
  res.status(200).json({ token: token });
});

// Protected route with error handling
app.post("/login", GenerateToken);
app.use("/food", routerFood);
app.use("/cloth", routerCloth);
app.use("/bath", routerBath);
app.use("/toys", routerToys);
