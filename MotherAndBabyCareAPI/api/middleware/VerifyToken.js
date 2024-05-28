import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const VerifyToken = (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "no token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRECT_KEY);
    req.user = decoded;
    console.log("your user name is " + decoded.username);
    //res.status(200).json({ message: "Authorized" });
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};
