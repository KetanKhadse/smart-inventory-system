

const express = require('express');

const app = express();

app.use(express.json());

app.get('/',(req,res)=>res.send('hello from express js this is testing'))

app.get('/port',(req,res)=>res.send(`✅ Server is running on port 5000`))

module.exports = app;