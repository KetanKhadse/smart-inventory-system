const mysql = require('');
const productscheema = new mongoose.Schema(
    {
        name:{
            type : String,
            required : [true,"Product name is required"]
        },
        quantity:{
            type : Number,
            required : [true,"The product quantity is required"] ,
            min : [0,'quantity can not be negative']
        }
    },
    {
        timestamps:true

    }
)
const product = mongoose.model('Prodct',productscheema);

module.exports = product;