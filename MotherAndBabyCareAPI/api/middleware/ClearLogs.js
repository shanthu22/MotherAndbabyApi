import fs from "fs";
const filepath = "./logs/app.log";

export const ClearLogs = (req, res) => {
  fs.truncate(filepath, 0, (err) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ message: "Failed to clear log file", err: err });
    }
    res.status(200).json({ message: "Log file cleared successfully" });
  });
};
