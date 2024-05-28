import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export class GenerateJwtToken {
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
