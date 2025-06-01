

const express = require('express');

const app = express();

app.use(express.json());

app.get('/',(req,res)=>res.send('hello from express js this is testing'))

app.get('/port',(req,res)=>res.send(`✅ Server is running on port 5000`))
app.get('/product/id',(req,res)=>{
    const productId = req.params.id;
    res.send(`🟢 You requested product with ID: ${productId}`)
})

app.post('/product',(req,res)=>{
const { name,quantity } = req.body;
if(!name|| !quantity){
return res.status(400).json({ message: '❌ Name and quantity are required' });
}
res.status(201).json(
    {
        message:'✅ Product created successfully',
        product:{name,quantity}
    });
});

module.exports = app;