const connectDB = require('../config/db')
//const Product = require('../config/db') 
    const db = connectDB();
const getProducts = async (req, res) => {
    try {
        //const db = await connectDB()
        const [rows] = await db.execute('select * from products')
        res.json(rows)
    } catch (error) {
        res.status(500).json({ message: '❌ Error retrieving products', error: error.message });
    }
}


const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        //const db = await connectDB();
        const [rows] = await db.execute('SELECT * FROM products WHERE id = ?', [id]);

        if (rows.length === 0) {
            return res.status(404).json({ message: '❌ Product not found' });
        }

        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ message: '❌ Error retrieving product', error: err.message });
    }
};
const addProduct = async (req, res) => {
    const { name, quantity } = req.body;

    try {
        await db.execute('INSERT INTO products (name, quantity) VALUES (?, ?)', [name, quantity]);
        res.status(200).json({ message: '✅ Product added' });
    } catch (err) {
        res.status(500).json({ message: '❌ Error adding product', error: err.message });
    }
};

const updateProduct = async (req,res)=>{
const {id} = req.params
const {name,quantity} = req.body;
try {   
    const [result] = await db.execute('UPDATE products SET name =?,quantity = ? WHERE id = ?',[name,quantity,id])
  
    if (result.affectedRows === 0) {
        res.status(404).json({message:'❌ Product not found' })
    }
      res.status(200).json({message:'✅ Product updated successfully'})
} catch (err) {
    res.ststus(500).json({message:`❌ error updating product`,error: err.message})
}
}

const deleteProduct = async (req,res)=>{
const {id}  = req.params
try {
    const[rows] = db.execute('DELETE FROM products WHERE id = ?',[id])
    if (res.affectedRows === 0) {
        res.status(404).json({message: `❌ Product not found`})
    }
    res.status(200).json({message:'✅ Product delete successfully'})
} catch (err) {
    res.ststus(500).json({message:`❌ error deleting product`,error: err.message})
} 
}
module.exports = { getProducts, getProductById, addProduct ,updateProduct,deleteProduct}