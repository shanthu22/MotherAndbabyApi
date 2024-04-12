// app.js
// import express from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// const app = express();
// const port = 3000;

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "1234567890",
  database: "motherandbabycare",
  port: 3306,
});
export default pool;
// Function to execute queries
const query = async (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
};

// Example usage
const testmyshit = async () => {
  try {
    // Execute a query
    const results = await query("SELECT * FROM food");
    console.log(results);
    // pool.query((error, data) => {
    //   // console.log(results);
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log("Connected to the database");
    //   }
    // });
    // Perform other operations...
  } catch (error) {
    console.error("Error:", error);
  }
};

// connection.connect((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Connected to the database");
//   }
// });

// export default connection;
// testmyshit();
