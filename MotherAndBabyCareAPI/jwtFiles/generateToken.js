import jwt from "jsonwebtoken";
const users = [
  { id: 1, username: "test", password: "123", role: "admin" },
  { id: 2, username: "test2", password: "123", role: "user" },
];
//!get this from ENV
const secretKey = "secretkey";

export const GenerateToken = (req, res, next) => {
  const { username, password } = req.body;
  // * assign req.body to username and password of user object

  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  console.log(user.role);
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }
  //* Generate JWT token
  const token = jwt.sign(
    { id: user.id, username: user.username },
    secretKey
    //   {
    //   expiresIn: "1h",
    // }
  );
  res.status(200).json({ token: token });
};
