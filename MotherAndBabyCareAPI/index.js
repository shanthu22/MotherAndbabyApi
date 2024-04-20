import express from "express";
import { GenerateToken } from "./jwtFiles/generateToken.js";
import { verifyToken } from "./jwtFiles/verifyToken.js";
import { routerFood } from "./api/food/food.router.js";
import jwt from "jsonwebtoken";

const app = express();
const port = 3009;
// const secretKey = "secretkey";
// const users = [
//   { id: 1, username: "test1", password: "123456789" },
//   { id: 2, username: "test2", password: "123456789" },
// ];
app.use(express.json());
// app.use("/food", routerFood);
// app.use("/clothing", routerFood);
// app.use("/toys", routerFood);

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

// const verifyToken = (req, res, next) => {
//   const token =
//     req.headers.authorization && req.headers.authorization.split(" ")[1];
//   if (!token) {
//     return res.status(401).json({ message: "no token provided" });
//   }

//   jwt.verify(token, secretKey, (error, decoded) => {
//     if (error) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }
//     req.user = decoded;
//     // Save decoded user information in request object
//     // console.log("u reached here ");
//     next();
//     // res.status(200).json({ message: "Token verified" });
//   });
// };

// Protected route
// Protected route with error handling
app.get("/profile", verifyToken, (req, res) => {
  try {
    console.log("u reached here ");
    res.status(200).json({ message: "Welcome to your profile" }); //, user: req.user
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});
app.post("/login", GenerateToken);
app.use("/food", routerFood);
app.use("/clothing", routerFood);
app.use("/toys", routerFood);
