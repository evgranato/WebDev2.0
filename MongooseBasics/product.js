const mongoose = require('mongoose');
const express = require('express')
const app = express();
app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connection Open!!!")
    })
    .catch( err => {
        console.log("ERRRROOOOOORRRR!!!!!")
        console.log(err)
    })

    const productSchema = new mongoose.Schema( {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true
        },
    })

    const Product = mongoose.model('Product', productSchema)

    const bike = new Product({name: 'Mountain Bike', price: 599})
    bike.save() 
    .then(data => {
        console.log("IT WORKED!")
        console.log(data)
    })
    .catch(err => {
        console.log('OH NO! ERROR')
        console.log(err)
    })