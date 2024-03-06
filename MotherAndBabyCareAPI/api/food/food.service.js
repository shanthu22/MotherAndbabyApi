import pool from "../../db.js";
//This is the serviceGetFood function that will be called when the ControlerFood is called.
//It returns a callback function that takes an error and results as parameters.
export const serviceGetFood = async (callback) => {
  console.log("serviceGetFood+++++++++++++++");
  try {
    const results = await pool.query(`SELECT * FROM ${"food"};`);
    return callback(null, results);
  } catch (error) {
    return callback(error, null);
  }
};

export const serviceGetFoodById = async (id, callback) => {
  try {
    console.log(`###########SELECT * FROM FOOD WHERE id= ${id})`);
    const results = await pool.query(`SELECT * FROM food WHERE id= ${id};`);
    return callback(null, results);
  } catch (error) {
    return callback(error, null);
  }
};
export const serviceAddFood = async (data, callback) => {
  try {
    console.log("++++++++++++++++++++++++++++++++++++++");
    console.log(data);
    console.log(
      `INSERT INTO food (name, description, price, quantity, expDate, photoUrl) VALUES ("${data.name}", "${data.description}", ${data.price}, ${data.quantity}," ${data.expDate}","${data.photoUrl}");`
    );

    //correct one
    //INSERT INTO food (name, description, price, quantity, expDate)VALUES ('Baby Onesie', 'Soft cotton onesie for infants', 12.99, 50, '2024-12-31');

    const results = pool.query(
      `INSERT INTO food (name, description, price, quantity, expDate, photoUrl) VALUES ("${data.name}", "${data.description}", ${data.price}, ${data.quantity}," ${data.expDate}","${data.photoUrl}");`
    );
    callback(null, results);
  } catch (error) {
    //console.log("Error:", error);
    callback(error, null);
  }
};

export const serviceUpdateFood = async (data, callback) => {
  try {
    const results = await pool.query(
      `UPDATE food SET name = "${data.name}", description = "${data.description}", price = ${data.price}, quantity = ${data.quantity}, expDate = "${data.expDate}", photoUrl = "${data.photoUrl}" WHERE id = ${data.id};`
    );
  } catch (error) {
    console.log("Error:", error);
  }
};

export const serviceDeleteFood = async (id, callback) => {
  try {
    const results = await pool.query(`DELETE FROM food WHERE id = ${id};`);
    callback(null, results);
  } catch (error) {
    console.log("Error:", error);
    callback(error, null);
  }
};
