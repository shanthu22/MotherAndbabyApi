import pool from "../../db.js";

export const serviceGetCloth = (callback) => {
  console.log("serviceGetCloth+++++++++++++++");
  try {
    const results = pool.query("SELECT * FROM clothing");
    return callback(null, results);
  } catch (error) {
    return callback(error, null);
  }
};

export const serviceGetClothById = async (callback, id) => {
  try {
    results = await pool.query(`SELECT * FROM clothing WHERE id=${id}`);
    return callback(null, results);
  } catch (error) {
    return callback(error, null);
  }
};
