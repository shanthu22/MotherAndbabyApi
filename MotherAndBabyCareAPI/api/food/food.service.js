import pool from "../../db.js";

/**
 * Retrieves all food items from the database.
 * @param {function} callback - The callback function to handle the results.
 * @returns {Promise} A promise that resolves with the results or rejects with an error.
 */
export const serviceGetFood = async (callback) => {
  try {
    const results = await pool.query(`SELECT * FROM food;`);
    console.log("food service is called ");
    return callback(null, results);
  } catch (error) {
    return callback(error, null);
  }
};

/**
 * Retrieves a specific food item from the database by its ID.
 * @param {number} id - The ID of the food item to retrieve.
 * @param {function} callback - The callback function to handle the result.
 * @returns {Promise} A promise that resolves with the result or rejects with an error.
 */
export const serviceGetFoodById = async (id, callback) => {
  try {
    const results = await pool.query(`SELECT * FROM food WHERE id= ${id};`);
    return callback(null, results);
  } catch (error) {
    return callback(error, null);
  }
};

/**
 * Adds a new food item to the database.
 * @param {object} data - The data of the food item to add.
 * @param {function} callback - The callback function to handle the result.
 * @returns {Promise} A promise that resolves with the result or rejects with an error.
 */
export const serviceAddFood = async (data, callback) => {
  try {
    const results = await pool.query(
      `INSERT INTO food (name, description, price, quantity, expDate, imagePath) VALUES ("${data.name}", "${data.description}", ${data.price}, ${data.quantity}," ${data.expDate}","${data.imagePath}");`
    );
    callback(null, results);
  } catch (error) {
    callback(error, null);
  }
};

/**
 * Updates a food item in the database.
 * @param {object} data - The updated data of the food item.
 * @param {function} callback - The callback function to handle the result.
 * @returns {Promise} A promise that resolves with the result or rejects with an error.
 */
export const serviceUpdateFood = async (data, callback) => {
  try {
    const results = await pool.query(
      `UPDATE food SET name = "${data.name}", description = "${data.description}", price = ${data.price}, quantity = ${data.quantity}, expDate = "${data.expDate}", imagePath = "${data.imagePath}" WHERE id = ${data.id};`
    );
    callback(null, results);
  } catch (error) {
    callback(error, null);
  }
};

/**
 * Deletes a food item from the database.
 * @param {number} id - The ID of the food item to delete.
 * @param {function} callback - The callback function to handle the result.
 * @returns {Promise} A promise that resolves with the result or rejects with an error.
 */
export const serviceDeleteFood = async (id, callback) => {
  try {
    const results = await pool.query(`DELETE FROM food WHERE id = ${id};`);
    callback(null, results);
  } catch (error) {
    callback(error, null);
  }
};
