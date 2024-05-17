import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

class GenerateJwtToken {
  GenerateShortTermToken(user, expiresIn) {
    //Generate short term token
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRECT_KEY,

      { expiresIn: expiresIn }
    );
    return token;
  }
  GenerateLongTermToken(user, expiresIn) {
    //Generate long term token
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRECT_KEY,

      { expiresIn: expiresIn }
    );
    return token;
  }
}

const users = [
  { id: 1, username: "test", password: "123", role: "admin" },
  { id: 2, username: "test2", password: "123", role: "user" },
];

const authorization = (req, res, next) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }
  const GenToken = new GenerateJwtToken();
  console.log("the Userrole is " + user.role);
  if (user.role === "admin") {
    res
      .status(200)
      .json({ token: GenToken.GenerateLongTermToken(user, "182d") });
  } else if (user.role === "user") {
    GenToken.GenerateShortTermToken(user, "1h");
    res
      .status(200)
      .json({ token: GenToken.GenerateShortTermToken(user, "1h") });
  } else {
    res.status(401).json({ message: "Invalid Credentials" });
  }
};
export default authorization;
