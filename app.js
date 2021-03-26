
const express = require('express');
const bodyParser = require('body-parser');
const product = require ('./routes/product.route');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://localhost/productsDb",{ useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>{
    console.log('connected to database');
}).catch(err=>{
    console.log('connot connect',err)
    process.exit();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/products', product);

app.listen(3000,()=>{console.log('connected with port 3000...')});
