import jwt from "jsonwebtoken";

const CheckRole = (requiredRole) => {
  return (req, res, next) => {
    //req.user =
    console.log("verified user role is " + req.user.role);
    try {
      if (req.user.role !== requiredRole) {
        return res
          .status(403)
          .json({ message: "Forbidden: Insufficient permissions" });
      }
    } catch (error) {
      console.log("error in CheckRole \n" + error);
    }

    next();
  };
};

export default CheckRole;
