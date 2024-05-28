import { GenerateJwtToken } from "./GenerateToken.js";
import logger from "../../logger.js";
const users = [
  { id: 1, username: "sad", password: "123", role: "superadmin" },
  { id: 1, username: "ad", password: "123", role: "admin" },
  { id: 2, username: "tuser", password: "123", role: "user" },
];

export const Authorization = (req, res, next) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }
  const GenToken = new GenerateJwtToken();
  // console.log("the User's role is " + user.role);
  if (user.role === "admin" || user.role === "superadmin") {
    logger.info(
      "Token generated for " + user.username + " with role " + user.role
    );
    res
      .status(200)
      .json({ token: GenToken.GenerateLongTermToken(user, "182d") });
  } else if (user.role === "user") {
    logger.info(
      "Token generated for " + user.username + " with role " + user.role
    );
    GenToken.GenerateShortTermToken(user, "1h");
    res
      .status(200)
      .json({ token: GenToken.GenerateShortTermToken(user, "1h") });
  } else {
    res.status(401).json({ message: "Invalid Credentials" });
  }
};
