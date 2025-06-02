require('dotenv').config()
const mysql = require('mysql2/promise')

let connection;
const connectDB = async ()=>{
if(!connection){
    try {
         connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
            
        });
         console.log('✅ MySQL connected!');
    } catch (error) {
        
         console.error('❌ MySQL connection failed:', error.message); // ✅ log error message
         process.exit(1); // exit with failure
    }
}
return connection
}
module.exports = connectDB;