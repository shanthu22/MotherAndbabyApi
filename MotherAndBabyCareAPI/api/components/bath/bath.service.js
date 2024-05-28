import pool from "../../../db.js";
export const serviceGetBath = async (callback) => {
  try {
    const results = await pool.query("SELECT * FROM bath");
    return callback(null, results);
  } catch (error) {
    return callback(error, null);
  }
};

export const serviceGetBathById = async (id, callback) => {
  try {
    const results = await pool.query(`SELECT * FROM bath WHERE id=${id}`);
    return callback(null, results);
  } catch (error) {
    return callback(error, null);
  }
};

export const serviceAddBath = async (data, callback) => {
  try {
    const results = await pool.query(
      `INSERT INTO bath (name, description, price, quantity, expDate, imagePath)VALUES ("${data.name}", "${data.description}", ${data.price}, ${data.quantity}," ${data.expDate}","${data.imagePath}");`
    );
    callback(null, results);
  } catch (error) {
    callback(error, null);
  }
};

export const serviceUpdateBath = async (data, callback) => {
  try {
    const results = await pool.query(
      `UPDATE bath SET name ="${data.name}", description = "${data.description}", price = ${data.price}, quantity = ${data.quantity}, expDate = "${data.expDate}", imagePath = "${data.imagePath}" WHERE id = ${data.id}; `
    );
    callback(null, results);
  } catch (error) {
    callback(error, null);
  }
};

export const serviceDeleteBath = async (id, callback) => {
  try {
    const results = await pool.query(`DELETE FROM bath WHERE id=${id}`);
    callback(null, results);
  } catch (error) {
    callback(error, null);
  }
};
