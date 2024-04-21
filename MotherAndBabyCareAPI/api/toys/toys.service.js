import pool from "../../db.js";

export const serviceGetToys = async (callback) => {
  try {
    const results = await pool.query("SELECT * FROM toys");
    return callback(null, results);
  } catch (error) {
    return callback(error, null);
  }
};

export const serviceGetToysById = async (id, callback) => {
  try {
    const results = await pool.query(`SELECT * FROM toys WHERE id=${id}`);
    return callback(null, results);
  } catch (error) {
    return callback(error, null);
  }
};

export const serviceAddToys = async (data, callback) => {
  try {
    const results = await pool.query(
      `INSERT INTO toys (name, description, price, quantity,  photoUrl)VALUES ("${data.name}", "${data.description}", ${data.price}, ${data.quantity},"${data.photoUrl}");`
    );
    callback(null, results);
  } catch (error) {
    callback(error, null);
  }
};

export const serviceUpdateToys = async (data, callback) => {
  try {
    const results = await pool.query(
      `UPDATE toys SET name ="${data.name}", description = "${data.description}", price = ${data.price}, quantity = ${data.quantity}, photoUrl = "${data.photoUrl}" WHERE id = ${data.id}; `
    );
    callback(null, results);
  } catch (error) {
    callback(error, null);
  }
};

export const serviceDeleteToys = async (id, callback) => {
  try {
    const results = await pool.query(`DELETE FROM toys WHERE id=${id}`);
    callback(null, results);
  } catch (error) {
    callback(error, null);
  }
};
