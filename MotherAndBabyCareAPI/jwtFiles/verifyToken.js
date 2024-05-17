import jwt from "jsonwebtoken";
/*
 * This function verifies the token sent by the client.
 * @param req - request object
 */

export const verifyToken = (req, res, next) => {
  const secretKey = "secretkey";
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "no token provided" });
  }

  jwt.verify(token, secretKey, (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = decoded;
    console.log("your user name is " + user.username);

    next();
  });
};
