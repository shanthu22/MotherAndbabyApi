import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

/**
 * Creates a connection pool for MySQL database.
 * @typedef {Object} Pool
 * @property {number} connectionLimit - The maximum number of connections allowed in the pool.
 * @property {string} host - The hostname of the database server.
 * @property {string} user - The username for authenticating with the database server.
 * @property {string} password - The password for authenticating with the database server.
 * @property {string} database - The name of the database to connect to.
 * @property {number} port - The port number of the database server.
 */

class Pool {
  constructor() {
    if (!Pool.instance) {
      console.log(process.env.DB_HOST);
      console.log(process.env.DB_USER);
      console.log(process.env.DB_PASSWORD);
      console.log(process.env.DB_NAME);
      console.log(process.env.DB_PORT);
      this.connectionLimit = 10;
      this.host = process.env.DB_HOST;
      this.user = process.env.DB_USER;
      this.password = process.env.DB_PASSWORD;
      this.database = process.env.DB_NAME;
      this.port = process.env.DB_PORT;

      // Create the MySQL pool
      this.pool = mysql.createPool({
        connectionLimit: this.connectionLimit,
        host: this.host,
        user: this.user,
        password: this.password,
        database: this.database,
        port: this.port,
      });
      Pool.instance = this.pool;
    }
    return Pool.instance;
  }
}

const pool = new Pool(); // Creating a singleton instance of Pool
export default pool;

//Test the Conection to MYSQL DB
const testConnection = async () => {
  let connection;
  try {
    connection = await pool.getConnection();
    console.log("Connection successful");
  } catch (error) {
    console.error("Error in connection:", error);
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
};

testConnection();
