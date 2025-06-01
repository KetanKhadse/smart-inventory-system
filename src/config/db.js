const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
        const con = mongoose.Collect(process.env.MONGO_URI,{
            useNewUrlParcer:true,
            useUnifiedTopology:true
        });
         console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        
        console.error(`Error: ${error.mrssage} `)
        process.exit(1)
    }
}
module.exports = connectDB;