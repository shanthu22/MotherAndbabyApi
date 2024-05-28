import pool from "../../../db.js";
export const serviceGetCloth = async (callback) => {
  console.log("serviceGetCloth+++++++++++++++");

  try {
    const results = await pool.query("SELECT * FROM clothing");
    return callback(null, results);
  } catch (error) {
    return callback(error, null);
  }
};

export const serviceGetClothById = async (id, callback) => {
  try {
    const results = await pool.query(`SELECT * FROM clothing WHERE id=${id}`);
    return callback(null, results);
  } catch (error) {
    return callback(error, null);
  }
};

export const serviceAddCloth = async (data, callback) => {
  try {
    const results = await pool.query(
      `INSERT INTO clothing (name, description, price, quantity, expDate, imagePath)VALUES ("${data.name}", "${data.description}", ${data.price}, ${data.quantity}," ${data.expDate}","${data.imagePath}");`
    );
    callback(null, results);
  } catch (error) {
    callback(error, null);
  }
};

export const serviceUpdateCloth = async (data, callback) => {
  try {
    const results = await pool.query(
      `UPDATE clothing SET name ="${data.name}", description = "${data.description}", price = ${data.price}, quantity = ${data.quantity}, expDate = "${data.expDate}", imagePath = "${data.imagePath}" WHERE id = ${data.id}; `
    );
    callback(null, results);
  } catch (error) {
    callback(error, null);
  }
};

export const serviceDeleteCloth = async (id, callback) => {
  try {
    const results = await pool.query(`DELETE FROM clothing WHERE id=${id}`);
    callback(null, results);
  } catch (error) {
    callback(error, null);
  }
};
